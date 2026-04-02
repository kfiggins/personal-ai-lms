export default {
  id: "mc-08-context-window-deep-dive",
  title: "Context Window Deep Dive",
  whyItMatters:
    "Everything Claude does costs context. Understanding what fills up the context window — and how much — helps you work more efficiently and avoid hitting limits mid-task.",

  content: [
    {
      type: "text",
      body: "The context window is the total amount of text Claude can \"see\" at once during a session. It's not unlimited — and it fills up faster than you might think. Several things load automatically before you even type anything: your CLAUDE.md, auto memory, and system instructions. Then every file you read, command you run, and tool output adds more.",
    },
    {
      type: "keyPoint",
      body: "What loads automatically at session start: **CLAUDE.md** (project and user-level), **auto memory** (first 200 lines / 25KB), and **system instructions** (Claude's built-in guidance). These are the \"fixed costs\" of every session. Everything else — file reads, command outputs, conversation — is variable.",
    },
    {
      type: "example",
      title: "Checking your context usage",
      code: "# Use the /context command to see a breakdown:\n/context\n\n# Output shows something like:\n# System instructions:  ~15%\n# CLAUDE.md:            ~5%\n# Auto memory:          ~2%\n# Conversation:         ~45%\n# Tool results:         ~30%\n# Available:            ~3%",
      explanation:
        "The /context command gives you a visual breakdown of how your context window is being used. Tool results and conversation history typically consume the most space.",
    },
    {
      type: "inPractice",
      body: "Each file read costs tokens — a large file can eat a significant chunk of context. Command outputs (like test results or build logs) also consume context. When you're working on a complex task and notice Claude's responses getting shorter or less accurate, you're likely running low on context. That's when it's time to use `/compact` or `/clear`.",
    },
    {
      type: "tip",
      body: "MCP tool definitions are deferred by default — they don't consume context until Claude actually needs to use them. This is an optimization that keeps your context free for actual work. If you have many MCP servers configured, this can save a significant amount of context.",
    },
  ],

  quiz: [
    {
      id: "q1",
      type: "multiple-choice",
      question:
        "Which of these loads automatically into the context window at session start?",
      options: [
        "All files in your project",
        "CLAUDE.md, auto memory, and system instructions",
        "Only your conversation history",
        "Nothing — context starts empty",
      ],
      correctAnswer: 1,
      explanation:
        "CLAUDE.md, auto memory, and system instructions all load automatically at the start of every session. These are the fixed costs of your context window.",
    },
    {
      id: "q2",
      type: "multiple-choice",
      question: "What command shows your context window usage breakdown?",
      options: ["/memory", "/status", "/context", "/usage"],
      correctAnswer: 2,
      explanation:
        "The /context command shows a breakdown of how your context window is being used — how much is taken by system instructions, CLAUDE.md, conversation, tool results, etc.",
    },
    {
      id: "q3",
      type: "true-false",
      question:
        "MCP tool definitions are loaded eagerly and always consume context.",
      options: ["True", "False"],
      correctAnswer: 1,
      explanation:
        "MCP tool definitions are deferred by default — they only consume context when Claude actually needs to use them. This optimization keeps more context free for your work.",
    },
    {
      id: "q4",
      type: "multiple-choice",
      question:
        "What typically consumes the most context during a session?",
      options: [
        "CLAUDE.md file",
        "Auto memory entries",
        "Conversation and tool results (file reads, command outputs)",
        "System instructions",
      ],
      correctAnswer: 2,
      explanation:
        "Conversation history and tool results (file reads, command outputs, search results) typically consume the most context. CLAUDE.md and auto memory are relatively small fixed costs.",
    },
  ],
};
