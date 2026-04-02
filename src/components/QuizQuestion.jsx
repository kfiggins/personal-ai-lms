import { useState } from "react";

function QuizQuestion({ question, questionIndex, totalQuestions, onAnswer }) {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [textInput, setTextInput] = useState("");
  const [checked, setChecked] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const hasAnswer =
    question.type === "fill-in" || question.type === "code-completion"
      ? textInput.trim().length > 0
      : selectedAnswer !== null;

  function checkAnswer() {
    let correct = false;

    if (question.type === "multiple-choice" || question.type === "true-false") {
      correct = selectedAnswer === question.correctAnswer;
    } else if (
      question.type === "fill-in" ||
      question.type === "code-completion"
    ) {
      const trimmed = textInput.trim().toLowerCase();
      const acceptable = (question.acceptableAnswers || []).map((a) =>
        a.trim().toLowerCase()
      );
      correct = acceptable.includes(trimmed);
    }

    setIsCorrect(correct);
    setChecked(true);
  }

  function handleNext() {
    const userAnswer =
      question.type === "fill-in" || question.type === "code-completion"
        ? textInput.trim()
        : selectedAnswer;
    onAnswer(isCorrect, userAnswer);
  }

  function getCorrectAnswerText() {
    if (question.type === "multiple-choice" || question.type === "true-false") {
      return question.options[question.correctAnswer];
    }
    return (question.acceptableAnswers || [])[0] || "";
  }

  return (
    <div>
      {/* Question header */}
      <div className="text-sm text-text-secondary mb-1">
        Question {questionIndex + 1} of {totalQuestions}
      </div>
      <h2 className="text-xl font-bold mb-6 leading-relaxed">
        {question.question}
      </h2>

      {/* Code snippet for code-completion */}
      {question.type === "code-completion" && question.code && (
        <div className="bg-[#0d1117] rounded-lg p-4 mb-4 font-mono text-sm leading-relaxed overflow-x-auto">
          <pre className="whitespace-pre-wrap text-text-primary">
            {question.code}
          </pre>
        </div>
      )}

      {/* Multiple choice / true-false options */}
      {(question.type === "multiple-choice" ||
        question.type === "true-false") && (
        <div className="space-y-3 mb-6">
          {question.options.map((option, i) => {
            let optionClass =
              "w-full text-left p-4 rounded-lg border transition-all ";

            if (checked) {
              if (i === question.correctAnswer) {
                optionClass +=
                  "border-green-500 bg-green-500/10 text-green-300";
              } else if (i === selectedAnswer && !isCorrect) {
                optionClass += "border-red-500 bg-red-500/10 text-red-300";
              } else {
                optionClass +=
                  "border-dark-border bg-dark-surface text-text-secondary opacity-50";
              }
            } else if (i === selectedAnswer) {
              optionClass += "border-accent bg-accent/10 text-text-primary";
            } else {
              optionClass +=
                "border-dark-border bg-dark-surface text-text-primary hover:border-accent/50 cursor-pointer";
            }

            return (
              <button
                key={i}
                onClick={() => !checked && setSelectedAnswer(i)}
                disabled={checked}
                className={optionClass}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${
                      checked && i === question.correctAnswer
                        ? "border-green-500 bg-green-500"
                        : checked && i === selectedAnswer && !isCorrect
                          ? "border-red-500 bg-red-500"
                          : i === selectedAnswer
                            ? "border-accent bg-accent"
                            : "border-dark-border"
                    }`}
                  >
                    {checked && i === question.correctAnswer && (
                      <span className="text-xs text-white font-bold">✓</span>
                    )}
                    {checked && i === selectedAnswer && !isCorrect && (
                      <span className="text-xs text-white font-bold">✕</span>
                    )}
                    {!checked && i === selectedAnswer && (
                      <div className="w-2 h-2 rounded-full bg-dark-bg" />
                    )}
                  </div>
                  <span>{option}</span>
                </div>
              </button>
            );
          })}
        </div>
      )}

      {/* Fill-in text input */}
      {question.type === "fill-in" && (
        <div className="mb-6">
          <input
            type="text"
            value={textInput}
            onChange={(e) => !checked && setTextInput(e.target.value)}
            onKeyDown={(e) =>
              e.key === "Enter" && hasAnswer && !checked && checkAnswer()
            }
            disabled={checked}
            placeholder="Type your answer..."
            className={`w-full p-4 rounded-lg border bg-dark-surface text-text-primary placeholder-text-secondary outline-none transition-colors ${
              checked
                ? isCorrect
                  ? "border-green-500"
                  : "border-red-500"
                : "border-dark-border focus:border-accent"
            }`}
          />
          {checked && !isCorrect && (
            <p className="mt-2 text-sm text-green-400">
              Correct answer: {getCorrectAnswerText()}
            </p>
          )}
        </div>
      )}

      {/* Code-completion text input */}
      {question.type === "code-completion" && (
        <div className="mb-6">
          <input
            type="text"
            value={textInput}
            onChange={(e) => !checked && setTextInput(e.target.value)}
            onKeyDown={(e) =>
              e.key === "Enter" && hasAnswer && !checked && checkAnswer()
            }
            disabled={checked}
            placeholder="Type what goes in the blank..."
            className={`w-full p-4 rounded-lg border bg-[#0d1117] font-mono text-text-primary placeholder-text-secondary outline-none transition-colors ${
              checked
                ? isCorrect
                  ? "border-green-500"
                  : "border-red-500"
                : "border-dark-border focus:border-accent"
            }`}
          />
          {checked && !isCorrect && (
            <p className="mt-2 text-sm text-green-400">
              Correct answer: <code className="font-mono">{getCorrectAnswerText()}</code>
            </p>
          )}
        </div>
      )}

      {/* Feedback after checking */}
      {checked && (
        <div
          className={`p-4 rounded-lg mb-6 ${
            isCorrect
              ? "bg-green-500/10 border border-green-500/30"
              : "bg-red-500/10 border border-red-500/30"
          }`}
        >
          <div className="flex items-center gap-2 mb-2">
            {isCorrect ? (
              <span className="text-green-400 font-semibold">✓ Correct!</span>
            ) : (
              <span className="text-red-400 font-semibold">✕ Incorrect</span>
            )}
          </div>
          {question.explanation && (
            <p className="text-sm text-text-secondary leading-relaxed">
              {question.explanation}
            </p>
          )}
        </div>
      )}

      {/* Action buttons */}
      <div className="flex gap-3">
        {!checked ? (
          <button
            onClick={checkAnswer}
            disabled={!hasAnswer}
            className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
              hasAnswer
                ? "bg-accent hover:bg-accent-hover text-dark-bg cursor-pointer"
                : "bg-dark-border text-text-secondary cursor-not-allowed"
            }`}
          >
            Check Answer
          </button>
        ) : (
          <button
            onClick={handleNext}
            className="bg-accent hover:bg-accent-hover text-dark-bg font-semibold px-6 py-3 rounded-lg transition-colors cursor-pointer"
          >
            {questionIndex + 1 < totalQuestions
              ? "Next Question"
              : "See Results"}
          </button>
        )}
      </div>
    </div>
  );
}

export default QuizQuestion;
