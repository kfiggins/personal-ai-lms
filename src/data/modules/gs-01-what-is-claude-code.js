export default {
  id: "gs-01-what-is-claude-code",
  title: "What is Claude Code?",
  whyItMatters:
    "Knowing what Claude Code is and how it differs from other tools helps you use it to its full potential.",

  content: [
    {
      type: "text",
      body: "Claude Code is an AI-powered coding assistant built by Anthropic. It lives in your terminal and can read your entire codebase, edit files, run commands, and integrate with your development tools — all from natural language instructions. Think of it as a highly capable colleague who can understand your project and take action on it.",
    },
    {
      type: "keyPoint",
      body: "What makes Claude Code unique is that it is agentic. Unlike simple autocomplete tools, Claude Code can autonomously read files, make edits across your project, run terminal commands, check its own work, and iterate until the task is done.",
    },
    {
      type: "text",
      body: "Claude Code is available everywhere you work: in the terminal as a CLI, as a VS Code extension, a JetBrains plugin, a desktop app, and even in the browser at claude.ai/code. No matter where you use it, you get the same powerful engine underneath.",
    },
    {
      type: "example",
      title: "Example: Asking Claude Code to fix tests",
      code: 'claude "fix the failing tests in src/auth/"',
      explanation:
        "Claude Code will find the test files, read them, identify the failures, fix the code, and re-run the tests — all autonomously. You just describe what you want in plain English.",
    },
    {
      type: "inPractice",
      body: "You might use Claude Code to fix bugs, build new features, refactor code, create commits and pull requests, run tests, or just explore an unfamiliar codebase. It handles the tedious parts so you can focus on the interesting work.",
    },
  ],

  quiz: [
    {
      id: "q1",
      type: "multiple-choice",
      question: "What makes Claude Code different from a simple code autocompleter?",
      options: [
        "It can only suggest one line at a time",
        "It is agentic — it can read, edit, run commands, and verify its work autonomously",
        "It only works with Python",
        "It requires you to manually specify every file to edit",
      ],
      correctAnswer: 1,
      explanation:
        "Claude Code is agentic, meaning it can autonomously gather context, take actions like editing files and running commands, and verify its own results — all in a loop until the task is complete.",
    },
    {
      id: "q2",
      type: "true-false",
      question: "Claude Code can only be used in the terminal.",
      options: ["True", "False"],
      correctAnswer: 1,
      explanation:
        "Claude Code is available in the terminal CLI, VS Code, JetBrains, a desktop app, and the browser at claude.ai/code.",
    },
    {
      id: "q3",
      type: "multiple-choice",
      question: "Which of these can Claude Code do?",
      options: [
        "Read files in your codebase",
        "Edit code across multiple files",
        "Run terminal commands",
        "All of the above",
      ],
      correctAnswer: 3,
      explanation:
        "Claude Code can read files, edit code, run commands, and much more. It acts as a full-featured coding assistant, not just a suggestion tool.",
    },
    {
      id: "q4",
      type: "multiple-choice",
      question: "Who built Claude Code?",
      options: ["OpenAI", "Google", "Anthropic", "Microsoft"],
      correctAnswer: 2,
      explanation:
        "Claude Code is built by Anthropic, the same company behind the Claude family of AI models.",
    },
  ],
};
