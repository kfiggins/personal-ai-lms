export default {
  id: "cc-02-models-and-reasoning",
  title: "Models and Reasoning",
  whyItMatters:
    "Choosing the right model for your task helps you balance speed, cost, and reasoning depth.",

  content: [
    {
      type: "text",
      body: "Behind Claude Code sits a Claude language model that understands code in virtually any programming language. This model reads your code, reasons about what needs to change, and decides which tools to use. When the documentation says \"Claude chooses\" to do something, it means the model's reasoning led to that decision — not a hardcoded rule.",
    },
    {
      type: "keyPoint",
      body: "Multiple models are available: Sonnet is the default and handles most tasks well with a good balance of speed and capability. Opus is the most powerful model for complex reasoning tasks — use it when you need deeper analysis or when Sonnet struggles with a problem.",
    },
    {
      type: "example",
      title: "Switching models",
      code: "# During a session, use the slash command:\n/model sonnet\n/model opus\n\n# Or start Claude with a specific model:\nclaude --model opus",
      explanation:
        "Use /model to switch mid-session or --model to start with a specific model. Sonnet is great for everyday tasks; switch to Opus for complex refactoring, architecture decisions, or tricky bugs.",
    },
    {
      type: "inPractice",
      body: "Start with the default model (Sonnet) for most work. If you notice Claude struggling with a complex task — going in circles, missing nuances, or producing shallow solutions — try switching to Opus for that task. You can always switch back.",
    },
  ],

  quiz: [
    {
      id: "q1",
      type: "multiple-choice",
      question: "Which model is the default in Claude Code?",
      options: ["Opus", "Sonnet", "Haiku", "GPT-4"],
      correctAnswer: 1,
      explanation:
        "Sonnet is the default model, offering a good balance of speed and capability for most coding tasks.",
    },
    {
      id: "q2",
      type: "multiple-choice",
      question: "How do you switch models during a Claude Code session?",
      options: [
        "Restart Claude Code entirely",
        "Use the /model slash command",
        "Edit a config file",
        "You cannot switch models mid-session",
      ],
      correctAnswer: 1,
      explanation:
        "Use /model followed by the model name (e.g., /model opus) to switch models during a session. You can also use claude --model when starting.",
    },
    {
      id: "q3",
      type: "multiple-choice",
      question:
        "When the docs say 'Claude chooses' to read a file, what does that mean?",
      options: [
        "A hardcoded rule triggers the file read",
        "The user must approve the read first",
        "The model's reasoning decided that reading the file was the right action",
        "A random selection process picks the action",
      ],
      correctAnswer: 2,
      explanation:
        "When docs say 'Claude chooses,' it means the model reasoned about the situation and decided on that action. It's not a hardcoded rule — it's the model thinking about what would help accomplish your task.",
    },
  ],
};
