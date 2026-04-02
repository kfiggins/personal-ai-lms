export default {
  id: "cfg-03-project-settings",
  title: "Project Settings",
  whyItMatters:
    "Project settings let your team share a consistent Claude Code configuration through git — so everyone has the same allowed tools, MCP servers, and hooks without manual setup.",

  content: [
    {
      type: "text",
      body: "Project settings live at .claude/settings.json in your project root and are committed to git. When anyone on your team clones the repo and runs Claude Code, they automatically get the team's shared configuration. This is the best place for settings that the whole team should agree on.",
    },
    {
      type: "example",
      title: "Example: Project settings for a Node.js team",
      code: '// .claude/settings.json\n{\n  "permissions": {\n    "allow": [\n      "Bash(npm test:*)",\n      "Bash(npm run lint:*)",\n      "Bash(npx tsc:*)",\n      "Read",\n      "Write"\n    ]\n  },\n  "hooks": {\n    "PreCommit": [\n      {\n        "command": "npm run lint"\n      }\n    ]\n  }\n}',
      explanation:
        "This project config pre-approves the team's standard dev commands and sets up a pre-commit lint hook. Everyone on the team gets these settings automatically when they clone the repo.",
    },
    {
      type: "keyPoint",
      body: "Great candidates for project settings include: allowed tools that everyone needs (test runners, linters, build commands), shared MCP server configurations, and hooks the whole team benefits from. Avoid putting personal preferences here — those belong in user or local settings.",
    },
    {
      type: "tip",
      body: "When you add project settings, communicate the change to your team — a quick note in a PR description helps everyone understand what Claude Code will do differently.",
    },
  ],

  quiz: [
    {
      id: "q1",
      type: "multiple-choice",
      question: "Where do project settings live?",
      options: [
        "~/.claude/settings.json",
        ".claude/settings.json in the project root",
        ".claude/settings.local.json",
        "package.json",
      ],
      correctAnswer: 1,
      explanation:
        "Project settings live at .claude/settings.json in your project root and are committed to git for the whole team.",
    },
    {
      id: "q2",
      type: "true-false",
      question: "Project settings are committed to git and shared with the team.",
      options: ["True", "False"],
      correctAnswer: 0,
      explanation:
        "Yes — that's the whole point of project settings. They live in the repo so everyone gets the same configuration automatically.",
    },
    {
      id: "q3",
      type: "multiple-choice",
      question: "Which of these is a good candidate for project settings?",
      options: [
        "Your personal preferred model",
        "Your custom theme",
        "Allowed tools for the team's test runner and linter",
        "Your personal API keys",
      ],
      correctAnswer: 2,
      explanation:
        "Shared tool permissions (like test runners and linters) are perfect for project settings because the whole team benefits. Personal preferences and secrets should go elsewhere.",
    },
  ],
};
