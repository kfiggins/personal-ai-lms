export default {
  id: "sec-09-managing-costs",
  title: "Managing Costs",
  whyItMatters:
    "Claude Code usage costs real money. Knowing the typical spend, how to monitor it, and how to set limits for your team prevents surprise bills and keeps AI-assisted development sustainable.",

  content: [
    {
      type: "text",
      body: "Claude Code costs vary based on how much you use it and which model you select. On average, developers spend about **$6 per day**, and fewer than 10% of users exceed **$12 per day**. These costs come from API token usage — every prompt you send and response you receive consumes tokens.",
    },
    {
      type: "keyPoint",
      body: "Key cost management strategies:\n\n- Use the `/cost` command during a session to check your current usage\n- Set **workspace spend limits** in team settings to cap spending per user or per team\n- Choose **Sonnet for most tasks** (faster and cheaper) and reserve **Opus for complex reasoning** tasks that need deeper analysis\n- Be mindful of context window usage — large contexts consume more tokens per interaction",
    },
    {
      type: "example",
      title: "Checking and managing costs",
      code: "# Check current session cost\n/cost\n\n# Output:\n# Session tokens: 45,230 input / 12,450 output\n# Estimated cost: $0.42\n# Model: claude-sonnet-4-6\n\n# Switch to Sonnet for routine tasks\n/model sonnet\n\n# Switch to Opus for complex reasoning\n/model opus",
      explanation:
        "The /cost command shows your token usage and estimated cost for the current session. Switching between models lets you optimize cost vs. capability for different types of work.",
    },
    {
      type: "inPractice",
      body: "For team leads and engineering managers: set workspace spend limits to prevent runaway costs. Most teams find that setting a daily limit of $15-20 per developer covers normal usage with headroom. Monitor aggregate spending weekly and adjust limits based on actual usage patterns.",
    },
    {
      type: "tip",
      body: "The biggest cost driver is usually context size, not the number of sessions. Use `/clear` between unrelated tasks and `/compact` to summarize long conversations. A single session with a massive context window costs more than several short, focused sessions.",
    },
  ],

  quiz: [
    {
      id: "q1",
      type: "multiple-choice",
      question: "What is the average daily cost per developer for Claude Code?",
      options: [
        "About $1/day",
        "About $6/day",
        "About $20/day",
        "About $50/day",
      ],
      correctAnswer: 1,
      explanation:
        "The average daily cost is about $6 per developer, with fewer than 10% of users exceeding $12 per day.",
    },
    {
      id: "q2",
      type: "multiple-choice",
      question: "Which command checks your current session's cost?",
      options: [
        "/usage",
        "/billing",
        "/cost",
        "/tokens",
      ],
      correctAnswer: 2,
      explanation:
        "The /cost command shows your token usage and estimated cost for the current session.",
    },
    {
      id: "q3",
      type: "multiple-choice",
      question: "When should you use Opus instead of Sonnet?",
      options: [
        "For all tasks — Opus is always better",
        "For complex reasoning tasks that need deeper analysis",
        "Only for writing documentation",
        "Never — Sonnet is always sufficient",
      ],
      correctAnswer: 1,
      explanation:
        "Opus is best reserved for complex reasoning tasks. Sonnet handles most routine tasks well and is faster and cheaper, making it the better default choice.",
    },
    {
      id: "q4",
      type: "multiple-choice",
      question: "What is the biggest cost driver in Claude Code?",
      options: [
        "Number of sessions started",
        "Number of files in the project",
        "Context window size",
        "Time spent in a session",
      ],
      correctAnswer: 2,
      explanation:
        "Context size is the biggest cost driver. Large contexts consume more tokens per interaction. Use /clear and /compact to manage context and keep costs down.",
    },
  ],
};
