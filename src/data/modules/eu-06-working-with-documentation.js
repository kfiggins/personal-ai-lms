export default {
  id: "eu-06-working-with-documentation",
  title: "Working with Documentation",
  whyItMatters:
    "Good documentation saves everyone time. Claude Code can write, update, and review docs by reading your actual code — so the documentation stays accurate and up to date.",

  content: [
    {
      type: "text",
      body: "Claude Code can write documentation that's grounded in your actual codebase. Instead of documenting from memory (which leads to stale docs), Claude reads the current code and generates accurate documentation. It can write READMEs, API docs, inline comments, and more.",
    },
    {
      type: "example",
      title: "Example: Updating a README",
      code: "claude \"update the README with current installation instructions and a quick-start guide\"",
      explanation:
        "Claude reads your project's setup files (package.json, Dockerfile, etc.), understands the actual installation process, and writes accurate instructions. No more outdated READMEs.",
    },
    {
      type: "keyPoint",
      body: "Claude can generate API documentation directly from your code. It reads your route handlers, function signatures, and type definitions to produce accurate, comprehensive API docs — including parameters, return types, and example responses.",
    },
    {
      type: "tip",
      body: "You can also ask Claude to review existing documentation for accuracy: \"check if the API docs in docs/api.md are still accurate.\" Claude compares the docs against the actual code and flags anything that's outdated.",
    },
    {
      type: "inPractice",
      body: "A practical approach is to ask Claude to update documentation after making code changes. Since it understands both the code change and the existing docs, it can keep everything in sync. This is especially useful for API docs that need to match the implementation exactly.",
    },
  ],

  quiz: [
    {
      id: "q1",
      type: "multiple-choice",
      question:
        "Why is Claude Code's documentation better than writing docs from memory?",
      options: [
        "It writes faster",
        "It reads the actual code, so the documentation is accurate and current",
        "It only writes in Markdown",
        "It skips the complicated parts",
      ],
      correctAnswer: 1,
      explanation:
        "Claude reads your actual codebase when writing documentation, which means the docs reflect the current state of the code rather than what you remember it being.",
    },
    {
      id: "q2",
      type: "true-false",
      question:
        "Claude Code can only write new documentation — it can't review existing docs for accuracy.",
      options: ["True", "False"],
      correctAnswer: 1,
      explanation:
        "Claude can review existing documentation against the actual code and flag anything that's outdated or inaccurate. Just ask it to check if your docs are still correct.",
    },
    {
      id: "q3",
      type: "multiple-choice",
      question: "What types of documentation can Claude Code generate?",
      options: [
        "Only README files",
        "Only inline code comments",
        "READMEs, API docs, inline comments, and more",
        "Only documentation for JavaScript projects",
      ],
      correctAnswer: 2,
      explanation:
        "Claude can write various types of documentation including READMEs, API documentation, inline comments, setup guides, and more — all grounded in your actual code.",
    },
  ],
};
