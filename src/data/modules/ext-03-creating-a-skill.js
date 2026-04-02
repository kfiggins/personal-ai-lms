export default {
  id: "ext-03-creating-a-skill",
  title: "Creating a Skill",
  whyItMatters:
    "Once you know how to create a skill, you can package any workflow your team uses into a reusable, shareable command. The barrier is low — it's just a markdown file with some frontmatter.",

  content: [
    {
      type: "text",
      body: "Creating a skill is straightforward: make a markdown file in .claude/skills/ (for project skills) or ~/.claude/skills/ (for personal skills). The file has a YAML frontmatter section with metadata and a body that serves as the prompt Claude follows.",
    },
    {
      type: "example",
      title: "A complete custom skill",
      code: "# File: .claude/skills/deploy-staging.md\n---\nname: deploy-staging\ndescription: Deploy the current branch to the staging environment\n---\n\nDeploy the current branch to staging:\n\n1. Run the test suite first: `npm test`\n2. If tests pass, build: `npm run build`\n3. Deploy using: `./scripts/deploy.sh staging`\n4. Verify the deployment by hitting the health endpoint\n5. Report the deployment status",
      explanation:
        "The frontmatter defines the skill's name and description. The body is the detailed instructions Claude follows. You can reference shell commands, describe multi-step workflows, and include any context Claude needs.",
    },
    {
      type: "keyPoint",
      body: "Key frontmatter fields: **name** (what you type after /), **description** (shown in skill list and helps Claude understand when to suggest it), and optionally **disable-model-invocation** (prevents Claude from auto-triggering the skill — it can only be invoked explicitly by the user).",
    },
    {
      type: "inPractice",
      body: "Skills can reference supporting files in your project. For example, a /review-pr skill might reference a REVIEW_CHECKLIST.md file with your team's specific review criteria. The skill's markdown body can tell Claude to read those files as part of the workflow.",
    },
    {
      type: "tip",
      body: "Commit your .claude/skills/ directory to version control so the whole team gets the same skills. Personal skills in ~/.claude/skills/ are great for individual productivity shortcuts that don't need to be shared.",
    },
  ],

  quiz: [
    {
      id: "q1",
      type: "multiple-choice",
      question: "What is the file format for a custom skill?",
      options: [
        "A JSON configuration file",
        "A markdown file with YAML frontmatter",
        "A JavaScript module",
        "A shell script",
      ],
      correctAnswer: 1,
      explanation:
        "Custom skills are markdown files with YAML frontmatter. The frontmatter contains metadata (name, description) and the body contains the instructions.",
    },
    {
      id: "q2",
      type: "multiple-choice",
      question: "What does the disable-model-invocation frontmatter field do?",
      options: [
        "Prevents the skill from being used at all",
        "Makes the skill only available in CI/CD",
        "Prevents Claude from auto-triggering the skill — it must be explicitly invoked",
        "Disables the skill for certain models",
      ],
      correctAnswer: 2,
      explanation:
        "When disable-model-invocation is set, Claude won't automatically trigger the skill on its own. The user must explicitly invoke it with the slash command.",
    },
    {
      id: "q3",
      type: "true-false",
      question:
        "A skill's body can reference other files in your project that Claude should read.",
      options: ["True", "False"],
      correctAnswer: 0,
      explanation:
        "Skills can reference supporting files. For example, a review skill might tell Claude to read a checklist file as part of its workflow.",
    },
    {
      id: "q4",
      type: "multiple-choice",
      question:
        "Where should you put a skill that only you use, not your whole team?",
      options: [
        ".claude/skills/ in the project",
        "~/.claude/skills/ in your home directory",
        "In the CLAUDE.md file",
        "In settings.json",
      ],
      correctAnswer: 1,
      explanation:
        "Personal skills go in ~/.claude/skills/ in your home directory. These are available across all your projects but aren't shared with the team.",
    },
  ],
};
