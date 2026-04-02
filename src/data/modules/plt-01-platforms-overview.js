export default {
  id: "plt-01-platforms-overview",
  title: "Platforms Overview",
  whyItMatters:
    "Claude Code runs on multiple surfaces — CLI, VS Code, JetBrains, desktop app, and the web. Knowing what's available helps you pick the right tool for how you work, whether you're a terminal power user or prefer a visual IDE.",

  content: [
    {
      type: "text",
      body: "Every platform that runs Claude Code shares the same core engine. The CLI is the most full-featured surface, but the IDE extensions, desktop app, and web interface all tap into the same capabilities. Your CLAUDE.md files, settings, and MCP servers carry across all of them.",
    },
    {
      type: "keyPoint",
      body: "All Claude Code surfaces — CLI, VS Code, JetBrains, Desktop, Web — share the same underlying engine. The difference is in the interface, not the intelligence. Your configuration and memory are portable across platforms.",
    },
    {
      type: "example",
      title: "Choosing the right surface",
      code: "# Terminal power user who lives in the shell?\n→ CLI (most full-featured, fastest workflow)\n\n# Prefer visual diffs and inline editing?\n→ VS Code or JetBrains extension\n\n# Want a standalone app with multiple sessions?\n→ Desktop app (macOS / Windows)\n\n# No local setup, working from any browser?\n→ claude.ai/code (web)\n\n# Quick task from your phone?\n→ Remote control or Dispatch",
      explanation:
        "Pick the surface that matches your workflow. Many developers use multiple surfaces throughout the day — CLI for heavy coding, VS Code for review, and the web or phone for kicking off tasks on the go.",
    },
    {
      type: "inPractice",
      body: "A common pattern is to use the CLI for complex multi-file changes, the VS Code extension for code review and visual diffs, and the web interface for kicking off long-running tasks you can check on later. The desktop app is great when you want dedicated side-by-side sessions without cluttering your IDE.",
    },
    {
      type: "tip",
      body: "You don't have to pick just one platform. Settings, CLAUDE.md, and MCP servers work across all surfaces, so switching between them is seamless. Use whatever fits the moment.",
    },
  ],

  quiz: [
    {
      id: "q1",
      type: "multiple-choice",
      question:
        "What do all Claude Code platforms have in common?",
      options: [
        "They all require a terminal",
        "They share the same underlying engine",
        "They all have identical UIs",
        "They each use different AI models",
      ],
      correctAnswer: 1,
      explanation:
        "All Claude Code surfaces share the same core engine. The difference is the interface — terminal, IDE, desktop app, or web — not the underlying intelligence or capabilities.",
    },
    {
      id: "q2",
      type: "multiple-choice",
      question:
        "Which Claude Code surface is considered the most full-featured?",
      options: [
        "VS Code extension",
        "Desktop app",
        "The CLI",
        "The web interface",
      ],
      correctAnswer: 2,
      explanation:
        "The CLI is the most full-featured surface for Claude Code. It provides the fastest workflow and the broadest set of capabilities.",
    },
    {
      id: "q3",
      type: "multiple-choice",
      question:
        "Do CLAUDE.md files and MCP servers work across different Claude Code platforms?",
      options: [
        "No, each platform has its own configuration",
        "Only between CLI and VS Code",
        "Yes, they work across all platforms",
        "Only if you manually sync them",
      ],
      correctAnswer: 2,
      explanation:
        "CLAUDE.md files, settings, and MCP servers are portable across all Claude Code platforms. Your configuration follows you regardless of which surface you use.",
    },
    {
      id: "q4",
      type: "multiple-choice",
      question:
        "What's a good reason to use multiple Claude Code surfaces?",
      options: [
        "Each surface uses a different AI model",
        "Different tasks are better suited to different interfaces",
        "You get more API credits by using multiple surfaces",
        "It's required for team collaboration",
      ],
      correctAnswer: 1,
      explanation:
        "Different tasks benefit from different interfaces. The CLI is great for heavy coding, IDE extensions for visual review, and the web for kicking off tasks remotely. Use whatever fits the moment.",
    },
  ],
};
