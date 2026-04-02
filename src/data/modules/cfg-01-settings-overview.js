export default {
  id: "cfg-01-settings-overview",
  title: "Settings Overview",
  whyItMatters:
    "Understanding how Claude Code's four configuration scopes work together lets you set the right preferences at the right level — so your personal tweaks don't clash with your team's shared config.",

  content: [
    {
      type: "text",
      body: "Claude Code has four configuration scopes, listed from broadest to narrowest: managed, user, project, and local. When the same setting appears at multiple levels, the narrower scope wins. This layered approach means your organization can enforce policies, your team can share project standards, and you can still customize things to your taste.",
    },
    {
      type: "keyPoint",
      body: "The four scopes are: **Managed** (organization-wide policies set by admins), **User** (your personal preferences across all projects, stored at ~/.claude/settings.json), **Project** (shared team settings committed to git at .claude/settings.json), and **Local** (personal per-project overrides, gitignored at .claude/settings.local.json).",
    },
    {
      type: "example",
      title: "Example: How scopes layer together",
      code: "# Managed: organization blocks certain tools\n# User (~/.claude/settings.json): you set your preferred model\n# Project (.claude/settings.json): team allows specific MCP servers\n# Local (.claude/settings.local.json): you override a tool permission for this repo only",
      explanation:
        "Each scope adds or overrides settings from the one above it. Managed policies always take precedence, then user, then project, then local for non-managed settings.",
    },
    {
      type: "inPractice",
      body: "Most day-to-day customization happens in User settings (personal defaults) and Project settings (team agreements). Use Local settings when you need a personal tweak for one specific repo — like allowing a tool your team hasn't approved globally. Managed settings are typically configured by your organization's admin.",
    },
    {
      type: "tip",
      body: "Not sure which scope to use? Ask yourself: should this follow me everywhere (User), should the team share it (Project), or is it just for me in this repo (Local)?",
    },
  ],

  quiz: [
    {
      id: "q1",
      type: "multiple-choice",
      question: "How many configuration scopes does Claude Code have?",
      options: ["Two", "Three", "Four", "Five"],
      correctAnswer: 2,
      explanation:
        "Claude Code has four scopes: managed, user, project, and local. They layer from broadest (managed) to narrowest (local).",
    },
    {
      id: "q2",
      type: "multiple-choice",
      question:
        "Which settings file is committed to git and shared with your team?",
      options: [
        "~/.claude/settings.json",
        ".claude/settings.json",
        ".claude/settings.local.json",
        "managed-settings.json",
      ],
      correctAnswer: 1,
      explanation:
        "Project settings live at .claude/settings.json in your project root and are committed to git, making them shared across the team.",
    },
    {
      id: "q3",
      type: "true-false",
      question:
        "Local settings (.claude/settings.local.json) are committed to git.",
      options: ["True", "False"],
      correctAnswer: 1,
      explanation:
        "Local settings are gitignored — they're your personal overrides for a specific project and aren't shared with the team.",
    },
    {
      id: "q4",
      type: "multiple-choice",
      question:
        "When the same setting is defined at multiple scopes, which one wins?",
      options: [
        "The broadest scope always wins",
        "The narrowest scope always wins",
        "Managed policies take top precedence, then narrower scopes override broader ones",
        "It causes an error",
      ],
      correctAnswer: 2,
      explanation:
        "Managed policies always take precedence. For non-managed settings, the narrower scope overrides the broader one — so local beats project, project beats user.",
    },
  ],
};
