import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useProgress } from "../hooks/useProgress.js";
import {
  CATEGORIES,
  MODULES,
  getModulesByCategory,
} from "../data/moduleRegistry.js";
import AchievementsSection from "../components/AchievementsSection.jsx";

function CircularProgress({ percentage, size = 140, strokeWidth = 10 }) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg width={size} height={size} className="-rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="var(--color-dark-border)"
          strokeWidth={strokeWidth}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="var(--color-accent)"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className="transition-all duration-700"
        />
      </svg>
      <div className="absolute text-center">
        <div className="text-3xl font-bold">{percentage}%</div>
        <div className="text-xs text-text-secondary">complete</div>
      </div>
    </div>
  );
}

function ProgressBar({ percentage, className = "" }) {
  return (
    <div className={`w-full bg-dark-border rounded-full h-2.5 ${className}`}>
      <div
        className="bg-accent h-2.5 rounded-full transition-all duration-300"
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
}

function Progress() {
  const navigate = useNavigate();
  const {
    progress,
    getOverallProgress,
    getCategoryProgress,
    isModuleComplete,
    getReviewQueueSize,
    getCalibrationData,
    getLeechQuestions,
    resetProgress,
  } = useProgress();

  const [expandedCategories, setExpandedCategories] = useState({});
  const [showResetConfirm, setShowResetConfirm] = useState(false);

  const overall = getOverallProgress();
  const reviewCount = getReviewQueueSize();
  const calibration = getCalibrationData();
  const leechQuestions = getLeechQuestions();

  // Completed modules list
  const completedModules = MODULES.filter(
    (m) => progress.modules[m.id]?.completed
  );

  // Quiz average
  const quizAverage =
    completedModules.length > 0
      ? Math.round(
          completedModules.reduce((sum, m) => {
            const p = progress.modules[m.id];
            return p.quizTotal > 0
              ? sum + (p.quizScore / p.quizTotal) * 100
              : sum;
          }, 0) / completedModules.length
        )
      : 0;

  // Total learning time
  const totalMinutes = completedModules.reduce(
    (sum, m) => sum + (m.estimatedMinutes || 0),
    0
  );

  // Category quiz averages for strongest/weakest
  const categoryScores = CATEGORIES.map((cat) => {
    const catModules = getModulesByCategory(cat.id);
    const catCompleted = catModules.filter(
      (m) => progress.modules[m.id]?.completed
    );
    const avg =
      catCompleted.length > 0
        ? Math.round(
            catCompleted.reduce((sum, m) => {
              const p = progress.modules[m.id];
              return p.quizTotal > 0
                ? sum + (p.quizScore / p.quizTotal) * 100
                : sum;
            }, 0) / catCompleted.length
          )
        : null;
    return { ...cat, quizAverage: avg, completedCount: catCompleted.length };
  }).filter((c) => c.quizAverage !== null);

  const strongest = categoryScores.length > 0
    ? categoryScores.reduce((a, b) => (a.quizAverage >= b.quizAverage ? a : b))
    : null;
  const weakest = categoryScores.length > 1
    ? categoryScores.reduce((a, b) => (a.quizAverage <= b.quizAverage ? a : b))
    : null;

  // Next review date
  const nextReview = progress.reviewQueue.length > 0
    ? progress.reviewQueue.reduce((earliest, item) =>
        item.nextReviewAt < earliest.nextReviewAt ? item : earliest
      )
    : null;

  function toggleCategory(catId) {
    setExpandedCategories((prev) => ({ ...prev, [catId]: !prev[catId] }));
  }

  function handleReset() {
    resetProgress();
    setShowResetConfirm(false);
  }

  function exportProgress() {
    const data = JSON.stringify(progress, null, 2);
    const blob = new Blob([data], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "claude-code-academy-progress.json";
    a.click();
    URL.revokeObjectURL(url);
  }

  // Find next incomplete module overall
  const allModulesSorted = MODULES;
  const nextModule = allModulesSorted.find((m) => !isModuleComplete(m.id));

  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold mb-1">Your Progress</h1>
        <p className="text-text-secondary">
          Track your learning journey across all modules
        </p>
      </div>

      {/* Overall Stats */}
      <div className="bg-dark-surface border border-dark-border rounded-2xl p-8">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <CircularProgress percentage={overall.percentage} />
          <div className="flex-1 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center md:text-left">
            <div>
              <div className="text-2xl font-bold">
                {overall.completed}/{overall.total}
              </div>
              <div className="text-sm text-text-secondary">
                Modules Completed
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold">
                {completedModules.length > 0 ? `${quizAverage}%` : "—"}
              </div>
              <div className="text-sm text-text-secondary">Quiz Average</div>
            </div>
            <div>
              <div className="text-2xl font-bold">
                🔥 {progress.streaks.currentStreak}
              </div>
              <div className="text-sm text-text-secondary">
                Current Streak
                {progress.streaks.longestStreak > 0 && (
                  <span className="block text-xs">
                    Best: {progress.streaks.longestStreak} day
                    {progress.streaks.longestStreak !== 1 && "s"}
                  </span>
                )}
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold">
                {totalMinutes > 0 ? `${totalMinutes}m` : "—"}
              </div>
              <div className="text-sm text-text-secondary">Learning Time</div>
            </div>
          </div>
        </div>
      </div>

      {/* Category Breakdown */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Categories</h2>
        <div className="space-y-4">
          {CATEGORIES.map((cat) => {
            const catProgress = getCategoryProgress(cat.id);
            const catModules = getModulesByCategory(cat.id);
            const expanded = expandedCategories[cat.id] || false;

            // Category quiz average
            const catCompleted = catModules.filter(
              (m) => progress.modules[m.id]?.completed
            );
            const catQuizAvg =
              catCompleted.length > 0
                ? Math.round(
                    catCompleted.reduce((sum, m) => {
                      const p = progress.modules[m.id];
                      return p.quizTotal > 0
                        ? sum + (p.quizScore / p.quizTotal) * 100
                        : sum;
                    }, 0) / catCompleted.length
                  )
                : null;

            return (
              <div
                key={cat.id}
                className="bg-dark-surface border border-dark-border rounded-xl overflow-hidden"
              >
                {/* Category header - clickable */}
                <button
                  onClick={() => toggleCategory(cat.id)}
                  className="w-full p-5 flex items-center gap-4 hover:bg-dark-card/50 transition-colors cursor-pointer text-left"
                >
                  <span className="text-2xl">{cat.icon}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-semibold">{cat.title}</h3>
                      <div className="flex items-center gap-3 text-sm text-text-secondary">
                        {catQuizAvg !== null && (
                          <span>Avg: {catQuizAvg}%</span>
                        )}
                        <span>
                          {catProgress.completed}/{catProgress.total}
                        </span>
                        <span
                          className={`transition-transform ${expanded ? "rotate-180" : ""}`}
                        >
                          ▾
                        </span>
                      </div>
                    </div>
                    <p className="text-text-secondary text-sm mb-2">
                      {cat.description}
                    </p>
                    <ProgressBar percentage={catProgress.percentage} />
                  </div>
                </button>

                {/* Expanded module list */}
                {expanded && (
                  <div className="border-t border-dark-border">
                    {catModules.map((mod) => {
                      const modProgress = progress.modules[mod.id];
                      const completed = modProgress?.completed;
                      const isNext = nextModule?.id === mod.id;
                      const score =
                        modProgress?.quizTotal > 0
                          ? Math.round(
                              (modProgress.quizScore / modProgress.quizTotal) *
                                100
                            )
                          : null;

                      return (
                        <div
                          key={mod.id}
                          className={`px-5 py-3 flex items-center gap-3 border-b border-dark-border/50 last:border-b-0 ${
                            isNext
                              ? "bg-accent/5"
                              : completed
                                ? ""
                                : "opacity-60"
                          }`}
                        >
                          {/* Status indicator */}
                          <div className="shrink-0">
                            {completed ? (
                              <span className="text-green-400 text-sm font-bold">
                                ✓
                              </span>
                            ) : isNext ? (
                              <span className="text-accent text-sm">▸</span>
                            ) : (
                              <span className="text-dark-border text-sm">
                                ○
                              </span>
                            )}
                          </div>

                          {/* Module info */}
                          <div className="flex-1 min-w-0">
                            <div className="text-sm font-medium">
                              {mod.title}
                            </div>
                            <div className="text-xs text-text-secondary">
                              ~{mod.estimatedMinutes} min
                              {completed && score !== null && (
                                <span
                                  className={`ml-2 ${score >= 80 ? "text-green-400" : score >= 60 ? "text-yellow-400" : "text-red-400"}`}
                                >
                                  Quiz: {score}%
                                </span>
                              )}
                            </div>
                          </div>

                          {/* Action */}
                          {isNext && (
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                navigate(`/learn/${mod.id}`);
                              }}
                              className="text-xs bg-accent hover:bg-accent-hover text-dark-bg font-semibold px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
                            >
                              Continue
                            </button>
                          )}
                          {completed && (
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                navigate(`/learn/${mod.id}`);
                              }}
                              className="text-xs text-text-secondary hover:text-accent transition-colors cursor-pointer"
                            >
                              Review
                            </button>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Quiz Performance */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Quiz Performance</h2>
        <div className="bg-dark-surface border border-dark-border rounded-xl p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <div className="text-sm text-text-secondary mb-1">
                Overall Average
              </div>
              <div className="text-2xl font-bold">
                {completedModules.length > 0 ? `${quizAverage}%` : "—"}
              </div>
            </div>
            <div>
              <div className="text-sm text-text-secondary mb-1">
                Calibration Score
              </div>
              <div className="text-2xl font-bold">
                {calibration.score !== null ? (
                  <span className={calibration.score >= 70 ? "text-green-400" : calibration.score >= 50 ? "text-yellow-400" : "text-red-400"}>
                    {calibration.score}%
                  </span>
                ) : "—"}
              </div>
              <div className="text-xs text-text-secondary mt-1">
                How well confidence predicts accuracy
              </div>
            </div>
            <div>
              <div className="text-sm text-text-secondary mb-1">
                Review Queue
              </div>
              <div className="text-2xl font-bold">{reviewCount} question{reviewCount !== 1 && "s"}</div>
              {nextReview && (
                <div className="text-xs text-text-secondary mt-1">
                  Next review:{" "}
                  {new Date(nextReview.nextReviewAt) <= new Date()
                    ? "Now"
                    : new Date(nextReview.nextReviewAt).toLocaleDateString()}
                </div>
              )}
            </div>
            <div>
              <div className="text-sm text-text-secondary mb-1">
                Strongest Category
              </div>
              {strongest ? (
                <div className="font-semibold">
                  {strongest.icon} {strongest.title}{" "}
                  <span className="text-green-400 text-sm">
                    ({strongest.quizAverage}%)
                  </span>
                </div>
              ) : (
                <div className="text-text-secondary">—</div>
              )}
            </div>
            <div>
              <div className="text-sm text-text-secondary mb-1">
                Weakest Category
              </div>
              {weakest && weakest.id !== strongest?.id ? (
                <div className="font-semibold">
                  {weakest.icon} {weakest.title}{" "}
                  <span className="text-yellow-400 text-sm">
                    ({weakest.quizAverage}%)
                  </span>
                </div>
              ) : (
                <div className="text-text-secondary">—</div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Achievements */}
      <AchievementsSection />

      {/* Trouble Spots */}
      {leechQuestions.length > 0 && (
        <div>
          <h2 className="text-xl font-semibold mb-4">Trouble Spots</h2>
          <div className="bg-dark-surface border border-dark-border rounded-xl overflow-hidden">
            <div className="px-5 py-3 border-b border-dark-border/50">
              <p className="text-sm text-text-secondary">
                Questions you've missed 3 or more times. Consider reviewing the source material.
              </p>
            </div>
            {(() => {
              // Group leeches by module
              const byModule = {};
              for (const leech of leechQuestions) {
                if (!byModule[leech.moduleId]) byModule[leech.moduleId] = [];
                byModule[leech.moduleId].push(leech);
              }
              return Object.entries(byModule).map(([moduleId, leeches]) => {
                const mod = MODULES.find((m) => m.id === moduleId);
                if (!mod) return null;
                return (
                  <div
                    key={moduleId}
                    className="px-5 py-3 border-b border-dark-border/50 last:border-b-0"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-yellow-400 text-sm">⚡</span>
                        <span className="text-sm font-medium">{mod.title}</span>
                        <span className="text-xs text-text-secondary bg-dark-card px-1.5 py-0.5 rounded">
                          {leeches.length} question{leeches.length !== 1 && "s"}
                        </span>
                      </div>
                      <button
                        onClick={() => navigate(`/learn/${moduleId}`)}
                        className="text-xs text-yellow-400 hover:text-yellow-300 transition-colors cursor-pointer"
                      >
                        Review module
                      </button>
                    </div>
                  </div>
                );
              });
            })()}
          </div>
        </div>
      )}

      {/* Actions */}
      <div className="bg-dark-surface border border-dark-border rounded-xl p-6">
        <div className="flex flex-wrap gap-3">
          <button
            onClick={exportProgress}
            className="px-4 py-2 rounded-lg text-sm font-medium border border-dark-border text-text-primary hover:border-accent hover:text-accent transition-colors cursor-pointer"
          >
            Export Progress as JSON
          </button>
          <button
            onClick={() => setShowResetConfirm(true)}
            className="px-4 py-2 rounded-lg text-sm font-medium border border-red-500/40 text-red-400 hover:bg-red-500/10 transition-colors cursor-pointer"
          >
            Reset All Progress
          </button>
        </div>
      </div>

      {/* Reset Confirmation Dialog */}
      {showResetConfirm && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
          <div className="bg-dark-surface border border-dark-border rounded-xl p-6 max-w-sm w-full">
            <h3 className="text-lg font-bold mb-2">Reset All Progress?</h3>
            <p className="text-text-secondary text-sm mb-6">
              This will permanently delete all your learning progress, quiz
              scores, streaks, and review queue. This action cannot be undone.
            </p>
            <div className="flex gap-3 justify-end">
              <button
                onClick={() => setShowResetConfirm(false)}
                className="px-4 py-2 rounded-lg text-sm font-medium border border-dark-border text-text-primary hover:border-accent transition-colors cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={handleReset}
                className="px-4 py-2 rounded-lg text-sm font-medium bg-red-500 text-white hover:bg-red-600 transition-colors cursor-pointer"
              >
                Reset Everything
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Progress;
