export default {
  id: "gs-07-making-code-changes",
  title: "Making Code Changes",
  whyItMatters:
    "Understanding how Claude Code edits files helps you stay in control while letting it do the heavy lifting.",

  content: [
    {
      type: "text",
      body: "Claude Code can edit your files directly — just describe what you want in plain English. It finds the right files, makes the changes, and shows you exactly what it did before applying anything.",
    },
    {
      type: "example",
      title: "Asking Claude Code to Make a Change",
      code: "> add a hello world function to utils.js",
      explanation:
        "Claude Code will locate utils.js, write the function, and show you a diff of the proposed changes. You review and approve before anything is saved to disk.",
    },
    {
      type: "keyPoint",
      body: "Claude Code always asks for permission before modifying files. You see the proposed changes as a diff and can accept or reject each one. Nothing changes on disk until you approve.",
    },
    {
      type: "text",
      body: "You have several ways to handle proposed changes:\n\n• **Accept individually** — Review and approve each change one at a time\n• **Accept all** — Trust Claude Code and let it apply all changes at once\n• **Reject** — Say no to a change and ask Claude Code to try a different approach\n\nFor longer tasks, you can enable \"Accept all\" mode so Claude Code can work through multiple changes without pausing for each one.",
    },
    {
      type: "inPractice",
      body: "Start by reviewing changes individually to build trust. Once you're comfortable with how Claude Code works, use \"Accept all\" mode for larger tasks to let it work more efficiently.",
    },
  ],

  quiz: [
    {
      id: "q1",
      type: "true-false",
      question:
        "Claude Code modifies files immediately without asking for permission.",
      options: ["True", "False"],
      correctAnswer: 1,
      explanation:
        "Claude Code always asks for permission before modifying files. You see a diff of the proposed changes and can accept or reject them.",
    },
    {
      id: "q2",
      type: "multiple-choice",
      question: "What does Claude Code show you before making a change?",
      options: [
        "A summary email",
        "A diff showing exactly what will change",
        "A progress bar",
        "Nothing — it just makes the change",
      ],
      correctAnswer: 1,
      explanation:
        "Claude Code shows you a diff of the proposed changes so you can review exactly what will be modified before approving.",
    },
    {
      id: "q3",
      type: "multiple-choice",
      question: "What is \"Accept all\" mode?",
      options: [
        "A mode that deletes all files",
        "A mode that lets Claude Code apply all changes without pausing for each one",
        "A mode that only works on new files",
        "A mode that requires admin access",
      ],
      correctAnswer: 1,
      explanation:
        "\"Accept all\" mode lets Claude Code work through multiple changes without pausing for your approval on each one. It's useful for larger tasks where you trust Claude Code's approach.",
    },
    {
      id: "q4",
      type: "multiple-choice",
      question: "What should you do if you don't like a proposed change?",
      options: [
        "Close the terminal immediately",
        "Reject it and ask Claude Code to try a different approach",
        "Accept it and undo manually",
        "There's no way to reject changes",
      ],
      correctAnswer: 1,
      explanation:
        "You can reject any proposed change. Tell Claude Code what you'd prefer instead, and it will try a different approach.",
    },
  ],
};
