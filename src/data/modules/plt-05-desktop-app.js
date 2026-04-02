export default {
  id: "plt-05-desktop-app",
  title: "Desktop App",
  whyItMatters:
    "The Claude Code desktop app gives you a dedicated, standalone experience on macOS and Windows. It's ideal when you want focused coding sessions, multiple side-by-side projects, or features like computer use and scheduled tasks.",

  content: [
    {
      type: "text",
      body: "The Claude Code desktop app is a standalone application for macOS and Windows. It provides the full Claude Code experience in a dedicated window, separate from your terminal or IDE. You get visual diff review, multiple sessions side by side, and access to features like scheduled tasks and computer use.",
    },
    {
      type: "keyPoint",
      body: "Standout features include: **visual diff review** for inspecting changes, **multiple sessions side by side** for parallel work, **scheduled recurring tasks**, **computer use** capability for GUI interaction, and **Dispatch** to start tasks from your phone.",
    },
    {
      type: "example",
      title: "Desktop app workflows",
      code: "# Visual diff review:\n# See inline diffs for every file Claude changes\n# Accept or reject changes one at a time\n\n# Multiple sessions:\n# Open side-by-side panels for different projects\n# Refactor backend in one, update frontend in another\n\n# Scheduled tasks:\n# Set up recurring code maintenance tasks\n# Auto-run linting reports every morning\n\n# Dispatch:\n# Start a task from your phone while away from your desk\n# Check results when you're back",
      explanation:
        "The desktop app is great for dedicated coding sessions where you want a clean, focused interface. Multiple sessions let you context-switch between projects without losing your place.",
    },
    {
      type: "inPractice",
      body: "Many developers use the desktop app as their primary Claude Code surface because it keeps coding sessions separate from their IDE and terminal. The side-by-side sessions are especially useful for coordinating changes across repos — like updating an API and its client library at the same time.",
    },
    {
      type: "tip",
      body: "Use Dispatch to start tasks from your phone when you think of something while away from your desk. The task runs on your machine, and you can review the results when you're back.",
    },
  ],

  quiz: [
    {
      id: "q1",
      type: "multiple-choice",
      question:
        "Which operating systems support the Claude Code desktop app?",
      options: [
        "macOS only",
        "Windows only",
        "macOS and Windows",
        "macOS, Windows, and Linux",
      ],
      correctAnswer: 2,
      explanation:
        "The Claude Code desktop app is available as a standalone application for both macOS and Windows.",
    },
    {
      id: "q2",
      type: "multiple-choice",
      question:
        "What is Dispatch in the desktop app?",
      options: [
        "A code deployment tool",
        "A way to start tasks from your phone",
        "A message queue system",
        "A debugging feature",
      ],
      correctAnswer: 1,
      explanation:
        "Dispatch lets you start coding tasks from your phone. The task runs on your machine, and you can check the results later — great for kicking things off while away from your desk.",
    },
    {
      id: "q3",
      type: "multiple-choice",
      question:
        "What does the computer use capability allow Claude to do?",
      options: [
        "Run code faster",
        "Access more memory",
        "See and interact with GUI applications",
        "Connect to remote servers",
      ],
      correctAnswer: 2,
      explanation:
        "Computer use lets Claude see your screen and interact with GUI applications — opening apps, clicking buttons, and typing text. It's useful for testing native apps and visual debugging.",
    },
    {
      id: "q4",
      type: "multiple-choice",
      question:
        "Why would you use the desktop app instead of the CLI or VS Code?",
      options: [
        "It uses a different, more powerful model",
        "It provides a dedicated focused interface with side-by-side sessions",
        "It's the only way to edit files",
        "It's required for enterprise users",
      ],
      correctAnswer: 1,
      explanation:
        "The desktop app provides a dedicated, focused interface separate from your terminal or IDE. Multiple side-by-side sessions make it ideal for coordinating work across projects.",
    },
  ],
};
