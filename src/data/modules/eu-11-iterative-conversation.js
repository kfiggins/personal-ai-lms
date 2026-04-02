export default {
  id: "eu-11-iterative-conversation",
  title: "Iterative Conversation",
  whyItMatters:
    "You don't need perfect prompts. Claude Code is conversational — start with what you want, then refine through natural back-and-forth until you get exactly the right result.",

  content: [
    {
      type: "text",
      body: "Claude Code is conversational, not transactional. You don't need to craft the perfect prompt on your first try. Start with a rough description of what you want, see what Claude does, then refine through follow-up messages. Each turn builds on the context of the conversation.",
    },
    {
      type: "example",
      title: "Example: Iterating to the right result",
      code: "You: \"Add a search bar to the dashboard\"\nClaude: [adds a basic search bar]\nYou: \"Make it filter results as the user types\"\nClaude: [adds real-time filtering]\nYou: \"Add a debounce so it doesn't fire on every keystroke\"\nClaude: [adds debounce logic]",
      explanation:
        "Each message builds on the previous one. You didn't need to specify debouncing upfront — you refined as you saw the results. This iterative approach often produces better outcomes than trying to specify everything at once.",
    },
    {
      type: "keyPoint",
      body: "You can interrupt Claude at any point during execution by pressing Escape. If you see it heading in the wrong direction, stop it and redirect. Don't wait for it to finish — steering mid-course is faster than starting over.",
    },
    {
      type: "tip",
      body: "Don't start a new session when the first attempt isn't right. Iterate in the same conversation — Claude retains all the context from previous turns. Starting over means Claude loses everything it learned about your codebase and requirements.",
    },
    {
      type: "inPractice",
      body: "The best Claude Code users treat it like a conversation with a colleague. They start with the high-level goal, review the initial approach, and provide feedback to steer toward the ideal solution. This natural workflow is faster and produces better results than trying to write the perfect one-shot prompt.",
    },
  ],

  quiz: [
    {
      id: "q1",
      type: "multiple-choice",
      question: "What should you do if Claude Code's first attempt isn't quite right?",
      options: [
        "Start a completely new session",
        "Give up and do it manually",
        "Continue the conversation — describe what to change and let Claude iterate",
        "Rewrite the entire prompt from scratch",
      ],
      correctAnswer: 2,
      explanation:
        "Claude retains context within a conversation. Iterating in the same session lets Claude build on what it already knows about your codebase and requirements.",
    },
    {
      id: "q2",
      type: "true-false",
      question:
        "You need to craft a perfect, detailed prompt before Claude Code can help you.",
      options: ["True", "False"],
      correctAnswer: 1,
      explanation:
        "Claude Code is conversational — you can start with a rough idea and refine through follow-up messages. Perfect prompts aren't necessary; iteration is the natural workflow.",
    },
    {
      id: "q3",
      type: "multiple-choice",
      question: "How can you redirect Claude Code if it's heading in the wrong direction?",
      options: [
        "You can't — you must wait for it to finish",
        "Press Escape to interrupt, then provide new instructions",
        "Close the terminal and start over",
        "Send an email to Anthropic support",
      ],
      correctAnswer: 1,
      explanation:
        "Press Escape at any time to interrupt Claude mid-execution. Then provide new instructions to redirect it. This is faster than waiting for it to finish going the wrong way.",
    },
  ],
};
