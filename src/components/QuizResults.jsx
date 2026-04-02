import { Link } from "react-router-dom";

function CalibrationSection({ answers }) {
  const byConfidence = { guessing: { correct: 0, total: 0 }, somewhat: { correct: 0, total: 0 }, confident: { correct: 0, total: 0 } };

  answers.forEach((a) => {
    if (a.confidence && byConfidence[a.confidence]) {
      byConfidence[a.confidence].total++;
      if (a.correct) byConfidence[a.confidence].correct++;
    }
  });

  const levels = [
    { key: "guessing", label: "Guessing", icon: "🎲" },
    { key: "somewhat", label: "Somewhat sure", icon: "🤔" },
    { key: "confident", label: "Very confident", icon: "💯" },
  ];

  // Detect calibration insights
  const insights = [];
  const conf = byConfidence.confident;
  const guess = byConfidence.guessing;
  if (conf.total > 0 && conf.correct / conf.total < 0.5) {
    insights.push({ type: "overconfident", text: "Overconfident — high confidence but low accuracy. Review these topics carefully." });
  }
  if (guess.total > 0 && guess.correct / guess.total > 0.5) {
    insights.push({ type: "underconfident", text: "Underconfident — you know more than you think! Trust your knowledge." });
  }

  const hasData = answers.some((a) => a.confidence);
  if (!hasData) return null;

  return (
    <div className="mb-8">
      <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wide mb-3">
        Confidence Calibration
      </h3>
      <div className="bg-dark-surface border border-dark-border rounded-xl p-4">
        <div className="grid grid-cols-3 gap-3 mb-3">
          {levels.map(({ key, label, icon }) => {
            const data = byConfidence[key];
            if (data.total === 0) return (
              <div key={key} className="text-center p-3 rounded-lg bg-dark-card/50">
                <div className="text-lg mb-1">{icon}</div>
                <div className="text-xs text-text-secondary">{label}</div>
                <div className="text-sm text-text-secondary mt-1">—</div>
              </div>
            );
            const pct = Math.round((data.correct / data.total) * 100);
            const color = pct >= 80 ? "text-green-400" : pct >= 50 ? "text-yellow-400" : "text-red-400";
            return (
              <div key={key} className="text-center p-3 rounded-lg bg-dark-card/50">
                <div className="text-lg mb-1">{icon}</div>
                <div className="text-xs text-text-secondary">{label}</div>
                <div className={`text-sm font-bold mt-1 ${color}`}>
                  {data.correct}/{data.total} ({pct}%)
                </div>
              </div>
            );
          })}
        </div>
        {insights.map((insight, i) => (
          <div
            key={i}
            className={`text-xs px-3 py-2 rounded-lg mt-2 ${
              insight.type === "overconfident"
                ? "bg-red-500/10 text-red-400 border border-red-500/20"
                : "bg-yellow-500/10 text-yellow-400 border border-yellow-500/20"
            }`}
          >
            {insight.text}
          </div>
        ))}
      </div>
    </div>
  );
}

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

      {/* Calibration section */}
      <CalibrationSection answers={answers} />

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
                <div className="min-w-0 flex-1">
                  <p className="text-sm text-text-primary mb-1">
                    {q.question}
                  </p>
                  {!answer.correct && (
                    <p className="text-xs text-green-400">
                      Correct answer: {getCorrectAnswerText(q)}
                    </p>
                  )}
                </div>
                {answer.confidence && (
                  <span className="shrink-0 text-xs text-text-secondary" title={`Confidence: ${answer.confidence}`}>
                    {answer.confidence === "guessing" ? "🎲" : answer.confidence === "somewhat" ? "🤔" : "💯"}
                  </span>
                )}
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
