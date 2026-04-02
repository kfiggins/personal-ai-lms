import { useState } from "react";
import QuizQuestion from "./QuizQuestion.jsx";

function PreTest({ moduleTitle, questions, onComplete }) {
  const [started, setStarted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState([]);

  if (!started) {
    return (
      <div className="max-w-[700px] mx-auto py-12">
        <div className="text-center">
          <div className="text-5xl mb-4">🧠</div>
          <h1 className="text-2xl font-bold mb-2">Quick Pre-Test</h1>
          <p className="text-text-secondary mb-2 text-lg">{moduleTitle}</p>
          <p className="text-text-secondary mb-8 max-w-md mx-auto">
            Before you dive in, let's see what you already know! This is just a
            quick diagnostic — no pressure, and it won't affect your scores.
          </p>
          <button
            onClick={() => setStarted(true)}
            className="bg-accent hover:bg-accent-hover text-dark-bg font-bold px-8 py-4 rounded-xl text-lg transition-colors cursor-pointer"
          >
            See what I already know
          </button>
          <div className="mt-4">
            <button
              onClick={() => onComplete(null)}
              className="text-text-secondary hover:text-accent text-sm transition-colors cursor-pointer"
            >
              Skip and start reading
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Show results after all questions
  if (currentIndex >= questions.length) {
    const correct = answers.filter((a) => a.correct).length;
    return (
      <div className="max-w-[700px] mx-auto py-12">
        <div className="text-center">
          <div className="text-5xl mb-4">
            {correct === questions.length ? "🌟" : correct > 0 ? "👍" : "💡"}
          </div>
          <h2 className="text-2xl font-bold mb-2">Pre-Test Complete!</h2>
          <p className="text-text-secondary mb-2">
            You got{" "}
            <span className="text-accent font-semibold">
              {correct} of {questions.length}
            </span>{" "}
            right.
          </p>
          <p className="text-text-secondary mb-8 max-w-md mx-auto">
            {correct === questions.length
              ? "Great — you've got a solid head start! Let's build on that."
              : correct > 0
                ? "Nice start! The module ahead will fill in the gaps."
                : "No worries — that's exactly why we're here. Let's learn!"}
          </p>
          <button
            onClick={() =>
              onComplete({
                score: correct,
                total: questions.length,
                answers,
              })
            }
            className="bg-accent hover:bg-accent-hover text-dark-bg font-bold px-8 py-4 rounded-xl text-lg transition-colors cursor-pointer"
          >
            Start the Module
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-[700px] mx-auto py-12">
      <div className="mb-6">
        <div className="flex items-center justify-between text-sm text-text-secondary mb-2">
          <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-semibold">
            Pre-Test
          </span>
          <span>
            {currentIndex + 1} of {questions.length}
          </span>
        </div>
        <div className="w-full bg-dark-border rounded-full h-1.5">
          <div
            className="bg-accent h-1.5 rounded-full transition-all duration-300"
            style={{
              width: `${((currentIndex + 1) / questions.length) * 100}%`,
            }}
          />
        </div>
      </div>

      <QuizQuestion
        key={questions[currentIndex].id}
        question={questions[currentIndex]}
        questionIndex={currentIndex}
        totalQuestions={questions.length}
        onAnswer={(correct, userAnswer) => {
          setAnswers((prev) => [...prev, { correct, userAnswer }]);
          setCurrentIndex((prev) => prev + 1);
        }}
      />
    </div>
  );
}

export default PreTest;
