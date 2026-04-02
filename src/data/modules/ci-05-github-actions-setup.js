export default {
  id: "ci-05-github-actions-setup",
  title: "GitHub Actions Setup",
  whyItMatters:
    "The official Claude Code GitHub Action lets you automate PR reviews, issue triage, and code maintenance directly in your GitHub workflows. Setting it up correctly is the first step to AI-powered CI/CD.",

  content: [
    {
      type: "text",
      body: "Claude Code has an official GitHub Action that brings its full capabilities into your CI/CD pipeline. You can trigger it on pull request events, issue comments, pushes, or schedules. It runs Claude against your repository with full codebase context, not just the diff.",
    },
    {
      type: "keyPoint",
      body: "To use the Claude Code GitHub Action, you need to add an `ANTHROPIC_API_KEY` secret to your repository and create a workflow YAML file. The action handles installation, authentication, and execution automatically.",
    },
    {
      type: "example",
      title: "Basic GitHub Actions setup",
      code: '# .github/workflows/claude-review.yml\nname: Claude Code Review\non:\n  pull_request:\n    types: [opened, synchronize]\n  issue_comment:\n    types: [created]\n\njobs:\n  review:\n    runs-on: ubuntu-latest\n    permissions:\n      contents: read\n      pull-requests: write\n      issues: write\n    steps:\n      - uses: actions/checkout@v4\n        with:\n          fetch-depth: 0\n      - uses: anthropics/claude-code-action@v1\n        with:\n          anthropic_api_key: ${{ secrets.ANTHROPIC_API_KEY }}\n          prompt: "Review this PR for bugs, security issues, and style."',
      explanation:
        "This workflow triggers on new PRs and PR updates. It checks out the full repo history (fetch-depth: 0) so Claude has complete context, then runs a review with the specified prompt. The permissions block lets Claude post review comments.",
    },
    {
      type: "inPractice",
      body: "Most teams start with automated PR reviews on open/synchronize events. The action posts its findings as PR comments, so the review appears inline just like a human reviewer's feedback. You can customize the prompt to focus on what matters to your team — security, performance, style, or all of the above.",
    },
    {
      type: "tip",
      body: "Always use `fetch-depth: 0` in the checkout step. Claude benefits from full git history to understand the context of changes. Without it, Claude only sees the latest commit.",
    },
  ],

  quiz: [
    {
      id: "q1",
      type: "multiple-choice",
      question: "What secret is required for the Claude Code GitHub Action?",
      options: [
        "GITHUB_TOKEN",
        "CLAUDE_SECRET_KEY",
        "ANTHROPIC_API_KEY",
        "OPENAI_API_KEY",
      ],
      correctAnswer: 2,
      explanation:
        "The Claude Code GitHub Action requires an `ANTHROPIC_API_KEY` secret to authenticate with the Anthropic API.",
    },
    {
      id: "q2",
      type: "multiple-choice",
      question: "Why should you use `fetch-depth: 0` in the checkout step?",
      options: [
        "It's required for the action to install",
        "It gives Claude full git history for better context",
        "It speeds up the checkout",
        "It prevents merge conflicts",
      ],
      correctAnswer: 1,
      explanation:
        "Using `fetch-depth: 0` checks out the full git history, giving Claude complete context about the codebase and changes rather than just the latest commit.",
    },
    {
      id: "q3",
      type: "multiple-choice",
      question: "On which events can you trigger the Claude Code GitHub Action?",
      options: [
        "Only on push events",
        "Only on pull request events",
        "Pull requests, issue comments, pushes, schedules, and more",
        "Only on manual triggers",
      ],
      correctAnswer: 2,
      explanation:
        "The Claude Code GitHub Action can be triggered on any GitHub event — pull requests, issue comments, pushes, schedules, and more. You configure this in your workflow YAML.",
    },
    {
      id: "q4",
      type: "multiple-choice",
      question: "How does Claude post review feedback on PRs?",
      options: [
        "It sends an email to the PR author",
        "It creates a new branch with fixes",
        "It posts findings as PR comments",
        "It opens a new issue for each finding",
      ],
      correctAnswer: 2,
      explanation:
        "The action posts Claude's review findings as PR comments, appearing inline just like feedback from a human reviewer.",
    },
  ],
};
