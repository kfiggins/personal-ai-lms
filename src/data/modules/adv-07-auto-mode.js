export default {
  id: "adv-07-auto-mode",
  title: "Auto Mode",
  whyItMatters:
    "Auto mode uses a background classifier to evaluate tool calls automatically, replacing manual permission prompts. For experienced users who understand the risks, it removes friction and lets Claude work more fluidly — but it requires careful configuration.",

  content: [
    {
      type: "text",
      body: "In standard operation, Claude Code asks for your permission before running potentially impactful actions — shell commands, file edits, network requests. Auto mode replaces this manual approval with a background classifier that evaluates each tool call and decides whether to allow it.\n\nThe classifier runs alongside Claude and makes instant allow/deny decisions based on your configuration, so Claude can proceed without waiting for human input on routine actions.",
    },
    {
      type: "keyPoint",
      body: "The classifier produces three possible outcomes for each tool call:\n\n- **allow**: The action is safe to proceed. Claude runs it immediately.\n- **deny**: The action is blocked. Claude is told it can't perform this action.\n- **soft_deny**: The action is questionable. Claude receives a warning and must decide whether to proceed, explain, or try an alternative approach.",
    },
    {
      type: "text",
      body: "You configure auto mode by defining trusted infrastructure rules that tell the classifier what to allow. For example, you might allow all file reads, allow writes within your project directory, and allow specific shell commands like `npm test` and `git status` — while blocking anything that touches system files or makes network requests.\n\nThis is a research preview feature that's still evolving. The classifier's accuracy improves over time, but it's important to start with conservative rules and expand them as you build confidence.",
    },
    {
      type: "tip",
      body: "Auto mode is most valuable in CI/CD environments and automated workflows where there's no human available to approve actions. For interactive development, many users prefer the standard permission flow since it provides a natural checkpoint for reviewing Claude's plan.",
    },
  ],

  quiz: [
    {
      id: "q1",
      type: "multiple-choice",
      question: "What does auto mode's background classifier do?",
      options: [
        "Automatically generates code without user input",
        "Evaluates tool calls and makes allow/deny decisions without manual permission prompts",
        "Speeds up Claude's response time",
        "Automatically commits code changes",
      ],
      correctAnswer: 1,
      explanation:
        "The background classifier evaluates each tool call against your configuration and makes instant allow/deny decisions, replacing manual permission prompts.",
    },
    {
      id: "q2",
      type: "multiple-choice",
      question: "What happens when the classifier returns 'soft_deny'?",
      options: [
        "The action is permanently blocked",
        "Claude receives a warning and must decide whether to proceed or try an alternative",
        "The user is prompted for manual approval",
        "The action is retried automatically",
      ],
      correctAnswer: 1,
      explanation:
        "A soft_deny gives Claude a warning about the action. Claude then decides whether to proceed, explain the situation, or try an alternative approach.",
    },
    {
      id: "q3",
      type: "multiple-choice",
      question: "Where is auto mode most valuable?",
      options: [
        "Interactive pair programming sessions",
        "Learning Claude Code for the first time",
        "CI/CD environments and automated workflows where no human is available",
        "Quick one-off questions about code",
      ],
      correctAnswer: 2,
      explanation:
        "Auto mode shines in CI/CD and automated workflows where there's no human to approve actions. For interactive use, standard permissions provide useful review checkpoints.",
    },
  ],
};
