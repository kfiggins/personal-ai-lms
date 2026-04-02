export default {
  id: "gs-03-installing-claude-code",
  title: "Installing Claude Code",
  whyItMatters:
    "Getting Claude Code installed correctly is the first step to using it — and the right installation method saves you headaches later.",

  content: [
    {
      type: "text",
      body: "There are three ways to install Claude Code. The native install is recommended because it auto-updates, keeping you on the latest version without any extra work.",
    },
    {
      type: "example",
      title: "Native Install (Recommended)",
      code: "# macOS and Linux\ncurl -fsSL https://claude.ai/install.sh | sh\n\n# Windows (PowerShell)\nirm https://claude.ai/install.ps1 | iex",
      explanation:
        "The native installer is the recommended method. It sets up Claude Code and configures automatic updates so you always have the latest features and fixes.",
    },
    {
      type: "text",
      body: "You can also install via package managers:\n\n• **Homebrew** (macOS/Linux): `brew install claude-code`\n• **WinGet** (Windows): `winget install claude-code`\n\nNote: Homebrew and WinGet installs do **not** auto-update — you'll need to update manually. On Windows, you also need Git for Windows installed.",
    },
    {
      type: "keyPoint",
      body: "After installing, verify everything works by running `claude --version` to check the version and `claude doctor` to diagnose any configuration issues.",
    },
    {
      type: "inPractice",
      body: "For most developers, the native install with auto-updates is the best choice. Use `claude doctor` if you run into any issues — it checks your environment and suggests fixes.",
    },
  ],

  quiz: [
    {
      id: "q1",
      type: "multiple-choice",
      question: "Which installation method is recommended for Claude Code?",
      options: [
        "Homebrew",
        "WinGet",
        "Native install via curl/PowerShell",
        "npm install",
      ],
      correctAnswer: 2,
      explanation:
        "The native install is recommended because it includes automatic updates, ensuring you always have the latest version.",
    },
    {
      id: "q2",
      type: "true-false",
      question: "Homebrew and WinGet installations of Claude Code auto-update.",
      options: ["True", "False"],
      correctAnswer: 1,
      explanation:
        "Only the native install auto-updates. Homebrew and WinGet installations require manual updates.",
    },
    {
      id: "q3",
      type: "multiple-choice",
      question:
        "Which command verifies that Claude Code is installed correctly?",
      options: [
        "claude --check",
        "claude --version",
        "claude verify",
        "claude --test",
      ],
      correctAnswer: 1,
      explanation:
        "Running `claude --version` shows the installed version, confirming that Claude Code is installed. You can also use `claude doctor` for a more thorough check.",
    },
    {
      id: "q4",
      type: "multiple-choice",
      question: "What extra requirement exists for Windows installations?",
      options: [
        "Windows Subsystem for Linux",
        "Visual Studio",
        "Git for Windows",
        "Docker Desktop",
      ],
      correctAnswer: 2,
      explanation:
        "Windows installations require Git for Windows to be installed for Claude Code to work properly with version control.",
    },
  ],
};
