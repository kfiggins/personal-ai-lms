export default {
  id: "gs-12-what-you-can-do-overview",
  title: "What You Can Do: Overview",
  whyItMatters:
    "Seeing the full picture of what Claude Code can do inspires you to use it for more than just the basics.",

  content: [
    {
      type: "text",
      body: "You've learned the basics — now let's look at the full range of what Claude Code can do. This overview gives you a map of capabilities you can explore as you get more comfortable.",
    },
    {
      type: "text",
      body: "Here's what Claude Code can help you with:\n\n• **Automate tedious tasks** — Write tests, fix lint errors, resolve merge conflicts, and handle repetitive work.\n• **Build features and fix bugs** — Describe what you want and Claude Code writes, edits, and tests the code.\n• **Create commits and pull requests** — Claude Code writes meaningful commit messages and can create PRs with proper descriptions.\n• **Connect tools with MCP** — Integrate external tools and services using the Model Context Protocol.",
    },
    {
      type: "text",
      body: "More advanced capabilities:\n\n• **Customize with CLAUDE.md** — Give Claude Code persistent instructions about your project, coding style, and preferences.\n• **Build custom skills and hooks** — Create reusable commands and automated workflows.\n• **Run agent teams** — Coordinate multiple Claude Code agents working in parallel on different parts of a task.\n• **Pipe, script, and automate** — Use Claude Code in shell scripts, CI/CD pipelines, and automated workflows.\n• **Schedule recurring tasks** — Set up triggers that run Claude Code on a schedule for maintenance, monitoring, or reporting.",
    },
    {
      type: "keyPoint",
      body: "You don't need to learn everything at once. Start with the basics (asking questions, making changes, committing code) and gradually explore more advanced features as your needs grow.",
    },
    {
      type: "inPractice",
      body: "Most people start using Claude Code for quick bug fixes and questions. Over time, they discover it's great for writing tests, creating PRs, refactoring code, and automating repetitive work. Let your usage grow naturally with your comfort level.",
    },
  ],

  quiz: [
    {
      id: "q1",
      type: "multiple-choice",
      question: "Which of these can Claude Code automate?",
      options: [
        "Only writing code",
        "Only running tests",
        "Tests, lint fixes, merge conflicts, and other repetitive tasks",
        "Only commit messages",
      ],
      correctAnswer: 2,
      explanation:
        "Claude Code can automate a wide range of tedious tasks including writing tests, fixing lint errors, resolving merge conflicts, and much more.",
    },
    {
      id: "q2",
      type: "multiple-choice",
      question: "What is MCP in the context of Claude Code?",
      options: [
        "Main Control Panel",
        "Model Context Protocol — a way to connect external tools",
        "Memory Cache Protocol",
        "Multi-Cloud Platform",
      ],
      correctAnswer: 1,
      explanation:
        "MCP stands for Model Context Protocol. It's how you connect external tools and services to Claude Code, extending its capabilities.",
    },
    {
      id: "q3",
      type: "true-false",
      question:
        "You need to learn all Claude Code features before you can be productive with it.",
      options: ["True", "False"],
      correctAnswer: 1,
      explanation:
        "Start with the basics and gradually explore more features. Most users begin with questions and simple code changes, then naturally expand their usage over time.",
    },
    {
      id: "q4",
      type: "multiple-choice",
      question: "What does CLAUDE.md allow you to do?",
      options: [
        "Install Claude Code",
        "Give Claude Code persistent instructions about your project and preferences",
        "Delete your account",
        "Change the Claude Code logo",
      ],
      correctAnswer: 1,
      explanation:
        "CLAUDE.md files let you give Claude Code persistent instructions about your project, coding standards, and preferences so it works the way you want every time.",
    },
  ],
};
