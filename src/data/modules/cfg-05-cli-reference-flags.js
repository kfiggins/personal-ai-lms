export default {
  id: "cfg-05-cli-reference-flags",
  title: "CLI Reference Flags",
  whyItMatters:
    "CLI flags let you customize each Claude Code session on the fly — perfect for one-off tasks where you need a different model, specific tools, or custom limits.",

  content: [
    {
      type: "text",
      body: "When you launch Claude Code from the terminal, you can pass flags to override settings for that session. These are especially useful for scripting, CI/CD pipelines, or when you want to quickly try something different without changing your settings files.",
    },
    {
      type: "example",
      title: "Example: Common CLI flags",
      code: "# Use a specific model\nclaude --model opus\n\n# Allow only specific tools\nclaude --allowedTools Bash,Read,Write\n\n# Add custom system instructions\nclaude --append-system-prompt \"Always write TypeScript\"\n\n# Run in an isolated git worktree\nclaude --worktree\n\n# Enable verbose debug logging\nclaude --verbose",
      explanation:
        "Each flag adjusts behavior for just that session. The --model flag sets the AI model, --allowedTools restricts which tools Claude can use, and --append-system-prompt injects extra instructions.",
    },
    {
      type: "keyPoint",
      body: "Two important flags for controlling costs and runaway sessions: **--max-turns** limits how many agentic turns Claude can take before stopping, and **--max-budget-usd** sets a dollar cap on the session. Both are essential for automated or unattended usage.",
    },
    {
      type: "example",
      title: "Example: Budget and turn limits",
      code: "# Limit to 10 turns and $5 max spend\nclaude --max-turns 10 --max-budget-usd 5\n\n# Great for CI/CD where you want predictable costs\nclaude -p \"fix the lint errors\" --max-turns 20 --max-budget-usd 2",
      explanation:
        "The -p flag runs Claude in non-interactive (print) mode with a single prompt. Combined with turn and budget limits, this makes Claude safe for automated pipelines.",
    },
    {
      type: "tip",
      body: "Use `claude --help` to see the full list of available flags. The --worktree flag is particularly useful when you want Claude to make changes without touching your working branch.",
    },
  ],

  quiz: [
    {
      id: "q1",
      type: "multiple-choice",
      question: "Which flag sets the AI model for a session?",
      options: ["--ai", "--model", "--engine", "--llm"],
      correctAnswer: 1,
      explanation:
        "The --model flag sets which AI model to use for that session, e.g., claude --model opus.",
    },
    {
      id: "q2",
      type: "multiple-choice",
      question: "What does the --worktree flag do?",
      options: [
        "Creates a new git repository",
        "Runs Claude in an isolated git worktree",
        "Shows the directory tree",
        "Enables tree-style output",
      ],
      correctAnswer: 1,
      explanation:
        "The --worktree flag runs Claude in an isolated git worktree, so changes don't affect your current working branch.",
    },
    {
      id: "q3",
      type: "multiple-choice",
      question: "Which flag limits spending in a session?",
      options: [
        "--cost-limit",
        "--budget",
        "--max-budget-usd",
        "--spend-cap",
      ],
      correctAnswer: 2,
      explanation:
        "The --max-budget-usd flag sets a dollar cap on the session to control costs.",
    },
    {
      id: "q4",
      type: "true-false",
      question:
        "CLI flags only apply to the current session and don't change your settings files.",
      options: ["True", "False"],
      correctAnswer: 0,
      explanation:
        "Correct — CLI flags are session-level overrides. They don't modify any settings files.",
    },
    {
      id: "q5",
      type: "multiple-choice",
      question: "What does --append-system-prompt do?",
      options: [
        "Replaces Claude's system prompt entirely",
        "Adds custom instructions to Claude's system prompt",
        "Prompts the user for additional input",
        "Appends text to the output",
      ],
      correctAnswer: 1,
      explanation:
        "The --append-system-prompt flag adds your custom instructions to Claude's existing system prompt, letting you guide behavior for that session.",
    },
  ],
};
