export default {
  id: "gs-09-fixing-bugs",
  title: "Fixing Bugs",
  whyItMatters:
    "Bug fixing is one of the most common and time-consuming development tasks — Claude Code can dramatically speed it up.",

  content: [
    {
      type: "text",
      body: "When you hit a bug, just describe it to Claude Code in natural language. It will locate the relevant code, understand the context, implement a fix, and even run your tests to verify it works — all without you having to hunt through stack traces and files.",
    },
    {
      type: "example",
      title: "Describing a Bug to Fix",
      code: "> fix the login bug where users see a blank screen after entering their password\n\n> the API returns 500 when the email field is empty — add proper validation\n\n> users report that the search results are duplicated — find and fix the cause",
      explanation:
        "The more specific you are about the bug, the faster Claude Code can find and fix it. Include what happens, what should happen, and any details you know about where the problem is.",
    },
    {
      type: "keyPoint",
      body: "Being specific helps Claude Code work faster. Instead of \"fix the bug,\" try \"fix the login bug where users see a blank screen after entering their password.\" Details like error messages, affected pages, and expected behavior all help.",
    },
    {
      type: "inPractice",
      body: "Next time you get a bug report, paste the description directly into Claude Code. It often finds the root cause faster than manual debugging because it can search your entire codebase at once and consider all the relevant code paths.",
    },
  ],

  quiz: [
    {
      id: "q1",
      type: "multiple-choice",
      question: "What's the best way to describe a bug to Claude Code?",
      options: [
        "Just say \"fix the bug\"",
        "Be specific — describe what happens, what should happen, and any details you know",
        "Paste only the error code number",
        "Only provide the file name",
      ],
      correctAnswer: 1,
      explanation:
        "The more specific you are, the faster Claude Code can locate and fix the issue. Include symptoms, expected behavior, and any relevant details.",
    },
    {
      id: "q2",
      type: "true-false",
      question:
        "Claude Code can run tests after fixing a bug to verify the fix works.",
      options: ["True", "False"],
      correctAnswer: 0,
      explanation:
        "Claude Code can locate the bug, fix it, and then run your test suite to verify the fix works — all in one flow.",
    },
    {
      id: "q3",
      type: "multiple-choice",
      question:
        "Why can Claude Code sometimes find bugs faster than manual debugging?",
      options: [
        "It has access to secret logs",
        "It can search the entire codebase at once and consider all relevant code paths",
        "It only looks at the most recent commit",
        "It skips the test suite",
      ],
      correctAnswer: 1,
      explanation:
        "Claude Code can quickly scan your entire codebase, understand the relationships between files, and trace code paths — something that would take much longer to do manually.",
    },
  ],
};
