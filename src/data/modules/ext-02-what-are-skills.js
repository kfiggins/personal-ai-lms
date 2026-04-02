export default {
  id: "ext-02-what-are-skills",
  title: "What Are Skills?",
  whyItMatters:
    "Skills turn repetitive multi-step workflows into simple slash commands. Instead of typing the same detailed instructions every time, you invoke /deploy-staging and Claude knows exactly what to do.",

  content: [
    {
      type: "text",
      body: "Skills are custom commands you invoke with a slash — like /review-pr, /deploy-staging, or /run-migrations. Each skill is a markdown file containing instructions that Claude follows when you invoke it. Think of them as saved prompts that your whole team can share and reuse.",
    },
    {
      type: "keyPoint",
      body: "Claude Code comes with **bundled skills** built in (like /commit and /review-pr), and you can create **custom skills** for your own workflows. Skills live as markdown files in `.claude/skills/` (project-level) or `~/.claude/skills/` (user-level).",
    },
    {
      type: "example",
      title: "Invoking a skill",
      code: "# In Claude Code, just type:\n/deploy-staging\n\n# Or with arguments:\n/review-pr 1234\n\n# Claude reads the skill's markdown file and follows\n# the instructions — no need to retype your workflow.",
      explanation:
        "Skills are invoked by typing a slash followed by the skill name. Claude loads the corresponding markdown file and treats it as a prompt with detailed instructions for the task.",
    },
    {
      type: "inPractice",
      body: "Teams commonly create skills for their most frequent workflows: deploying to environments, running database migrations, reviewing PRs with specific checklists, generating changelogs, or scaffolding new components. The beauty is that junior developers get the same thorough workflow as seniors — it's encoded in the skill.",
    },
    {
      type: "tip",
      body: "Check what bundled skills are already available by typing / in Claude Code. You might find that built-in skills like /commit and /review-pr already cover some of your needs before you create custom ones.",
    },
  ],

  quiz: [
    {
      id: "q1",
      type: "multiple-choice",
      question: "How do you invoke a skill in Claude Code?",
      options: [
        "By running a CLI command outside Claude Code",
        "By typing a slash followed by the skill name",
        "By editing the settings.json file",
        "By clicking a button in the UI",
      ],
      correctAnswer: 1,
      explanation:
        "Skills are invoked by typing a slash followed by the skill name, like /deploy-staging or /review-pr.",
    },
    {
      id: "q2",
      type: "multiple-choice",
      question: "What format are custom skills written in?",
      options: ["JSON", "YAML", "Markdown", "JavaScript"],
      correctAnswer: 2,
      explanation:
        "Skills are markdown files. The body of the file contains the instructions Claude follows when the skill is invoked.",
    },
    {
      id: "q3",
      type: "true-false",
      question:
        "Claude Code has no built-in skills — you must create all skills yourself.",
      options: ["True", "False"],
      correctAnswer: 1,
      explanation:
        "Claude Code comes with bundled skills built in, like /commit and /review-pr. You can also create your own custom skills.",
    },
    {
      id: "q4",
      type: "multiple-choice",
      question: "Where do project-level custom skills live?",
      options: [
        "In the project's package.json",
        "In ~/.claude/skills/",
        "In .claude/skills/",
        "In src/skills/",
      ],
      correctAnswer: 2,
      explanation:
        "Project-level skills live in .claude/skills/ in your project directory. User-level skills (available across all projects) go in ~/.claude/skills/.",
    },
  ],
};
