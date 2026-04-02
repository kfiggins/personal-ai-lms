export default {
  id: "cc-14-execution-environments",
  title: "Execution Environments",
  whyItMatters:
    "Claude Code runs in different environments — knowing which one you're in helps you understand what's possible.",

  content: [
    {
      type: "text",
      body: "Claude Code can run in three different environments, but the core experience — the agentic loop, tools, and capabilities — stays the same everywhere. The difference is where the code runs and how you access it.",
    },
    {
      type: "keyPoint",
      body: "The three environments are: Local (runs on your machine with full access to your files and tools — the default), Cloud (runs on Anthropic-managed VMs so you can offload tasks without tying up your machine), and Remote Control (runs on your machine but controlled from a browser, useful for accessing Claude Code from any device).",
    },
    {
      type: "example",
      title: "When to use each environment",
      code: "# Local (default):\n# You're at your dev machine, working directly in terminal\nclaude \"refactor the auth module\"\n\n# Cloud:\n# Offload a long task to a cloud VM\n# Your machine stays free while Claude works\n\n# Remote Control:\n# Access your local machine's Claude Code from a browser\n# Great for working from a tablet or a different computer",
      explanation:
        "Local is for day-to-day development. Cloud is for long-running tasks you want to offload. Remote Control lets you drive your local setup from anywhere.",
    },
    {
      type: "inPractice",
      body: "Most users work locally — it's the simplest setup and gives you full access to your environment. Cloud environments are useful for large tasks like full codebase refactors where you don't want to block your terminal. Remote Control bridges the gap when you need local access from a different device.",
    },
  ],

  quiz: [
    {
      id: "q1",
      type: "multiple-choice",
      question: "What is the default execution environment for Claude Code?",
      options: [
        "Cloud",
        "Remote Control",
        "Local — runs on your machine",
        "Docker container",
      ],
      correctAnswer: 2,
      explanation:
        "By default, Claude Code runs locally on your machine with full access to your files, terminal, and development tools.",
    },
    {
      id: "q2",
      type: "multiple-choice",
      question: "What is the Cloud environment for?",
      options: [
        "Hosting your production app",
        "Offloading tasks to Anthropic-managed VMs so your machine stays free",
        "Running Claude Code without an internet connection",
        "Sharing sessions with team members",
      ],
      correctAnswer: 1,
      explanation:
        "Cloud environments run on Anthropic-managed VMs. They're useful for long-running tasks where you don't want to tie up your local machine.",
    },
    {
      id: "q3",
      type: "true-false",
      question:
        "The agentic loop works differently depending on which environment you use.",
      options: ["True", "False"],
      correctAnswer: 1,
      explanation:
        "The core agentic loop — gather context, take action, verify results — works the same in all three environments. Only where the code runs and how you access it changes.",
    },
  ],
};
