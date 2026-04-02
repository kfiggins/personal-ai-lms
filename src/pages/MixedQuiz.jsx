import { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { getModuleContent, getModule } from "../data/moduleRegistry.js";
import { useProgress } from "../hooks/useProgress.js";
import QuizQuestion from "../components/QuizQuestion.jsx";

function MixedQuiz() {
  const { getCompletedModulesWithScores, saveMixedQuizResult, addToReviewQueue } =
    useProgress();

  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [finished, setFinished] = useState(false);

  const completedModules = useMemo(
    () => getCompletedModulesWithScores(),
    [getCompletedModulesWithScores]
  );

  useEffect(() => {
    let cancelled = false;

    async function loadQuestions() {
      // Load quiz content from all completed modules
      const allQuestions = [];

      await Promise.all(
        completedModules.map(async (mod) => {
          const content = await getModuleContent(mod.moduleId);
          if (content?.quiz) {
            content.quiz.forEach((q) => {
              allQuestions.push({
                ...q,
                moduleId: mod.moduleId,
                moduleTitle: mod.title,
                categoryTitle: mod.categoryTitle,
                // Weight: lower score modules get higher weight
                weight: Math.max(1, 100 - mod.percentage) / 100 + 0.5,
              });
            });
          }
        })
      );

      if (cancelled) return;

      // Weighted random selection of 10 questions, no repeats
      const selected = weightedSample(allQuestions, 10);
      setQuestions(selected);
      setLoading(false);
    }

    loadQuestions();
    return () => {
      cancelled = true;
    };
  }, [completedModules]);

  if (completedModules.length < 3) {
    return (
      <div className="max-w-[600px] mx-auto text-center py-20">
        <div className="text-5xl mb-4">🔀</div>
        <h1 className="text-2xl font-bold mb-2">Mixed Quiz Not Available</h1>
        <p className="text-text-secondary mb-6">
          Complete at least 3 modules to unlock the mixed review quiz.
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

  if (questions.length === 0) {
    return (
      <div className="max-w-[600px] mx-auto text-center py-20">
        <div className="text-5xl mb-4">📝</div>
        <h1 className="text-2xl font-bold mb-2">No Questions Available</h1>
        <p className="text-text-secondary mb-6">
          The completed modules don't have quiz questions yet.
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

  const totalQuestions = questions.length;
  const progressPercent = finished
    ? 100
    : Math.round((currentIndex / totalQuestions) * 100);

  function handleAnswer(correct, userAnswer) {
    const newAnswers = [...answers, { correct, userAnswer }];
    setAnswers(newAnswers);

    const question = questions[currentIndex];
    addToReviewQueue(question.moduleId, question.id, correct);

    if (currentIndex + 1 < totalQuestions) {
      setCurrentIndex(currentIndex + 1);
    } else {
      saveMixedQuizResult(questions, newAnswers);
      setFinished(true);
    }
  }

  function handleRetake() {
    setCurrentIndex(0);
    setAnswers([]);
    setFinished(false);
    setLoading(true);
    // Re-shuffle questions
    const allQs = [...questions];
    const selected = weightedSample(allQs, 10);
    setQuestions(selected);
    setLoading(false);
  }

  return (
    <div className="max-w-[600px] mx-auto py-4 pb-16">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <Link
            to="/"
            className="text-sm text-text-secondary hover:text-accent transition-colors"
          >
            ← Back to Dashboard
          </Link>
          <span className="text-sm text-text-secondary">Mixed Review</span>
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
        <MixedQuizResults
          questions={questions}
          answers={answers}
          onRetake={handleRetake}
        />
      ) : (
        <div>
          {/* Module label */}
          <div className="mb-3">
            <span className="inline-block text-xs font-medium px-2.5 py-1 rounded-full bg-accent/15 text-accent border border-accent/30">
              {questions[currentIndex].categoryTitle} — {questions[currentIndex].moduleTitle}
            </span>
          </div>
          <QuizQuestion
            key={`${currentIndex}-${questions[currentIndex].id}`}
            question={questions[currentIndex]}
            questionIndex={currentIndex}
            totalQuestions={totalQuestions}
            onAnswer={handleAnswer}
          />
        </div>
      )}
    </div>
  );
}

// --- Weighted random sampling ---

function weightedSample(items, count) {
  if (items.length <= count) {
    return shuffle([...items]);
  }

  const selected = [];
  const remaining = [...items];

  while (selected.length < count && remaining.length > 0) {
    const totalWeight = remaining.reduce((sum, item) => sum + (item.weight || 1), 0);
    let random = Math.random() * totalWeight;

    for (let i = 0; i < remaining.length; i++) {
      random -= remaining[i].weight || 1;
      if (random <= 0) {
        selected.push(remaining[i]);
        remaining.splice(i, 1);
        break;
      }
    }
  }

  return shuffle(selected);
}

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// --- Results grouped by module ---

function MixedQuizResults({ questions, answers, onRetake }) {
  const score = answers.filter((a) => a.correct).length;
  const total = questions.length;
  const percentage = Math.round((score / total) * 100);

  // Group by module
  const moduleGroups = {};
  questions.forEach((q, i) => {
    if (!moduleGroups[q.moduleId]) {
      moduleGroups[q.moduleId] = {
        moduleTitle: q.moduleTitle,
        categoryTitle: q.categoryTitle,
        questions: [],
        answers: [],
      };
    }
    moduleGroups[q.moduleId].questions.push(q);
    moduleGroups[q.moduleId].answers.push(answers[i]);
  });

  function getMessage() {
    if (percentage === 100) return "Perfect! You nailed it!";
    if (percentage >= 80) return "Great job! You have a solid understanding.";
    if (percentage >= 60)
      return "Good effort! Focus on the weaker areas below.";
    return "Keep learning! Review the modules where you struggled.";
  }

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

  function getCorrectAnswerText(q) {
    if (q.type === "multiple-choice" || q.type === "true-false") {
      return q.options[q.correctAnswer];
    }
    return (q.acceptableAnswers || [])[0] || "";
  }

  return (
    <div>
      {/* Score display */}
      <div className="text-center mb-8">
        <div className="text-sm text-text-secondary mb-2 uppercase tracking-wide font-medium">
          Mixed Review Results
        </div>
        <div className={`text-6xl font-bold mb-2 ${getScoreColor()}`}>
          {score}/{total}
        </div>
        <p className="text-lg text-text-secondary mb-4">
          You got {score} out of {total} correct!
        </p>

        {/* Score bar */}
        <div className="max-w-xs mx-auto mb-4">
          <div className="w-full h-3 bg-dark-border rounded-full overflow-hidden">
            <div
              className={`h-full rounded-full transition-all duration-700 ${getBarColor()}`}
              style={{ width: `${percentage}%` }}
            />
          </div>
          <p className={`text-sm mt-1 font-semibold ${getScoreColor()}`}>
            {percentage}%
          </p>
        </div>

        <p className="text-text-primary font-medium text-lg">{getMessage()}</p>
      </div>

      {/* Results grouped by module */}
      <div className="space-y-6 mb-8">
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wide">
          Results by Module
        </h3>
        {Object.entries(moduleGroups)
          .sort((a, b) => {
            // Sort weaker modules first
            const aScore =
              a[1].answers.filter((ans) => ans.correct).length /
              a[1].answers.length;
            const bScore =
              b[1].answers.filter((ans) => ans.correct).length /
              b[1].answers.length;
            return aScore - bScore;
          })
          .map(([moduleId, group]) => {
            const modScore = group.answers.filter((a) => a.correct).length;
            const modTotal = group.answers.length;
            const modPct = Math.round((modScore / modTotal) * 100);
            const modMeta = getModule(moduleId);

            return (
              <div
                key={moduleId}
                className="bg-dark-surface border border-dark-border rounded-xl p-4"
              >
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <div className="text-xs text-text-secondary">
                      {group.categoryTitle}
                    </div>
                    <div className="font-semibold text-sm">
                      {group.moduleTitle}
                    </div>
                  </div>
                  <div
                    className={`text-sm font-bold ${
                      modPct >= 80
                        ? "text-green-400"
                        : modPct >= 60
                          ? "text-yellow-400"
                          : "text-red-400"
                    }`}
                  >
                    {modScore}/{modTotal}
                  </div>
                </div>

                {/* Per-question breakdown */}
                <div className="space-y-2">
                  {group.questions.map((q, qi) => {
                    const answer = group.answers[qi];
                    return (
                      <div
                        key={q.id}
                        className={`p-3 rounded-lg border ${
                          answer.correct
                            ? "border-green-500/30 bg-green-500/5"
                            : "border-red-500/30 bg-red-500/5"
                        }`}
                      >
                        <div className="flex items-start gap-2">
                          <span
                            className={`shrink-0 mt-0.5 text-sm ${
                              answer.correct
                                ? "text-green-400"
                                : "text-red-400"
                            }`}
                          >
                            {answer.correct ? "✓" : "✕"}
                          </span>
                          <div className="min-w-0">
                            <p className="text-sm text-text-primary">
                              {q.question}
                            </p>
                            {!answer.correct && (
                              <p className="text-xs text-green-400 mt-1">
                                Correct answer: {getCorrectAnswerText(q)}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Link to review module */}
                {modPct < 80 && modMeta && (
                  <Link
                    to={`/learn/${moduleId}`}
                    className="inline-block mt-3 text-xs text-accent hover:text-accent-hover transition-colors"
                  >
                    Review this module →
                  </Link>
                )}
              </div>
            );
          })}
      </div>

      {/* Action buttons */}
      <div className="flex flex-col gap-3">
        <button
          onClick={onRetake}
          className="bg-accent hover:bg-accent-hover text-dark-bg font-semibold px-6 py-3 rounded-lg transition-colors cursor-pointer"
        >
          New Mixed Quiz
        </button>
        <Link
          to="/"
          className="block text-center text-text-secondary hover:text-accent transition-colors text-sm py-2"
        >
          Back to Dashboard
        </Link>
      </div>
    </div>
  );
}

export default MixedQuiz;
