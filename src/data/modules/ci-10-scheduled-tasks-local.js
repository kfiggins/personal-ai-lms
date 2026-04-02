export default {
  id: "ci-10-scheduled-tasks-local",
  title: "Scheduled Tasks (Local)",
  whyItMatters:
    "Local scheduled tasks run on your machine with direct access to your files and tools. The `/loop` command and Desktop app scheduler are great for polling, monitoring, and tasks that need your local environment.",

  content: [
    {
      type: "text",
      body: "Not all scheduled tasks need to run in the cloud. The `/loop` command repeats a prompt on an interval directly in your terminal, and the Desktop app has its own local scheduler. These are ideal when your task needs access to local files, running services, or tools installed on your machine.",
    },
    {
      type: "keyPoint",
      body: "The `/loop` command runs a prompt repeatedly on an interval (e.g., every 5 minutes). Desktop app scheduled tasks run on your machine on a cron schedule. Both have direct access to your local environment — files, services, databases, and CLI tools.",
    },
    {
      type: "example",
      title: "Local scheduling in action",
      code: `# Poll a service every 5 minutes
/loop 5m check if the dev server is responding on port 3000

# Monitor a log file every 10 minutes
/loop 10m check app.log for new errors since last check

# Default interval is 10 minutes
/loop summarize any new git commits on main

# Desktop app scheduled tasks (configured in app settings):
# - Run every hour: "check disk usage and warn if > 80%"
# - Run every 30 min: "look for TODO comments in staged files"`,
      explanation:
        "The `/loop` command is quick and ad-hoc — great for monitoring during a debugging session or keeping an eye on a deploy. Desktop app scheduled tasks are more persistent and survive app restarts.",
    },
    {
      type: "inPractice",
      body: "Developers use `/loop` during active work — monitoring a deploy, watching for test failures, or polling an API endpoint. Desktop app scheduled tasks are better for recurring local automation like checking for uncommitted changes, cleaning build artifacts, or running local security scans.",
    },
    {
      type: "tip",
      body: "Use `/loop` for temporary, ad-hoc monitoring. Use Desktop app scheduled tasks for recurring automation. Use cloud scheduled tasks (from the previous module) when the task should run even when your laptop is closed.",
    },
  ],

  quiz: [
    {
      id: "q1",
      type: "multiple-choice",
      question: "What does the `/loop` command do?",
      options: [
        "Loops through files in a directory",
        "Repeats a prompt on a specified interval",
        "Creates an infinite conversation",
        "Loops through git commits",
      ],
      correctAnswer: 1,
      explanation:
        "The `/loop` command repeats a prompt on a specified interval. For example, `/loop 5m check server status` runs every 5 minutes.",
    },
    {
      id: "q2",
      type: "multiple-choice",
      question: "What's the default interval for `/loop` if you don't specify one?",
      options: [
        "1 minute",
        "5 minutes",
        "10 minutes",
        "30 minutes",
      ],
      correctAnswer: 2,
      explanation:
        "If you don't specify an interval, `/loop` defaults to running every 10 minutes.",
    },
    {
      id: "q3",
      type: "multiple-choice",
      question: "What's the main advantage of local scheduled tasks over cloud tasks?",
      options: [
        "They're faster",
        "They have direct access to your local files and tools",
        "They don't require an API key",
        "They use less memory",
      ],
      correctAnswer: 1,
      explanation:
        "Local scheduled tasks have direct access to your local environment — files, running services, databases, and CLI tools that aren't available in the cloud.",
    },
  ],
};
