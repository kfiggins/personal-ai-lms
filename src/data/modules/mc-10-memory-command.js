export default {
  id: "mc-10-memory-command",
  title: "The /memory Command",
  whyItMatters:
    "Auto memory is great, but you should know what Claude has remembered about you. The /memory command lets you audit, edit, and clean up memory entries to keep Claude's understanding accurate.",

  content: [
    {
      type: "text",
      body: "The `/memory` command opens your auto memory file for viewing and editing. It's your window into what Claude has been learning about your projects and preferences. Think of it as reviewing notes that an assistant has been keeping — some will be spot-on, others might be outdated or wrong.",
    },
    {
      type: "keyPoint",
      body: "With `/memory` you can: **view** everything Claude has remembered, **edit** entries that are inaccurate or outdated, **remove** entries that are wrong or no longer relevant, and **add** entries manually if you want Claude to remember something specific.",
    },
    {
      type: "example",
      title: "Reviewing and cleaning up memory",
      code: "# Open your memory file:\n/memory\n\n# You might see entries like:\n# - Project uses pnpm (correct ✓)\n# - User prefers tabs over spaces (wrong! you switched to spaces)\n# - Build requires Node 16 (outdated — now requires Node 20)\n# - Tests run with jest (wrong — migrated to vitest last month)\n\n# Edit or remove the incorrect entries, keep the good ones.",
      explanation:
        "Regularly reviewing memory helps prevent Claude from acting on stale information. Remove anything that's changed since the memory was created.",
    },
    {
      type: "inPractice",
      body: "Make it a habit to review your auto memory periodically — especially after major project changes like framework migrations, new team conventions, or infrastructure updates. Old memories can actively mislead Claude if they describe patterns or tools you no longer use.",
    },
    {
      type: "tip",
      body: "If you want Claude to remember something specific right away, you can tell it directly in conversation: \"Remember that we use pnpm in this project.\" Claude will save it to auto memory. But for important, permanent rules, CLAUDE.md is still the better home.",
    },
  ],

  quiz: [
    {
      id: "q1",
      type: "multiple-choice",
      question: "What does the /memory command do?",
      options: [
        "Clears all of Claude's memory",
        "Opens your auto memory file for viewing and editing",
        "Shows how much memory Claude is using",
        "Creates a new CLAUDE.md file",
      ],
      correctAnswer: 1,
      explanation:
        "The /memory command opens your auto memory file so you can view, edit, add, or remove entries that Claude has been saving about your projects and preferences.",
    },
    {
      id: "q2",
      type: "multiple-choice",
      question: "Why should you periodically review auto memory?",
      options: [
        "To free up disk space",
        "To prevent Claude from acting on outdated or incorrect information",
        "To improve Claude's processing speed",
        "To comply with data regulations",
      ],
      correctAnswer: 1,
      explanation:
        "Old or incorrect memory entries can actively mislead Claude. Regular review ensures Claude's understanding stays current with your project's actual state.",
    },
    {
      id: "q3",
      type: "multiple-choice",
      question:
        "Where should important, permanent rules go instead of auto memory?",
      options: [
        "In a sticky note on your monitor",
        "In your CLAUDE.md file",
        "In your shell history",
        "In a Slack channel",
      ],
      correctAnswer: 1,
      explanation:
        "CLAUDE.md is the right place for important, permanent rules. Auto memory is good for learnings that accumulate organically, but critical project rules belong in CLAUDE.md where they're structured and reliable.",
    },
  ],
};
