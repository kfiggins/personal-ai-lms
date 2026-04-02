export default {
  id: "cfg-11-fast-mode",
  title: "Fast Mode",
  whyItMatters:
    "Fast mode gives you quicker responses without sacrificing quality — it uses the same powerful model but optimized for speed, making it perfect for straightforward tasks.",

  content: [
    {
      type: "text",
      body: "Fast mode is a speed optimization for Claude Code that gives you faster output from the same Claude Opus 4.6 model. It's not a different, less capable model — it's the same model with faster generation. Toggle it on when you need quick answers and off when you want the standard experience.",
    },
    {
      type: "keyPoint",
      body: "A common misconception is that fast mode switches to a cheaper or less capable model. It doesn't — fast mode uses the **same Claude Opus 4.6 model** with optimizations for faster output. The quality of responses stays the same.",
    },
    {
      type: "example",
      title: "Example: Toggling fast mode",
      code: "# Toggle fast mode on or off\n/fast\n\n# Great for:\n# - Quick file edits\n# - Simple questions about your code\n# - Generating boilerplate\n# - Running straightforward commands",
      explanation:
        "Just type /fast to toggle fast mode on or off. There's no configuration needed — it's a simple switch. Use it when you value speed for tasks that don't need extended thinking.",
    },
    {
      type: "tip",
      body: "Toggle fast mode on when you're doing a batch of simple tasks, then toggle it off when you hit something complex that benefits from Claude taking its time.",
    },
  ],

  quiz: [
    {
      id: "q1",
      type: "multiple-choice",
      question: "How do you toggle fast mode?",
      options: [
        "Edit settings.json",
        "Use the /fast command",
        "Restart Claude Code with --fast",
        "Press Ctrl+F",
      ],
      correctAnswer: 1,
      explanation:
        "The /fast command toggles fast mode on and off during your session. No configuration changes needed.",
    },
    {
      id: "q2",
      type: "true-false",
      question: "Fast mode uses a different, less capable model.",
      options: ["True", "False"],
      correctAnswer: 1,
      explanation:
        "False — fast mode uses the same Claude Opus 4.6 model. It's optimized for speed, not downgraded in capability.",
    },
    {
      id: "q3",
      type: "multiple-choice",
      question: "When is fast mode most useful?",
      options: [
        "Complex architectural planning",
        "Debugging subtle race conditions",
        "Simple tasks where speed matters, like quick edits",
        "Writing security-critical code",
      ],
      correctAnswer: 2,
      explanation:
        "Fast mode shines for straightforward tasks like quick edits, simple questions, and generating boilerplate — where you value speed and the task doesn't require extended reasoning.",
    },
  ],
};
