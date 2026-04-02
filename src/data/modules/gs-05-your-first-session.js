export default {
  id: "gs-05-your-first-session",
  title: "Your First Session",
  whyItMatters:
    "Starting your first session the right way sets the stage for a productive workflow with Claude Code.",

  content: [
    {
      type: "text",
      body: "Starting a session with Claude Code is simple: navigate to your project directory and type `claude`. That's it. Claude Code will automatically read your project files to understand what you're working with.",
    },
    {
      type: "example",
      title: "Starting Your First Session",
      code: "cd your-project\nclaude",
      explanation:
        "Navigate to your project folder first, then run `claude`. Claude Code launches an interactive session and begins understanding your codebase right away.",
    },
    {
      type: "keyPoint",
      body: "You interact with Claude Code using natural language — just talk to it like you would a knowledgeable colleague. Try asking \"what does this project do?\" as your first question.",
    },
    {
      type: "text",
      body: "Claude Code reads your project files automatically as needed. You don't have to manually open files or paste code — just describe what you want to know or do, and Claude Code will find the relevant code itself.",
    },
    {
      type: "inPractice",
      body: "A great way to get started is to open a project you're familiar with and ask Claude Code to explain it back to you. This helps you see how well it understands the codebase and builds your confidence in using it.",
    },
  ],

  quiz: [
    {
      id: "q1",
      type: "multiple-choice",
      question: "What is the command to start an interactive Claude Code session?",
      options: [
        "claude start",
        "claude --interactive",
        "claude",
        "claude init",
      ],
      correctAnswer: 2,
      explanation:
        "Simply running `claude` in your terminal starts an interactive session. Make sure you're in your project directory first.",
    },
    {
      id: "q2",
      type: "true-false",
      question:
        "You need to manually add files to Claude Code before it can read your project.",
      options: ["True", "False"],
      correctAnswer: 1,
      explanation:
        "Claude Code automatically reads your project files as needed. You don't have to manually specify which files to include.",
    },
    {
      id: "q3",
      type: "multiple-choice",
      question: "What's a good first question to ask Claude Code about your project?",
      options: [
        "\"Delete all the files\"",
        "\"What does this project do?\"",
        "\"Run in admin mode\"",
        "\"Show me the database password\"",
      ],
      correctAnswer: 1,
      explanation:
        "Asking \"what does this project do?\" is a great way to start. It lets Claude Code demonstrate its understanding of your codebase.",
    },
    {
      id: "q4",
      type: "multiple-choice",
      question: "How do you interact with Claude Code?",
      options: [
        "Through a graphical menu system",
        "By writing configuration files",
        "Using natural language, like talking to a colleague",
        "By selecting options from a dropdown",
      ],
      correctAnswer: 2,
      explanation:
        "Claude Code uses natural language interaction. Just type what you want in plain English, like you would explain it to a colleague.",
    },
  ],
};
