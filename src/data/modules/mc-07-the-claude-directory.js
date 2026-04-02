export default {
  id: "mc-07-the-claude-directory",
  title: "The .claude Directory",
  whyItMatters:
    "The .claude directory is the central hub for all Claude Code configuration in your project. Understanding its structure helps you organize settings, hooks, skills, commands, and more.",

  content: [
    {
      type: "text",
      body: "There are actually two `.claude` directories that matter: one in your project root and one in your home directory. The project-level `.claude/` holds project-specific settings, hooks, skills, commands, and subagent definitions. The user-level `~/.claude/` stores your global settings, credentials, and auto memory.",
    },
    {
      type: "keyPoint",
      body: "**Project `.claude/`** contains: `settings.json` (shared project settings), `settings.local.json` (personal overrides, gitignored), `rules/` (path-specific rules), `hooks/`, `skills/`, `commands/`, and `subagents/`. **User `~/.claude/`** contains: `settings.json` (global personal settings), `CLAUDE.md` (personal instructions), and `memory/` (auto memory).",
    },
    {
      type: "example",
      title: "Typical .claude directory structure",
      code: "my-project/\n├── .claude/\n│   ├── settings.json          # Shared team settings (committed to git)\n│   ├── settings.local.json     # Your personal overrides (gitignored)\n│   ├── rules/\n│   │   ├── test-files.md       # Rules for test files\n│   │   └── api-routes.md       # Rules for API routes\n│   ├── commands/\n│   │   └── deploy.md           # Custom /deploy command\n│   └── hooks/\n│       └── pre-commit.sh       # Hook that runs before commits\n└── CLAUDE.md                    # Project instructions",
      explanation:
        "The project .claude/ directory organizes all Claude Code configuration. Settings.json is shared with the team via git, while settings.local.json is gitignored for personal overrides.",
    },
    {
      type: "inPractice",
      body: "When starting a new project with Claude Code, the `.claude/` directory grows organically. You'll typically start with just `settings.json`, then add rules as your conventions develop, commands for common workflows, and hooks for automation. Don't try to set everything up at once — let it evolve with your project.",
    },
    {
      type: "warning",
      body: "Be careful about what goes in `settings.json` vs `settings.local.json`. Team-shared settings (like allowed MCP servers or permission rules) go in `settings.json`. Personal preferences (like model overrides or extra tool permissions) go in `settings.local.json` so they don't affect your teammates.",
    },
  ],

  quiz: [
    {
      id: "q1",
      type: "multiple-choice",
      question: "What is the project-level .claude/ directory used for?",
      options: [
        "Only storing credentials",
        "Project-specific settings, rules, hooks, skills, and commands",
        "Caching Claude's responses",
        "Storing conversation history",
      ],
      correctAnswer: 1,
      explanation:
        "The project .claude/ directory is the hub for all project-specific Claude Code configuration including settings, rules, hooks, skills, and commands.",
    },
    {
      id: "q2",
      type: "multiple-choice",
      question: "Which file should NOT be committed to git?",
      options: [
        ".claude/settings.json",
        ".claude/rules/test-files.md",
        ".claude/settings.local.json",
        "CLAUDE.md",
      ],
      correctAnswer: 2,
      explanation:
        "settings.local.json is gitignored — it's for personal per-project overrides that shouldn't be shared with the team.",
    },
    {
      id: "q3",
      type: "multiple-choice",
      question: "Where does auto memory live?",
      options: [
        "In the project's .claude/ directory",
        "In ~/.claude/memory/",
        "In CLAUDE.md",
        "In .claude/settings.json",
      ],
      correctAnswer: 1,
      explanation:
        "Auto memory is stored in ~/.claude/memory/ in your home directory, not in the project directory. It's part of your user-level Claude configuration.",
    },
    {
      id: "q4",
      type: "true-false",
      question:
        "The project .claude/settings.json file is shared with your team via git.",
      options: ["True", "False"],
      correctAnswer: 0,
      explanation:
        "Yes, .claude/settings.json is committed to git and shared with the team. It contains project-level settings that everyone should use.",
    },
  ],
};
