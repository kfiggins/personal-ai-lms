export default {
  id: "sec-04-permission-modes-deep-dive",
  title: "Permission Modes Deep Dive",
  whyItMatters:
    "Permission modes let you choose your overall trust level for a session. Picking the right mode for the right situation — from fully supervised to fully autonomous — is essential for balancing safety with speed.",

  content: [
    {
      type: "text",
      body: "Claude Code offers several permission modes that control the overall approval behavior for a session. Each mode represents a different point on the safety-to-speed spectrum. You can set the mode globally, per-project, or per-session via the `--permission-mode` flag.",
    },
    {
      type: "keyPoint",
      body: "The available permission modes, from most restrictive to least:\n\n- **default**: Asks for approval on everything — the safest starting point\n- **acceptEdits**: Auto-approves file edits but still asks for shell commands and other actions\n- **plan**: Read-only mode — Claude can explore and plan but can't make changes\n- **auto**: A background classifier evaluates each action and decides whether it's safe to auto-approve\n- **dontAsk**: Allows everything without prompting — use with caution!\n- **bypassPermissions**: No restrictions whatsoever — extremely dangerous, only for trusted environments",
    },
    {
      type: "example",
      title: "Setting permission modes",
      code: '# Set mode for a single session\nclaude --permission-mode plan\nclaude --permission-mode auto\n\n# In settings.json (applies to all sessions)\n{\n  "permissions": {\n    "mode": "acceptEdits"\n  }\n}\n\n# Plan mode is great for exploration\nclaude --permission-mode plan "analyze this codebase and create a refactoring plan"',
      explanation:
        "Plan mode is useful when you want Claude to investigate and propose changes without actually touching anything. Auto mode works well for experienced users who trust Claude for routine operations but want oversight for unusual ones.",
    },
    {
      type: "text",
      body: "**Auto mode** deserves special attention. It uses a background classifier that evaluates each action in context. Safe operations like reading files, running tests, or making small edits get auto-approved. Potentially risky actions — like deleting files, running unfamiliar commands, or making network requests — still prompt for approval. It's a smart middle ground for experienced users.",
    },
    {
      type: "tip",
      body: "The `bypassPermissions` mode disables all safety checks. It's intended only for fully isolated environments like ephemeral CI containers where there's nothing sensitive to protect. Never use it on a development machine with real credentials or important files.",
    },
  ],

  quiz: [
    {
      id: "q1",
      type: "multiple-choice",
      question: "Which permission mode auto-approves file edits but asks for shell commands?",
      options: [
        "default",
        "acceptEdits",
        "plan",
        "auto",
      ],
      correctAnswer: 1,
      explanation:
        "The acceptEdits mode auto-approves file modifications but still prompts for shell commands and other potentially impactful actions.",
    },
    {
      id: "q2",
      type: "multiple-choice",
      question: "What makes 'plan' mode different from other modes?",
      options: [
        "It's faster than other modes",
        "It creates a plan before each action",
        "It's read-only — Claude can explore but can't make changes",
        "It only works with git repositories",
      ],
      correctAnswer: 2,
      explanation:
        "Plan mode is read-only. Claude can read files, search code, and create plans, but it cannot modify files, run commands, or make any changes to your system.",
    },
    {
      id: "q3",
      type: "multiple-choice",
      question: "How does 'auto' mode decide whether to prompt for approval?",
      options: [
        "It randomly selects actions to approve",
        "It only approves the first action",
        "A background classifier evaluates each action's safety",
        "It checks a predefined list of allowed commands",
      ],
      correctAnswer: 2,
      explanation:
        "Auto mode uses a background classifier that evaluates each action in context. Routine, safe operations are auto-approved while potentially risky actions still prompt for confirmation.",
    },
    {
      id: "q4",
      type: "multiple-choice",
      question: "When is `bypassPermissions` mode appropriate to use?",
      options: [
        "For experienced developers on their main machine",
        "Only in fully isolated environments like ephemeral CI containers",
        "When working on non-critical projects",
        "It's always safe to use",
      ],
      correctAnswer: 1,
      explanation:
        "bypassPermissions disables all safety checks and should only be used in fully isolated environments with nothing sensitive to protect, like ephemeral CI containers.",
    },
  ],
};
