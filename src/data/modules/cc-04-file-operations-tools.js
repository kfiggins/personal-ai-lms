export default {
  id: "cc-04-file-operations-tools",
  title: "File Operations Tools",
  whyItMatters:
    "File operations are the most frequently used tools — understanding them helps you know what Claude is doing when it edits your code.",

  content: [
    {
      type: "text",
      body: "File operations are the bread and butter of Claude Code. These tools let Claude read files to understand your code, edit existing files to make changes, create new files, and reorganize your project structure. Almost every task involves file operations in some form.",
    },
    {
      type: "keyPoint",
      body: "Claude always reads a file before editing it. This is by design — it needs to understand the current state of the code before making changes. The Edit tool works by replacing specific strings in files, which means Claude shows you exactly what's changing (like a diff). You'll see the before and after for each edit.",
    },
    {
      type: "example",
      title: "How Claude edits a file",
      code: "# You say:\nclaude \"add error handling to the fetchUser function in api.js\"\n\n# Claude will:\n# 1. Read api.js to see the current fetchUser code\n# 2. Edit the file, showing you the diff\n# 3. You approve or reject the change",
      explanation:
        "Claude reads first, then proposes a targeted edit. You see exactly what lines change before approving. This read-then-edit pattern keeps Claude grounded in your actual code rather than guessing.",
    },
    {
      type: "inPractice",
      body: "When Claude is working on your files, watch the tool calls to understand its approach. If you see it reading files you didn't expect, it's building context. If an edit doesn't look right, reject it and give more specific instructions. Claude can also create entirely new files when needed — just ask.",
    },
  ],

  quiz: [
    {
      id: "q1",
      type: "true-false",
      question:
        "Claude can edit a file without reading it first.",
      options: ["True", "False"],
      correctAnswer: 1,
      explanation:
        "Claude always reads a file before editing it. This ensures it understands the current code and makes accurate, targeted changes rather than guessing.",
    },
    {
      id: "q2",
      type: "multiple-choice",
      question: "How does the Edit tool show you what's changing?",
      options: [
        "It rewrites the entire file",
        "It replaces specific strings, showing before and after like a diff",
        "It only describes the change in text",
        "It opens the file in your editor",
      ],
      correctAnswer: 1,
      explanation:
        "The Edit tool works by replacing specific strings in the file. You see exactly what text is being replaced and what it's being replaced with, similar to a diff view.",
    },
    {
      id: "q3",
      type: "multiple-choice",
      question: "Which of these is NOT a file operation Claude Code can perform?",
      options: [
        "Read a file to understand its contents",
        "Edit specific parts of a file",
        "Create new files from scratch",
        "Compile files into machine code",
      ],
      correctAnswer: 3,
      explanation:
        "Claude Code can read, edit, and create files. Compilation is done through the execution tools (Bash), not through file operations directly.",
    },
  ],
};
