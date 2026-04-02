export default {
  id: "adv-04-extended-thinking",
  title: "Extended Thinking",
  whyItMatters:
    "Extended thinking gives Claude more time to reason through complex problems before responding. For hard tasks — architectural decisions, tricky bugs, multi-step refactors — the quality difference between quick and deep thinking is substantial.",

  content: [
    {
      type: "text",
      body: "Claude Code supports configurable reasoning effort levels that control how deeply Claude thinks before responding. Higher effort means more internal reasoning tokens, which leads to better results on complex tasks but costs more and takes longer.\n\nThe four effort levels are:\n- **low**: Minimal reasoning, fast responses. Good for simple file reads, straightforward edits, and quick questions.\n- **medium**: Balanced reasoning. The default for most tasks.\n- **high**: Deep reasoning for complex problems. Use for architectural decisions, multi-file refactors, and tricky debugging.\n- **max**: Maximum reasoning depth — also called \"ultrathink.\" Reserved for the hardest problems.",
    },
    {
      type: "keyPoint",
      body: "Launch Claude with maximum reasoning using `claude --effort max` (ultrathink mode). This gives Claude the deepest possible reasoning for complex tasks like designing system architecture, debugging subtle race conditions, or planning large refactors. It uses significantly more tokens but produces markedly better results for hard problems.",
    },
    {
      type: "text",
      body: "You don't have to restart Claude to change the effort level. During a session, press **Shift+Tab** on the thinking indicator to cycle through effort levels. This lets you use low effort for simple tasks and ramp up to high or max when you hit something complex.\n\nYou can also set a global default in your settings so you don't have to specify it every time:\n```json\n{\n  \"reasoning_effort\": \"high\"\n}\n```",
    },
    {
      type: "inPractice",
      body: "A good strategy is to start sessions at medium effort and bump up to high or max when the task requires it. There's no benefit to using max effort for \"rename this variable\" — save it for \"redesign this caching layer to handle concurrent invalidation.\" Match the thinking depth to the problem complexity.",
    },
  ],

  quiz: [
    {
      id: "q1",
      type: "multiple-choice",
      question: "What does `claude --effort max` do?",
      options: [
        "Uses maximum CPU resources",
        "Enables the deepest reasoning mode (ultrathink)",
        "Runs Claude at maximum speed",
        "Increases the context window to maximum size",
      ],
      correctAnswer: 1,
      explanation:
        "The --effort max flag enables ultrathink mode, giving Claude the deepest possible reasoning. It uses more tokens but produces better results for hard problems.",
    },
    {
      id: "q2",
      type: "multiple-choice",
      question: "How do you change effort level during an active session?",
      options: [
        "Type /effort high",
        "Press Shift+Tab on the thinking indicator",
        "Restart Claude with a different flag",
        "Edit the settings file and reload",
      ],
      correctAnswer: 1,
      explanation:
        "Press Shift+Tab on the thinking indicator to cycle through effort levels during a session, without needing to restart.",
    },
    {
      id: "q3",
      type: "multiple-choice",
      question: "Which effort level is most appropriate for renaming a variable?",
      options: [
        "max (ultrathink)",
        "high",
        "medium",
        "low",
      ],
      correctAnswer: 3,
      explanation:
        "Simple tasks like variable renaming don't benefit from deep reasoning. Low effort gives fast responses and saves tokens for when you really need them.",
    },
    {
      id: "q4",
      type: "multiple-choice",
      question: "What is the trade-off of higher effort levels?",
      options: [
        "Less accurate results but faster speed",
        "More tokens used but better results for complex tasks",
        "Reduced context window size",
        "No trade-off — always use max",
      ],
      correctAnswer: 1,
      explanation:
        "Higher effort levels use more tokens and take longer, but produce markedly better results for complex problems. The key is matching effort to problem complexity.",
    },
  ],
};
