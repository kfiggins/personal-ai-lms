export default {
  id: "ext-01-extensibility-overview",
  title: "Extensibility Overview",
  whyItMatters:
    "Claude Code is powerful out of the box, but its real potential unlocks when you extend it. Understanding the six extension mechanisms helps you pick the right tool for each job — and avoid over-engineering what should be simple.",

  content: [
    {
      type: "text",
      body: "Claude Code can be extended in six distinct ways, each designed for a different kind of customization. Think of them as layers — from lightweight configuration all the way to full plugin packages. The key is knowing which layer fits your need.",
    },
    {
      type: "keyPoint",
      body: "The six extension mechanisms are: **CLAUDE.md** (persistent instructions), **Skills** (reusable slash commands), **Hooks** (automated shell actions on events), **MCP** (external tool integrations), **Subagents** (delegated specialized tasks), and **Plugins** (bundled extension packages).",
    },
    {
      type: "example",
      title: "Choosing the right mechanism",
      code: "# Need persistent project rules?\n→ CLAUDE.md\n\n# Need a reusable workflow anyone can invoke?\n→ Skill (/deploy-staging, /review-pr)\n\n# Need something to run automatically on an event?\n→ Hook (auto-format after edit, lint before commit)\n\n# Need Claude to talk to an external system?\n→ MCP server (Jira, database, Google Drive)\n\n# Need to offload work to a focused sub-task?\n→ Subagent (parallel research, isolated testing)\n\n# Need to share a bundle of extensions with your team?\n→ Plugin (packages skills + hooks + agents + MCP together)",
      explanation:
        "Each mechanism solves a different problem. CLAUDE.md is the simplest — just a file. Plugins are the most complex — a shareable package. Start simple and reach for more powerful tools only when you need them.",
    },
    {
      type: "inPractice",
      body: "Most teams start with CLAUDE.md for project standards, then add a few skills for common workflows like deploying or running migrations. Hooks come next for automation (auto-formatting, notifications). MCP servers unlock external integrations. Subagents and plugins are for power users with complex needs.",
    },
    {
      type: "tip",
      body: "Start with the simplest mechanism that solves your problem. A CLAUDE.md instruction is easier to maintain than a hook, and a hook is easier than a full plugin. You can always upgrade later.",
    },
  ],

  quiz: [
    {
      id: "q1",
      type: "multiple-choice",
      question:
        "Which extension mechanism would you use to give Claude persistent instructions about your coding standards?",
      options: ["Hooks", "CLAUDE.md", "MCP server", "Plugin"],
      correctAnswer: 1,
      explanation:
        "CLAUDE.md is the right choice for persistent project instructions. It's read automatically at the start of every session and is the simplest way to configure Claude's behavior.",
    },
    {
      id: "q2",
      type: "multiple-choice",
      question:
        "You want Claude to automatically run prettier after every file edit. Which mechanism fits best?",
      options: ["Skill", "CLAUDE.md", "Hook", "Subagent"],
      correctAnswer: 2,
      explanation:
        "Hooks are designed for automated actions triggered by events. A PostToolUse hook on the Edit tool can run prettier automatically after every file change.",
    },
    {
      id: "q3",
      type: "multiple-choice",
      question:
        "Which mechanism lets Claude read data from external systems like Jira or a database?",
      options: ["Skills", "Hooks", "MCP servers", "CLAUDE.md"],
      correctAnswer: 2,
      explanation:
        "MCP (Model Context Protocol) servers connect Claude to external data sources and tools. They let Claude reach into systems like Jira, databases, Google Drive, and more.",
    },
    {
      id: "q4",
      type: "multiple-choice",
      question:
        "What is a Plugin in the context of Claude Code extensions?",
      options: [
        "A single reusable slash command",
        "A shell script that runs on events",
        "A bundled package of skills, hooks, agents, and MCP servers",
        "A configuration file for project settings",
      ],
      correctAnswer: 2,
      explanation:
        "Plugins bundle multiple extension types (skills, hooks, agents, MCP servers) into a single shareable package. They're the most comprehensive extension mechanism.",
    },
  ],
};
