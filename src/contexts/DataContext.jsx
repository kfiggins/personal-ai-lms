import { createContext, useContext, useState, useEffect, useCallback, useRef } from 'react'
import { supabase } from '../utils/supabase.js'
import { useAuth } from './AuthContext.jsx'
import { MODULES, getModulesByCategory, CATEGORIES } from '../data/moduleRegistry.js'

const DataContext = createContext(null)

function defaultProgress() {
  return {
    modules: {},
    quizHistory: [],
    reviewQueue: [],
    streaks: { currentStreak: 0, longestStreak: 0, lastActiveDate: null },
    preTests: {},
  }
}

const DEFAULT_SETTINGS = {
  confidenceRating: true,
  preTestBeforeModules: true,
  showStreak: true,
  showAchievementNotifications: true,
}

export function DataProvider({ children }) {
  const { user } = useAuth()
  const [progress, setProgress] = useState(defaultProgress)
  const [settings, setSettings] = useState(DEFAULT_SETTINGS)
  const [achievements, setAchievements] = useState({})
  const [loading, setLoading] = useState(true)
  const userId = user?.id

  // Load all data from Supabase on login
  useEffect(() => {
    if (!userId) {
      setProgress(defaultProgress())
      setSettings(DEFAULT_SETTINGS)
      setAchievements({})
      setLoading(false)
      return
    }

    let cancelled = false
    setLoading(true)

    async function load() {
      const [
        { data: moduleRows },
        { data: quizRows },
        { data: reviewRows },
        { data: streakRows },
        { data: preTestRows },
        { data: settingsRow },
        { data: achievementRows },
      ] = await Promise.all([
        supabase.from('module_progress').select('*').eq('user_id', userId),
        supabase.from('quiz_history').select('*').eq('user_id', userId).order('answered_at'),
        supabase.from('review_queue').select('*').eq('user_id', userId),
        supabase.from('user_streaks').select('*').eq('user_id', userId),
        supabase.from('pre_tests').select('*').eq('user_id', userId),
        supabase.from('user_settings').select('data').eq('user_id', userId).single(),
        supabase.from('user_achievements').select('*').eq('user_id', userId),
      ])

      if (cancelled) return

      // Reconstruct progress
      const modules = {}
      for (const row of moduleRows || []) {
        modules[row.module_id] = {
          completed: row.completed,
          completedAt: row.completed_at,
          quizScore: row.quiz_score,
          quizTotal: row.quiz_total,
          quizAttempts: row.quiz_attempts,
          lastAttemptAt: row.last_attempt_at,
        }
      }

      const quizHistory = (quizRows || []).map(row => {
        if (row.quiz_type === 'mixed') {
          return { type: 'mixed', score: row.score, total: row.total, byModule: row.by_module, answeredAt: row.answered_at }
        }
        return { moduleId: row.module_id, questionId: row.question_id, correct: row.correct, confidence: row.confidence, answeredAt: row.answered_at, attempts: 1 }
      })

      const reviewQueue = (reviewRows || []).map(row => ({
        questionId: row.question_id,
        moduleId: row.module_id,
        nextReviewAt: row.next_review_at,
        interval: row.interval,
        easeFactor: parseFloat(row.ease_factor),
        repetitions: row.repetitions,
      }))

      const streak = streakRows?.[0]
      const streaks = {
        currentStreak: streak?.current_streak ?? 0,
        longestStreak: streak?.longest_streak ?? 0,
        lastActiveDate: streak?.last_active_date ?? null,
      }

      const preTests = {}
      for (const row of preTestRows || []) {
        preTests[row.module_id] = { score: row.score, total: row.total, answers: row.answers, completedAt: row.completed_at }
      }

      // Update streak on load
      const today = new Date().toISOString().slice(0, 10)
      if (streaks.lastActiveDate !== today) {
        if (streaks.lastActiveDate) {
          const last = new Date(streaks.lastActiveDate)
          const now = new Date(today)
          const diffDays = Math.round((now - last) / (1000 * 60 * 60 * 24))
          streaks.currentStreak = diffDays === 1 ? streaks.currentStreak + 1 : 1
        } else {
          streaks.currentStreak = 1
        }
        streaks.lastActiveDate = today
        if (streaks.currentStreak > streaks.longestStreak) {
          streaks.longestStreak = streaks.currentStreak
        }
        // Persist updated streak
        supabase.from('user_streaks').upsert({
          user_id: userId, current_streak: streaks.currentStreak,
          longest_streak: streaks.longestStreak, last_active_date: streaks.lastActiveDate,
        }, { onConflict: 'user_id' }).catch(() => {})
      }

      setProgress({ modules, quizHistory, reviewQueue, streaks, preTests })

      // Settings
      if (settingsRow?.data) {
        setSettings({ ...DEFAULT_SETTINGS, ...settingsRow.data })
      }

      // Achievements
      const unlocked = {}
      for (const row of achievementRows || []) {
        unlocked[row.achievement_id] = { unlockedAt: row.unlocked_at }
      }
      setAchievements(unlocked)

      setLoading(false)
    }

    load()
    return () => { cancelled = true }
  }, [userId])

  // --- Progress mutations ---

  const markModuleComplete = useCallback(async (moduleId, quizScore, quizTotal) => {
    setProgress(prev => {
      const existing = prev.modules[moduleId] || {}
      const updated = {
        ...existing,
        completed: true,
        completedAt: new Date().toISOString(),
        quizScore,
        quizTotal,
        quizAttempts: (existing.quizAttempts || 0) + 1,
        lastAttemptAt: new Date().toISOString(),
      }
      return { ...prev, modules: { ...prev.modules, [moduleId]: updated } }
    })

    const now = new Date().toISOString()
    await supabase.from('module_progress').upsert({
      user_id: userId,
      module_id: moduleId,
      completed: true,
      completed_at: now,
      quiz_score: quizScore,
      quiz_total: quizTotal,
      quiz_attempts: ((progress.modules[moduleId]?.quizAttempts || 0) + 1),
      last_attempt_at: now,
    }, { onConflict: 'user_id,module_id' })
  }, [userId, progress.modules])

  const addToReviewQueue = useCallback(async (moduleId, questionId, wasCorrect, confidence) => {
    const answeredAt = new Date().toISOString()

    setProgress(prev => {
      const newState = { ...prev }
      const existingIdx = prev.reviewQueue.findIndex(r => r.questionId === questionId)
      const newReviewQueue = [...prev.reviewQueue]

      if (existingIdx >= 0) {
        const item = { ...newReviewQueue[existingIdx] }
        const quality = wasCorrect ? 4 : 1
        applySmTwo(item, quality)
        newReviewQueue[existingIdx] = item
      } else {
        newReviewQueue.push({
          questionId,
          moduleId,
          nextReviewAt: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000).toISOString(),
          interval: 1,
          easeFactor: 2.5,
          repetitions: wasCorrect ? 1 : 0,
        })
      }

      const historyEntry = { moduleId, questionId, correct: wasCorrect, confidence: confidence || null, answeredAt, attempts: 1 }

      return {
        ...newState,
        reviewQueue: newReviewQueue,
        quizHistory: [...prev.quizHistory, historyEntry],
      }
    })

    // Sync review queue item
    const existing = progress.reviewQueue.find(r => r.questionId === questionId)
    let item
    if (existing) {
      item = { ...existing }
      applySmTwo(item, wasCorrect ? 4 : 1)
    } else {
      item = {
        questionId, moduleId,
        nextReviewAt: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000).toISOString(),
        interval: 1, easeFactor: 2.5, repetitions: wasCorrect ? 1 : 0,
      }
    }

    await Promise.all([
      supabase.from('review_queue').upsert({
        user_id: userId, question_id: item.questionId, module_id: item.moduleId,
        next_review_at: item.nextReviewAt, interval: item.interval,
        ease_factor: item.easeFactor, repetitions: item.repetitions,
      }, { onConflict: 'user_id,question_id' }),
      supabase.from('quiz_history').insert({
        user_id: userId, module_id: moduleId, question_id: questionId,
        quiz_type: 'review', correct: wasCorrect, confidence: confidence || null,
        answered_at: answeredAt,
      }),
    ])
  }, [userId, progress.reviewQueue])

  const recordReviewAttempt = useCallback(async (questionId, quality) => {
    setProgress(prev => {
      const newQueue = [...prev.reviewQueue]
      const idx = newQueue.findIndex(r => r.questionId === questionId)
      if (idx < 0) return prev
      const item = { ...newQueue[idx] }
      applySmTwo(item, quality)
      newQueue[idx] = item
      return { ...prev, reviewQueue: newQueue }
    })

    const item = progress.reviewQueue.find(r => r.questionId === questionId)
    if (!item) return
    const updated = { ...item }
    applySmTwo(updated, quality)

    await supabase.from('review_queue').upsert({
      user_id: userId, question_id: updated.questionId, module_id: updated.moduleId,
      next_review_at: updated.nextReviewAt, interval: updated.interval,
      ease_factor: updated.easeFactor, repetitions: updated.repetitions,
    }, { onConflict: 'user_id,question_id' })
  }, [userId, progress.reviewQueue])

  const saveMixedQuizResult = useCallback(async (questions, answers) => {
    const byModule = {}
    questions.forEach((q, i) => {
      if (!byModule[q.moduleId]) byModule[q.moduleId] = { correct: 0, total: 0 }
      byModule[q.moduleId].total++
      if (answers[i].correct) byModule[q.moduleId].correct++
    })

    const totalScore = answers.filter(a => a.correct).length
    const answeredAt = new Date().toISOString()
    const mixedEntry = { type: 'mixed', score: totalScore, total: questions.length, byModule, answeredAt }

    setProgress(prev => ({
      ...prev,
      quizHistory: [...prev.quizHistory, mixedEntry],
    }))

    await supabase.from('quiz_history').insert({
      user_id: userId, quiz_type: 'mixed', score: totalScore, total: questions.length,
      by_module: byModule, answered_at: answeredAt,
    })

    // Individual answers get added via addToReviewQueue calls from the component
  }, [userId])

  const savePreTestResult = useCallback(async (moduleId, score, total, answers) => {
    const completedAt = new Date().toISOString()
    const data = { score, total, answers, completedAt }

    setProgress(prev => ({
      ...prev,
      preTests: { ...prev.preTests, [moduleId]: data },
    }))

    await supabase.from('pre_tests').upsert({
      user_id: userId, module_id: moduleId,
      score, total, answers, completed_at: completedAt,
    }, { onConflict: 'user_id,module_id' })
  }, [userId])

  const updateStreak = useCallback(async () => {
    const today = new Date().toISOString().slice(0, 10)

    setProgress(prev => {
      const streaks = { ...prev.streaks }
      if (streaks.lastActiveDate === today) return prev

      if (streaks.lastActiveDate) {
        const last = new Date(streaks.lastActiveDate)
        const now = new Date(today)
        const diffDays = Math.round((now - last) / (1000 * 60 * 60 * 24))
        streaks.currentStreak = diffDays === 1 ? streaks.currentStreak + 1 : 1
      } else {
        streaks.currentStreak = 1
      }
      streaks.lastActiveDate = today
      if (streaks.currentStreak > streaks.longestStreak) {
        streaks.longestStreak = streaks.currentStreak
      }
      return { ...prev, streaks }
    })

    // Compute what the new streak should be for Supabase
    const streaks = { ...progress.streaks }
    if (streaks.lastActiveDate !== today) {
      if (streaks.lastActiveDate) {
        const last = new Date(streaks.lastActiveDate)
        const now = new Date(today)
        const diffDays = Math.round((now - last) / (1000 * 60 * 60 * 24))
        streaks.currentStreak = diffDays === 1 ? streaks.currentStreak + 1 : 1
      } else {
        streaks.currentStreak = 1
      }
      streaks.lastActiveDate = today
      if (streaks.currentStreak > streaks.longestStreak) {
        streaks.longestStreak = streaks.currentStreak
      }
    }

    await supabase.from('user_streaks').upsert({
      user_id: userId,
      current_streak: streaks.currentStreak,
      longest_streak: streaks.longestStreak,
      last_active_date: streaks.lastActiveDate,
    }, { onConflict: 'user_id' })
  }, [userId, progress.streaks])

  const resetProgress = useCallback(async () => {
    setProgress(defaultProgress())
    setAchievements({})

    await Promise.all([
      supabase.from('module_progress').delete().eq('user_id', userId),
      supabase.from('quiz_history').delete().eq('user_id', userId),
      supabase.from('review_queue').delete().eq('user_id', userId),
      supabase.from('user_streaks').delete().eq('user_id', userId),
      supabase.from('pre_tests').delete().eq('user_id', userId),
      supabase.from('user_achievements').delete().eq('user_id', userId),
    ])
  }, [userId])

  // --- Read-only computed helpers (sync, from in-memory state) ---

  const getModuleProgress = useCallback((moduleId) => {
    return progress.modules[moduleId] || null
  }, [progress.modules])

  const isModuleComplete = useCallback((moduleId) => {
    return progress.modules[moduleId]?.completed === true
  }, [progress.modules])

  const getCategoryProgress = useCallback((categoryId) => {
    const modules = getModulesByCategory(categoryId)
    const total = modules.length
    if (total === 0) return { completed: 0, total: 0, percentage: 0 }
    const completed = modules.filter(m => progress.modules[m.id]?.completed).length
    return { completed, total, percentage: Math.round((completed / total) * 100) }
  }, [progress.modules])

  const getOverallProgress = useCallback(() => {
    const total = MODULES.length
    if (total === 0) return { completed: 0, total: 0, percentage: 0, totalQuizScore: 0 }
    let completed = 0, totalQuizScore = 0
    for (const mod of MODULES) {
      const p = progress.modules[mod.id]
      if (p?.completed) { completed++; totalQuizScore += p.quizScore || 0 }
    }
    return { completed, total, percentage: Math.round((completed / total) * 100), totalQuizScore }
  }, [progress.modules])

  const getReviewableQuestions = useCallback(() => {
    const now = new Date().toISOString()
    return progress.reviewQueue.filter(r => r.nextReviewAt <= now)
  }, [progress.reviewQueue])

  const getReviewQueueSize = useCallback(() => {
    const now = new Date().toISOString()
    return progress.reviewQueue.filter(r => r.nextReviewAt <= now).length
  }, [progress.reviewQueue])

  const getCompletedModulesWithScores = useCallback(() => {
    const completed = []
    for (const mod of MODULES) {
      const p = progress.modules[mod.id]
      if (p?.completed) {
        const percentage = p.quizTotal > 0 ? (p.quizScore / p.quizTotal) * 100 : 100
        completed.push({
          moduleId: mod.id, title: mod.title, category: mod.category,
          categoryTitle: mod.categoryTitle, quizScore: p.quizScore,
          quizTotal: p.quizTotal, percentage,
        })
      }
    }
    return completed
  }, [progress.modules])

  const getPreTestResult = useCallback((moduleId) => {
    return progress.preTests?.[moduleId] || null
  }, [progress.preTests])

  const getCalibrationData = useCallback(() => {
    const byConfidence = {
      guessing: { correct: 0, total: 0 },
      somewhat: { correct: 0, total: 0 },
      confident: { correct: 0, total: 0 },
    }
    for (const entry of progress.quizHistory) {
      if (entry.confidence && byConfidence[entry.confidence]) {
        byConfidence[entry.confidence].total++
        if (entry.correct) byConfidence[entry.confidence].correct++
      }
    }
    const expected = { guessing: 0.33, somewhat: 0.66, confident: 1.0 }
    let totalWeight = 0, totalError = 0
    for (const [key, data] of Object.entries(byConfidence)) {
      if (data.total > 0) {
        const actual = data.correct / data.total
        totalError += Math.abs(actual - expected[key]) * data.total
        totalWeight += data.total
      }
    }
    const score = totalWeight > 0 ? Math.round((1 - totalError / totalWeight) * 100) : null
    return { byConfidence, score }
  }, [progress.quizHistory])

  const getUnmetPrerequisites = useCallback((moduleId) => {
    const mod = MODULES.find(m => m.id === moduleId)
    if (!mod?.prerequisites?.length) return []
    return mod.prerequisites
      .filter(prereqId => !progress.modules[prereqId]?.completed)
      .map(prereqId => {
        const prereqMod = MODULES.find(m => m.id === prereqId)
        return prereqMod ? { id: prereqId, title: prereqMod.title } : null
      })
      .filter(Boolean)
  }, [progress.modules])

  const getLeechQuestions = useCallback(() => {
    const failCounts = {}
    for (const entry of progress.quizHistory) {
      if (entry.questionId && !entry.correct) {
        failCounts[entry.questionId] = (failCounts[entry.questionId] || 0) + 1
      }
    }
    const leeches = []
    for (const [questionId, count] of Object.entries(failCounts)) {
      if (count >= 3) {
        const historyEntry = progress.quizHistory.find(e => e.questionId === questionId)
        if (historyEntry) leeches.push({ questionId, moduleId: historyEntry.moduleId, failCount: count })
      }
    }
    return leeches
  }, [progress.quizHistory])

  const isLeechQuestion = useCallback((questionId) => {
    let failCount = 0
    for (const entry of progress.quizHistory) {
      if (entry.questionId === questionId && !entry.correct) failCount++
    }
    return failCount >= 3
  }, [progress.quizHistory])

  // --- Settings ---

  const updateSetting = useCallback(async (key, value) => {
    const updated = { ...settings, [key]: value }
    setSettings(updated)

    await supabase.from('user_settings').upsert({
      user_id: userId, data: updated,
    }, { onConflict: 'user_id' })

    return updated
  }, [userId, settings])

  // --- Achievements ---

  const checkAchievements = useCallback(async () => {
    const newlyUnlocked = []
    const updatedAchievements = { ...achievements }

    for (const achievement of ACHIEVEMENT_DEFS) {
      if (updatedAchievements[achievement.id]) continue
      if (isAchievementEarned(achievement.id, progress)) {
        const unlockedAt = new Date().toISOString()
        updatedAchievements[achievement.id] = { unlockedAt }
        newlyUnlocked.push(achievement)

        supabase.from('user_achievements').upsert({
          user_id: userId, achievement_id: achievement.id, unlocked_at: unlockedAt,
        }, { onConflict: 'user_id,achievement_id' }).catch(() => {})
      }
    }

    if (newlyUnlocked.length > 0) {
      setAchievements(updatedAchievements)
    }

    return newlyUnlocked
  }, [userId, achievements, progress])

  const getAchievementStatus = useCallback(() => {
    return ACHIEVEMENT_DEFS.map(a => ({
      ...a,
      unlocked: !!achievements[a.id],
      unlockedAt: achievements[a.id]?.unlockedAt || null,
    }))
  }, [achievements])

  const getUnlockedCount = useCallback(() => {
    return Object.keys(achievements).length
  }, [achievements])

  const value = {
    progress, loading, settings, achievements,
    // Progress mutations
    markModuleComplete, addToReviewQueue, recordReviewAttempt,
    saveMixedQuizResult, savePreTestResult, updateStreak, resetProgress,
    // Progress reads
    getModuleProgress, isModuleComplete, getCategoryProgress, getOverallProgress,
    getReviewableQuestions, getReviewQueueSize, getCompletedModulesWithScores,
    getPreTestResult, getCalibrationData, getUnmetPrerequisites,
    getLeechQuestions, isLeechQuestion,
    // Settings
    updateSetting,
    // Achievements
    checkAchievements, getAchievementStatus, getUnlockedCount,
    ACHIEVEMENTS: ACHIEVEMENT_DEFS,
  }

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>
}

export function useData() {
  const ctx = useContext(DataContext)
  if (!ctx) throw new Error('useData must be used within a DataProvider')
  return ctx
}

// --- SM-2 Algorithm ---

function applySmTwo(item, quality) {
  if (quality < 3) {
    item.repetitions = 0
    item.interval = 1
  } else {
    item.repetitions += 1
    if (item.repetitions === 1) item.interval = 1
    else if (item.repetitions === 2) item.interval = 6
    else item.interval = Math.round(item.interval * item.easeFactor)
  }
  item.easeFactor = item.easeFactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02))
  if (item.easeFactor < 1.3) item.easeFactor = 1.3
  item.nextReviewAt = new Date(Date.now() + item.interval * 24 * 60 * 60 * 1000).toISOString()
}

// --- Achievement definitions (moved here to avoid circular deps) ---

const ACHIEVEMENT_DEFS = [
  { id: 'first-steps', name: 'First Steps', description: 'Complete your first module', category: 'Consistency', icon: 'footprints' },
  { id: 'week-warrior', name: 'Week Warrior', description: 'Maintain a 7-day streak', category: 'Consistency', icon: 'calendar' },
  { id: 'dedicated-learner', name: 'Dedicated Learner', description: 'Maintain a 30-day streak', category: 'Consistency', icon: 'flame' },
  { id: 'perfect-score', name: 'Perfect Score', description: 'Score 100% on any quiz', category: 'Mastery', icon: 'star' },
  { id: 'category-master', name: 'Category Master', description: 'Complete all modules in a category', category: 'Mastery', icon: 'crown' },
  { id: 'scholar', name: 'Scholar', description: 'Complete 50% of all modules', category: 'Mastery', icon: 'book' },
  { id: 'graduate', name: 'Graduate', description: 'Complete every module', category: 'Mastery', icon: 'graduation' },
  { id: 'reviewer', name: 'Reviewer', description: 'Complete your first review session', category: 'Review', icon: 'refresh' },
  { id: 'memory-master', name: 'Memory Master', description: 'Get 10 correct answers in a row during review', category: 'Review', icon: 'brain' },
  { id: 'consistent-reviewer', name: 'Consistent Reviewer', description: 'Review on 5 different days', category: 'Review', icon: 'repeat' },
  { id: 'cross-trainer', name: 'Cross-Trainer', description: 'Complete your first mixed quiz', category: 'Mixed Practice', icon: 'shuffle' },
  { id: 'well-rounded', name: 'Well-Rounded', description: 'Score 80%+ on a mixed quiz with 5+ categories', category: 'Mixed Practice', icon: 'target' },
  { id: 'self-aware', name: 'Self-Aware', description: 'Achieve 80%+ calibration accuracy', category: 'Calibration', icon: 'eye' },
  { id: 'know-thyself', name: 'Know Thyself', description: 'Rate confidence on 50+ questions', category: 'Calibration', icon: 'compass' },
]

function isAchievementEarned(id, progress) {
  const completedCount = MODULES.filter(m => progress.modules[m.id]?.completed).length

  switch (id) {
    case 'first-steps': return completedCount >= 1
    case 'week-warrior': return progress.streaks.currentStreak >= 7 || progress.streaks.longestStreak >= 7
    case 'dedicated-learner': return progress.streaks.currentStreak >= 30 || progress.streaks.longestStreak >= 30
    case 'perfect-score': return MODULES.some(m => {
      const p = progress.modules[m.id]
      return p?.completed && p.quizTotal > 0 && p.quizScore === p.quizTotal
    })
    case 'category-master': return CATEGORIES.some(cat => {
      const catModules = getModulesByCategory(cat.id)
      return catModules.length > 0 && catModules.every(m => progress.modules[m.id]?.completed)
    })
    case 'scholar': return MODULES.length > 0 && completedCount >= Math.ceil(MODULES.length / 2)
    case 'graduate': return MODULES.length > 0 && completedCount === MODULES.length
    case 'reviewer': return progress.reviewQueue.some(r => r.repetitions > 0)
    case 'memory-master': {
      let streak = 0
      for (const entry of progress.quizHistory) {
        if (entry.questionId) {
          if (entry.correct) { streak++; if (streak >= 10) return true } else streak = 0
        }
      }
      return false
    }
    case 'consistent-reviewer': {
      const days = new Set()
      for (const entry of progress.quizHistory) {
        if (entry.questionId && entry.answeredAt) days.add(entry.answeredAt.slice(0, 10))
      }
      return days.size >= 5
    }
    case 'cross-trainer': return progress.quizHistory.some(e => e.type === 'mixed')
    case 'well-rounded': return progress.quizHistory.some(e => {
      if (e.type !== 'mixed' || !e.byModule) return false
      const cats = new Set()
      for (const moduleId of Object.keys(e.byModule)) {
        const mod = MODULES.find(m => m.id === moduleId)
        if (mod) cats.add(mod.category)
      }
      return cats.size >= 5 && e.total > 0 && (e.score / e.total) * 100 >= 80
    })
    case 'self-aware': {
      const byConf = { guessing: { c: 0, t: 0 }, somewhat: { c: 0, t: 0 }, confident: { c: 0, t: 0 } }
      for (const e of progress.quizHistory) {
        if (e.confidence && byConf[e.confidence]) { byConf[e.confidence].t++; if (e.correct) byConf[e.confidence].c++ }
      }
      const exp = { guessing: 0.33, somewhat: 0.66, confident: 1.0 }
      let tw = 0, te = 0
      for (const [k, d] of Object.entries(byConf)) {
        if (d.t > 0) { te += Math.abs(d.c / d.t - exp[k]) * d.t; tw += d.t }
      }
      const score = tw > 0 ? Math.round((1 - te / tw) * 100) : null
      return score !== null && score >= 80
    }
    case 'know-thyself': {
      let count = 0
      for (const e of progress.quizHistory) { if (e.confidence) count++ }
      return count >= 50
    }
    default: return false
  }
}
