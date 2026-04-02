export default {
  id: "cc-05-search-tools",
  title: "Search Tools",
  whyItMatters:
    "Search tools are how Claude navigates your codebase — they let it find the right files and code before making changes.",

  content: [
    {
      type: "text",
      body: "Before Claude can fix a bug or add a feature, it needs to find the relevant code. Search tools let Claude locate files by name patterns, search file contents with regex, and explore your codebase structure efficiently. Think of them as Claude's way of navigating a project it's never seen before.",
    },
    {
      type: "keyPoint",
      body: "There are two main search tools: Glob finds files by pattern (like \"find all TypeScript files in the components folder\"), and Grep searches file contents with regex (like \"find every file that calls the authenticate function\"). Claude uses these before acting — searching first, then reading what it finds.",
    },
    {
      type: "example",
      title: "Search tools in action",
      code: "# You say:\nclaude \"where is the database connection configured?\"\n\n# Claude uses search tools like:\n# Glob: **/*.config.{js,ts} — finds config files\n# Grep: \"database|connection|DB_HOST\" — searches for relevant terms\n# Then reads the matching files to answer your question",
      explanation:
        "Claude combines Glob (file patterns) and Grep (content search) to quickly zero in on relevant code, even in a large codebase it hasn't seen before.",
    },
    {
      type: "inPractice",
      body: "You can help Claude search more efficiently by mentioning file paths or patterns in your prompt. Saying \"fix the bug in src/auth/login.ts\" is faster than \"fix the login bug\" because Claude can skip the search step and go straight to reading the file.",
    },
  ],

  quiz: [
    {
      id: "q1",
      type: "multiple-choice",
      question: "What does the Glob tool do?",
      options: [
        "Searches file contents for text patterns",
        "Finds files by name or path patterns",
        "Runs shell commands",
        "Creates new files from templates",
      ],
      correctAnswer: 1,
      explanation:
        "Glob finds files by name or path patterns — for example, finding all .ts files in a specific directory. It's like a smart file finder.",
    },
    {
      id: "q2",
      type: "multiple-choice",
      question: "What does the Grep tool do?",
      options: [
        "Finds files by name pattern",
        "Edits files in place",
        "Searches file contents with regex patterns",
        "Deletes matching files",
      ],
      correctAnswer: 2,
      explanation:
        "Grep searches the contents of files using regex patterns — for example, finding every file that references a specific function or variable name.",
    },
    {
      id: "q3",
      type: "multiple-choice",
      question:
        "How can you help Claude search your codebase more efficiently?",
      options: [
        "Always use Opus instead of Sonnet",
        "Mention specific file paths or patterns in your prompt",
        "Run searches yourself before asking Claude",
        "Limit your project to fewer than 100 files",
      ],
      correctAnswer: 1,
      explanation:
        "Including file paths or patterns in your prompt lets Claude skip the search step and go directly to the relevant code. The more specific you are, the faster Claude works.",
    },
  ],
};
