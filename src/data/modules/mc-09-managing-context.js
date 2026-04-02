export default {
  id: "mc-09-managing-context",
  title: "Managing Context Effectively",
  whyItMatters:
    "Running out of context mid-task means Claude loses track of what it's doing. Proactive context management keeps your sessions productive and avoids frustrating restarts.",

  content: [
    {
      type: "text",
      body: "Context management is about making the most of Claude's limited working memory. You have several tools at your disposal: clearing context entirely, compressing it to keep the important parts, writing persistent rules in CLAUDE.md, and leveraging subagents to offload work without bloating your main context.",
    },
    {
      type: "keyPoint",
      body: "Your main context management tools: **`/clear`** starts a fresh session (nuclear option), **`/compact`** compresses the conversation while keeping key context (with an optional focus topic), **CLAUDE.md** for persistent rules that survive any reset, and **subagents** which get their own separate context windows.",
    },
    {
      type: "example",
      title: "Using /compact with a focus",
      code: "# Compress everything, keeping focus on what matters:\n/compact focus on the authentication refactor\n\n# Claude will summarize the conversation, preserving details\n# about the auth refactor while compressing unrelated discussion.\n\n# Your CLAUDE.md's \"Compact Instructions\" section is always\n# preserved during compaction — use it for must-keep context.",
      explanation:
        "The optional focus parameter tells Claude what to prioritize when compressing. The \"Compact Instructions\" section in CLAUDE.md is always preserved, so put critical context there.",
    },
    {
      type: "inPractice",
      body: "Move persistent rules and context to CLAUDE.md instead of repeating them in conversation. If you find yourself telling Claude the same thing every session, that's a CLAUDE.md entry. Use subagents for research-heavy tasks — they get their own context window, so exploring a large codebase won't eat into your main conversation context.",
    },
    {
      type: "tip",
      body: "Skills load on demand, not at session start. This means custom slash commands don't consume context until you actually invoke them. If you have complex workflows defined as skills, they're free until you need them.",
    },
    {
      type: "warning",
      body: "Don't wait until you're out of context to manage it. If you're deep into a complex task, use `/compact` proactively to free up space. Signs you're running low: Claude's responses become shorter, it forgets earlier parts of the conversation, or it starts asking questions you already answered.",
    },
  ],

  quiz: [
    {
      id: "q1",
      type: "multiple-choice",
      question: "What does the /compact command do?",
      options: [
        "Deletes all conversation history permanently",
        "Compresses the conversation while preserving key context",
        "Saves the conversation to a file",
        "Reduces the size of CLAUDE.md",
      ],
      correctAnswer: 1,
      explanation:
        "/compact compresses the conversation to free up context while keeping the important parts. You can optionally specify a focus topic to prioritize what gets preserved.",
    },
    {
      id: "q2",
      type: "multiple-choice",
      question:
        "What section of CLAUDE.md is always preserved during compaction?",
      options: [
        "The first section",
        "The \"Tech Stack\" section",
        "The \"Compact Instructions\" section",
        "All sections are preserved equally",
      ],
      correctAnswer: 2,
      explanation:
        "The \"Compact Instructions\" section in CLAUDE.md is specifically preserved during compaction. Put must-keep context there.",
    },
    {
      id: "q3",
      type: "multiple-choice",
      question: "Why are subagents helpful for context management?",
      options: [
        "They run faster than the main agent",
        "They get their own separate context windows, not bloating yours",
        "They can access more files",
        "They have larger context windows",
      ],
      correctAnswer: 1,
      explanation:
        "Subagents get their own context windows. This means research and exploration they do doesn't consume your main conversation's context — they report back a summary.",
    },
    {
      id: "q4",
      type: "true-false",
      question:
        "Skills consume context at session start, even if you don't use them.",
      options: ["True", "False"],
      correctAnswer: 1,
      explanation:
        "Skills load on demand — they don't consume context until you actually invoke them. This makes them free in terms of context until needed.",
    },
    {
      id: "q5",
      type: "multiple-choice",
      question:
        "What's the best place for rules you find yourself repeating every session?",
      options: [
        "In a pinned message at the top of the conversation",
        "In your CLAUDE.md file",
        "In a separate text file on your desktop",
        "In your shell's .bashrc file",
      ],
      correctAnswer: 1,
      explanation:
        "If you keep repeating the same instructions to Claude, put them in CLAUDE.md. It's loaded automatically every session, so Claude always has them without you needing to say them again.",
    },
  ],
};
