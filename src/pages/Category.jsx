import { useParams, Link, useNavigate } from "react-router-dom";
import { useProgress } from "../hooks/useProgress.js";
import {
  getCategory,
  getModulesByCategory,
} from "../data/moduleRegistry.js";

function Category() {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  const { isModuleComplete, getModuleProgress, getCategoryProgress } =
    useProgress();

  const category = getCategory(categoryId);

  if (!category) {
    return (
      <div className="max-w-2xl mx-auto text-center py-20">
        <div className="text-5xl mb-4">🔍</div>
        <h1 className="text-2xl font-bold mb-2">Category not found</h1>
        <p className="text-text-secondary mb-6">
          We couldn't find a category with that ID.
        </p>
        <Link
          to="/"
          className="inline-block bg-accent hover:bg-accent-hover text-dark-bg font-semibold px-6 py-3 rounded-lg transition-colors"
        >
          Back to Dashboard
        </Link>
      </div>
    );
  }

  const modules = getModulesByCategory(categoryId);
  const catProgress = getCategoryProgress(categoryId);
  const percentage = catProgress.total > 0
    ? Math.round((catProgress.completed / catProgress.total) * 100)
    : 0;

  return (
    <div className="max-w-3xl mx-auto py-4">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-text-secondary mb-6">
        <Link to="/" className="hover:text-accent transition-colors">
          Dashboard
        </Link>
        <span>/</span>
        <span className="text-text-primary">{category.title}</span>
      </div>

      {/* Header */}
      <div className="bg-dark-surface border border-dark-border rounded-2xl p-8 mb-8">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-4xl">{category.icon}</span>
          <h1 className="text-3xl font-bold">{category.title}</h1>
        </div>
        <p className="text-text-secondary text-lg mb-6">
          {category.description}
        </p>

        {/* Progress bar */}
        <div className="flex justify-between text-sm mb-2">
          <span className="text-text-secondary">Progress</span>
          <span className="text-accent font-medium">
            {catProgress.completed} / {catProgress.total} modules ({percentage}%)
          </span>
        </div>
        <div className="w-full bg-dark-border rounded-full h-3">
          <div
            className="bg-accent h-3 rounded-full transition-all duration-300"
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>

      {/* Module list */}
      <div className="space-y-3">
        {modules.map((mod, i) => {
          const completed = isModuleComplete(mod.id);
          const modProgress = getModuleProgress(mod.id);
          const hasScore =
            modProgress?.quizScore != null && modProgress?.quizTotal > 0;

          return (
            <button
              key={mod.id}
              onClick={() => navigate(`/learn/${mod.id}`)}
              className="w-full bg-dark-surface border border-dark-border rounded-xl p-4 flex items-center gap-4 hover:border-accent/40 transition-colors text-left cursor-pointer group"
            >
              {/* Number / check */}
              <div
                className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold shrink-0 ${
                  completed
                    ? "bg-green-500/20 text-green-400"
                    : "bg-dark-border text-text-secondary group-hover:text-accent group-hover:border-accent/40"
                }`}
              >
                {completed ? "✓" : i + 1}
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <div className="font-medium text-text-primary group-hover:text-accent transition-colors truncate">
                  {mod.title}
                </div>
                <div className="text-xs text-text-secondary mt-0.5">
                  ~{mod.estimatedMinutes} min
                  {hasScore && (
                    <span className="ml-3 text-accent">
                      Quiz: {modProgress.quizScore}/{modProgress.quizTotal}
                    </span>
                  )}
                </div>
              </div>

              {/* Arrow */}
              <span className="text-text-secondary group-hover:text-accent transition-colors shrink-0">
                →
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Category;
