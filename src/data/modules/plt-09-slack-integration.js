export default {
  id: "plt-09-slack-integration",
  title: "Slack Integration",
  whyItMatters:
    "The Slack integration lets you delegate coding tasks directly from your team's workspace. Mention @Claude with a bug report and get a pull request back — no context switching required.",

  content: [
    {
      type: "text",
      body: "The Slack integration connects Claude Code to your Slack workspace. Mention @Claude in a channel or DM, describe a task, and Claude will work on it. It's particularly useful for turning bug reports into fixes — paste the error in Slack, and Claude can investigate, create a fix, and open a PR.",
    },
    {
      type: "keyPoint",
      body: "The key workflow: **mention @Claude** in Slack with a task description, and Claude works on it autonomously. You can delegate coding tasks directly from conversations — from bug reports to feature requests to code reviews.",
    },
    {
      type: "example",
      title: "Slack workflow",
      code: "# In a Slack channel:\n@Claude The login page throws a 500 error\nwhen users enter an email with a + sign.\nCan you fix this and open a PR?\n\n# Claude will:\n# 1. Investigate the issue in the codebase\n# 2. Find the email validation bug\n# 3. Fix it and write a test\n# 4. Open a pull request\n# 5. Post the PR link back in Slack",
      explanation:
        "The Slack integration turns your team's bug reports and requests into actionable code changes. No need to leave Slack to file tickets or open your IDE.",
    },
    {
      type: "inPractice",
      body: "Teams use the Slack integration to triage bugs quickly. A support engineer pastes a customer error in Slack, mentions @Claude, and gets a PR within minutes. It's also useful for quick tasks like updating config files, fixing typos, or generating boilerplate code that someone noticed while chatting.",
    },
    {
      type: "tip",
      body: "Be specific in your Slack messages to Claude, just like you would with the CLI. Include error messages, file paths, or expected behavior to help Claude zero in on the right fix.",
    },
  ],

  quiz: [
    {
      id: "q1",
      type: "multiple-choice",
      question:
        "How do you give Claude a task in Slack?",
      options: [
        "Use the /claude slash command",
        "Mention @Claude with a task description",
        "Send a DM to the Claude bot only",
        "Post in a special #claude channel",
      ],
      correctAnswer: 1,
      explanation:
        "Mention @Claude in any channel or DM with a task description. Claude will pick it up and work on it autonomously.",
    },
    {
      id: "q2",
      type: "multiple-choice",
      question:
        "What can Claude do when triggered from Slack?",
      options: [
        "Only answer questions about code",
        "Investigate issues, create fixes, and open pull requests",
        "Only post code snippets",
        "Only run existing scripts",
      ],
      correctAnswer: 1,
      explanation:
        "Claude can do full coding tasks from Slack — investigate issues, fix bugs, write tests, and open pull requests, then post the results back to the channel.",
    },
    {
      id: "q3",
      type: "multiple-choice",
      question:
        "What's a good use case for the Slack integration?",
      options: [
        "Running database migrations",
        "Turning bug reports into pull requests without leaving Slack",
        "Managing cloud infrastructure",
        "Scheduling team meetings",
      ],
      correctAnswer: 1,
      explanation:
        "The Slack integration shines for turning bug reports and quick requests into code changes. Paste an error, mention @Claude, and get a fix without switching to your IDE.",
    },
  ],
};
