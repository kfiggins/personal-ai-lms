export default {
  id: "cfg-02-user-settings-file",
  title: "User Settings File",
  whyItMatters:
    "Your user settings file is where your personal Claude Code preferences live — knowing how to edit it means you can set up your ideal workflow once and have it follow you across every project.",

  content: [
    {
      type: "text",
      body: "Your user settings file lives at ~/.claude/settings.json. This is your personal configuration that applies across all projects unless overridden by a more specific scope. It's where you set things like your preferred model, allowed tools, and default behaviors.",
    },
    {
      type: "example",
      title: "Example: A typical user settings file",
      code: '// ~/.claude/settings.json\n{\n  "permissions": {\n    "allow": [\n      "Bash(git log:*)",\n      "Bash(npm test:*)",\n      "Read",\n      "Write"\n    ],\n    "deny": [\n      "Bash(rm -rf:*)"\n    ]\n  },\n  "env": {\n    "CLAUDE_MODEL": "sonnet"\n  }\n}',
      explanation:
        "This file pre-approves common tools like git and npm test, blocks dangerous commands, and sets the default model to Sonnet. These preferences apply everywhere you use Claude Code.",
    },
    {
      type: "keyPoint",
      body: "The easiest way to edit your user settings is the `/config` command inside Claude Code. It opens your settings file in your default editor and validates the format when you save. You can also edit the file directly at ~/.claude/settings.json.",
    },
    {
      type: "tip",
      body: "Start with a minimal settings file and add to it as you discover your preferences. You don't need to configure everything upfront — Claude Code works great with defaults.",
    },
  ],

  quiz: [
    {
      id: "q1",
      type: "multiple-choice",
      question: "Where is the user settings file located?",
      options: [
        ".claude/settings.json in your project",
        "~/.claude/settings.json in your home directory",
        "/etc/claude/settings.json",
        "~/.config/claude.json",
      ],
      correctAnswer: 1,
      explanation:
        "User settings live at ~/.claude/settings.json in your home directory, making them available across all projects.",
    },
    {
      id: "q2",
      type: "multiple-choice",
      question:
        "What's the recommended way to edit your user settings interactively?",
      options: [
        "The /config command",
        "The /settings command",
        "The /edit command",
        "The /preferences command",
      ],
      correctAnswer: 0,
      explanation:
        "The /config command opens your settings file in your editor and validates the format when you save.",
    },
    {
      id: "q3",
      type: "true-false",
      question: "User settings only apply to a single project.",
      options: ["True", "False"],
      correctAnswer: 1,
      explanation:
        "User settings apply across all projects. They're your personal defaults that follow you everywhere, unless a project or local setting overrides them.",
    },
  ],
};
