export default {
  id: "plt-06-claude-code-on-the-web",
  title: "Claude Code on the Web",
  whyItMatters:
    "Sometimes you don't have your development machine handy, or you want to kick off a long-running task and come back later. Claude Code on the web lets you work from any browser with zero local setup.",

  content: [
    {
      type: "text",
      body: "Claude Code on the web runs at claude.ai/code with no local installation required. It's perfect for long-running tasks — kick something off and check back when it's done. You can work on repos you don't even have cloned locally, and run multiple tasks in parallel.",
    },
    {
      type: "keyPoint",
      body: "Key advantages: **no local setup** required, **long-running tasks** that persist even if you close the browser, **work on remote repos** you don't have locally, **multiple parallel tasks**, and availability on **desktop browsers and the iOS app**.",
    },
    {
      type: "example",
      title: "Web workflows",
      code: "# Go to claude.ai/code in any browser\n\n# Start a long-running task:\n\"Refactor the auth module to use the new token format,\nupdate all tests, and open a PR.\"\n\n# Close the browser and come back later\n# The task continues running\n\n# Run multiple tasks in parallel:\n# Tab 1: Refactoring auth module\n# Tab 2: Updating API documentation\n# Tab 3: Writing integration tests",
      explanation:
        "The web interface is ideal for fire-and-forget tasks. Start a complex refactor, go to lunch, and come back to a completed PR. No terminal needed.",
    },
    {
      type: "inPractice",
      body: "The web interface is especially useful when you're on a different machine, reviewing a colleague's repo, or want to delegate a large task without tying up your local terminal. Running multiple tasks in parallel is great for batch operations like updating documentation across several repos.",
    },
    {
      type: "tip",
      body: "Use the web interface for tasks that take a while — large refactors, comprehensive test suites, or multi-file documentation updates. Kick them off and check back later instead of watching a terminal.",
    },
  ],

  quiz: [
    {
      id: "q1",
      type: "multiple-choice",
      question:
        "What do you need to install to use Claude Code on the web?",
      options: [
        "The Claude CLI",
        "A browser extension",
        "Nothing — it runs at claude.ai/code",
        "Node.js and npm",
      ],
      correctAnswer: 2,
      explanation:
        "Claude Code on the web requires no local setup. Just go to claude.ai/code in any browser and start working.",
    },
    {
      id: "q2",
      type: "multiple-choice",
      question:
        "What happens to a task if you close the browser tab?",
      options: [
        "The task is canceled",
        "The task pauses until you reopen",
        "The task continues running",
        "You lose all progress",
      ],
      correctAnswer: 2,
      explanation:
        "Long-running tasks persist even if you close the browser. You can come back later to check the results.",
    },
    {
      id: "q3",
      type: "multiple-choice",
      question:
        "Can you work on repos you don't have cloned locally using Claude Code on the web?",
      options: [
        "No, you must clone the repo first",
        "Yes, you can work on remote repos",
        "Only for public repos",
        "Only with GitHub repos",
      ],
      correctAnswer: 1,
      explanation:
        "Claude Code on the web lets you work on repos you don't have locally. It handles the repository access for you.",
    },
    {
      id: "q4",
      type: "multiple-choice",
      question:
        "On which devices is Claude Code on the web available?",
      options: [
        "Desktop browsers only",
        "iOS app only",
        "Desktop browsers and the iOS app",
        "Android only",
      ],
      correctAnswer: 2,
      explanation:
        "Claude Code on the web is available on desktop browsers and the iOS app, giving you access from your computer or phone.",
    },
  ],
};
