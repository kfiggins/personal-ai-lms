export default {
  id: "eu-04-writing-tests",
  title: "Writing Tests",
  whyItMatters:
    "Tests catch bugs before users do. Claude Code can write comprehensive tests by reading your code and understanding what needs to be verified, saving you significant time.",

  content: [
    {
      type: "text",
      body: "Claude Code can write tests by reading your implementation code, understanding what it does, and generating appropriate test cases. Just point it at the code you want tested — it figures out the testing framework you're using, writes the tests, runs them, and fixes any failures.",
    },
    {
      type: "example",
      title: "Example: Writing unit tests",
      code: "claude \"write unit tests for the calculator functions in src/utils/calculator.js\"",
      explanation:
        "Claude reads calculator.js, understands each function's purpose and edge cases, writes test cases covering normal inputs, boundary conditions, and error handling, then runs the tests to make sure they pass.",
    },
    {
      type: "keyPoint",
      body: "Claude can write various types of tests: unit tests for individual functions, integration tests for how components work together, and end-to-end tests for full user workflows. Specify what type you want, or let Claude choose based on the code.",
    },
    {
      type: "tip",
      body: "If you already have a testing pattern in your project, Claude will follow it. It reads your existing tests to match the style, testing framework, assertion library, and conventions your team uses.",
    },
    {
      type: "inPractice",
      body: "A powerful workflow is to write code first, then ask Claude to write tests. If tests fail, Claude reads the failure output and either fixes the tests (if they have wrong expectations) or fixes the code (if it has actual bugs). This test-then-fix loop is one of Claude Code's most productive patterns.",
    },
  ],

  quiz: [
    {
      id: "q1",
      type: "multiple-choice",
      question: "What does Claude Code do after writing tests?",
      options: [
        "Nothing — it just writes the test file",
        "It runs the tests and fixes any failures",
        "It deletes the original source code",
        "It only runs tests if you explicitly ask",
      ],
      correctAnswer: 1,
      explanation:
        "Claude Code runs the tests it writes and iterates on failures — either fixing the tests if expectations are wrong or fixing the code if there are actual bugs.",
    },
    {
      id: "q2",
      type: "multiple-choice",
      question: "Which types of tests can Claude Code write?",
      options: [
        "Only unit tests",
        "Only integration tests",
        "Unit, integration, and end-to-end tests",
        "Only tests for JavaScript",
      ],
      correctAnswer: 2,
      explanation:
        "Claude can write unit tests, integration tests, and end-to-end tests. You can specify which type you want, or let Claude choose based on the code being tested.",
    },
    {
      id: "q3",
      type: "true-false",
      question:
        "Claude Code ignores your project's existing testing conventions when writing new tests.",
      options: ["True", "False"],
      correctAnswer: 1,
      explanation:
        "Claude reads your existing tests and matches your project's style, testing framework, assertion library, and conventions. It follows the patterns your team already uses.",
    },
    {
      id: "q4",
      type: "multiple-choice",
      question: "What's a productive testing workflow with Claude Code?",
      options: [
        "Write tests manually, then ask Claude to delete them",
        "Write code first, ask Claude to write tests, then let it fix any failures",
        "Only write tests for code that's already been deployed",
        "Ask Claude to write tests without giving it access to the source code",
      ],
      correctAnswer: 1,
      explanation:
        "Writing code first, then asking Claude to write tests is a productive workflow. If tests fail, Claude reads the failures and fixes either the tests or the code — iterating until everything passes.",
    },
  ],
};
