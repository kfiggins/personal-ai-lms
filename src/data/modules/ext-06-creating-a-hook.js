export default {
  id: "ext-06-creating-a-hook",
  title: "Creating a Hook",
  whyItMatters:
    "Knowing the hook configuration format lets you wire up automations quickly. A well-crafted hook can save your team hours of repetitive manual work — but a misconfigured one can silently break things.",

  content: [
    {
      type: "text",
      body: "Hooks are defined in settings.json under the \"hooks\" key. Each hook specifies which event triggers it, an optional matcher to narrow the scope, and the shell command to run. The hook receives JSON on stdin and can output JSON to communicate back to Claude.",
    },
    {
      type: "example",
      title: "Auto-format on save hook",
      code: "// In settings.json\n{\n  \"hooks\": {\n    \"PostToolUse\": [\n      {\n        \"matcher\": \"Edit|Write\",\n        \"command\": \"prettier --write $CLAUDE_FILE_PATH\"\n      }\n    ]\n  }\n}",
      explanation:
        "This hook fires after Claude uses the Edit or Write tool. The matcher uses a regex pattern to match tool names. The command runs prettier on the edited file. $CLAUDE_FILE_PATH is one of the environment variables hooks receive.",
    },
    {
      type: "keyPoint",
      body: "Hook exit codes control behavior: **0** means success (continue normally), **1** means error (Claude sees the error but continues), and **2** means block (the tool action is prevented — only meaningful for Pre hooks). This gives you graduated control from passive logging to active gatekeeping.",
    },
    {
      type: "example",
      title: "Safety guard hook",
      code: "// Block writes to the database migrations directory\n{\n  \"hooks\": {\n    \"PreToolUse\": [\n      {\n        \"matcher\": \"Write|Edit\",\n        \"command\": \"if echo \\\"$CLAUDE_TOOL_INPUT\\\" | grep -q 'migrations/'; then echo '{\\\"message\\\": \\\"Cannot modify migration files directly\\\"}'; exit 2; fi\"\n      }\n    ]\n  }\n}",
      explanation:
        "This PreToolUse hook checks if Claude is trying to write to a migrations directory. If so, it returns a JSON message explaining why and exits with code 2 to block the action.",
    },
    {
      type: "tip",
      body: "Test your hooks with simple echo commands first to make sure they trigger on the right events. Once the trigger is working, add the real logic. You can also write your hook as a separate script file and reference it in the command field for complex logic.",
    },
  ],

  quiz: [
    {
      id: "q1",
      type: "multiple-choice",
      question: "What exit code should a PreToolUse hook return to block the action?",
      options: ["0", "1", "2", "3"],
      correctAnswer: 2,
      explanation:
        "Exit code 2 blocks the tool action. Exit code 0 means success (continue), and exit code 1 means error (Claude sees the error but the action isn't blocked).",
    },
    {
      id: "q2",
      type: "multiple-choice",
      question: "Where are hooks configured?",
      options: [
        "In .claude/hooks/ as separate files",
        "In CLAUDE.md under a hooks section",
        "In settings.json under the hooks key",
        "In a hooks.config.js file",
      ],
      correctAnswer: 2,
      explanation:
        "Hooks are configured in settings.json under the \"hooks\" key. Each event type maps to an array of hook configurations.",
    },
    {
      id: "q3",
      type: "true-false",
      question:
        "A hook can output JSON to communicate information back to Claude.",
      options: ["True", "False"],
      correctAnswer: 0,
      explanation:
        "Hooks can output JSON on stdout. For example, a hook can return a message that Claude will see, which is useful for providing context or error information.",
    },
    {
      id: "q4",
      type: "multiple-choice",
      question: "What does the \"matcher\" field in a hook configuration do?",
      options: [
        "Specifies which files the hook applies to",
        "Filters which tool name triggers the hook using a regex pattern",
        "Determines which user can trigger the hook",
        "Sets the priority of the hook",
      ],
      correctAnswer: 1,
      explanation:
        "The matcher field uses a regex pattern to filter which tool name triggers the hook. For example, 'Edit|Write' matches both the Edit and Write tools.",
    },
  ],
};
