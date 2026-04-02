import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  getModule,
  getModuleContent,
  getNextModule,
} from "../data/moduleRegistry.js";
import { useProgress } from "../hooks/useProgress.js";
import QuizQuestion from "../components/QuizQuestion.jsx";
import QuizResults from "../components/QuizResults.jsx";

function Quiz() {
  const { moduleId } = useParams();
  const { markModuleComplete, addToReviewQueue } = useProgress();

  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [finished, setFinished] = useState(false);

  const moduleMeta = getModule(moduleId);
  const nextModule = getNextModule(moduleId);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setContent(null);
    setCurrentIndex(0);
    setAnswers([]);
    setFinished(false);

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

  // Module not found
  if (!moduleMeta) {
    return (
      <div className="max-w-[600px] mx-auto text-center py-20">
        <div className="text-5xl mb-4">🔍</div>
        <h1 className="text-2xl font-bold mb-2">Module not found</h1>
        <p className="text-text-secondary mb-6">
          We couldn't find a module with that ID.
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

  // Loading
  if (loading) {
    return (
      <div className="max-w-[600px] mx-auto py-12">
        <div className="animate-pulse space-y-6">
          <div className="h-3 bg-dark-border rounded w-32" />
          <div className="h-8 bg-dark-border rounded w-3/4" />
          <div className="space-y-3">
            <div className="h-14 bg-dark-border rounded" />
            <div className="h-14 bg-dark-border rounded" />
            <div className="h-14 bg-dark-border rounded" />
            <div className="h-14 bg-dark-border rounded" />
          </div>
        </div>
      </div>
    );
  }

  // No quiz available
  if (!content || !content.quiz || content.quiz.length === 0) {
    return (
      <div className="max-w-[600px] mx-auto text-center py-20">
        <div className="text-5xl mb-4">📝</div>
        <h1 className="text-2xl font-bold mb-2">No Quiz Available</h1>
        <p className="text-text-secondary mb-6">
          There's no quiz for this module yet. Check back later!
        </p>
        <Link
          to={`/learn/${moduleId}`}
          className="inline-block bg-accent hover:bg-accent-hover text-dark-bg font-semibold px-6 py-3 rounded-lg transition-colors"
        >
          Back to Module
        </Link>
      </div>
    );
  }

  const questions = content.quiz;
  const totalQuestions = questions.length;
  const progressPercent = finished
    ? 100
    : Math.round((currentIndex / totalQuestions) * 100);

  function handleAnswer(correct, userAnswer) {
    const newAnswers = [...answers, { correct, userAnswer }];
    setAnswers(newAnswers);

    // Add to review queue
    const question = questions[currentIndex];
    addToReviewQueue(moduleId, question.id, correct);

    if (currentIndex + 1 < totalQuestions) {
      setCurrentIndex(currentIndex + 1);
    } else {
      // Quiz complete
      const score = newAnswers.filter((a) => a.correct).length;
      markModuleComplete(moduleId, score, totalQuestions);
      setFinished(true);
    }
  }

  function handleRetake() {
    setCurrentIndex(0);
    setAnswers([]);
    setFinished(false);
  }

  return (
    <div className="max-w-[600px] mx-auto py-4 pb-16">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <Link
            to={`/learn/${moduleId}`}
            className="text-sm text-text-secondary hover:text-accent transition-colors"
          >
            ← Back to module
          </Link>
          <span className="text-sm text-text-secondary">
            {moduleMeta.title}
          </span>
        </div>

        {/* Progress bar */}
        <div className="w-full h-1.5 bg-dark-border rounded-full overflow-hidden">
          <div
            className="h-full bg-accent rounded-full transition-all duration-500"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Quiz content */}
      {finished ? (
        <QuizResults
          questions={questions}
          answers={answers}
          moduleId={moduleId}
          nextModuleId={nextModule?.id}
          onRetake={handleRetake}
        />
      ) : (
        <QuizQuestion
          key={currentIndex}
          question={questions[currentIndex]}
          questionIndex={currentIndex}
          totalQuestions={totalQuestions}
          onAnswer={handleAnswer}
        />
      )}
    </div>
  );
}

export default Quiz;
