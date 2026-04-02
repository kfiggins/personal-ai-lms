export default {
  id: "ci-07-gitlab-cicd",
  title: "GitLab CI/CD",
  whyItMatters:
    "If your team uses GitLab, you can integrate Claude Code into your CI/CD pipelines with similar capabilities to the GitHub Action — automated code reviews, issue handling, and more.",

  content: [
    {
      type: "text",
      body: "Claude Code works with GitLab CI/CD just as it does with GitHub Actions. You configure it in your `.gitlab-ci.yml` file, set up the API key as a CI/CD variable, and trigger it on merge request events, pushes, or schedules. The core capabilities — code review, issue triage, automated fixes — are the same.",
    },
    {
      type: "keyPoint",
      body: "To use Claude in GitLab CI/CD, install Claude Code in your pipeline, set `ANTHROPIC_API_KEY` as a CI/CD variable, and call `claude -p` in your job scripts. You can trigger jobs on merge requests, pushes, or schedules.",
    },
    {
      type: "example",
      title: "GitLab CI/CD configuration",
      code: `# .gitlab-ci.yml
claude-review:
  stage: review
  image: node:20
  rules:
    - if: $CI_PIPELINE_SOURCE == "merge_request_event"
  before_script:
    - npm install -g @anthropic-ai/claude-code
  script:
    - |
      git diff $CI_MERGE_REQUEST_DIFF_BASE_SHA..HEAD | \\
        claude -p "Review this merge request diff. \\
        Focus on bugs, security issues, and style." \\
        --output-format json \\
        --max-turns 10 \\
        --max-budget-usd 1.00
  variables:
    ANTHROPIC_API_KEY: $ANTHROPIC_API_KEY`,
      explanation:
        "This job runs on merge request events, installs Claude Code, and pipes the MR diff for review. The structured output can be parsed and posted back as MR comments using the GitLab API.",
    },
    {
      type: "inPractice",
      body: "GitLab teams typically set up Claude in the `review` stage of their pipeline. The diff is piped in via `git diff`, and Claude's output can be posted back to the merge request using GitLab's API or the `gl` CLI tool. Scheduled pipelines work for recurring tasks like weekly security audits.",
    },
    {
      type: "tip",
      body: "Store your `ANTHROPIC_API_KEY` as a masked, protected CI/CD variable in GitLab to keep it secure. Never hardcode API keys in your `.gitlab-ci.yml`.",
    },
  ],

  quiz: [
    {
      id: "q1",
      type: "multiple-choice",
      question: "Where do you configure Claude Code for GitLab CI/CD?",
      options: [
        "In a separate claude.yml file",
        "In .gitlab-ci.yml",
        "In the GitLab UI only",
        "In package.json",
      ],
      correctAnswer: 1,
      explanation:
        "Claude Code is configured as a regular CI/CD job in your `.gitlab-ci.yml` file, just like any other pipeline step.",
    },
    {
      id: "q2",
      type: "multiple-choice",
      question: "How should you store the API key in GitLab?",
      options: [
        "Hardcoded in .gitlab-ci.yml",
        "In a public environment variable",
        "As a masked, protected CI/CD variable",
        "In a committed .env file",
      ],
      correctAnswer: 2,
      explanation:
        "Store your `ANTHROPIC_API_KEY` as a masked, protected CI/CD variable in GitLab. This keeps it secure and hidden from pipeline logs.",
    },
    {
      id: "q3",
      type: "multiple-choice",
      question: "Which pipeline source triggers on merge requests in GitLab?",
      options: [
        'CI_PIPELINE_SOURCE == "push"',
        'CI_PIPELINE_SOURCE == "merge_request_event"',
        'CI_PIPELINE_SOURCE == "pull_request"',
        'CI_PIPELINE_SOURCE == "review"',
      ],
      correctAnswer: 1,
      explanation:
        'The rule `if: $CI_PIPELINE_SOURCE == "merge_request_event"` triggers the job specifically when a merge request is created or updated.',
    },
  ],
};
