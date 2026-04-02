export default {
  id: "cc-12-checkpoints-and-undo",
  title: "Checkpoints and Undo",
  whyItMatters:
    "Checkpoints let you safely experiment — knowing you can always undo gives you confidence to let Claude try things.",

  content: [
    {
      type: "text",
      body: "Every time Claude edits a file, it automatically creates a checkpoint — a snapshot of the file's contents before the change. This means every file edit is reversible. If Claude makes a change you don't like, you can rewind to any previous state without worrying about losing your original code.",
    },
    {
      type: "keyPoint",
      body: "Press Escape twice to open the checkpoint history and rewind to a previous state. This is separate from git — checkpoints are local to your session and track every individual edit, not just commits. Think of it as a fine-grained undo that goes beyond Ctrl+Z.",
    },
    {
      type: "example",
      title: "Using checkpoints",
      code: "# Claude makes 5 edits to refactor a file\n# Edit 3 introduced a subtle bug\n# Press Esc twice to see checkpoint history\n# Select the state after edit 2\n# File is restored to that exact state\n\n# Note: this only works for local file changes\n# Remote actions (API calls, database writes) cannot be undone",
      explanation:
        "Checkpoints let you surgically rewind to any point in Claude's editing history. You're not limited to undoing the last change — you can jump back to any checkpoint.",
    },
    {
      type: "inPractice",
      body: "Checkpoints make it safe to let Claude experiment. If you're unsure about an approach, let Claude try it — you can always rewind. Just remember: checkpoints only cover local file changes. If Claude runs a command that modifies a database or calls an external API, those actions can't be undone with checkpoints.",
    },
  ],

  quiz: [
    {
      id: "q1",
      type: "multiple-choice",
      question: "When does Claude create a checkpoint?",
      options: [
        "Only when you ask it to",
        "Automatically before every file edit",
        "Once per session",
        "Only before deleting files",
      ],
      correctAnswer: 1,
      explanation:
        "Claude automatically creates a checkpoint before every file edit. You don't need to do anything — it's built into the editing process.",
    },
    {
      id: "q2",
      type: "multiple-choice",
      question: "How do you access the checkpoint history?",
      options: [
        "Type /checkpoints",
        "Press Escape twice",
        "Run 'claude --undo'",
        "Check the git log",
      ],
      correctAnswer: 1,
      explanation:
        "Press Escape twice to open the checkpoint history. From there you can select any previous state to rewind to.",
    },
    {
      id: "q3",
      type: "multiple-choice",
      question: "Which of these CANNOT be undone with checkpoints?",
      options: [
        "Editing a JavaScript file",
        "Creating a new file",
        "A database migration that was run via Bash",
        "Renaming a variable across files",
      ],
      correctAnswer: 2,
      explanation:
        "Checkpoints only cover local file changes. Remote actions like database writes, API calls, or deployed changes cannot be reversed with checkpoints.",
    },
  ],
};
