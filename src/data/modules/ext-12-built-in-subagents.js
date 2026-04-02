export default {
  id: "ext-12-built-in-subagents",
  title: "Built-in Subagents",
  whyItMatters:
    "Understanding the three built-in subagent types helps you know what Claude can delegate automatically and when to request a specific type. Each one is optimized for different kinds of tasks.",

  content: [
    {
      type: "text",
      body: "Claude Code includes three built-in subagent types, each designed for a specific class of work. They differ in which model they use, what tools they have access to, and whether they can modify files. Knowing these differences helps you understand Claude's delegation choices.",
    },
    {
      type: "keyPoint",
      body: "The three built-in subagents: **Explore** (fast, read-only codebase search using Haiku), **Plan** (read-only design and architecture using your current model), and **General-purpose** (all tools including write access, for complex delegated tasks using your current model).",
    },
    {
      type: "example",
      title: "When each subagent is used",
      code: "# Explore subagent (Haiku model, read-only)\n# → \"Find all API endpoints in this project\"\n# → \"Where is the authentication middleware defined?\"\n# → Quick codebase searches and lookups\n\n# Plan subagent (your model, read-only)\n# → \"Design an approach for adding OAuth support\"\n# → \"What's the best way to refactor the data layer?\"\n# → Architecture discussions and implementation plans\n\n# General-purpose subagent (your model, all tools)\n# → \"Fix the failing test in auth.test.ts\"\n# → \"Update all imports after the rename\"\n# → Complex tasks that require reading AND writing",
      explanation:
        "Explore is the fastest and cheapest — great for search. Plan gives thoughtful analysis without risk of changes. General-purpose can do everything but uses more resources.",
    },
    {
      type: "inPractice",
      body: "Claude chooses which subagent to use based on the task. A search query gets Explore. A \"how should I...\" question might get Plan. A \"fix this\" request that requires changes gets General-purpose. You can also specify: \"Use an Explore agent to find all the database queries.\"",
    },
    {
      type: "tip",
      body: "The Explore subagent uses the Haiku model, which is significantly faster and cheaper than Opus or Sonnet. For simple lookups and searches, this makes exploration nearly instant compared to using the main conversation.",
    },
  ],

  quiz: [
    {
      id: "q1",
      type: "multiple-choice",
      question: "Which built-in subagent uses the Haiku model for speed?",
      options: ["Plan", "General-purpose", "Explore", "All of them"],
      correctAnswer: 2,
      explanation:
        "The Explore subagent uses the Haiku model, making it fast and efficient for codebase searches and lookups. The other subagents use your current model (typically Opus or Sonnet).",
    },
    {
      id: "q2",
      type: "multiple-choice",
      question: "Which subagent can modify files?",
      options: [
        "Explore",
        "Plan",
        "General-purpose",
        "All subagents can modify files",
      ],
      correctAnswer: 2,
      explanation:
        "Only the General-purpose subagent has write access (Edit, Write, Bash tools). Explore and Plan are read-only — they can search and analyze but not change anything.",
    },
    {
      id: "q3",
      type: "multiple-choice",
      question: "What is the Plan subagent best suited for?",
      options: [
        "Quick file searches",
        "Designing implementation approaches and architecture",
        "Running tests and fixing bugs",
        "Installing MCP servers",
      ],
      correctAnswer: 1,
      explanation:
        "The Plan subagent is designed for read-only design and architecture work. It can read code and think through approaches, but it can't make changes — making it safe for exploration and planning.",
    },
    {
      id: "q4",
      type: "true-false",
      question:
        "Claude always asks permission before delegating to a subagent.",
      options: ["True", "False"],
      correctAnswer: 1,
      explanation:
        "Claude automatically delegates to subagents when it determines a task would benefit from one. It doesn't ask for permission first — this is part of its normal operation, like choosing which tool to use.",
    },
  ],
};
