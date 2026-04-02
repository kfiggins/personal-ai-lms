export default {
  id: "mc-01-what-is-claude-md",
  title: "What is CLAUDE.md?",
  whyItMatters:
    "CLAUDE.md is how you give Claude persistent memory about your project. Without it, every session starts from scratch — Claude has to rediscover your coding standards, architecture decisions, and preferences each time.",

  content: [
    {
      type: "text",
      body: "CLAUDE.md is a special markdown file that Claude reads automatically at the start of every session. Think of it as a briefing document — it tells Claude everything it needs to know about your project before you even type your first message. You put it in your project root, and Claude treats its contents as persistent instructions.",
    },
    {
      type: "keyPoint",
      body: "CLAUDE.md typically contains: **coding standards** (formatting, naming conventions), **architecture decisions** (why you chose certain patterns), **preferred libraries** (which tools to use and which to avoid), **review checklists** (what to verify before committing), and **important commands** (how to build, test, and deploy).",
    },
    {
      type: "example",
      title: "A simple CLAUDE.md",
      code: "# My Project\n\n## Coding Standards\n- Use TypeScript strict mode\n- Prefer functional components with hooks\n- Use vitest for testing, not jest\n\n## Architecture\n- React frontend in src/components/\n- Express API in src/api/\n- Shared types in src/types/\n\n## Commands\n- Run tests: npm test\n- Start dev server: npm run dev\n- Build: npm run build",
      explanation:
        "This gives Claude the key information it needs to work effectively in your project — what tools to use, where things live, and how to run things.",
    },
    {
      type: "inPractice",
      body: "Without a CLAUDE.md, Claude might suggest jest when your project uses vitest, or put files in the wrong directory. With a good CLAUDE.md, Claude already knows your preferences and can start helping immediately. It's one of the highest-leverage things you can do to improve your Claude Code experience.",
    },
    {
      type: "tip",
      body: "You don't need a perfect CLAUDE.md on day one. Start with the basics — your tech stack, key commands, and a couple of coding conventions — then add to it as you notice Claude making incorrect assumptions.",
    },
  ],

  quiz: [
    {
      id: "q1",
      type: "multiple-choice",
      question: "When does Claude read your CLAUDE.md file?",
      options: [
        "Only when you explicitly ask it to",
        "At the start of every session, automatically",
        "Once during installation",
        "Only when you run the /memory command",
      ],
      correctAnswer: 1,
      explanation:
        "Claude reads CLAUDE.md automatically at the start of every session. You don't need to tell it to — it's part of the session initialization.",
    },
    {
      id: "q2",
      type: "multiple-choice",
      question: "Where should you put your main CLAUDE.md file?",
      options: [
        "In the ~/.claude/ directory",
        "In the .claude/ directory",
        "In the project root",
        "In the src/ directory",
      ],
      correctAnswer: 2,
      explanation:
        "The main CLAUDE.md goes in your project root. This is the primary location Claude looks for project-level instructions.",
    },
    {
      id: "q3",
      type: "true-false",
      question:
        "CLAUDE.md is only useful for large projects with many developers.",
      options: ["True", "False"],
      correctAnswer: 1,
      explanation:
        "CLAUDE.md is valuable for any project. Even solo developers benefit from having Claude remember their preferred tools, coding style, and project structure across sessions.",
    },
    {
      id: "q4",
      type: "multiple-choice",
      question: "What kind of information does NOT typically go in CLAUDE.md?",
      options: [
        "Preferred testing framework",
        "Project architecture overview",
        "Sensitive API keys and secrets",
        "Build and deploy commands",
      ],
      correctAnswer: 2,
      explanation:
        "Never put sensitive information like API keys or secrets in CLAUDE.md. It's meant for coding standards, architecture decisions, commands, and preferences.",
    },
  ],
};
