import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { useProgress } from "../hooks/useProgress.js";
import { getModuleContent, getModule } from "../data/moduleRegistry.js";
import QuizQuestion from "../components/QuizQuestion.jsx";

function Review() {
  const {
    getReviewableQuestions,
    recordReviewAttempt,
    getReviewQueueSize,
    isLeechQuestion,
  } = useProgress();

  const [loading, setLoading] = useState(true);
  const [reviewItems, setReviewItems] = useState([]); // { reviewData, question }
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [lastCorrect, setLastCorrect] = useState(false);
  const [waitingForRating, setWaitingForRating] = useState(false);
  const [results, setResults] = useState([]); // { correct, questionId }
  const [sessionComplete, setSessionComplete] = useState(false);

  const loadReviewQuestions = useCallback(async () => {
    const due = getReviewableQuestions();
    if (due.length === 0) {
      setLoading(false);
      return;
    }

    // Group by module to minimize content loads
    const byModule = {};
    for (const item of due) {
      if (!byModule[item.moduleId]) byModule[item.moduleId] = [];
      byModule[item.moduleId].push(item);
    }

    const loaded = [];
    for (const [moduleId, items] of Object.entries(byModule)) {
      const content = await getModuleContent(moduleId);
      if (!content?.quiz) continue;
      for (const item of items) {
        const question = content.quiz.find((q) => q.id === item.questionId);
        if (question) {
          loaded.push({ reviewData: item, question });
        }
      }
    }

    setReviewItems(loaded);
    setLoading(false);
  }, [getReviewableQuestions]);

  useEffect(() => {
    loadReviewQuestions();
  }, [loadReviewQuestions]);

  function handleAnswer(isCorrect) {
    setAnswered(true);
    setLastCorrect(isCorrect);
    setWaitingForRating(true);
  }

  function handleRating(quality) {
    const current = reviewItems[currentIndex];
    recordReviewAttempt(current.reviewData.questionId, quality);
    setResults((prev) => [
      ...prev,
      { correct: lastCorrect, questionId: current.reviewData.questionId },
    ]);
    setWaitingForRating(false);
    setAnswered(false);

    if (currentIndex + 1 < reviewItems.length) {
      setCurrentIndex((i) => i + 1);
    } else {
      setSessionComplete(true);
    }
  }

  // Loading state
  if (loading) {
    return (
      <div className="max-w-2xl mx-auto">
        <div className="animate-pulse space-y-4">
          <div className="h-8 bg-dark-surface rounded w-2/3" />
          <div className="h-4 bg-dark-surface rounded w-1/3" />
          <div className="h-40 bg-dark-surface rounded" />
        </div>
      </div>
    );
  }

  // No reviews due
  if (reviewItems.length === 0 && !sessionComplete) {
    return (
      <div className="max-w-2xl mx-auto text-center py-16">
        <div className="text-6xl mb-6">🎉</div>
        <h1 className="text-3xl font-bold mb-4">All Caught Up!</h1>
        <p className="text-text-secondary text-lg mb-8 max-w-md mx-auto">
          No reviews due right now! Keep learning to add questions to your
          review queue.
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

  // Session complete
  if (sessionComplete) {
    const correctCount = results.filter((r) => r.correct).length;
    const total = results.length;
    const percentage = total > 0 ? Math.round((correctCount / total) * 100) : 0;
    const remainingReviews = getReviewQueueSize();

    function getScoreColor() {
      if (percentage >= 80) return "text-green-400";
      if (percentage >= 60) return "text-yellow-400";
      return "text-red-400";
    }

    function getBarColor() {
      if (percentage >= 80) return "bg-green-500";
      if (percentage >= 60) return "bg-yellow-500";
      return "bg-red-500";
    }

    return (
      <div className="max-w-2xl mx-auto text-center py-8">
        <div className="text-6xl mb-4">🏆</div>
        <h1 className="text-3xl font-bold mb-2">Review Complete!</h1>
        <p className="text-text-secondary text-lg mb-6">
          {correctCount} correct out of {total}
        </p>

        <div className={`text-5xl font-bold mb-2 ${getScoreColor()}`}>
          {percentage}%
        </div>
        <div className="max-w-xs mx-auto mb-8">
          <div className="w-full h-3 bg-dark-border rounded-full overflow-hidden">
            <div
              className={`h-full rounded-full transition-all duration-700 ${getBarColor()}`}
              style={{ width: `${percentage}%` }}
            />
          </div>
        </div>

        {remainingReviews > 0 ? (
          <p className="text-text-secondary mb-8">
            {remainingReviews} more question{remainingReviews !== 1 && "s"}{" "}
            waiting for review
          </p>
        ) : (
          <p className="text-text-secondary mb-8">
            Next reviews will be scheduled based on your performance. Check back
            later!
          </p>
        )}

        <div className="flex flex-col gap-3 max-w-xs mx-auto">
          <Link
            to="/"
            className="block text-center bg-accent hover:bg-accent-hover text-dark-bg font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Back to Dashboard
          </Link>
          {remainingReviews > 0 && (
            <button
              onClick={() => {
                setSessionComplete(false);
                setCurrentIndex(0);
                setResults([]);
                setLoading(true);
                loadReviewQuestions();
              }}
              className="px-6 py-3 rounded-lg font-semibold border border-dark-border text-text-primary hover:border-accent hover:text-accent transition-colors cursor-pointer"
            >
              Continue Reviewing
            </button>
          )}
        </div>
      </div>
    );
  }

  // Active review
  const current = reviewItems[currentIndex];
  const moduleMeta = getModule(current.reviewData.moduleId);

  return (
    <div className="max-w-2xl mx-auto">
      {/* Header */}
      <div className="mb-6">
        <Link
          to="/"
          className="text-text-secondary hover:text-accent transition-colors text-sm"
        >
          &larr; Dashboard
        </Link>
        <h1 className="text-2xl font-bold mt-2">Spaced Repetition Review</h1>
        <p className="text-text-secondary text-sm mt-1">
          {reviewItems.length} question{reviewItems.length !== 1 && "s"} ready
          for review
        </p>
      </div>

      {/* Progress bar */}
      <div className="mb-6">
        <div className="flex justify-between text-xs text-text-secondary mb-1">
          <span>Progress</span>
          <span>
            {currentIndex + 1} / {reviewItems.length}
          </span>
        </div>
        <div className="w-full bg-dark-border rounded-full h-1.5">
          <div
            className="bg-accent h-1.5 rounded-full transition-all duration-300"
            style={{
              width: `${((currentIndex + (answered ? 1 : 0)) / reviewItems.length) * 100}%`,
            }}
          />
        </div>
      </div>

      {/* Module context */}
      {moduleMeta && (
        <div className="text-xs text-text-secondary mb-4 flex items-center gap-2">
          <span>From: {moduleMeta.categoryTitle} &middot; {moduleMeta.title}</span>
          {isLeechQuestion(current.reviewData.questionId) && (
            <span className="inline-flex items-center gap-1 text-yellow-400 bg-yellow-500/10 border border-yellow-500/20 rounded px-1.5 py-0.5 text-xs font-medium">
              ⚡ Trouble spot
            </span>
          )}
        </div>
      )}

      {/* Question */}
      <div className="bg-dark-surface border border-dark-border rounded-xl p-6">
        <QuizQuestion
          key={current.reviewData.questionId}
          question={current.question}
          questionIndex={currentIndex}
          totalQuestions={reviewItems.length}
          onAnswer={handleAnswer}
        />

        {/* Leech suggestion */}
        {answered && isLeechQuestion(current.reviewData.questionId) && moduleMeta && (
          <div className="mt-4 p-3 rounded-lg bg-yellow-500/5 border border-yellow-500/20">
            <p className="text-sm text-yellow-200/80">
              This one keeps tripping you up. Try re-reading the section on{" "}
              <Link
                to={`/learn/${current.reviewData.moduleId}`}
                className="text-yellow-400 underline underline-offset-2 hover:text-yellow-300 transition-colors"
              >
                {moduleMeta.title}
              </Link>.
            </p>
          </div>
        )}

        {/* Difficulty rating overlay */}
        {waitingForRating && (
          <div className="mt-6 pt-6 border-t border-dark-border">
            <p className="text-text-secondary text-sm mb-3 text-center">
              How hard was this?
            </p>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              <button
                onClick={() => handleRating(1)}
                className="px-4 py-3 rounded-lg font-semibold text-sm bg-red-500/15 border border-red-500/40 text-red-400 hover:bg-red-500/25 transition-colors cursor-pointer"
              >
                Forgot
              </button>
              <button
                onClick={() => handleRating(3)}
                className="px-4 py-3 rounded-lg font-semibold text-sm bg-yellow-500/15 border border-yellow-500/40 text-yellow-400 hover:bg-yellow-500/25 transition-colors cursor-pointer"
              >
                Hard
              </button>
              <button
                onClick={() => handleRating(4)}
                className="px-4 py-3 rounded-lg font-semibold text-sm bg-blue-500/15 border border-blue-500/40 text-blue-400 hover:bg-blue-500/25 transition-colors cursor-pointer"
              >
                Good
              </button>
              <button
                onClick={() => handleRating(5)}
                className="px-4 py-3 rounded-lg font-semibold text-sm bg-green-500/15 border border-green-500/40 text-green-400 hover:bg-green-500/25 transition-colors cursor-pointer"
              >
                Easy
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Review;
