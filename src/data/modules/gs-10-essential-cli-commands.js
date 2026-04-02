export default {
  id: "gs-10-essential-cli-commands",
  title: "Essential CLI Commands",
  whyItMatters:
    "Knowing the key commands lets you navigate Claude Code efficiently and get more done in less time.",

  content: [
    {
      type: "text",
      body: "Claude Code has a small set of essential commands that cover most of what you'll need day-to-day. Here are the ones worth memorizing:",
    },
    {
      type: "example",
      title: "Starting Sessions",
      code: "# Start interactive mode\nclaude\n\n# Run a one-time task (non-interactive)\nclaude \"add error handling to the API routes\"\n\n# Print mode — get an answer without starting a session\nclaude -p \"what framework does this project use?\"\n\n# Continue your last conversation\nclaude -c\n\n# Resume a specific past session\nclaude -r",
      explanation:
        "These are the different ways to start Claude Code. Interactive mode is for ongoing work, one-time tasks are for quick changes, and print mode is for quick questions.",
    },
    {
      type: "example",
      title: "In-Session Commands",
      code: "# Clear the conversation and start fresh\n/clear\n\n# Get help and see available commands\n/help\n\n# Exit Claude Code\nexit",
      explanation:
        "Use these commands during an interactive session. /clear is useful when you want to switch topics without leftover context.",
    },
    {
      type: "keyPoint",
      body: "The most important distinction: `claude` starts an interactive session, `claude \"task\"` runs a one-time task, and `claude -p \"query\"` prints an answer without entering interactive mode.",
    },
    {
      type: "inPractice",
      body: "You'll use `claude` for most work, `claude -c` to pick up where you left off, and `claude -p` for quick questions in scripts or when you just need a fast answer.",
    },
  ],

  quiz: [
    {
      id: "q1",
      type: "multiple-choice",
      question: "Which command starts an interactive Claude Code session?",
      options: ["claude start", "claude -i", "claude", "claude --interactive"],
      correctAnswer: 2,
      explanation:
        "Simply running `claude` with no arguments starts an interactive session.",
    },
    {
      id: "q2",
      type: "multiple-choice",
      question:
        "How do you run a one-time task without entering interactive mode?",
      options: [
        "claude -p \"task\"",
        "claude \"task\"",
        "claude --once \"task\"",
        "claude run \"task\"",
      ],
      correctAnswer: 1,
      explanation:
        "Wrapping your task in quotes after `claude` runs it as a one-time task. Claude Code completes the task and exits.",
    },
    {
      id: "q3",
      type: "multiple-choice",
      question: "What does `claude -c` do?",
      options: [
        "Creates a new project",
        "Clears the conversation",
        "Continues your last conversation",
        "Configures settings",
      ],
      correctAnswer: 2,
      explanation:
        "The `-c` flag continues your most recent conversation, so you can pick up right where you left off.",
    },
    {
      id: "q4",
      type: "multiple-choice",
      question: "What does `claude -p` do?",
      options: [
        "Opens the project settings",
        "Prints an answer without entering interactive mode",
        "Pauses the current session",
        "Pushes code to git",
      ],
      correctAnswer: 1,
      explanation:
        "Print mode (`-p`) answers your question and outputs the result directly — great for quick lookups or use in scripts.",
    },
    {
      id: "q5",
      type: "multiple-choice",
      question:
        "Which in-session command clears the conversation to start fresh?",
      options: ["/reset", "/new", "/clear", "/restart"],
      correctAnswer: 2,
      explanation:
        "The `/clear` command clears the conversation history, letting you start fresh without leftover context from previous topics.",
    },
  ],
};
