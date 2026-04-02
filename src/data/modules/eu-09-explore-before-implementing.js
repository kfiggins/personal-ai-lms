export default {
  id: "eu-09-explore-before-implementing",
  title: "Explore Before Implementing",
  whyItMatters:
    "Jumping straight into code changes on complex problems often leads to rework. Separating research from implementation gives you a better plan and cleaner results.",

  content: [
    {
      type: "text",
      body: "For complex tasks, it's better to explore first and implement second. Claude Code supports this with plan mode — press Shift+Tab twice to enter it. In plan mode, Claude researches and thinks through the problem without making any changes. Once you've aligned on the approach, switch back to normal mode to execute.",
    },
    {
      type: "example",
      title: "Example: Two-phase approach",
      code: "# Phase 1: Enter plan mode (Shift+Tab twice)\n\"I need to add real-time notifications to the app. What's the best approach given our current architecture?\"\n\n# Phase 2: After reviewing the plan, switch to normal mode\n\"Go ahead and implement the WebSocket approach you outlined\"",
      explanation:
        "Separating research from coding lets you review Claude's approach before any code changes happen. You catch design issues early, before they become expensive rework.",
    },
    {
      type: "keyPoint",
      body: "The two-phase approach — explore, then implement — consistently produces better results than asking Claude to jump straight into coding. Claude has time to understand the full picture, consider trade-offs, and propose a coherent plan instead of making incremental decisions.",
    },
    {
      type: "tip",
      body: "You can refine the plan through conversation before implementing. Ask questions, suggest alternatives, or add constraints. The plan evolves through discussion until you're both confident in the approach.",
    },
    {
      type: "inPractice",
      body: "Use this approach for any task that's more than a simple bug fix: adding new features, major refactors, architectural changes, or anything that touches multiple parts of the codebase. For small, well-defined tasks, jumping straight to implementation is fine.",
    },
  ],

  quiz: [
    {
      id: "q1",
      type: "multiple-choice",
      question: "How do you enter plan mode in Claude Code?",
      options: [
        "Type \"/plan\" in the prompt",
        "Press Shift+Tab twice",
        "Add \"--plan\" to the command line",
        "Click the Plan button in the toolbar",
      ],
      correctAnswer: 1,
      explanation:
        "Press Shift+Tab twice to toggle into plan mode. In this mode, Claude researches and thinks through the problem without making any code changes.",
    },
    {
      id: "q2",
      type: "true-false",
      question:
        "In plan mode, Claude will make code changes while exploring the problem.",
      options: ["True", "False"],
      correctAnswer: 1,
      explanation:
        "Plan mode is specifically for research and planning — Claude explores the problem and proposes an approach without modifying any code. You switch back to normal mode to implement.",
    },
    {
      id: "q3",
      type: "multiple-choice",
      question: "When should you use the explore-then-implement approach?",
      options: [
        "For every single task, no matter how small",
        "Only for bug fixes",
        "For complex tasks like new features, major refactors, or architectural changes",
        "Only when Claude asks you to",
      ],
      correctAnswer: 2,
      explanation:
        "The two-phase approach is best for complex tasks that touch multiple parts of the codebase. For small, well-defined tasks, jumping straight to implementation is perfectly fine.",
    },
    {
      id: "q4",
      type: "multiple-choice",
      question: "What's the benefit of exploring before implementing?",
      options: [
        "It makes Claude slower",
        "It uses more tokens",
        "You catch design issues early before they become expensive rework",
        "It's only useful for Python projects",
      ],
      correctAnswer: 2,
      explanation:
        "Reviewing the plan before implementation lets you catch design issues early. It's much cheaper to change a plan than to rework already-written code.",
    },
  ],
};
