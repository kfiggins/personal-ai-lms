// Template showing the expected module content format.
// Copy this file and rename it to match the module ID (e.g., gs-01-what-is-claude-code.js).

export default {
  id: "gs-01-what-is-claude-code",
  title: "What is Claude Code?",
  whyItMatters: "Understanding what Claude Code is helps you know when and how to use it effectively.",

  content: [
    {
      type: "text",
      body: "Claude Code is an AI-powered coding assistant that lives in your terminal. It can understand your codebase, make edits across multiple files, run commands, and iterate on its own work — all from a single natural language request.",
    },
    {
      type: "keyPoint",
      body: "Claude Code is agentic - it can read files, edit code, run commands, and verify its own work.",
    },
    {
      type: "example",
      title: "Example: Asking Claude Code to fix a bug",
      code: 'claude "fix the failing tests in src/auth/"',
      explanation: "Claude Code will find the test files, read them, identify the failures, fix the code, and re-run the tests.",
    },
    {
      type: "inPractice",
      body: "You would use this when you want to quickly diagnose and fix issues without manually hunting through files and stack traces.",
    },
  ],

  quiz: [
    {
      id: "q1",
      type: "multiple-choice",
      question: "What makes Claude Code different from a simple code autocompleter?",
      options: [
        "It can only suggest one line at a time",
        "It is agentic - it can read, edit, run commands, and verify its work autonomously",
        "It only works with Python",
        "It requires you to manually specify every file to edit",
      ],
      correctAnswer: 1,
      explanation: "Claude Code is agentic, meaning it can autonomously gather context, take actions, and verify results in a loop.",
    },
  ],
};
