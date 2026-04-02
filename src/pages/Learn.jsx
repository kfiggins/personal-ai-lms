import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import {
  getModule,
  getModuleContent,
  getNextModule,
  getPrevModule,
  getModulesByCategory,
  getCategory,
} from "../data/moduleRegistry.js";
import { useProgress } from "../hooks/useProgress.js";
import ContentBlock from "../components/ContentBlock.jsx";
import PreTest from "../components/PreTest.jsx";

function Learn() {
  const { moduleId } = useParams();
  const navigate = useNavigate();
  const { isModuleComplete, getModuleProgress, getPreTestResult, savePreTestResult, getUnmetPrerequisites } = useProgress();

  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [preTestDone, setPreTestDone] = useState(false);
  const [prereqDismissed, setPrereqDismissed] = useState(false);

  const moduleMeta = getModule(moduleId);
  const nextModule = getNextModule(moduleId);
  const prevModule = getPrevModule(moduleId);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setContent(null);
    setPreTestDone(false);
    setPrereqDismissed(false);

    getModuleContent(moduleId).then((data) => {
      if (!cancelled) {
        setContent(data);
        setLoading(false);
      }
    });

    return () => {
      cancelled = true;
    };
  }, [moduleId]);

  // Module not found in registry
  if (!moduleMeta) {
    return (
      <div className="max-w-2xl mx-auto text-center py-20">
        <div className="text-5xl mb-4">🔍</div>
        <h1 className="text-2xl font-bold mb-2">Module not found</h1>
        <p className="text-text-secondary mb-6">
          We couldn't find a module with that ID. It may have been moved or
          doesn't exist yet.
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

  // Loading state
  if (loading) {
    return (
      <div className="max-w-[700px] mx-auto py-12">
        <div className="animate-pulse space-y-6">
          <div className="h-4 bg-dark-border rounded w-48" />
          <div className="h-8 bg-dark-border rounded w-3/4" />
          <div className="h-20 bg-dark-border rounded" />
          <div className="h-4 bg-dark-border rounded" />
          <div className="h-4 bg-dark-border rounded w-5/6" />
          <div className="h-4 bg-dark-border rounded w-4/6" />
        </div>
      </div>
    );
  }

  // Content not yet created for this module
  if (!content) {
    return (
      <div className="max-w-2xl mx-auto text-center py-20">
        <div className="text-5xl mb-4">🚧</div>
        <h1 className="text-2xl font-bold mb-2">{moduleMeta.title}</h1>
        <p className="text-text-secondary mb-6">
          Content for this module is coming soon. Check back later!
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

  const completed = isModuleComplete(moduleId);
  const moduleProgress = getModuleProgress(moduleId);
  const existingPreTest = getPreTestResult(moduleId);
  const unmetPrereqs = getUnmetPrerequisites(moduleId);

  // Show pre-test for modules the user hasn't completed yet
  // Skip if: already completed, already did pre-test, no quiz questions, or pre-test dismissed this session
  const hasQuizQuestions = content.quiz && content.quiz.length > 0;
  const shouldShowPreTest = !completed && !existingPreTest && hasQuizQuestions && !preTestDone;

  if (shouldShowPreTest) {
    const preTestQuestions = content.quiz.slice(0, 3);
    return (
      <PreTest
        moduleTitle={content.title}
        questions={preTestQuestions}
        onComplete={(result) => {
          if (result) {
            savePreTestResult(moduleId, result.score, result.total, result.answers);
          }
          setPreTestDone(true);
        }}
      />
    );
  }

  const category = getCategory(moduleMeta.category);
  const categoryModules = getModulesByCategory(moduleMeta.category);
  const moduleIndex = categoryModules.findIndex((m) => m.id === moduleId);

  return (
    <div className="max-w-[700px] mx-auto py-4 pb-16">
      {/* Breadcrumb & meta */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-sm text-text-secondary mb-3">
          <Link to="/" className="hover:text-accent transition-colors">
            Dashboard
          </Link>
          <span>/</span>
          <Link to={`/category/${moduleMeta.category}`} className="hover:text-accent transition-colors">
            {moduleMeta.categoryTitle}
          </Link>
          <span>/</span>
          <span>
            Module {moduleIndex + 1} of {categoryModules.length}
          </span>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
          {content.title}
        </h1>

        <div className="flex items-center gap-4 text-sm text-text-secondary mb-4 flex-wrap">
          <span className="flex items-center gap-1">
            ⏱ ~{moduleMeta.estimatedMinutes} min read
          </span>
          {completed && (
            <span className="flex items-center gap-1 text-green-400">
              ✓ Completed
              {moduleProgress?.quizScore != null && (
                <span className="text-text-secondary ml-1">
                  (Quiz: {moduleProgress.quizScore}/{moduleProgress.quizTotal})
                </span>
              )}
            </span>
          )}
        </div>

        {/* Why it matters */}
        {content.whyItMatters && (
          <div className="bg-accent/10 border border-accent/30 rounded-lg p-4">
            <p className="text-sm font-semibold text-accent mb-1">
              Why this matters
            </p>
            <p className="leading-relaxed text-text-primary">
              {content.whyItMatters}
            </p>
          </div>
        )}
      </div>

      {/* Prerequisite warning */}
      {unmetPrereqs.length > 0 && !prereqDismissed && (
        <div className="mb-6 bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4 flex items-start gap-3">
          <span className="text-yellow-400 text-lg shrink-0 mt-0.5">⚠</span>
          <div className="flex-1 min-w-0">
            <p className="text-sm text-yellow-200">
              <span className="font-semibold">Recommended:</span> Complete{" "}
              {unmetPrereqs.map((prereq, i) => (
                <span key={prereq.id}>
                  {i > 0 && (i === unmetPrereqs.length - 1 ? " and " : ", ")}
                  <Link
                    to={`/learn/${prereq.id}`}
                    className="text-yellow-400 underline underline-offset-2 hover:text-yellow-300 transition-colors"
                  >
                    {prereq.title}
                  </Link>
                </span>
              ))}{" "}
              first
            </p>
          </div>
          <button
            onClick={() => setPrereqDismissed(true)}
            className="text-yellow-500/60 hover:text-yellow-400 transition-colors text-sm shrink-0 cursor-pointer"
            aria-label="Dismiss"
          >
            ✕
          </button>
        </div>
      )}

      {/* Content blocks */}
      <div className="space-y-2">
        {content.content.map((block, i) => (
          <ContentBlock key={i} block={block} />
        ))}
      </div>

      {/* Bottom actions */}
      <div className="mt-12 space-y-6">
        {/* Quiz CTA */}
        {content.quiz && content.quiz.length > 0 && (
          <div className="text-center">
            <button
              onClick={() => navigate(`/quiz/${moduleId}`)}
              className="bg-accent hover:bg-accent-hover text-dark-bg font-bold px-8 py-4 rounded-xl text-lg transition-colors cursor-pointer"
            >
              Take the Quiz
            </button>
            <p className="text-text-secondary text-sm mt-2">
              {content.quiz.length} question{content.quiz.length !== 1 && "s"}{" "}
              to test your understanding
            </p>
          </div>
        )}

        {/* Navigation */}
        <div className="flex items-center justify-between border-t border-dark-border pt-6">
          <div>
            {prevModule ? (
              <Link
                to={`/learn/${prevModule.id}`}
                className="flex items-center gap-2 text-text-secondary hover:text-accent transition-colors group"
              >
                <span className="group-hover:-translate-x-1 transition-transform">
                  ←
                </span>
                <div className="text-left">
                  <div className="text-xs text-text-secondary">Previous</div>
                  <div className="text-sm font-medium text-text-primary group-hover:text-accent transition-colors">
                    {prevModule.title}
                  </div>
                </div>
              </Link>
            ) : (
              <div />
            )}
          </div>

          <Link
            to="/"
            className="text-sm text-text-secondary hover:text-accent transition-colors"
          >
            Dashboard
          </Link>

          <div>
            {nextModule ? (
              <Link
                to={`/learn/${nextModule.id}`}
                className="flex items-center gap-2 text-text-secondary hover:text-accent transition-colors group"
              >
                <div className="text-right">
                  <div className="text-xs text-text-secondary">Next</div>
                  <div className="text-sm font-medium text-text-primary group-hover:text-accent transition-colors">
                    {nextModule.title}
                  </div>
                </div>
                <span className="group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Learn;
