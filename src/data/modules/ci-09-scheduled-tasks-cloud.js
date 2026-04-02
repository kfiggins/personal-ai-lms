export default {
  id: "ci-09-scheduled-tasks-cloud",
  title: "Scheduled Tasks (Cloud)",
  whyItMatters:
    "Cloud-based scheduled tasks run on Anthropic's infrastructure on a cron schedule — even when your computer is off. They're perfect for recurring automation like morning PR reviews and weekly dependency audits.",

  content: [
    {
      type: "text",
      body: "Claude Code supports scheduled tasks that run on Anthropic's cloud infrastructure. You define a prompt and a cron schedule, and Claude executes it automatically at the specified times. Since it runs in the cloud, your laptop can be closed — the task still fires.",
    },
    {
      type: "keyPoint",
      body: "Cloud scheduled tasks run on Anthropic infrastructure on a cron schedule. Create them from the web (claude.ai/code), the Desktop app, or the `/schedule` command in the CLI. They run even when your computer is off.",
    },
    {
      type: "example",
      title: "Setting up scheduled tasks",
      code: `# Create a scheduled task via the CLI
/schedule

# Or use the command directly:
# "Every weekday at 9am, review open PRs"
# Cron: 0 9 * * 1-5
# Prompt: Review all open PRs in the repo and post
#         a summary of what needs attention.

# "Every Monday, audit dependencies"
# Cron: 0 8 * * 1
# Prompt: Check for outdated or vulnerable dependencies.
#         Create an issue if any need updating.

# "Every Friday, generate a weekly summary"
# Cron: 0 17 * * 5
# Prompt: Summarize the week's commits, PRs merged,
#         and issues closed. Post to #engineering.`,
      explanation:
        "Each scheduled task has a cron expression and a prompt. Claude runs the prompt at the specified time with access to your repository. Results can be posted to PRs, issues, Slack, or saved to files.",
    },
    {
      type: "inPractice",
      body: "Common scheduled tasks include morning PR review summaries, weekly dependency audits, nightly code health checks, and automated changelog generation. Because they run in the cloud, they're reliable — no missed runs because someone's laptop was closed.",
    },
    {
      type: "tip",
      body: "Start with a daily PR review summary. It's immediately useful and gives your team visibility into what needs attention each morning without anyone having to manually check.",
    },
  ],

  quiz: [
    {
      id: "q1",
      type: "multiple-choice",
      question: "Where do cloud scheduled tasks run?",
      options: [
        "On your local machine",
        "On Anthropic's infrastructure",
        "On GitHub's servers",
        "In your browser only",
      ],
      correctAnswer: 1,
      explanation:
        "Cloud scheduled tasks run on Anthropic's infrastructure, so they execute reliably even when your computer is off.",
    },
    {
      id: "q2",
      type: "multiple-choice",
      question: "How can you create a cloud scheduled task?",
      options: [
        "Only through the web interface",
        "Only through the CLI",
        "From the web, Desktop app, or `/schedule` command",
        "Only by editing a config file",
      ],
      correctAnswer: 2,
      explanation:
        "You can create cloud scheduled tasks from multiple surfaces: the web interface (claude.ai/code), the Desktop app, or the `/schedule` command in the CLI.",
    },
    {
      id: "q3",
      type: "multiple-choice",
      question: "What format is used to define when a scheduled task runs?",
      options: [
        "Natural language only",
        "Cron expressions",
        "ISO 8601 timestamps",
        "Unix epoch seconds",
      ],
      correctAnswer: 1,
      explanation:
        "Scheduled tasks use cron expressions to define their schedule. For example, `0 9 * * 1-5` means every weekday at 9am.",
    },
    {
      id: "q4",
      type: "multiple-choice",
      question: "What's a good first scheduled task to set up?",
      options: [
        "A full codebase rewrite every hour",
        "A daily PR review summary",
        "Deleting old branches every minute",
        "Reformatting all code nightly",
      ],
      correctAnswer: 1,
      explanation:
        "A daily PR review summary is immediately useful — it gives your team visibility into what needs attention each morning without manual checks.",
    },
  ],
};
