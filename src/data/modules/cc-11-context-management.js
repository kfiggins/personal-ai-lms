export default {
  id: "cc-11-context-management",
  title: "Context Management",
  whyItMatters:
    "Managing context effectively keeps Claude sharp during long sessions and prevents important information from being lost.",

  content: [
    {
      type: "text",
      body: "When the context window fills up, Claude follows a specific priority order: older tool outputs (file reads, command results) are cleared first, then earlier messages get summarized. Your most recent requests and key code snippets are preserved longest. But early instructions — like \"always use TypeScript\" — can be lost if they were only said in conversation.",
    },
    {
      type: "keyPoint",
      body: "Use /compact with a focus area to proactively manage context. For example, '/compact focus on the auth refactoring' tells Claude to preserve auth-related context while aggressively compacting everything else. You can also add a \"Compact Instructions\" section in CLAUDE.md to control what gets preserved automatically.",
    },
    {
      type: "example",
      title: "Proactive context management",
      code: "# Manually compact with a focus:\n/compact focus on the database migration work\n\n# In CLAUDE.md, add compact instructions:\n# ## Compact Instructions\n# When compacting, preserve all context about\n# the API schema and migration files.",
      explanation:
        "Manual compaction with /compact lets you choose what matters most. The Compact Instructions section in CLAUDE.md automates this so you don't have to remember each time.",
    },
    {
      type: "text",
      body: "Two other features help with context: skills load on demand (they're only pulled into context when needed, not all at once), and subagents get their own fresh context window. Delegating a subtask to a subagent means it doesn't fill up your main context.",
    },
    {
      type: "inPractice",
      body: "For short tasks, you rarely need to think about context management. For long sessions with lots of file reading and command running, use /compact periodically and put your most important instructions in CLAUDE.md. If a subtask requires reading many files, consider whether a subagent would keep your main context cleaner.",
    },
  ],

  quiz: [
    {
      id: "q1",
      type: "multiple-choice",
      question: "What gets cleared first when context fills up?",
      options: [
        "Your most recent messages",
        "CLAUDE.md instructions",
        "Older tool outputs like file reads and command results",
        "System instructions",
      ],
      correctAnswer: 2,
      explanation:
        "Older tool outputs (file contents, command results) are cleared first, then earlier conversation messages get summarized. Recent work and CLAUDE.md are preserved longest.",
    },
    {
      id: "q2",
      type: "multiple-choice",
      question: "What does '/compact focus on the auth refactoring' do?",
      options: [
        "Deletes auth-related files",
        "Preserves auth-related context while aggressively compacting everything else",
        "Creates a new session focused on auth",
        "Compresses auth files on disk",
      ],
      correctAnswer: 1,
      explanation:
        "/compact with a focus area tells Claude to keep context related to that topic while compacting (summarizing or removing) less relevant information.",
    },
    {
      id: "q3",
      type: "multiple-choice",
      question: "How do subagents help with context management?",
      options: [
        "They compress the main context",
        "They get their own fresh context window, so subtasks don't fill up your main context",
        "They back up your context to disk",
        "They have unlimited context",
      ],
      correctAnswer: 1,
      explanation:
        "Subagents operate in their own fresh context window. Delegating a file-heavy subtask to a subagent keeps your main context window clean and focused.",
    },
    {
      id: "q4",
      type: "multiple-choice",
      question:
        "Where should you put instructions that must survive context compaction?",
      options: [
        "In your first message of the session",
        "In the CLAUDE.md file",
        "In a comment in your code",
        "In a separate terminal window",
      ],
      correctAnswer: 1,
      explanation:
        "CLAUDE.md is loaded fresh at the start of each turn, so its instructions always survive compaction. Conversation messages can be summarized or lost during compaction.",
    },
  ],
};
