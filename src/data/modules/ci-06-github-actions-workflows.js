export default {
  id: "ci-06-github-actions-workflows",
  title: "GitHub Actions Workflows",
  whyItMatters:
    "Knowing the right workflow patterns lets you set up Claude to automatically review PRs, respond to issue comments, and run scheduled maintenance — all without manual intervention.",

  content: [
    {
      type: "text",
      body: "The Claude Code GitHub Action is flexible enough to handle many automation patterns. The most common are: auto-reviewing PRs when they're opened, responding to issue or PR comments that mention @claude, and running scheduled tasks like weekly dependency audits or code health checks.",
    },
    {
      type: "example",
      title: "Auto-review PRs on open",
      code: `# .github/workflows/claude-pr-review.yml
name: Auto Review PRs
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
            Review this PR. Focus on:
            - Logic errors and edge cases
            - Security vulnerabilities
            - Performance concerns
            Post your findings as specific, actionable suggestions.`,
      explanation:
        "This workflow triggers automatically when a PR is opened or updated. Claude reviews the full diff with codebase context and posts suggestions as PR comments.",
    },
    {
      type: "example",
      title: "Respond to @claude mentions",
      code: `# .github/workflows/claude-respond.yml
name: Claude Comment Response
on:
  issue_comment:
    types: [created]

jobs:
  respond:
    if: contains(github.event.comment.body, '@claude')
    runs-on: ubuntu-latest
    permissions:
      contents: read
      pull-requests: write
      issues: write
    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 0
      - uses: anthropics/claude-code-action@v1
        with:
          anthropic_api_key: \${{ secrets.ANTHROPIC_API_KEY }}`,
      explanation:
        "When someone comments '@claude explain this function' on a PR or issue, this workflow kicks in and Claude responds with an answer based on the codebase.",
    },
    {
      type: "inPractice",
      body: "Teams often combine all three patterns: auto-review on PR open, @claude for ad-hoc questions, and a weekly schedule for maintenance tasks. Custom prompts let you tailor Claude's behavior — some teams focus reviews on security, others on performance or style consistency.",
    },
    {
      type: "tip",
      body: "Use the `if:` conditional to filter events. For example, you might only run reviews on PRs that touch certain directories, or only respond to comments from team members.",
    },
  ],

  quiz: [
    {
      id: "q1",
      type: "multiple-choice",
      question: "How do you trigger Claude when someone mentions @claude in a comment?",
      options: [
        "Use the `push` event",
        "Use `issue_comment` event with a `contains()` condition",
        "Claude automatically detects mentions",
        "Use the `mention` event type",
      ],
      correctAnswer: 1,
      explanation:
        "You use the `issue_comment` event with an `if: contains(github.event.comment.body, '@claude')` condition to trigger only when someone mentions @claude.",
    },
    {
      id: "q2",
      type: "multiple-choice",
      question: "Which PR event types should you trigger on for auto-review?",
      options: [
        "Only `opened`",
        "`opened` and `synchronize`",
        "Only `closed`",
        "`merged` and `approved`",
      ],
      correctAnswer: 1,
      explanation:
        "Triggering on `opened` and `synchronize` means Claude reviews the PR when it's first created and again whenever new commits are pushed to it.",
    },
    {
      id: "q3",
      type: "multiple-choice",
      question: "How can you customize what Claude focuses on during PR review?",
      options: [
        "You can't — it always does a general review",
        "By modifying the `prompt` field in the workflow",
        "By changing the GitHub Action version",
        "By setting environment variables",
      ],
      correctAnswer: 1,
      explanation:
        "The `prompt` field in the workflow configuration lets you customize exactly what Claude focuses on — security, performance, style, or anything specific to your team.",
    },
  ],
};
