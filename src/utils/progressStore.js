// localStorage-backed store for all learning progress.

import { MODULES, getModulesByCategory, CATEGORIES } from "../data/moduleRegistry.js";

const STORAGE_KEY = "claude-code-academy-progress";

function defaultState() {
  return {
    modules: {},
    quizHistory: [],
    reviewQueue: [],
    streaks: {
      currentStreak: 0,
      longestStreak: 0,
      lastActiveDate: null,
    },
  };
}

// --- Core load/save ---

export function getProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultState();
    const parsed = JSON.parse(raw);
    // Merge with defaults so new fields are always present
    return { ...defaultState(), ...parsed };
  } catch {
    return defaultState();
  }
}

export function saveProgress(state) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

// --- Module progress ---

export function markModuleComplete(moduleId, quizScore, quizTotal) {
  const state = getProgress();
  const existing = state.modules[moduleId] || {};
  state.modules[moduleId] = {
    ...existing,
    completed: true,
    completedAt: new Date().toISOString(),
    quizScore,
    quizTotal,
    quizAttempts: (existing.quizAttempts || 0) + 1,
    lastAttemptAt: new Date().toISOString(),
  };
  updateStreak(state);
  saveProgress(state);
  return state;
}

export function getModuleProgress(moduleId) {
  const state = getProgress();
  return state.modules[moduleId] || null;
}

export function isModuleComplete(moduleId) {
  const state = getProgress();
  return state.modules[moduleId]?.completed === true;
}

export function getCategoryProgress(categoryId) {
  const modules = getModulesByCategory(categoryId);
  const total = modules.length;
  if (total === 0) return { completed: 0, total: 0, percentage: 0 };

  const state = getProgress();
  const completed = modules.filter((m) => state.modules[m.id]?.completed).length;
  return {
    completed,
    total,
    percentage: Math.round((completed / total) * 100),
  };
}

export function getOverallProgress() {
  const total = MODULES.length;
  if (total === 0) return { completed: 0, total: 0, percentage: 0, totalQuizScore: 0 };

  const state = getProgress();
  let completed = 0;
  let totalQuizScore = 0;

  for (const mod of MODULES) {
    const p = state.modules[mod.id];
    if (p?.completed) {
      completed++;
      totalQuizScore += p.quizScore || 0;
    }
  }

  return {
    completed,
    total,
    percentage: Math.round((completed / total) * 100),
    totalQuizScore,
  };
}

// --- Streaks ---

function todayDateString() {
  return new Date().toISOString().slice(0, 10);
}

export function updateStreak(stateArg) {
  const state = stateArg || getProgress();
  const today = todayDateString();
  const { streaks } = state;

  if (streaks.lastActiveDate === today) {
    // Already recorded today
    if (!stateArg) saveProgress(state);
    return state;
  }

  if (streaks.lastActiveDate) {
    const last = new Date(streaks.lastActiveDate);
    const now = new Date(today);
    const diffDays = Math.round((now - last) / (1000 * 60 * 60 * 24));

    if (diffDays === 1) {
      streaks.currentStreak += 1;
    } else {
      // Streak broken
      streaks.currentStreak = 1;
    }
  } else {
    // First ever activity
    streaks.currentStreak = 1;
  }

  streaks.lastActiveDate = today;
  if (streaks.currentStreak > streaks.longestStreak) {
    streaks.longestStreak = streaks.currentStreak;
  }

  if (!stateArg) saveProgress(state);
  return state;
}

// --- Mixed Quiz ---

export function getCompletedModulesWithScores() {
  const state = getProgress();
  const completed = [];
  for (const mod of MODULES) {
    const p = state.modules[mod.id];
    if (p?.completed) {
      const percentage = p.quizTotal > 0 ? (p.quizScore / p.quizTotal) * 100 : 100;
      completed.push({
        moduleId: mod.id,
        title: mod.title,
        category: mod.category,
        categoryTitle: mod.categoryTitle,
        quizScore: p.quizScore,
        quizTotal: p.quizTotal,
        percentage,
      });
    }
  }
  return completed;
}

export function saveMixedQuizResult(questions, answers) {
  const state = getProgress();

  // Group results by module
  const byModule = {};
  questions.forEach((q, i) => {
    if (!byModule[q.moduleId]) {
      byModule[q.moduleId] = { correct: 0, total: 0 };
    }
    byModule[q.moduleId].total++;
    if (answers[i].correct) byModule[q.moduleId].correct++;
  });

  const totalScore = answers.filter((a) => a.correct).length;
  const totalQuestions = questions.length;

  state.quizHistory.push({
    type: "mixed",
    score: totalScore,
    total: totalQuestions,
    byModule,
    answeredAt: new Date().toISOString(),
  });

  // Also add individual answers to review queue
  questions.forEach((q, i) => {
    addToReviewQueue(q.moduleId, q.id, answers[i].correct);
  });

  updateStreak(state);
  saveProgress(state);
  return state;
}

// --- Pre-test ---

export function savePreTestResult(moduleId, score, total, answers) {
  const state = getProgress();
  if (!state.preTests) state.preTests = {};
  state.preTests[moduleId] = {
    score,
    total,
    answers,
    completedAt: new Date().toISOString(),
  };
  saveProgress(state);
  return state;
}

export function getPreTestResult(moduleId) {
  const state = getProgress();
  return state.preTests?.[moduleId] || null;
}

// --- Reset ---

export function resetProgress() {
  const fresh = defaultState();
  saveProgress(fresh);
  return fresh;
}

// --- SM-2 Spaced Repetition ---

export function addToReviewQueue(moduleId, questionId, wasCorrect) {
  const state = getProgress();
  const existing = state.reviewQueue.find((r) => r.questionId === questionId);

  if (existing) {
    // Update via recordReviewAttempt logic
    const quality = wasCorrect ? 4 : 1;
    applySmTwo(existing, quality);
  } else {
    const interval = wasCorrect ? 1 : 1;
    state.reviewQueue.push({
      questionId,
      moduleId,
      nextReviewAt: new Date(Date.now() + interval * 24 * 60 * 60 * 1000).toISOString(),
      interval,
      easeFactor: 2.5,
      repetitions: wasCorrect ? 1 : 0,
    });
  }

  // Also record in quizHistory
  state.quizHistory.push({
    moduleId,
    questionId,
    correct: wasCorrect,
    answeredAt: new Date().toISOString(),
    attempts: 1,
  });

  saveProgress(state);
  return state;
}

export function getReviewableQuestions() {
  const state = getProgress();
  const now = new Date().toISOString();
  return state.reviewQueue.filter((r) => r.nextReviewAt <= now);
}

export function getReviewQueueSize() {
  return getReviewableQuestions().length;
}

export function recordReviewAttempt(questionId, quality) {
  const state = getProgress();
  const item = state.reviewQueue.find((r) => r.questionId === questionId);
  if (!item) return state;

  applySmTwo(item, quality);
  saveProgress(state);
  return state;
}

function applySmTwo(item, quality) {
  // quality: 0-5 (SM-2 scale)
  if (quality < 3) {
    // Failed: reset
    item.repetitions = 0;
    item.interval = 1;
  } else {
    // Passed
    item.repetitions += 1;
    if (item.repetitions === 1) {
      item.interval = 1;
    } else if (item.repetitions === 2) {
      item.interval = 6;
    } else {
      item.interval = Math.round(item.interval * item.easeFactor);
    }
  }

  // Adjust ease factor
  item.easeFactor = item.easeFactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02));
  if (item.easeFactor < 1.3) {
    item.easeFactor = 1.3;
  }

  item.nextReviewAt = new Date(Date.now() + item.interval * 24 * 60 * 60 * 1000).toISOString();
}
