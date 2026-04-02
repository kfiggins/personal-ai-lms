export default {
  id: "adv-12-troubleshooting",
  title: "Troubleshooting",
  whyItMatters:
    "When Claude Code isn't working as expected, knowing how to diagnose and fix common issues quickly gets you back to productive work. A systematic troubleshooting approach saves hours of frustration.",

  content: [
    {
      type: "text",
      body: "The most common issues with Claude Code fall into a few categories:\n\n**Installation problems**: Claude Code not found after installation, version mismatches, or missing dependencies. Most of these come down to PATH configuration — the `claude` binary needs to be in a directory that's in your shell's PATH.\n\n**Authentication issues**: Login failures, expired tokens, or wrong account. Check that you're using the right authentication method (API key vs. OAuth) and that your credentials are current.",
    },
    {
      type: "keyPoint",
      body: "Run `claude doctor` to perform a comprehensive diagnostic check. It verifies your installation, PATH configuration, authentication, network connectivity, and settings. This single command catches the vast majority of common issues and provides actionable fix instructions.",
    },
    {
      type: "text",
      body: "**Performance issues and fixes**:\n- Slow responses: Check your network connection and try lowering the reasoning effort level\n- High token usage: Use `/compact` to compress context, start new sessions for unrelated tasks\n- Memory/CPU usage: Large repositories can be resource-intensive — use `.claudeignore` to exclude unnecessary directories\n\n**IDE integration problems**:\n- Extension not connecting: Ensure the CLI is installed and in PATH — IDE extensions rely on the CLI\n- Features missing: Check that both the extension and CLI are updated to the latest version\n- Conflicts: Disable other AI coding extensions that might interfere",
    },
    {
      type: "text",
      body: "**Where to get help when self-diagnosis doesn't solve it**:\n\n- **`/help` command**: In-session help with command reference and tips\n- **Discord community**: Real-time help from other Claude Code users and Anthropic team members\n- **GitHub issues**: Report bugs and search for known issues at the Claude Code repository\n- **Documentation**: The official docs cover setup, configuration, and feature guides\n\nWhen reporting issues, include the output of `claude doctor`, your OS and shell, and the specific error message or behavior you're seeing.",
    },
    {
      type: "tip",
      body: "Keep Claude Code updated. Many issues are fixed in new releases, and running an outdated version is one of the most common causes of unexpected behavior. Use `claude update` or reinstall with `npm install -g @anthropic-ai/claude-code`.",
    },
  ],

  quiz: [
    {
      id: "q1",
      type: "multiple-choice",
      question: "What command runs a comprehensive diagnostic check?",
      options: [
        "claude --check",
        "claude diagnose",
        "claude doctor",
        "claude health",
      ],
      correctAnswer: 2,
      explanation:
        "Run `claude doctor` to verify your installation, PATH, authentication, network connectivity, and settings. It catches most common issues and provides fix instructions.",
    },
    {
      id: "q2",
      type: "multiple-choice",
      question: "What is the most common cause of 'claude: command not found'?",
      options: [
        "Claude Code isn't installed",
        "The network is down",
        "The claude binary isn't in your shell's PATH",
        "Your authentication token expired",
      ],
      correctAnswer: 2,
      explanation:
        "Most 'command not found' errors are PATH issues — the claude binary is installed but not in a directory that's in your shell's PATH.",
    },
    {
      id: "q3",
      type: "multiple-choice",
      question: "What should you do if Claude Code is using too many tokens?",
      options: [
        "Reinstall Claude Code",
        "Use /compact to compress context and start fresh sessions for unrelated tasks",
        "Switch to a different model",
        "Delete your CLAUDE.md file",
      ],
      correctAnswer: 1,
      explanation:
        "Use /compact to compress the current context and start new sessions for unrelated tasks instead of continuing a long conversation. This keeps context focused and reduces token usage.",
    },
    {
      id: "q4",
      type: "multiple-choice",
      question: "What should you include when reporting a bug?",
      options: [
        "Only the error message",
        "A screenshot of your terminal",
        "Output of `claude doctor`, your OS/shell, and the specific error or behavior",
        "Your full conversation history",
      ],
      correctAnswer: 2,
      explanation:
        "Include the output of `claude doctor`, your OS and shell details, and the specific error message or behavior you're seeing. This gives maintainers the information they need to diagnose the issue.",
    },
  ],
};
