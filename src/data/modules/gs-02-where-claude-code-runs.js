export default {
  id: "gs-02-where-claude-code-runs",
  title: "Where Claude Code Runs",
  whyItMatters:
    "Knowing which platforms support Claude Code helps you choose the best way to integrate it into your workflow.",

  content: [
    {
      type: "text",
      body: "Claude Code runs on multiple platforms so you can use it wherever you're most comfortable. The terminal CLI is the primary interface and the most powerful way to use Claude Code, but you have plenty of options.",
    },
    {
      type: "keyPoint",
      body: "All platforms share the same underlying engine, settings, and CLAUDE.md configuration files. Your experience stays consistent no matter which interface you choose.",
    },
    {
      type: "text",
      body: "Here are the five ways to use Claude Code:\n\n• **Terminal CLI** — The flagship experience. Run `claude` in any terminal to start an interactive session.\n• **VS Code Extension** — Claude Code integrated directly into your editor with inline diffs and a chat panel.\n• **JetBrains Plugin** — Works with IntelliJ, WebStorm, PyCharm, and other JetBrains IDEs.\n• **Desktop App** — A standalone app for macOS and Windows.\n• **Web** — Available at claude.ai/code in your browser, no installation required.",
    },
    {
      type: "inPractice",
      body: "Most developers start with the terminal CLI since it gives you the most control and works with any project. As you get comfortable, try the IDE extensions to get Claude Code's help right where you write code.",
    },
  ],

  quiz: [
    {
      id: "q1",
      type: "multiple-choice",
      question: "Which is considered the primary interface for Claude Code?",
      options: [
        "VS Code Extension",
        "Desktop App",
        "Terminal CLI",
        "Web browser",
      ],
      correctAnswer: 2,
      explanation:
        "The terminal CLI is the primary and most powerful interface for Claude Code. It works with any project and gives you the most control.",
    },
    {
      id: "q2",
      type: "true-false",
      question:
        "Settings and CLAUDE.md files are different for each platform where Claude Code runs.",
      options: ["True", "False"],
      correctAnswer: 1,
      explanation:
        "All platforms share the same engine, settings, and CLAUDE.md files. Your configuration stays consistent across every interface.",
    },
    {
      id: "q3",
      type: "multiple-choice",
      question: "How many different platforms can you use Claude Code on?",
      options: ["2", "3", "5", "7"],
      correctAnswer: 2,
      explanation:
        "Claude Code is available on five platforms: Terminal CLI, VS Code, JetBrains, Desktop App, and Web (claude.ai/code).",
    },
    {
      id: "q4",
      type: "multiple-choice",
      question:
        "Which JetBrains IDEs support the Claude Code plugin?",
      options: [
        "Only IntelliJ IDEA",
        "IntelliJ, WebStorm, PyCharm, and other JetBrains IDEs",
        "Only WebStorm",
        "JetBrains IDEs are not supported",
      ],
      correctAnswer: 1,
      explanation:
        "The Claude Code plugin works across JetBrains IDEs including IntelliJ, WebStorm, PyCharm, and others.",
    },
  ],
};
