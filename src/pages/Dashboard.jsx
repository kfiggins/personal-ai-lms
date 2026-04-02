import { useNavigate } from "react-router-dom";
import { useProgress } from "../hooks/useProgress.js";
import {
  CATEGORIES,
  MODULES,
  getModulesByCategory,
  getAllModules,
} from "../data/moduleRegistry.js";

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

function Dashboard() {
  const navigate = useNavigate();
  const {
    progress,
    getOverallProgress,
    getCategoryProgress,
    isModuleComplete,
    getReviewQueueSize,
  } = useProgress();

  const overall = getOverallProgress();
  const reviewCount = getReviewQueueSize();
  const allModules = getAllModules();

  // Find the next uncompleted module
  const nextModule = allModules.find((m) => !isModuleComplete(m.id));

  // Calculate average quiz score
  const completedModules = MODULES.filter(
    (m) => progress.modules[m.id]?.completed
  );
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

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="bg-dark-surface border border-dark-border rounded-2xl p-8 text-center">
        <h1 className="text-4xl font-bold mb-2">Claude Code Academy</h1>
        <p className="text-text-secondary text-lg mb-6">
          Master Claude Code one bite-sized lesson at a time
        </p>

        <div className="max-w-md mx-auto mb-6">
          <div className="flex justify-between text-sm mb-1">
            <span className="text-text-secondary">Overall Progress</span>
            <span className="text-accent font-medium">
              {overall.completed} / {overall.total} modules
            </span>
          </div>
          <ProgressBar percentage={overall.percentage} />
        </div>

        <div className="flex items-center justify-center gap-8 flex-wrap">
          <div className="text-center">
            <div className="text-2xl">🔥</div>
            <div className="text-lg font-bold">
              {progress.streaks.currentStreak}
            </div>
            <div className="text-xs text-text-secondary">day streak</div>
          </div>
          <div className="text-center">
            <div className="text-2xl">📚</div>
            <div className="text-lg font-bold">{overall.completed}</div>
            <div className="text-xs text-text-secondary">completed</div>
          </div>
          <div className="text-center">
            <div className="text-2xl">📊</div>
            <div className="text-lg font-bold">
              {completedModules.length > 0 ? `${quizAverage}%` : "—"}
            </div>
            <div className="text-xs text-text-secondary">quiz avg</div>
          </div>
          <div className="text-center">
            <div className="text-2xl">🔄</div>
            <div className="text-lg font-bold">{reviewCount}</div>
            <div className="text-xs text-text-secondary">reviews due</div>
          </div>
        </div>
      </div>

      {/* Review Reminder */}
      {reviewCount > 0 && (
        <div className="bg-dark-card border border-accent/30 rounded-xl p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-2xl">🧠</span>
            <span>
              You have{" "}
              <span className="text-accent font-semibold">{reviewCount}</span>{" "}
              question{reviewCount !== 1 && "s"} ready for review
            </span>
          </div>
          <button
            onClick={() => navigate("/review")}
            className="bg-accent hover:bg-accent-hover text-dark-bg font-semibold px-4 py-2 rounded-lg transition-colors text-sm cursor-pointer"
          >
            Review Now
          </button>
        </div>
      )}

      {/* Continue Learning */}
      {nextModule && (
        <div>
          <h2 className="text-xl font-semibold mb-3">Continue Learning</h2>
          <div className="bg-dark-surface border border-dark-border rounded-xl p-6 flex items-center justify-between">
            <div>
              <p className="text-text-secondary text-sm mb-1">
                Pick up where you left off
              </p>
              <p className="text-lg font-semibold">{nextModule.title}</p>
              <p className="text-text-secondary text-sm">
                {nextModule.categoryTitle} &middot; ~{nextModule.estimatedMinutes} min
              </p>
            </div>
            <button
              onClick={() => navigate(`/learn/${nextModule.id}`)}
              className="bg-accent hover:bg-accent-hover text-dark-bg font-semibold px-6 py-3 rounded-lg transition-colors cursor-pointer"
            >
              Continue
            </button>
          </div>
        </div>
      )}

      {/* Category Grid */}
      <div>
        <h2 className="text-xl font-semibold mb-3">Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {CATEGORIES.map((cat) => {
            const catProgress = getCategoryProgress(cat.id);
            const catModules = getModulesByCategory(cat.id);
            const allDone =
              catProgress.total > 0 &&
              catProgress.completed === catProgress.total;
            const started = catProgress.completed > 0;

            // Find the next incomplete module in this category
            const nextInCat = catModules.find((m) => !isModuleComplete(m.id));
            const targetModule = nextInCat || catModules[0];

            return (
              <div
                key={cat.id}
                className="bg-dark-surface border border-dark-border rounded-xl p-5 flex flex-col"
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{cat.icon}</span>
                    <h3 className="font-semibold text-lg">{cat.title}</h3>
                  </div>
                  {allDone && <span className="text-green-400 text-xl">✓</span>}
                </div>
                <p className="text-text-secondary text-sm mb-3 flex-1">
                  {cat.description}
                </p>
                <div className="mb-3">
                  <div className="flex justify-between text-xs text-text-secondary mb-1">
                    <span>Progress</span>
                    <span>
                      {catProgress.completed}/{catProgress.total}
                    </span>
                  </div>
                  <ProgressBar percentage={catProgress.percentage} />
                </div>
                {targetModule && (
                  <button
                    onClick={() => navigate(`/learn/${targetModule.id}`)}
                    className={`w-full py-2 rounded-lg font-medium text-sm transition-colors cursor-pointer ${
                      allDone
                        ? "bg-green-900/30 text-green-400 border border-green-800 hover:bg-green-900/50"
                        : "bg-accent hover:bg-accent-hover text-dark-bg"
                    }`}
                  >
                    {allDone ? "Review" : started ? "Continue" : "Start"}
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
