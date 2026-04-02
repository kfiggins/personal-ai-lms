// Achievement definitions and unlock-checking logic.
// Achievements are stored in localStorage alongside progress data.

import { getProgress } from "./progressStore.js";
import { MODULES, CATEGORIES, getModulesByCategory } from "../data/moduleRegistry.js";

const ACHIEVEMENT_KEY = "claude-code-academy-achievements";

export const ACHIEVEMENTS = [
  // --- Consistency ---
  {
    id: "first-steps",
    name: "First Steps",
    description: "Complete your first module",
    category: "Consistency",
    icon: "footprints",
  },
  {
    id: "week-warrior",
    name: "Week Warrior",
    description: "Maintain a 7-day streak",
    category: "Consistency",
    icon: "calendar",
  },
  {
    id: "dedicated-learner",
    name: "Dedicated Learner",
    description: "Maintain a 30-day streak",
    category: "Consistency",
    icon: "flame",
  },

  // --- Mastery ---
  {
    id: "perfect-score",
    name: "Perfect Score",
    description: "Score 100% on any quiz",
    category: "Mastery",
    icon: "star",
  },
  {
    id: "category-master",
    name: "Category Master",
    description: "Complete all modules in a category",
    category: "Mastery",
    icon: "crown",
  },
  {
    id: "scholar",
    name: "Scholar",
    description: "Complete 50% of all modules",
    category: "Mastery",
    icon: "book",
  },
  {
    id: "graduate",
    name: "Graduate",
    description: "Complete every module",
    category: "Mastery",
    icon: "graduation",
  },

  // --- Review ---
  {
    id: "reviewer",
    name: "Reviewer",
    description: "Complete your first review session",
    category: "Review",
    icon: "refresh",
  },
  {
    id: "memory-master",
    name: "Memory Master",
    description: "Get 10 correct answers in a row during review",
    category: "Review",
    icon: "brain",
  },
  {
    id: "consistent-reviewer",
    name: "Consistent Reviewer",
    description: "Review on 5 different days",
    category: "Review",
    icon: "repeat",
  },

  // --- Mixed Practice ---
  {
    id: "cross-trainer",
    name: "Cross-Trainer",
    description: "Complete your first mixed quiz",
    category: "Mixed Practice",
    icon: "shuffle",
  },
  {
    id: "well-rounded",
    name: "Well-Rounded",
    description: "Score 80%+ on a mixed quiz with 5+ categories",
    category: "Mixed Practice",
    icon: "target",
  },

  // --- Calibration ---
  {
    id: "self-aware",
    name: "Self-Aware",
    description: "Achieve 80%+ calibration accuracy",
    category: "Calibration",
    icon: "eye",
  },
  {
    id: "know-thyself",
    name: "Know Thyself",
    description: "Rate confidence on 50+ questions",
    category: "Calibration",
    icon: "compass",
  },
];

// --- Storage ---

export function getUnlockedAchievements() {
  try {
    const raw = localStorage.getItem(ACHIEVEMENT_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function saveUnlockedAchievements(unlocked) {
  localStorage.setItem(ACHIEVEMENT_KEY, JSON.stringify(unlocked));
}

// --- Check all achievements, return newly unlocked ones ---

export function checkAchievements() {
  const progress = getProgress();
  const unlocked = getUnlockedAchievements();
  const newlyUnlocked = [];

  for (const achievement of ACHIEVEMENTS) {
    if (unlocked[achievement.id]) continue;

    if (isAchievementEarned(achievement.id, progress)) {
      unlocked[achievement.id] = {
        unlockedAt: new Date().toISOString(),
      };
      newlyUnlocked.push(achievement);
    }
  }

  if (newlyUnlocked.length > 0) {
    saveUnlockedAchievements(unlocked);
  }

  return newlyUnlocked;
}

function isAchievementEarned(id, progress) {
  const completedCount = MODULES.filter(
    (m) => progress.modules[m.id]?.completed
  ).length;

  switch (id) {
    // Consistency
    case "first-steps":
      return completedCount >= 1;

    case "week-warrior":
      return (
        progress.streaks.currentStreak >= 7 ||
        progress.streaks.longestStreak >= 7
      );

    case "dedicated-learner":
      return (
        progress.streaks.currentStreak >= 30 ||
        progress.streaks.longestStreak >= 30
      );

    // Mastery
    case "perfect-score":
      return MODULES.some((m) => {
        const p = progress.modules[m.id];
        return p?.completed && p.quizTotal > 0 && p.quizScore === p.quizTotal;
      });

    case "category-master":
      return CATEGORIES.some((cat) => {
        const catModules = getModulesByCategory(cat.id);
        return (
          catModules.length > 0 &&
          catModules.every((m) => progress.modules[m.id]?.completed)
        );
      });

    case "scholar":
      return MODULES.length > 0 && completedCount >= Math.ceil(MODULES.length / 2);

    case "graduate":
      return MODULES.length > 0 && completedCount === MODULES.length;

    // Review
    case "reviewer": {
      // At least one review attempt in quizHistory (not from module quiz)
      return progress.reviewQueue.some((r) => r.repetitions > 0);
    }

    case "memory-master": {
      // 10 correct in a row in review-type quiz history entries
      let streak = 0;
      for (const entry of progress.quizHistory) {
        if (entry.questionId) {
          // Individual question entry (review or quiz)
          if (entry.correct) {
            streak++;
            if (streak >= 10) return true;
          } else {
            streak = 0;
          }
        }
      }
      return false;
    }

    case "consistent-reviewer": {
      const reviewDays = new Set();
      for (const entry of progress.quizHistory) {
        if (entry.questionId && entry.answeredAt) {
          reviewDays.add(entry.answeredAt.slice(0, 10));
        }
      }
      return reviewDays.size >= 5;
    }

    // Mixed Practice
    case "cross-trainer": {
      return progress.quizHistory.some((e) => e.type === "mixed");
    }

    case "well-rounded": {
      return progress.quizHistory.some((e) => {
        if (e.type !== "mixed" || !e.byModule) return false;
        const categories = new Set();
        for (const moduleId of Object.keys(e.byModule)) {
          const mod = MODULES.find((m) => m.id === moduleId);
          if (mod) categories.add(mod.category);
        }
        const percentage = e.total > 0 ? (e.score / e.total) * 100 : 0;
        return categories.size >= 5 && percentage >= 80;
      });
    }

    // Calibration
    case "self-aware": {
      const cal = getCalibrationScore(progress);
      return cal !== null && cal >= 80;
    }

    case "know-thyself": {
      let ratedCount = 0;
      for (const entry of progress.quizHistory) {
        if (entry.confidence) ratedCount++;
      }
      return ratedCount >= 50;
    }

    default:
      return false;
  }
}

// Inline calibration calc to avoid circular dependency
function getCalibrationScore(progress) {
  const byConfidence = {
    guessing: { correct: 0, total: 0 },
    somewhat: { correct: 0, total: 0 },
    confident: { correct: 0, total: 0 },
  };

  for (const entry of progress.quizHistory) {
    if (entry.confidence && byConfidence[entry.confidence]) {
      byConfidence[entry.confidence].total++;
      if (entry.correct) byConfidence[entry.confidence].correct++;
    }
  }

  const expected = { guessing: 0.33, somewhat: 0.66, confident: 1.0 };
  let totalWeight = 0;
  let totalError = 0;

  for (const [key, data] of Object.entries(byConfidence)) {
    if (data.total > 0) {
      const actual = data.correct / data.total;
      const error = Math.abs(actual - expected[key]);
      totalError += error * data.total;
      totalWeight += data.total;
    }
  }

  return totalWeight > 0 ? Math.round((1 - totalError / totalWeight) * 100) : null;
}

export function getAchievementStatus() {
  const unlocked = getUnlockedAchievements();
  return ACHIEVEMENTS.map((a) => ({
    ...a,
    unlocked: !!unlocked[a.id],
    unlockedAt: unlocked[a.id]?.unlockedAt || null,
  }));
}

export function getUnlockedCount() {
  const unlocked = getUnlockedAchievements();
  return Object.keys(unlocked).length;
}
