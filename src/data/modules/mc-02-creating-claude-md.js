export default {
  id: "mc-02-creating-claude-md",
  title: "Creating Your CLAUDE.md",
  whyItMatters:
    "Getting started with CLAUDE.md is easy, but knowing the right approach — interactive or manual — and what to include upfront saves you from a blank-page problem.",

  content: [
    {
      type: "text",
      body: "There are two ways to create a CLAUDE.md: use the `/init` command for an interactive setup, or create the file manually. The `/init` command is great for getting started quickly — Claude will analyze your project and suggest an initial CLAUDE.md based on what it finds. Manual creation gives you full control from the start.",
    },
    {
      type: "example",
      title: "Using /init to create CLAUDE.md",
      code: "# In your Claude Code session, just type:\n/init\n\n# Claude will:\n# 1. Scan your project structure\n# 2. Identify your tech stack\n# 3. Look at existing config files (package.json, tsconfig, etc.)\n# 4. Generate a CLAUDE.md tailored to your project",
      explanation:
        "The /init command does the heavy lifting by examining your project and creating a reasonable starting point that you can then customize.",
    },
    {
      type: "keyPoint",
      body: "A good CLAUDE.md structure includes: **Project overview** (what the project does in one or two sentences), **Tech stack** (languages, frameworks, key libraries), **Coding conventions** (naming, formatting, patterns to follow), **Important commands** (build, test, lint, deploy), and **Architecture notes** (where things live, key design decisions).",
    },
    {
      type: "tip",
      body: "Keep your CLAUDE.md focused — ideally under 500 lines. If it gets too long, Claude spends more context window reading instructions instead of helping you code. Move detailed rules to the `.claude/rules/` directory instead.",
    },
    {
      type: "example",
      title: "Manual CLAUDE.md template",
      code: "# Project Name\n\nBrief description of what this project does.\n\n## Tech Stack\n- Language: TypeScript\n- Framework: Next.js 14 with App Router\n- Database: PostgreSQL with Prisma ORM\n- Testing: Vitest + React Testing Library\n\n## Conventions\n- Use named exports, not default exports\n- Components go in src/components/{feature}/\n- All API routes return { data, error } shape\n\n## Commands\n- `npm run dev` — start dev server\n- `npm test` — run tests\n- `npm run lint` — check linting\n- `npm run build` — production build",
      explanation:
        "This template covers the essentials. Start here and add sections as you discover things Claude keeps getting wrong.",
    },
  ],

  quiz: [
    {
      id: "q1",
      type: "multiple-choice",
      question: "What command creates a CLAUDE.md interactively?",
      options: ["/memory", "/init", "/create", "/setup"],
      correctAnswer: 1,
      explanation:
        "The /init command analyzes your project and generates an initial CLAUDE.md based on what it finds in your codebase.",
    },
    {
      id: "q2",
      type: "multiple-choice",
      question: "What is a good target length for CLAUDE.md?",
      options: [
        "As long as possible — more detail is always better",
        "Under 500 lines",
        "Exactly 100 lines",
        "Under 10 lines",
      ],
      correctAnswer: 1,
      explanation:
        "Under 500 lines is a good target. Longer files consume more of the context window, leaving less room for actual work. Move detailed rules to .claude/rules/ if needed.",
    },
    {
      id: "q3",
      type: "true-false",
      question:
        "You must use the /init command to create CLAUDE.md — you cannot create it manually.",
      options: ["True", "False"],
      correctAnswer: 1,
      explanation:
        "You can create CLAUDE.md either way — /init provides an interactive experience, but you can also create and edit the file manually like any other markdown file.",
    },
  ],
};
