export default {
  id: "cfg-08-model-configuration",
  title: "Model Configuration",
  whyItMatters:
    "Choosing the right model for the task at hand lets you balance speed, cost, and capability — and Claude Code makes it easy to switch between models at any time.",

  content: [
    {
      type: "text",
      body: "Claude Code supports multiple AI models, each with different strengths. You can set a default model in your settings, switch during a session with the /model command, or specify one at launch with the --model flag. Understanding model aliases helps you switch quickly.",
    },
    {
      type: "keyPoint",
      body: "Claude Code provides shorthand aliases for models: **sonnet** (Claude Sonnet 4.6 — fast and capable, great default), **opus** (Claude Opus 4.6 — most powerful, best for complex reasoning), and **haiku** (Claude Haiku 4.5 — fastest and cheapest, good for simple tasks). You can also define custom aliases in your settings.",
    },
    {
      type: "example",
      title: "Example: Setting and switching models",
      code: '# Set default in settings.json\n{\n  "env": {\n    "CLAUDE_MODEL": "claude-sonnet-4-6"\n  }\n}\n\n# Switch during a session\n/model opus\n\n# Set at launch\nclaude --model haiku\n\n# Custom alias in settings\n{\n  "modelAliases": {\n    "opusplan": "claude-opus-4-6"\n  }\n}',
      explanation:
        "You can set your default model in settings, override it at launch with --model, or switch mid-session with /model. Custom aliases let you create shortcuts like 'opusplan' for models you use in specific contexts.",
    },
    {
      type: "inPractice",
      body: "A common pattern is to use Sonnet as your default for everyday work, switch to Opus when you need deep reasoning (like debugging a tricky issue or planning architecture), and drop to Haiku for quick, straightforward tasks like formatting or simple lookups.",
    },
  ],

  quiz: [
    {
      id: "q1",
      type: "multiple-choice",
      question: "Which model alias refers to the most powerful Claude model?",
      options: ["sonnet", "opus", "haiku", "turbo"],
      correctAnswer: 1,
      explanation:
        "Opus is the alias for the most powerful model — Claude Opus 4.6. It's best for complex reasoning and difficult tasks.",
    },
    {
      id: "q2",
      type: "multiple-choice",
      question: "How do you switch models during an active session?",
      options: [
        "Restart Claude Code with a different flag",
        "Use the /model command",
        "Edit settings.json and reload",
        "You can't — models are locked per session",
      ],
      correctAnswer: 1,
      explanation:
        "The /model command lets you switch models mid-session without losing your conversation history.",
    },
    {
      id: "q3",
      type: "true-false",
      question: "You can create custom model aliases in your settings.",
      options: ["True", "False"],
      correctAnswer: 0,
      explanation:
        'Yes — the modelAliases key in settings lets you create custom shortcuts, like mapping "opusplan" to the full model ID.',
    },
    {
      id: "q4",
      type: "multiple-choice",
      question:
        "Which model would you typically choose for a quick, simple task?",
      options: ["Opus", "Sonnet", "Haiku", "It doesn't matter"],
      correctAnswer: 2,
      explanation:
        "Haiku is the fastest and cheapest model, making it ideal for quick, straightforward tasks where you don't need deep reasoning.",
    },
  ],
};
