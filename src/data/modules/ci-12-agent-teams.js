export default {
  id: "ci-12-agent-teams",
  title: "Agent Teams",
  whyItMatters:
    "For large-scale work that spans many files, a single Claude instance can become a bottleneck. Agent teams coordinate multiple Claude Code instances to divide, conquer, and merge work in parallel.",

  content: [
    {
      type: "text",
      body: "Agent teams let you coordinate multiple Claude Code instances working on the same codebase. A lead agent breaks the task into subtasks, assigns them to worker agents, and merges the results. Each worker operates independently with its own context, making this approach ideal for large refactors, migrations, and multi-file changes.",
    },
    {
      type: "keyPoint",
      body: "In an agent team, a lead agent orchestrates the work: it divides the task into subtasks, assigns each to a separate Claude instance, monitors progress through inter-agent messaging, and merges the results. Workers can operate in parallel across different files or modules.",
    },
    {
      type: "example",
      title: "Agent team workflow",
      code: `# Conceptual flow of an agent team:

# 1. Lead agent receives the task
"Migrate all API endpoints from Express to Fastify"

# 2. Lead agent plans and distributes subtasks
→ Worker A: "Migrate /users endpoints in src/routes/users.js"
→ Worker B: "Migrate /products endpoints in src/routes/products.js"
→ Worker C: "Update middleware in src/middleware/*.js"
→ Worker D: "Update tests in tests/*.test.js"

# 3. Workers execute in parallel
# Each worker has its own context and works independently

# 4. Lead agent collects results and merges
# Resolves conflicts, ensures consistency, runs final checks

# 5. Lead agent reports the combined result`,
      explanation:
        "The lead agent acts as a project manager — it understands the full scope, divides work sensibly, and ensures the pieces fit together. Workers focus on their specific subtask without needing to understand the whole picture.",
    },
    {
      type: "inPractice",
      body: "Agent teams are most valuable for large-scale tasks: migrating a codebase to a new framework, applying a pattern change across hundreds of files, or parallelizing a comprehensive code review across different modules. For smaller tasks, a single Claude instance is simpler and usually sufficient.",
    },
    {
      type: "tip",
      body: "Start with single-agent workflows and only move to agent teams when you hit a task that's genuinely too large for one instance. Most tasks — even substantial ones — are better handled by a single agent with good context.",
    },
  ],

  quiz: [
    {
      id: "q1",
      type: "multiple-choice",
      question: "What does the lead agent do in an agent team?",
      options: [
        "It writes all the code itself",
        "It divides tasks, assigns them to workers, and merges results",
        "It only runs tests",
        "It manages API keys",
      ],
      correctAnswer: 1,
      explanation:
        "The lead agent orchestrates the work: it divides the task into subtasks, assigns each to a worker agent, monitors progress, and merges the results into a coherent whole.",
    },
    {
      id: "q2",
      type: "multiple-choice",
      question: "When are agent teams most valuable?",
      options: [
        "For simple one-file changes",
        "For large-scale work spanning many files or modules",
        "Only for writing tests",
        "Only for code review",
      ],
      correctAnswer: 1,
      explanation:
        "Agent teams shine for large-scale tasks like framework migrations, pattern changes across hundreds of files, or parallelized reviews across different modules.",
    },
    {
      id: "q3",
      type: "multiple-choice",
      question: "How do workers in an agent team communicate?",
      options: [
        "They share a single context window",
        "Through inter-agent messaging coordinated by the lead",
        "They can't communicate at all",
        "Through shared files only",
      ],
      correctAnswer: 1,
      explanation:
        "Workers communicate through inter-agent messaging, coordinated by the lead agent. Each worker has its own context but can share status and results through the messaging system.",
    },
  ],
};
