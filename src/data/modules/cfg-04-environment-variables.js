export default {
  id: "cfg-04-environment-variables",
  title: "Environment Variables",
  whyItMatters:
    "Environment variables give you a quick way to control Claude Code's behavior — from choosing a model to disabling features — without editing settings files.",

  content: [
    {
      type: "text",
      body: "Claude Code reads several environment variables that control its behavior. You can set these in your shell before launching Claude, or define them in the `env` key of your settings.json so they're always applied. This is handy for temporary overrides or CI/CD environments.",
    },
    {
      type: "example",
      title: "Example: Setting variables in settings.json",
      code: '// In any settings.json file\n{\n  "env": {\n    "CLAUDE_MODEL": "claude-sonnet-4-6",\n    "DISABLE_AUTOUPDATER": "1"\n  }\n}',
      explanation:
        "The env key in settings.json lets you define environment variables that Claude Code uses every session. This is more persistent than setting them in your shell.",
    },
    {
      type: "keyPoint",
      body: "Common environment variables include: **CLAUDE_MODEL** (set the default model), **DISABLE_AUTOUPDATER** (prevent automatic updates), **ANTHROPIC_API_KEY** (use your own API key), and **CLAUDE_CODE_MAX_OUTPUT_TOKENS** (control response length). You can also set them in your shell: `export CLAUDE_MODEL=claude-sonnet-4-6 && claude`.",
    },
    {
      type: "example",
      title: "Example: Shell-based override",
      code: "# Set model just for this session\nCLAUDE_MODEL=claude-haiku-4-5-20251001 claude\n\n# Or export for all sessions in this terminal\nexport CLAUDE_MODEL=claude-sonnet-4-6\nclaude",
      explanation:
        "Setting a variable before the claude command applies it for just that session. Exporting it makes it available for all sessions in the current terminal.",
    },
    {
      type: "tip",
      body: "Environment variables set in the shell take precedence over those in settings.json. This makes them great for quick one-off overrides without changing your config files.",
    },
  ],

  quiz: [
    {
      id: "q1",
      type: "multiple-choice",
      question:
        "What key in settings.json is used to define environment variables?",
      options: ["variables", "env", "environment", "config"],
      correctAnswer: 1,
      explanation:
        'The "env" key in settings.json is where you define environment variables for Claude Code.',
    },
    {
      id: "q2",
      type: "multiple-choice",
      question: "What does the CLAUDE_MODEL environment variable control?",
      options: [
        "The color theme",
        "The default AI model used",
        "The maximum context size",
        "The output format",
      ],
      correctAnswer: 1,
      explanation:
        "CLAUDE_MODEL sets which AI model Claude Code uses by default, such as claude-sonnet-4-6 or claude-opus-4-6.",
    },
    {
      id: "q3",
      type: "true-false",
      question:
        "Environment variables set in the shell override those in settings.json.",
      options: ["True", "False"],
      correctAnswer: 0,
      explanation:
        "Yes — shell environment variables take precedence over settings.json env values, making them useful for quick overrides.",
    },
    {
      id: "q4",
      type: "multiple-choice",
      question: "What does DISABLE_AUTOUPDATER do?",
      options: [
        "Disables Claude Code entirely",
        "Prevents automatic model updates",
        "Prevents Claude Code from automatically updating itself",
        "Disables automatic file saving",
      ],
      correctAnswer: 2,
      explanation:
        "Setting DISABLE_AUTOUPDATER prevents Claude Code from checking for and installing updates automatically.",
    },
  ],
};
