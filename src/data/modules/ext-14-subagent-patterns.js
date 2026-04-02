export default {
  id: "ext-14-subagent-patterns",
  title: "Subagent Patterns",
  whyItMatters:
    "Knowing common subagent patterns helps you get the most out of delegation. The right pattern can turn a 20-minute manual task into a 2-minute parallel operation.",

  content: [
    {
      type: "text",
      body: "Subagents shine in specific patterns. Understanding these patterns helps you know when to delegate and how to structure your requests for maximum efficiency. Here are the most valuable patterns teams use in practice.",
    },
    {
      type: "keyPoint",
      body: "Four key subagent patterns: **Isolate high-volume operations** (testing, linting, formatting), **Parallel research** (search multiple areas simultaneously), **Chain for complex workflows** (one agent's output feeds the next), and **Specialist delegation** (route tasks to purpose-built agents).",
    },
    {
      type: "example",
      title: "Parallel research pattern",
      code: "# You ask: \"How does our app handle errors across all layers?\"\n\n# Claude spawns multiple Explore subagents in parallel:\n# Agent 1 → searches frontend error boundaries\n# Agent 2 → searches API error middleware  \n# Agent 3 → searches database error handling\n# Agent 4 → searches logging and monitoring\n\n# All four run simultaneously\n# Each returns findings to your main conversation\n# Claude synthesizes a comprehensive answer",
      explanation:
        "Instead of searching sequentially (which fills your context), Claude fans out to multiple subagents. Each searches one area in parallel, and Claude combines the results. This is both faster and keeps your context cleaner.",
    },
    {
      type: "example",
      title: "Specialist delegation pattern",
      code: "# Custom agents for different roles:\n# .claude/agents/debugger.md — focused on diagnosing issues\n# .claude/agents/data-scientist.md — focused on data analysis  \n# .claude/agents/security-auditor.md — focused on vulnerabilities\n\n# When you say: \"Review this PR for security issues\"\n# Claude delegates to the security-auditor agent\n# which has specific instructions for finding vulnerabilities",
      explanation:
        "Specialist agents carry domain-specific instructions and constraints. A security auditor knows what to look for (SQL injection, XSS, auth bypasses) and doesn't waste time on style issues.",
    },
    {
      type: "inPractice",
      body: "The isolation pattern is especially useful for testing. Running a full test suite fills the context with output. A subagent runs the tests, processes the results, and returns only what's relevant: \"3 tests failed in auth.test.ts — here are the failures and likely causes.\"",
    },
  ],

  quiz: [
    {
      id: "q1",
      type: "multiple-choice",
      question: "What is the 'parallel research' subagent pattern?",
      options: [
        "Running the same search twice to verify results",
        "Spawning multiple subagents to search different areas simultaneously",
        "Using a single agent that searches faster",
        "Reading all files in the project at once",
      ],
      correctAnswer: 1,
      explanation:
        "Parallel research spawns multiple subagents, each searching a different area of the codebase simultaneously. This is faster than sequential searching and keeps the main context clean.",
    },
    {
      id: "q2",
      type: "multiple-choice",
      question: "Why is the isolation pattern useful for testing?",
      options: [
        "Tests run faster in a subagent",
        "Test output stays in the subagent's context instead of bloating your main conversation",
        "Subagents can fix failing tests automatically",
        "Tests require a special testing model",
      ],
      correctAnswer: 1,
      explanation:
        "Test output can be very verbose. Running tests in a subagent keeps all that output in the subagent's context, and only the relevant findings (failures, errors) come back to your conversation.",
    },
    {
      id: "q3",
      type: "multiple-choice",
      question: "What is the specialist delegation pattern?",
      options: [
        "Using only the Explore subagent for everything",
        "Routing tasks to purpose-built agents with domain-specific instructions",
        "Letting Claude choose which model to use",
        "Running multiple copies of the same agent",
      ],
      correctAnswer: 1,
      explanation:
        "Specialist delegation routes tasks to custom agents designed for specific roles — like a security auditor, data analyst, or code reviewer — each with tailored instructions and tool access.",
    },
  ],
};
