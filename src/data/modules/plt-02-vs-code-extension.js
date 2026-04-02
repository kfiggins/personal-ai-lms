export default {
  id: "plt-02-vs-code-extension",
  title: "VS Code Extension",
  whyItMatters:
    "If VS Code is your daily driver, the Claude Code extension lets you stay in your editor while getting full agentic coding assistance. You get inline diffs, file references, and plan review without ever leaving your IDE.",

  content: [
    {
      type: "text",
      body: "The VS Code extension brings Claude Code directly into your editor. You can install it from the VS Code Marketplace or from the command line with `code --install-extension anthropic.claude-code`. Once installed, open it via the Command Palette with \"Claude Code: Open in New Tab\".",
    },
    {
      type: "keyPoint",
      body: "The extension provides **inline diffs** so you can see exactly what Claude wants to change, **@-mentions** to reference specific files or folders, and **plan review** to approve multi-step changes before they happen. It works alongside the CLI — you can use both interchangeably.",
    },
    {
      type: "example",
      title: "Getting started with VS Code",
      code: "# Install from the command line\ncode --install-extension anthropic.claude-code\n\n# Or search \"Claude Code\" in the VS Code Marketplace\n\n# Open Claude Code in VS Code\nCmd/Ctrl + Shift + P → \"Claude Code: Open in New Tab\"\n\n# Reference selected code by selecting text\n# then mention it in the chat",
      explanation:
        "Installation is quick. Once the extension is active, you can open a Claude Code panel, select code in the editor to reference it, and start a conversation right in your IDE.",
    },
    {
      type: "inPractice",
      body: "The VS Code extension shines when you're reviewing changes. Inline diffs let you see exactly what Claude proposes before accepting. You can select a function, ask Claude to refactor it, review the diff, and approve — all without leaving the editor. It pairs well with the CLI for heavier tasks.",
    },
    {
      type: "tip",
      body: "Use @-mentions to point Claude at specific files or folders. This is faster and more precise than describing file paths in plain text, and it ensures Claude reads exactly the right context.",
    },
  ],

  quiz: [
    {
      id: "q1",
      type: "multiple-choice",
      question:
        "How can you install the Claude Code VS Code extension from the command line?",
      options: [
        "npm install claude-code-vscode",
        "code --install-extension anthropic.claude-code",
        "claude install vscode",
        "brew install claude-code-vscode",
      ],
      correctAnswer: 1,
      explanation:
        "The extension can be installed from the command line using `code --install-extension anthropic.claude-code`, or by searching the VS Code Marketplace.",
    },
    {
      id: "q2",
      type: "multiple-choice",
      question:
        "How do you open Claude Code inside VS Code?",
      options: [
        "Right-click in the editor and select 'Open Claude'",
        "It opens automatically on startup",
        "Command Palette → 'Claude Code: Open in New Tab'",
        "Click the Claude icon in the system tray",
      ],
      correctAnswer: 2,
      explanation:
        "You open Claude Code in VS Code via the Command Palette (Cmd/Ctrl + Shift + P) and searching for \"Claude Code: Open in New Tab\".",
    },
    {
      id: "q3",
      type: "multiple-choice",
      question:
        "What feature lets you reference specific files in the VS Code extension?",
      options: [
        "File drag and drop",
        "@-mentions",
        "The /file command",
        "Copy-pasting file contents",
      ],
      correctAnswer: 1,
      explanation:
        "@-mentions let you reference specific files and folders directly in your conversation with Claude, giving it precise context about what you're working on.",
    },
    {
      id: "q4",
      type: "multiple-choice",
      question:
        "Can you use the CLI and VS Code extension at the same time?",
      options: [
        "No, they conflict with each other",
        "Only if they're in different projects",
        "Yes, they work alongside each other",
        "Only in enterprise mode",
      ],
      correctAnswer: 2,
      explanation:
        "The VS Code extension works alongside the CLI. You can use both interchangeably — many developers use the CLI for complex tasks and the extension for visual review.",
    },
  ],
};
