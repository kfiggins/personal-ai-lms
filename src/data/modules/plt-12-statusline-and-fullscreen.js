export default {
  id: "plt-12-statusline-and-fullscreen",
  title: "Status Line and Fullscreen Mode",
  whyItMatters:
    "Customizing the status bar and using fullscreen mode can significantly improve your experience during long coding sessions. See context usage, costs, and git status at a glance, and get smoother rendering with mouse support.",

  content: [
    {
      type: "text",
      body: "Claude Code's status line sits at the bottom of your terminal and shows useful information at a glance — context window usage, session costs, git branch and status, and more. You can customize what it shows. Fullscreen mode takes it further with smoother rendering and mouse support for a better experience during longer sessions.",
    },
    {
      type: "keyPoint",
      body: "The **status line** can display context usage, costs, git status, and other session info. **Fullscreen mode** provides smoother rendering, mouse support, and a cleaner interface. Both are designed to improve comfort during long coding sessions.",
    },
    {
      type: "example",
      title: "Configuring the status line",
      code: "# The status line shows info like:\n# [Context: 45%] [Cost: $0.32] [main ✓] [Auto mode]\n\n# Customize what appears in the status bar\n# through Claude Code settings\n\n# Fullscreen mode:\n# Smoother rendering for long sessions\n# Mouse support for clicking and scrolling\n# Cleaner interface with fewer distractions",
      explanation:
        "The status line gives you awareness of your session state without interrupting your flow. Context usage is especially important — it tells you when you might need to start a new session or compact context.",
    },
    {
      type: "inPractice",
      body: "Keeping an eye on context usage helps you avoid hitting the context window limit mid-task. The cost display is useful for budgeting, especially on teams with usage limits. Fullscreen mode is worth trying for sessions longer than an hour — the smoother rendering and mouse support reduce friction.",
    },
    {
      type: "tip",
      body: "Watch the context usage indicator. When it gets high, consider compacting your context or starting a new session. Running out of context mid-task can be disruptive.",
    },
  ],

  quiz: [
    {
      id: "q1",
      type: "multiple-choice",
      question:
        "What information can the status line display?",
      options: [
        "Only the current time",
        "Context usage, costs, git status, and session info",
        "Only the file name",
        "Only error messages",
      ],
      correctAnswer: 1,
      explanation:
        "The status line can show context window usage, session costs, git branch and status, permission mode, and other useful session information.",
    },
    {
      id: "q2",
      type: "multiple-choice",
      question:
        "What does fullscreen mode provide?",
      options: [
        "A bigger AI model",
        "Smoother rendering and mouse support",
        "More API credits",
        "Access to additional tools",
      ],
      correctAnswer: 1,
      explanation:
        "Fullscreen mode provides smoother rendering, mouse support, and a cleaner interface. It's designed for a better experience during longer coding sessions.",
    },
    {
      id: "q3",
      type: "multiple-choice",
      question:
        "Why is monitoring context usage important?",
      options: [
        "It affects your internet speed",
        "It tells you when you might need to compact or start a new session",
        "It determines which model you're using",
        "It's only relevant for enterprise users",
      ],
      correctAnswer: 1,
      explanation:
        "Context usage tells you how much of the context window is being used. When it gets high, you should consider compacting context or starting a new session to avoid running out mid-task.",
    },
  ],
};
