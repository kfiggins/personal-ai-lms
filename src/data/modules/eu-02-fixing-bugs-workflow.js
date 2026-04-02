export default {
  id: "eu-02-fixing-bugs-workflow",
  title: "Fixing Bugs Workflow",
  whyItMatters:
    "Bug fixing is one of the most common and time-consuming development tasks. Claude Code can dramatically speed up the process by tracing through code to find root causes and implementing fixes.",

  content: [
    {
      type: "text",
      body: "When you hit a bug, the best approach is to describe the symptom to Claude Code as specifically as possible. Paste the error message, describe the unexpected behavior, or share the stack trace. The more detail you provide, the faster Claude can zero in on the root cause.",
    },
    {
      type: "example",
      title: "Example: Describing a bug with specifics",
      code: "claude \"Users are getting a 500 error when they try to checkout with an expired credit card. Here's the error: TypeError: Cannot read property 'status' of undefined at src/payments/processor.js:42\"",
      explanation:
        "By including the exact error message and file location, Claude can immediately jump to the right code and start tracing the issue. The more specific you are, the fewer exploration steps Claude needs.",
    },
    {
      type: "keyPoint",
      body: "Claude traces through the code to find the root cause, not just the symptom. It reads the relevant files, follows the call chain, identifies what's going wrong, implements a fix, and then runs your tests to make sure the fix actually works.",
    },
    {
      type: "tip",
      body: "Be specific about the exact behavior you're seeing. Instead of \"the app is broken,\" say \"clicking the Submit button on the signup form shows a blank page instead of redirecting to the dashboard.\" Specificity helps Claude reproduce and fix the issue faster.",
    },
    {
      type: "inPractice",
      body: "For tricky bugs, you can iterate with Claude. If the first fix doesn't fully resolve the issue, describe what changed and what's still wrong. Claude retains context from the conversation, so it can build on its previous investigation rather than starting from scratch.",
    },
  ],

  quiz: [
    {
      id: "q1",
      type: "multiple-choice",
      question: "What's the most effective way to report a bug to Claude Code?",
      options: [
        "\"Fix the bug\"",
        "\"Something is broken in the app\"",
        "\"Users get a 500 error at checkout — here's the stack trace: ...\"",
        "\"I think there might be an issue somewhere\"",
      ],
      correctAnswer: 2,
      explanation:
        "Providing the specific symptom, error message, and any relevant context (like the stack trace) helps Claude quickly locate and fix the root cause without unnecessary exploration.",
    },
    {
      id: "q2",
      type: "true-false",
      question:
        "Claude Code only fixes the immediate symptom without investigating the root cause.",
      options: ["True", "False"],
      correctAnswer: 1,
      explanation:
        "Claude traces through the code to find the root cause, not just the surface symptom. It follows the call chain, identifies the underlying issue, and fixes it properly.",
    },
    {
      id: "q3",
      type: "multiple-choice",
      question: "What does Claude Code typically do after implementing a bug fix?",
      options: [
        "Immediately closes the terminal",
        "Runs tests to verify the fix works",
        "Deletes the original buggy file",
        "Sends an email to the team",
      ],
      correctAnswer: 1,
      explanation:
        "After implementing a fix, Claude runs your existing tests to verify that the fix works and hasn't introduced new problems. This is part of its agentic verify step.",
    },
    {
      id: "q4",
      type: "multiple-choice",
      question:
        "If Claude's first fix doesn't fully resolve the bug, what should you do?",
      options: [
        "Start a completely new session",
        "Give up and fix it manually",
        "Describe what changed and what's still wrong — Claude builds on its previous investigation",
        "Repeat the exact same prompt",
      ],
      correctAnswer: 2,
      explanation:
        "Claude retains context within a conversation. Describing what changed and what's still wrong lets it build on its previous investigation rather than starting over.",
    },
  ],
};
