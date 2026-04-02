export default {
  id: "gs-11-pro-tips-for-beginners",
  title: "Pro Tips for Beginners",
  whyItMatters:
    "A few simple habits make the difference between good and great results with Claude Code.",

  content: [
    {
      type: "text",
      body: "Now that you know the basics, here are some tips that will help you get better results from Claude Code right away. These come from experienced users and make a real difference in practice.",
    },
    {
      type: "keyPoint",
      body: "Be specific with your requests. Instead of \"make the code better,\" say \"refactor the UserService class to use dependency injection and add error handling for the database calls.\" The more context you give, the better the result.",
    },
    {
      type: "text",
      body: "For complex tasks, break them into steps. Instead of one big request, give Claude Code step-by-step instructions:\n\n1. First, read the current authentication code\n2. Then, add OAuth support for Google\n3. Finally, add tests for the new login flow\n\nThis helps Claude Code stay focused and produce better results at each step.",
    },
    {
      type: "text",
      body: "Let Claude Code explore before making changes. When working on something unfamiliar, start by asking questions (\"how does the payment flow work?\") before asking for modifications. This helps both you and Claude Code build the right mental model.",
    },
    {
      type: "keyPoint",
      body: "Handy keyboard shortcuts: press `?` to see all shortcuts, `Tab` for command completion, and `Up Arrow` to recall your previous messages.",
    },
    {
      type: "inPractice",
      body: "The biggest beginner mistake is being too vague. \"Fix the bug\" will get you a guess. \"Fix the 500 error in the /api/users endpoint that happens when the email param is missing\" will get you a precise, tested fix.",
    },
  ],

  quiz: [
    {
      id: "q1",
      type: "multiple-choice",
      question: "Which prompt is likely to get the best result from Claude Code?",
      options: [
        "\"Make it better\"",
        "\"Fix stuff\"",
        "\"Refactor the UserService class to use dependency injection\"",
        "\"Do something with the code\"",
      ],
      correctAnswer: 2,
      explanation:
        "Specific prompts produce specific results. Telling Claude Code exactly what to refactor and how gives it clear direction.",
    },
    {
      id: "q2",
      type: "multiple-choice",
      question: "What's the recommended approach for complex tasks?",
      options: [
        "Write everything in one long prompt",
        "Break the task into step-by-step instructions",
        "Let Claude Code figure it out with no guidance",
        "Only work on simple tasks",
      ],
      correctAnswer: 1,
      explanation:
        "Breaking complex tasks into steps helps Claude Code stay focused and produce better results at each stage.",
    },
    {
      id: "q3",
      type: "multiple-choice",
      question: "What keyboard shortcut shows all available shortcuts?",
      options: ["Ctrl+H", "F1", "?", "Ctrl+/"],
      correctAnswer: 2,
      explanation:
        "Pressing `?` shows all available keyboard shortcuts. Tab provides command completion and Up Arrow recalls previous messages.",
    },
    {
      id: "q4",
      type: "true-false",
      question:
        "You should ask Claude Code to make changes immediately without exploring the code first.",
      options: ["True", "False"],
      correctAnswer: 1,
      explanation:
        "It's better to let Claude Code explore first by asking questions about the code. This builds the right understanding before making modifications.",
    },
  ],
};
