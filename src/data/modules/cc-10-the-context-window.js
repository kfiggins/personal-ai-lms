export default {
  id: "cc-10-the-context-window",
  title: "The Context Window",
  whyItMatters:
    "The context window is Claude's working memory — understanding it helps you avoid running into limits and keep Claude effective.",

  content: [
    {
      type: "text",
      body: "The context window is everything Claude can \"see\" at once during a session. It holds your conversation messages, file contents that Claude has read, command outputs, your CLAUDE.md instructions, and system instructions. Think of it as Claude's short-term working memory — there's a fixed amount of space, and everything competes for room.",
    },
    {
      type: "keyPoint",
      body: "As you work, the context fills up. Every file Claude reads, every command output, every message back and forth — it all takes space. When the context gets full, Claude automatically compacts it: older tool outputs are cleared first, then earlier messages get summarized. Your most recent work and key code stay intact.",
    },
    {
      type: "example",
      title: "Checking your context usage",
      code: "# During a session, type:\n/context\n\n# This shows you what's using space:\n# - Conversation messages: 45%\n# - File contents: 30%\n# - Command outputs: 15%\n# - System instructions + CLAUDE.md: 10%",
      explanation:
        "The /context command gives you a breakdown of what's filling the context window. If you're running low on space, you'll know what's taking the most room.",
    },
    {
      type: "text",
      body: "Persistent rules and instructions should go in CLAUDE.md, not in conversation messages. Conversation messages can get compacted away when context fills up, but CLAUDE.md is always loaded fresh at the start of each turn. This ensures your important instructions survive compaction.",
    },
    {
      type: "inPractice",
      body: "For long sessions, keep an eye on context usage with /context. If Claude starts forgetting earlier instructions or context, it's a sign that compaction has kicked in. Start a new session for a fresh start, or put critical instructions in CLAUDE.md so they're always available.",
    },
  ],

  quiz: [
    {
      id: "q1",
      type: "multiple-choice",
      question: "What does the context window contain?",
      options: [
        "Only the current file being edited",
        "Conversation, file contents, command outputs, CLAUDE.md, and system instructions",
        "Your entire codebase",
        "Only the last 10 messages",
      ],
      correctAnswer: 1,
      explanation:
        "The context window holds everything Claude can see: your conversation, files it's read, command outputs, CLAUDE.md instructions, and system instructions.",
    },
    {
      id: "q2",
      type: "multiple-choice",
      question: "What happens when the context window fills up?",
      options: [
        "Claude crashes and you must restart",
        "Claude automatically compacts — clearing old outputs and summarizing earlier messages",
        "All files are removed from context",
        "Nothing — the context window has no limit",
      ],
      correctAnswer: 1,
      explanation:
        "When context fills up, Claude automatically compacts: older tool outputs are cleared first, then earlier messages get summarized. Recent work and key code are preserved.",
    },
    {
      id: "q3",
      type: "multiple-choice",
      question: "How do you check what's using context space?",
      options: [
        "Run 'claude --context'",
        "Type /context during a session",
        "Check the CLAUDE.md file",
        "Context usage isn't visible",
      ],
      correctAnswer: 1,
      explanation:
        "Type /context during a session to see a breakdown of what's using space in your context window.",
    },
    {
      id: "q4",
      type: "multiple-choice",
      question: "Why should persistent instructions go in CLAUDE.md instead of conversation?",
      options: [
        "CLAUDE.md files are faster to read",
        "Conversation messages can get compacted away, but CLAUDE.md is always loaded fresh",
        "CLAUDE.md supports more formatting options",
        "There is no difference",
      ],
      correctAnswer: 1,
      explanation:
        "CLAUDE.md is loaded fresh at the start of each turn, so its instructions always survive context compaction. Conversation messages can get summarized or cleared when context fills up.",
    },
    {
      id: "q5",
      type: "multiple-choice",
      question: "What's the best strategy when Claude starts forgetting earlier context?",
      options: [
        "Type your instructions louder",
        "Start a new session or put critical instructions in CLAUDE.md",
        "Switch to a different model",
        "Delete files to free up space",
      ],
      correctAnswer: 1,
      explanation:
        "If Claude is forgetting earlier context, compaction has kicked in. Start a fresh session for a clean slate, or put important instructions in CLAUDE.md so they persist across compaction cycles.",
    },
  ],
};
