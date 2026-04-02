export default {
  id: "mc-03-effective-claude-md",
  title: "Writing an Effective CLAUDE.md",
  whyItMatters:
    "A vague CLAUDE.md is almost as bad as no CLAUDE.md. Specific, actionable instructions make the difference between Claude guessing and Claude knowing exactly what you want.",

  content: [
    {
      type: "text",
      body: "The key to a great CLAUDE.md is specificity. Instead of writing general guidelines like \"use good testing practices,\" tell Claude exactly what you mean: which framework, what patterns, what to avoid. Think of it as writing instructions for a skilled developer who just joined your team — they know how to code, but they don't know your project's particular conventions.",
    },
    {
      type: "keyPoint",
      body: "Be specific and prescriptive. Say **\"Use vitest not jest\"** instead of \"use good testing.\" Say **\"Run tests with `npm test`\"** instead of \"make sure tests pass.\" Say **\"Components use PascalCase, utilities use camelCase\"** instead of \"follow naming conventions.\"",
    },
    {
      type: "example",
      title: "Vague vs. specific CLAUDE.md entries",
      code: "# ❌ Too vague\n- Write clean code\n- Use proper error handling\n- Follow best practices for testing\n\n# ✅ Specific and actionable\n- Use early returns instead of nested if/else\n- Wrap external API calls in try/catch, log errors with logger.error()\n- Write unit tests with vitest, use describe/it blocks, aim for one assertion per test\n- Never mock the database — use the test database in docker-compose.test.yml",
      explanation:
        "The specific version gives Claude concrete rules it can follow. The vague version leaves too much room for interpretation.",
    },
    {
      type: "inPractice",
      body: "Include architecture decisions and the reasoning behind them. When Claude understands *why* you made a choice, it can apply that thinking to new situations. For example: \"We use server components by default because this is a content-heavy site. Only add 'use client' when you need interactivity or browser APIs.\"",
    },
    {
      type: "warning",
      body: "Keep your CLAUDE.md updated as your project evolves. Outdated instructions are worse than no instructions — they'll actively steer Claude in the wrong direction. Review it periodically, especially after major refactors or tech stack changes.",
    },
    {
      type: "tip",
      body: "When Claude does something wrong repeatedly, that's a signal to add a rule to your CLAUDE.md. Think of each mistake as an opportunity to make your instructions more complete.",
    },
  ],

  quiz: [
    {
      id: "q1",
      type: "multiple-choice",
      question:
        "Which CLAUDE.md entry is most effective?",
      options: [
        "\"Write good tests\"",
        "\"Use vitest with describe/it blocks, one assertion per test\"",
        "\"Follow testing best practices\"",
        "\"Test your code thoroughly\"",
      ],
      correctAnswer: 1,
      explanation:
        "Specific instructions like \"Use vitest with describe/it blocks, one assertion per test\" give Claude concrete rules to follow. Vague instructions leave too much to interpretation.",
    },
    {
      id: "q2",
      type: "true-false",
      question:
        "It's helpful to include the reasoning behind architecture decisions in CLAUDE.md.",
      options: ["True", "False"],
      correctAnswer: 0,
      explanation:
        "Including the 'why' behind decisions helps Claude apply the same reasoning to new situations, not just follow rules mechanically.",
    },
    {
      id: "q3",
      type: "multiple-choice",
      question: "What should you do when Claude repeatedly makes a mistake?",
      options: [
        "Correct it each time in conversation",
        "Add a specific rule to CLAUDE.md to prevent the mistake",
        "Delete your CLAUDE.md and start over",
        "Switch to a different AI tool",
      ],
      correctAnswer: 1,
      explanation:
        "Recurring mistakes are a signal to add a rule to CLAUDE.md. This way, Claude won't make the same mistake in future sessions.",
    },
    {
      id: "q4",
      type: "multiple-choice",
      question: "Why is an outdated CLAUDE.md potentially harmful?",
      options: [
        "It takes up disk space",
        "It slows down Claude's startup time",
        "It actively steers Claude in the wrong direction",
        "It causes syntax errors in your project",
      ],
      correctAnswer: 2,
      explanation:
        "Outdated instructions are worse than no instructions because Claude will confidently follow incorrect guidance, producing code that doesn't match your current standards.",
    },
  ],
};
