export default {
  id: "eu-03-refactoring-code",
  title: "Refactoring Code",
  whyItMatters:
    "Refactoring improves code quality without changing behavior. Claude Code can handle large-scale refactors across multiple files consistently, which is tedious and error-prone to do manually.",

  content: [
    {
      type: "text",
      body: "Claude Code excels at refactoring because it can understand patterns across your entire codebase and apply changes consistently. Whether you're converting callbacks to async/await, renaming a module, or restructuring a directory, Claude reads the current code, understands the pattern, and applies the transformation everywhere it's needed.",
    },
    {
      type: "example",
      title: "Example: Converting to async/await",
      code: "claude \"refactor the auth module to use async/await instead of callbacks\"",
      explanation:
        "Claude reads all the files in the auth module, identifies every callback pattern, converts them to async/await, and updates all callers to handle the new Promise-based API. It handles the ripple effects across files automatically.",
    },
    {
      type: "keyPoint",
      body: "Claude can handle refactors that span multiple files. When you rename a function, it updates every call site. When you change a data structure, it updates every place that reads or writes that structure. This cross-file awareness is one of Claude Code's biggest strengths.",
    },
    {
      type: "tip",
      body: "For large refactors, consider using plan mode (Shift+Tab twice) first. Ask Claude to outline the changes it would make before actually making them. This lets you review the scope of the refactor and catch any issues before code is modified.",
    },
    {
      type: "inPractice",
      body: "Common refactoring tasks include: converting between coding patterns (callbacks to promises, class components to hooks), extracting shared logic into utilities, reorganizing file structures, and updating deprecated APIs. Claude handles the mechanical work while you focus on the design decisions.",
    },
  ],

  quiz: [
    {
      id: "q1",
      type: "multiple-choice",
      question: "What makes Claude Code particularly good at refactoring?",
      options: [
        "It can only change one file at a time",
        "It understands patterns across your entire codebase and applies changes consistently across multiple files",
        "It only works with JavaScript",
        "It ignores related files when making changes",
      ],
      correctAnswer: 1,
      explanation:
        "Claude Code's cross-file awareness means it can apply refactoring patterns consistently everywhere they appear, including updating all call sites and dependent code.",
    },
    {
      id: "q2",
      type: "true-false",
      question:
        "When refactoring with Claude Code, you need to manually specify every file that needs changes.",
      options: ["True", "False"],
      correctAnswer: 1,
      explanation:
        "Claude Code automatically finds all the files affected by a refactor. When you rename a function, for example, it finds and updates every call site across your codebase.",
    },
    {
      id: "q3",
      type: "multiple-choice",
      question:
        "What's a recommended approach before starting a large refactor with Claude Code?",
      options: [
        "Just start and hope for the best",
        "Use plan mode to have Claude outline the changes before making them",
        "Delete all the files first",
        "Only refactor one line at a time",
      ],
      correctAnswer: 1,
      explanation:
        "Using plan mode (Shift+Tab twice) lets Claude outline all the changes it would make, so you can review the scope and approach before any code is modified.",
    },
  ],
};
