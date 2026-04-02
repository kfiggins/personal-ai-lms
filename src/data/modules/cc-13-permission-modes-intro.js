export default {
  id: "cc-13-permission-modes-intro",
  title: "Permission Modes Intro",
  whyItMatters:
    "Permission modes control how much autonomy Claude has — choosing the right mode balances speed with safety.",

  content: [
    {
      type: "text",
      body: "Claude Code has several permission modes that control when it asks for your approval. You cycle through them with Shift+Tab during a session. The right mode depends on how much you trust the task and how closely you want to supervise.",
    },
    {
      type: "keyPoint",
      body: "The four main modes are: Default (asks before edits and commands), Auto-accept edits (edits without asking, still confirms commands), Plan mode (read-only — creates a plan for your approval before doing anything), and Auto mode (runs with background safety checks, minimal interruptions).",
    },
    {
      type: "example",
      title: "Choosing the right mode",
      code: "# Shift+Tab cycles through modes:\n\n# Default mode — best for learning or sensitive code\n# Claude asks before every edit and command\n\n# Auto-accept edits — best for trusted refactoring\n# Edits happen automatically, commands still need approval\n\n# Plan mode — best for understanding before acting\n# Claude only reads and plans, nothing changes\n\n# Auto mode — best for well-defined, safe tasks\n# Minimal interruptions, background safety checks",
      explanation:
        "Start with Default mode when you're learning. Move to auto-accept edits once you're comfortable. Use Plan mode when you want to review the approach first. Auto mode is for when you want Claude to just handle it.",
    },
    {
      type: "inPractice",
      body: "Most users start in Default mode and gradually move to auto-accept edits as they build trust. Plan mode is great for large changes — ask Claude to plan first, review the plan, then switch modes to execute. Auto mode is a research preview for experienced users who want maximum speed on well-understood tasks.",
    },
  ],

  quiz: [
    {
      id: "q1",
      type: "multiple-choice",
      question: "How do you cycle through permission modes during a session?",
      options: [
        "Type /mode",
        "Press Shift+Tab",
        "Edit the config file",
        "Restart Claude Code",
      ],
      correctAnswer: 1,
      explanation:
        "Press Shift+Tab during a session to cycle through the available permission modes.",
    },
    {
      id: "q2",
      type: "multiple-choice",
      question: "What does Default mode do?",
      options: [
        "Runs everything without asking",
        "Only reads files, never edits",
        "Asks before both edits and commands",
        "Only allows git commands",
      ],
      correctAnswer: 2,
      explanation:
        "Default mode asks for your approval before making edits and before running commands. It's the safest mode and gives you full control.",
    },
    {
      id: "q3",
      type: "multiple-choice",
      question: "What is Plan mode best for?",
      options: [
        "Running tests quickly",
        "Reviewing Claude's approach before it makes any changes",
        "Deploying to production",
        "Writing documentation",
      ],
      correctAnswer: 1,
      explanation:
        "Plan mode is read-only — Claude analyzes your code and creates a plan for your approval, but doesn't make any changes until you switch modes and tell it to proceed.",
    },
    {
      id: "q4",
      type: "multiple-choice",
      question:
        "What's the difference between Auto-accept edits and Auto mode?",
      options: [
        "They are the same thing",
        "Auto-accept auto-approves edits but still asks for commands; Auto mode minimizes all interruptions with background safety checks",
        "Auto-accept is faster; Auto mode is more accurate",
        "Auto-accept works offline; Auto mode requires internet",
      ],
      correctAnswer: 1,
      explanation:
        "Auto-accept edits lets Claude edit files freely but still asks before running commands. Auto mode goes further — it runs with minimal interruptions and background safety checks.",
    },
  ],
};
