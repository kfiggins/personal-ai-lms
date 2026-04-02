export default {
  id: "eu-13-referencing-files",
  title: "Referencing Files",
  whyItMatters:
    "Using @mentions to reference files and directories gives Claude Code precise context, making your prompts more effective and reducing the time Claude spends searching.",

  content: [
    {
      type: "text",
      body: "Claude Code supports @mentions to reference specific files and directories in your prompts. Instead of relying on Claude to find the right files, you can point it directly to what matters. This is faster and ensures Claude is looking at exactly the code you're thinking about.",
    },
    {
      type: "example",
      title: "Example: Referencing specific files",
      code: "claude \"refactor @src/auth/login.js to use async/await and update the tests in @src/auth/__tests__/login.test.js\"",
      explanation:
        "The @mentions tell Claude exactly which files to work with. It reads both files immediately instead of searching the codebase, saving time and ensuring it works on the right code.",
    },
    {
      type: "keyPoint",
      body: "You can reference directories too: @src/components/ tells Claude to look at everything in that directory. This is useful when your task involves a whole module or feature area rather than a single file.",
    },
    {
      type: "tip",
      body: "MCP (Model Context Protocol) resources can also be referenced with @mentions using the format @server:protocol://resource. This lets you pull in context from external tools and services connected to Claude Code.",
    },
    {
      type: "inPractice",
      body: "Use @mentions when you know exactly which files are relevant. For exploratory tasks where you're not sure which files matter, let Claude search on its own. The two approaches complement each other: @mentions for precision, open-ended prompts for discovery.",
    },
  ],

  quiz: [
    {
      id: "q1",
      type: "multiple-choice",
      question: "What does the @ symbol do in a Claude Code prompt?",
      options: [
        "It's used for email addresses",
        "It references specific files, directories, or MCP resources",
        "It triggers a special command",
        "It has no special meaning",
      ],
      correctAnswer: 1,
      explanation:
        "The @ symbol in Claude Code prompts references specific files (@src/file.js), directories (@src/components/), or MCP resources (@server:protocol://resource), giving Claude precise context.",
    },
    {
      id: "q2",
      type: "multiple-choice",
      question: "Which of these is a valid @mention in Claude Code?",
      options: [
        "@src/auth/login.js (a specific file)",
        "@src/components/ (a directory)",
        "@server:protocol://resource (an MCP resource)",
        "All of the above",
      ],
      correctAnswer: 3,
      explanation:
        "Claude Code @mentions support files, directories, and MCP resources. Each gives Claude different types of context to work with.",
    },
    {
      id: "q3",
      type: "true-false",
      question:
        "You should always use @mentions instead of letting Claude search for files on its own.",
      options: ["True", "False"],
      correctAnswer: 1,
      explanation:
        "Use @mentions when you know which files are relevant, but let Claude search on its own for exploratory tasks. The two approaches complement each other.",
    },
    {
      id: "q4",
      type: "multiple-choice",
      question: "When are @mentions most useful?",
      options: [
        "When you're exploring an unfamiliar codebase",
        "When you know exactly which files are relevant to your task",
        "When you want Claude to search the entire project",
        "Only in the VS Code extension",
      ],
      correctAnswer: 1,
      explanation:
        "@mentions shine when you know which files matter. They point Claude directly to the right code, saving search time and ensuring precision.",
    },
  ],
};
