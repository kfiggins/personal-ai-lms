import { Link } from "react-router-dom";

function QuizResults({
  questions,
  answers,
  moduleId,
  nextModuleId,
  onRetake,
}) {
  const score = answers.filter((a) => a.correct).length;
  const total = questions.length;
  const percentage = Math.round((score / total) * 100);

  function getMessage() {
    if (percentage === 100) return "Perfect! You nailed it!";
    if (percentage >= 80) return "Great job! You have a solid understanding.";
    if (percentage >= 60)
      return "Good effort! Review the material and try again.";
    return "Keep learning! Re-read the module and try again.";
  }

  function getScoreColor() {
    if (percentage === 100) return "text-green-400";
    if (percentage >= 80) return "text-green-400";
    if (percentage >= 60) return "text-yellow-400";
    return "text-red-400";
  }

  function getBarColor() {
    if (percentage === 100) return "bg-green-500";
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

      {/* Question review */}
      <div className="space-y-3 mb-8">
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wide">
          Question Review
        </h3>
        {questions.map((q, i) => {
          const answer = answers[i];
          return (
            <div
              key={q.id}
              className={`p-4 rounded-lg border ${
                answer.correct
                  ? "border-green-500/30 bg-green-500/5"
                  : "border-red-500/30 bg-red-500/5"
              }`}
            >
              <div className="flex items-start gap-3">
                <span
                  className={`shrink-0 mt-0.5 ${answer.correct ? "text-green-400" : "text-red-400"}`}
                >
                  {answer.correct ? "✓" : "✕"}
                </span>
                <div className="min-w-0">
                  <p className="text-sm text-text-primary mb-1">
                    {q.question}
                  </p>
                  {!answer.correct && (
                    <p className="text-xs text-green-400">
                      Correct answer: {getCorrectAnswerText(q)}
                    </p>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Action buttons */}
      <div className="flex flex-col gap-3">
        {nextModuleId && (
          <Link
            to={`/learn/${nextModuleId}`}
            className="block text-center bg-accent hover:bg-accent-hover text-dark-bg font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Continue to Next Module
          </Link>
        )}
        <button
          onClick={onRetake}
          className={`px-6 py-3 rounded-lg font-semibold transition-colors cursor-pointer ${
            nextModuleId
              ? "border border-dark-border text-text-primary hover:border-accent hover:text-accent"
              : "bg-accent hover:bg-accent-hover text-dark-bg"
          }`}
        >
          Retake Quiz
        </button>
        <Link
          to={`/learn/${moduleId}`}
          className="block text-center text-text-secondary hover:text-accent transition-colors text-sm py-2"
        >
          Review Module
        </Link>
      </div>
    </div>
  );
}

export default QuizResults;
