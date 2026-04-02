export default {
  id: "cfg-06-built-in-commands",
  title: "Built-in Commands",
  whyItMatters:
    "Built-in slash commands give you quick control over your Claude Code session — from clearing context to checking costs — without leaving the conversation.",

  content: [
    {
      type: "text",
      body: "Claude Code has a set of built-in commands you can use during a session by typing a forward slash followed by the command name. These commands help you manage your conversation, check status, switch models, and more. Type `/help` at any time to see the full list.",
    },
    {
      type: "keyPoint",
      body: "The most commonly used commands are: **/help** (show all commands), **/clear** (clear conversation history), **/compact** (compress context with an optional focus topic), **/context** (see what's consuming context space), **/model** (switch models mid-session), **/config** (edit settings), **/cost** (see token usage and spend), and **/status** (show current configuration).",
    },
    {
      type: "example",
      title: "Example: Managing context during a long session",
      code: "/compact focus on the authentication refactor\n\n# Check what's using context\n/context\n\n# See how much you've spent\n/cost",
      explanation:
        "The /compact command compresses your conversation history while keeping key details. Adding a focus topic tells Claude what to prioritize keeping. /context shows what's taking up space, and /cost shows token usage.",
    },
    {
      type: "example",
      title: "Example: Switching models mid-session",
      code: "/model opus\n\n# Or switch to a faster model for simple tasks\n/model haiku",
      explanation:
        "You can switch models at any point without starting a new session. Use a more powerful model for complex reasoning, then switch to a faster one for straightforward tasks.",
    },
    {
      type: "tip",
      body: "Use /compact proactively during long sessions — don't wait until you hit context limits. Running it periodically keeps your session responsive and helps Claude stay focused on what matters.",
    },
  ],

  quiz: [
    {
      id: "q1",
      type: "multiple-choice",
      question: "Which command shows all available slash commands?",
      options: ["/list", "/commands", "/help", "/menu"],
      correctAnswer: 2,
      explanation:
        "The /help command displays all available slash commands and their descriptions.",
    },
    {
      id: "q2",
      type: "multiple-choice",
      question: "What does the /compact command do?",
      options: [
        "Minimizes the terminal window",
        "Compresses conversation context with an optional focus topic",
        "Deletes all files",
        "Compresses project files",
      ],
      correctAnswer: 1,
      explanation:
        "The /compact command compresses your conversation history to free up context space. You can add a focus topic to tell Claude what to prioritize keeping.",
    },
    {
      id: "q3",
      type: "multiple-choice",
      question: "Which command shows your token usage and spend?",
      options: ["/tokens", "/usage", "/cost", "/billing"],
      correctAnswer: 2,
      explanation:
        "The /cost command shows how many tokens you've used and how much the session has cost so far.",
    },
    {
      id: "q4",
      type: "true-false",
      question:
        "You can switch AI models during a session without starting over.",
      options: ["True", "False"],
      correctAnswer: 0,
      explanation:
        "Yes — the /model command lets you switch models mid-session while keeping your conversation history.",
    },
    {
      id: "q5",
      type: "multiple-choice",
      question: "What does the /status command show?",
      options: [
        "Git status",
        "System resource usage",
        "Current Claude Code configuration",
        "Network connection status",
      ],
      correctAnswer: 2,
      explanation:
        "The /status command shows your current Claude Code configuration — including the active model, permission mode, and other settings.",
    },
  ],
};
