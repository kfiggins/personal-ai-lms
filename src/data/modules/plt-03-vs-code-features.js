export default {
  id: "plt-03-vs-code-features",
  title: "VS Code Advanced Features",
  whyItMatters:
    "The VS Code extension goes beyond basic chat. Permission modes, checkpoint rewinding, terminal mode, and multiple panels give you the same power as the CLI with the visual advantages of an IDE.",

  content: [
    {
      type: "text",
      body: "The VS Code extension supports the same permission modes as the CLI — you can toggle them with Shift+Tab, just like in the terminal. This means you can switch between ask mode, auto-edit mode, and full auto mode without leaving your editor.",
    },
    {
      type: "keyPoint",
      body: "Key features include: **permission modes** (toggle with Shift+Tab), **@-mentions** for files and folders, **checkpoint rewinding** with visual diffs to roll back changes, **terminal mode** within VS Code, and **multiple conversation panels** for parallel work.",
    },
    {
      type: "example",
      title: "Working with checkpoints",
      code: "# Claude makes a series of changes to your code\n# You notice the third change went in the wrong direction\n\n# In the VS Code extension:\n# 1. Find the checkpoint in the conversation\n# 2. Click \"View Diff\" to see what changed\n# 3. Click \"Rewind\" to roll back to that point\n# 4. Your files are restored to the checkpoint state",
      explanation:
        "Checkpoint rewinding with visual diffs is especially useful in VS Code where you can see the before/after inline. It gives you confidence to let Claude make bold changes knowing you can always roll back.",
    },
    {
      type: "inPractice",
      body: "Multiple conversation panels are great for working on separate concerns in parallel — one panel refactoring a module while another writes tests. Terminal mode lets you use Claude Code's CLI features right inside VS Code's integrated terminal, so you get the best of both worlds.",
    },
    {
      type: "tip",
      body: "Use checkpoint rewinding liberally. It lets you experiment freely — have Claude try an aggressive refactor, review the diff, and rewind if it doesn't work out. No risk, easy undo.",
    },
  ],

  quiz: [
    {
      id: "q1",
      type: "multiple-choice",
      question:
        "How do you toggle permission modes in the VS Code extension?",
      options: [
        "Through the settings menu",
        "Shift+Tab",
        "Right-click context menu",
        "You can't — it's CLI only",
      ],
      correctAnswer: 1,
      explanation:
        "Permission modes work the same way in VS Code as in the CLI. You toggle them with Shift+Tab to switch between ask, auto-edit, and full auto modes.",
    },
    {
      id: "q2",
      type: "multiple-choice",
      question:
        "What does checkpoint rewinding let you do?",
      options: [
        "Undo your last typed message",
        "Roll back Claude's changes to a previous state with visual diffs",
        "Reset the entire VS Code workspace",
        "Revert to a previous git commit",
      ],
      correctAnswer: 1,
      explanation:
        "Checkpoint rewinding lets you roll back Claude's changes to any previous checkpoint. In VS Code, you get visual diffs showing exactly what changed, making it easy to decide whether to keep or revert changes.",
    },
    {
      id: "q3",
      type: "multiple-choice",
      question:
        "What is terminal mode in the VS Code extension?",
      options: [
        "A mode that makes VS Code look like a terminal",
        "Using Claude Code's CLI features within VS Code's integrated terminal",
        "A text-only interface for slow connections",
        "A debugging tool for terminal applications",
      ],
      correctAnswer: 1,
      explanation:
        "Terminal mode lets you use Claude Code's CLI features right inside VS Code's integrated terminal, giving you the best of both worlds — CLI power with IDE convenience.",
    },
    {
      id: "q4",
      type: "multiple-choice",
      question:
        "Why would you use multiple conversation panels?",
      options: [
        "To get more API credits",
        "To work on separate concerns in parallel",
        "To back up your conversations",
        "To share conversations with teammates",
      ],
      correctAnswer: 1,
      explanation:
        "Multiple conversation panels let you work on separate tasks in parallel — for example, one panel for refactoring while another writes tests. Each panel maintains its own context.",
    },
  ],
};
