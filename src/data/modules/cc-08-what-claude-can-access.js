export default {
  id: "cc-08-what-claude-can-access",
  title: "What Claude Can Access",
  whyItMatters:
    "Knowing what Claude can see and interact with helps you understand its capabilities and limitations.",

  content: [
    {
      type: "text",
      body: "Claude Code has access to everything in your local development environment — but only what you'd expect. It can see your project files and subdirectories, your terminal (any command you could run), your git state (current branch, uncommitted changes, full history), and your CLAUDE.md configuration file.",
    },
    {
      type: "keyPoint",
      body: "Beyond your project, Claude can also tap into auto memory from previous sessions (things it learned about your preferences and project), and extensions like MCP servers, custom skills, and subagents. These extensions expand what Claude can do beyond the built-in tools.",
    },
    {
      type: "text",
      body: "Claude cannot access files outside your project directory by default, and it cannot reach private networks or services unless you've configured access. It also can't persist information between sessions on its own — that's what CLAUDE.md and auto memory are for.",
    },
    {
      type: "example",
      title: "What Claude sees when you start a session",
      code: "# Claude automatically has access to:\n# - All files in your current directory and subdirs\n# - Your terminal (bash/zsh commands)\n# - Git: branch, status, log, diff\n# - CLAUDE.md (project instructions)\n# - Auto memory (learned preferences)\n# - Any configured MCP servers or skills",
      explanation:
        "When you start Claude Code in a project directory, it can immediately access everything listed above. You don't need to manually point it at files or configure access for local resources.",
    },
    {
      type: "inPractice",
      body: "Think of Claude as having the same access as you do in your terminal. If you can run a command, Claude can too. If you can read a file, Claude can too. The main boundary is your project directory — Claude works within your current workspace.",
    },
  ],

  quiz: [
    {
      id: "q1",
      type: "multiple-choice",
      question: "Which of these can Claude Code access by default?",
      options: [
        "Only files you explicitly share",
        "Your project files, terminal, git state, and CLAUDE.md",
        "All files on your computer",
        "Only code files, not configuration files",
      ],
      correctAnswer: 1,
      explanation:
        "Claude Code can access your project files and subdirectories, your terminal, git state, and CLAUDE.md. It stays within your project workspace by default.",
    },
    {
      id: "q2",
      type: "true-false",
      question:
        "Claude Code can remember things from previous sessions without any configuration.",
      options: ["True", "False"],
      correctAnswer: 0,
      explanation:
        "Claude Code has an auto memory system that remembers things from previous sessions — like your preferences and project details. CLAUDE.md also persists information between sessions.",
    },
    {
      id: "q3",
      type: "multiple-choice",
      question: "What are MCP servers in the context of Claude Code?",
      options: [
        "Servers that host your code",
        "Extensions that expand Claude's capabilities beyond built-in tools",
        "Backup servers for your project",
        "Monitoring tools for Claude Code performance",
      ],
      correctAnswer: 1,
      explanation:
        "MCP (Model Context Protocol) servers are extensions that give Claude access to additional tools and data sources beyond its built-in capabilities.",
    },
    {
      id: "q4",
      type: "multiple-choice",
      question: "What is the main boundary for Claude Code's access?",
      options: [
        "It can only access 10 files at a time",
        "It works within your current project directory/workspace",
        "It can only access files smaller than 1MB",
        "It only works with JavaScript files",
      ],
      correctAnswer: 1,
      explanation:
        "Claude Code works within your current project directory. It has the same access as you do in your terminal — if you can read a file or run a command, Claude can too.",
    },
  ],
};
