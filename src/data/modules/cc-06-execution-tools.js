export default {
  id: "cc-06-execution-tools",
  title: "Execution Tools",
  whyItMatters:
    "Execution tools let Claude run commands in your terminal — this is how it tests code, manages git, and interacts with your development environment.",

  content: [
    {
      type: "text",
      body: "The Bash tool is Claude Code's gateway to your terminal. It can run any command you could type yourself: running tests, starting dev servers, installing packages, using git, running linters — anything. This is what makes Claude Code more than just a code editor; it's a full development assistant.",
    },
    {
      type: "keyPoint",
      body: "The permission system controls what runs without asking. By default, Claude asks before running shell commands because they can have side effects. You can configure allowed commands (like 'npm test' or 'git status') to run automatically, while destructive or unfamiliar commands still require your approval.",
    },
    {
      type: "example",
      title: "Execution tools in practice",
      code: "# You say:\nclaude \"run the tests and fix any failures\"\n\n# Claude runs:\n# Bash: npm test\n# Reads the output, sees 2 failures\n# Edits the failing code\n# Bash: npm test (again)\n# All tests pass!",
      explanation:
        "Claude uses the Bash tool to run tests, reads the output to understand failures, fixes the code, then re-runs tests to verify. This run-fix-verify cycle is a core pattern.",
    },
    {
      type: "inPractice",
      body: "Claude can run any terminal command, but it's smart about what it runs. It won't run destructive commands without asking, and it reads command output to decide what to do next. If a build fails, it reads the error and fixes it. If tests pass, it moves on.",
    },
  ],

  quiz: [
    {
      id: "q1",
      type: "multiple-choice",
      question: "What is the Bash tool in Claude Code?",
      options: [
        "A file editor",
        "A tool that runs any terminal command",
        "A search tool for finding files",
        "A web browser",
      ],
      correctAnswer: 1,
      explanation:
        "The Bash tool lets Claude run any command in your terminal — tests, git commands, package managers, servers, and more.",
    },
    {
      id: "q2",
      type: "true-false",
      question:
        "By default, Claude runs all shell commands without asking for permission.",
      options: ["True", "False"],
      correctAnswer: 1,
      explanation:
        "By default, Claude asks before running shell commands because they can have side effects. You can configure specific commands to run automatically through the permission system.",
    },
    {
      id: "q3",
      type: "multiple-choice",
      question: "What typically happens when Claude runs a test and it fails?",
      options: [
        "Claude stops and waits for instructions",
        "Claude reads the error output, fixes the code, and re-runs the test",
        "Claude deletes the failing test",
        "Claude restarts the entire session",
      ],
      correctAnswer: 1,
      explanation:
        "Claude reads the test output, understands the failure, edits the code to fix it, then re-runs the tests. This run-fix-verify cycle continues until tests pass.",
    },
    {
      id: "q4",
      type: "multiple-choice",
      question: "How can you let certain commands run without Claude asking each time?",
      options: [
        "You can't — every command requires approval",
        "Configure allowed commands in the permission system",
        "Switch to a different model",
        "Run them manually before asking Claude",
      ],
      correctAnswer: 1,
      explanation:
        "The permission system lets you configure specific commands (like 'npm test' or 'git status') to run automatically without prompting for approval each time.",
    },
  ],
};
