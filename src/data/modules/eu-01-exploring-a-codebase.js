export default {
  id: "eu-01-exploring-a-codebase",
  title: "Exploring a Codebase",
  whyItMatters:
    "Quickly understanding an unfamiliar codebase is one of the most valuable things Claude Code can do for you — it turns hours of reading into minutes of conversation.",

  content: [
    {
      type: "text",
      body: "When you land in a new project — whether you just joined a team or you're reviewing an open-source repo — Claude Code can give you a guided tour. Just ask \"what does this project do?\" and Claude will read through key files like the README, package.json, entry points, and directory structure to give you a plain-English overview.",
    },
    {
      type: "example",
      title: "Example: Getting a project overview",
      code: "claude \"what does this project do and how is it structured?\"",
      explanation:
        "Claude reads the top-level files and directories, then summarizes the purpose, tech stack, and architecture of the project. It's like having a senior engineer walk you through the codebase on your first day.",
    },
    {
      type: "keyPoint",
      body: "You can ask targeted questions too. Try \"find the code that handles user authentication\" or \"where are the API routes defined?\" — Claude will search through files, read the relevant ones, and explain what it finds. This is far faster than manually grepping through an unfamiliar project.",
    },
    {
      type: "example",
      title: "Example: Finding specific functionality",
      code: "claude \"find the code that handles user authentication and explain how it works\"",
      explanation:
        "Claude searches your project for auth-related files, reads them, and provides a clear explanation of the authentication flow — including which files are involved and how they connect.",
    },
    {
      type: "inPractice",
      body: "Codebase exploration is especially useful during onboarding. Instead of spending days reading code, ask Claude to explain specific subsystems as you encounter them. You can also use it before making changes — ask Claude to map out how a feature works so you know what you're touching.",
    },
  ],

  quiz: [
    {
      id: "q1",
      type: "multiple-choice",
      question:
        "What's a good first prompt when exploring a new codebase with Claude Code?",
      options: [
        "\"Delete all the test files\"",
        "\"What does this project do and how is it structured?\"",
        "\"Rewrite everything in Rust\"",
        "\"Show me the git log\"",
      ],
      correctAnswer: 1,
      explanation:
        "Asking Claude to explain what the project does and how it's structured gives you a high-level overview by reading key files like the README, entry points, and directory layout.",
    },
    {
      id: "q2",
      type: "true-false",
      question:
        "Claude Code can only give you a general overview — it can't find specific functionality within a codebase.",
      options: ["True", "False"],
      correctAnswer: 1,
      explanation:
        "Claude Code can search for and explain specific functionality. For example, you can ask it to find the authentication code, locate API routes, or trace how a particular feature works.",
    },
    {
      id: "q3",
      type: "multiple-choice",
      question: "When is codebase exploration with Claude Code most useful?",
      options: [
        "Only when writing new code from scratch",
        "During onboarding or before making changes to unfamiliar code",
        "Only for very small projects",
        "Only when you already understand the entire codebase",
      ],
      correctAnswer: 1,
      explanation:
        "Codebase exploration shines during onboarding to a new project or before making changes to code you haven't worked with before. It helps you understand what you're working with before you start modifying it.",
    },
  ],
};
