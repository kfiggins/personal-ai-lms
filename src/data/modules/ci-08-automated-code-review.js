export default {
  id: "ci-08-automated-code-review",
  title: "Automated Code Review",
  whyItMatters:
    "Claude doesn't just review diffs — it analyzes the full codebase context to catch logic errors, security vulnerabilities, and regressions that diff-only tools miss.",

  content: [
    {
      type: "text",
      body: "Most automated review tools only look at the lines that changed. Claude Code is different: it has access to the entire repository, so it can understand how a change affects the rest of the codebase. It catches issues like broken call sites, inconsistent error handling, and security vulnerabilities that only become apparent in context.",
    },
    {
      type: "keyPoint",
      body: "Claude's automated code review is context-aware — it analyzes the full codebase, not just the diff. This lets it catch logic errors, security vulnerabilities, and regressions that surface-level linting tools miss.",
    },
    {
      type: "example",
      title: "Multi-agent PR review setup",
      code: `# .github/workflows/deep-review.yml
name: Deep Code Review
on:
  pull_request:
    types: [opened, synchronize]

jobs:
  review:
    runs-on: ubuntu-latest
    permissions:
      contents: read
      pull-requests: write
    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 0
      - uses: anthropics/claude-code-action@v1
        with:
          anthropic_api_key: \${{ secrets.ANTHROPIC_API_KEY }}
          prompt: |
            Perform a thorough code review of this PR:

            1. Check for logic errors and edge cases
            2. Identify security vulnerabilities (SQL injection,
               XSS, auth bypasses, etc.)
            3. Look for potential regressions — does this change
               break existing behavior?
            4. Evaluate error handling and failure modes
            5. Note any performance concerns

            For each issue, explain WHY it's a problem and
            suggest a specific fix. Be concise.`,
      explanation:
        "This setup asks Claude to perform a structured, thorough review. Because it has the full repo checked out (fetch-depth: 0), it can trace function calls, check type consistency, and verify that the change doesn't break existing code.",
    },
    {
      type: "inPractice",
      body: "Teams report that Claude catches real bugs that human reviewers miss — especially in large PRs where it's hard to hold the entire context in your head. It's particularly strong at finding security issues, inconsistent error handling, and subtle regressions. Use it as a first-pass reviewer to catch issues before human review.",
    },
    {
      type: "tip",
      body: "Don't replace human review — augment it. Claude is great at finding technical issues, but humans are better at evaluating design decisions, naming choices, and whether the code solves the right problem. Use both.",
    },
  ],

  quiz: [
    {
      id: "q1",
      type: "multiple-choice",
      question: "What makes Claude's code review different from typical linting tools?",
      options: [
        "It only checks formatting",
        "It analyzes the full codebase context, not just the diff",
        "It requires manual configuration for each language",
        "It only works with Python code",
      ],
      correctAnswer: 1,
      explanation:
        "Claude analyzes the full codebase, not just the changed lines. This lets it catch issues like broken call sites and regressions that diff-only tools miss.",
    },
    {
      id: "q2",
      type: "multiple-choice",
      question: "What types of issues can Claude catch in automated review?",
      options: [
        "Only syntax errors",
        "Only formatting issues",
        "Logic errors, security vulnerabilities, and regressions",
        "Only issues in test files",
      ],
      correctAnswer: 2,
      explanation:
        "Claude catches a wide range of issues including logic errors, security vulnerabilities, potential regressions, edge cases, and inconsistent error handling.",
    },
    {
      id: "q3",
      type: "multiple-choice",
      question: "Should Claude replace human code review?",
      options: [
        "Yes, it catches everything",
        "No — it augments human review, not replaces it",
        "Only for small PRs",
        "Only for security reviews",
      ],
      correctAnswer: 1,
      explanation:
        "Claude augments human review but doesn't replace it. It's great at finding technical issues, while humans are better at evaluating design decisions and whether the code solves the right problem.",
    },
    {
      id: "q4",
      type: "multiple-choice",
      question: "Why is `fetch-depth: 0` important for code review?",
      options: [
        "It speeds up the checkout",
        "It gives Claude the full git history and codebase context",
        "It's required by the GitHub Action",
        "It reduces CI costs",
      ],
      correctAnswer: 1,
      explanation:
        "Using `fetch-depth: 0` gives Claude access to the full repository history and codebase, enabling it to understand how changes affect the rest of the code.",
    },
  ],
};
