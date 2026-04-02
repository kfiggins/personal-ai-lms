export default {
  id: "gs-06-asking-questions",
  title: "Asking Questions About Your Code",
  whyItMatters:
    "Claude Code is at its best when you ask it questions — learning to ask well unlocks faster understanding of any codebase.",

  content: [
    {
      type: "text",
      body: "One of the most powerful things you can do with Claude Code is simply ask questions about your codebase. Whether you're onboarding to a new project or exploring unfamiliar code, Claude Code reads the relevant files and gives you clear answers.",
    },
    {
      type: "example",
      title: "Questions You Can Ask",
      code: "# Ask about technologies\n> what technologies does this project use?\n\n# Ask about structure\n> explain the folder structure\n\n# Ask about specific code\n> how does the authentication flow work?\n\n# Ask about capabilities\n> what API endpoints does this project expose?",
      explanation:
        "These are all things you can type directly into a Claude Code session. Claude reads the files it needs to answer your question — you don't have to point it to specific files.",
    },
    {
      type: "keyPoint",
      body: "You don't need to manually add context. Claude Code reads files as needed to answer your questions. Just ask naturally and let it find the relevant code.",
    },
    {
      type: "inPractice",
      body: "When joining a new team or project, try asking Claude Code to walk you through the architecture and key design decisions. It's like having a senior developer give you an onboarding tour, available anytime.",
    },
  ],

  quiz: [
    {
      id: "q1",
      type: "true-false",
      question:
        "You need to manually open files before Claude Code can answer questions about them.",
      options: ["True", "False"],
      correctAnswer: 1,
      explanation:
        "Claude Code automatically reads files as needed. You just ask your question and it finds the relevant code on its own.",
    },
    {
      id: "q2",
      type: "multiple-choice",
      question:
        "Which of these is a good way to learn about a new codebase with Claude Code?",
      options: [
        "Read every file manually first",
        "Ask \"explain the folder structure\" or \"what does this project do?\"",
        "Only look at the README",
        "Run the test suite and guess",
      ],
      correctAnswer: 1,
      explanation:
        "Asking Claude Code to explain the structure or purpose of a project is a fast, effective way to get oriented. It reads the code and gives you a clear summary.",
    },
    {
      id: "q3",
      type: "multiple-choice",
      question: "What happens when you ask Claude Code a question about your code?",
      options: [
        "It searches the internet for answers",
        "It reads the relevant files in your project and gives you an answer",
        "It asks you to paste the code first",
        "It only looks at files you've opened",
      ],
      correctAnswer: 1,
      explanation:
        "Claude Code reads the relevant files in your project to answer questions. It uses your actual codebase as its source of truth.",
    },
  ],
};
