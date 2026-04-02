export default {
  id: "ext-04-what-are-hooks",
  title: "What Are Hooks?",
  whyItMatters:
    "Hooks let you automate actions that would otherwise require manual intervention. Instead of remembering to format code after every edit or lint before every commit, hooks handle it automatically — every single time.",

  content: [
    {
      type: "text",
      body: "Hooks are shell commands that run automatically when specific events happen in Claude Code. Edit a file? A hook can auto-format it. About to commit? A hook can run the linter. Task complete? A hook can send a Slack notification. They're your way of wiring Claude Code into your existing development workflow.",
    },
    {
      type: "keyPoint",
      body: "Hooks are configured in **settings.json**, not as separate files. Each hook specifies an **event** (when to run), an optional **matcher** (which tool or pattern to match), and a **command** (the shell command to execute). They run as child processes — fast and lightweight.",
    },
    {
      type: "example",
      title: "What hooks can do",
      code: "# Auto-format after Claude edits a file\nEvent: PostToolUse (Edit tool) → run prettier\n\n# Block writes to protected files\nEvent: PreToolUse (Write tool) → check path, exit 2 to block\n\n# Notify your team when a task finishes\nEvent: Stop → send Slack message\n\n# Log every prompt for auditing\nEvent: UserPromptSubmit → write to audit log",
      explanation:
        "Hooks cover the full lifecycle — before and after tool use, when prompts are submitted, when sessions start or end, and when tasks complete. This gives you fine-grained control over Claude Code's behavior.",
    },
    {
      type: "inPractice",
      body: "The most common hooks are auto-formatting (run prettier or black after file edits), safety guards (block modifications to certain directories), and notifications (alert the team when long-running tasks complete). They're especially valuable in team settings where consistency matters.",
    },
    {
      type: "warning",
      body: "Hooks run shell commands with your user permissions. Be careful about what commands you configure, especially in shared project settings. A misconfigured hook could modify files unexpectedly or leak information.",
    },
  ],

  quiz: [
    {
      id: "q1",
      type: "multiple-choice",
      question: "Where are hooks configured?",
      options: [
        "In .claude/hooks/ directory as markdown files",
        "In CLAUDE.md",
        "In settings.json",
        "In a hooks.yaml file",
      ],
      correctAnswer: 2,
      explanation:
        "Hooks are configured in settings.json under the 'hooks' key. Each entry specifies an event, an optional matcher, and a command.",
    },
    {
      id: "q2",
      type: "multiple-choice",
      question: "What are hooks in Claude Code?",
      options: [
        "Custom slash commands you invoke manually",
        "Shell commands that run automatically on specific events",
        "Configuration files for project settings",
        "External API integrations",
      ],
      correctAnswer: 1,
      explanation:
        "Hooks are shell commands that execute automatically when specific events occur in Claude Code — like file edits, tool use, or task completion.",
    },
    {
      id: "q3",
      type: "true-false",
      question:
        "Hooks can only run after events, not before them.",
      options: ["True", "False"],
      correctAnswer: 1,
      explanation:
        "Hooks can run both before (Pre) and after (Post) events. PreToolUse hooks run before a tool executes and can even block the action. PostToolUse hooks run after.",
    },
    {
      id: "q4",
      type: "multiple-choice",
      question: "What is a common use case for hooks?",
      options: [
        "Installing npm packages",
        "Auto-formatting code after Claude edits a file",
        "Changing the Claude model mid-session",
        "Reading CLAUDE.md",
      ],
      correctAnswer: 1,
      explanation:
        "Auto-formatting after file edits is one of the most common hook use cases. A PostToolUse hook on the Edit tool can run prettier or your preferred formatter automatically.",
    },
  ],
};
