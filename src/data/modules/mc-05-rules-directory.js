export default {
  id: "mc-05-rules-directory",
  title: "The Rules Directory",
  whyItMatters:
    "The .claude/rules/ directory lets you create targeted, file-specific rules that only load when relevant. This keeps your context lean and your instructions precise.",

  content: [
    {
      type: "text",
      body: "Instead of putting every rule in CLAUDE.md, you can organize rules into separate files in the `.claude/rules/` directory. The powerful part: rules can include glob patterns that make them load only when Claude is working with matching files. A rule about test conventions only loads when Claude touches test files.",
    },
    {
      type: "example",
      title: "Path-specific rules with glob patterns",
      code: "# .claude/rules/test-files.md\n---\nglob: **/*.test.ts\n---\n\n## Test Conventions\n- Use describe() for grouping, it() for individual tests\n- One assertion per test\n- Use factories from tests/factories/ instead of inline test data\n- Always clean up database state in afterEach()\n\n# .claude/rules/api-routes.md\n---\nglob: src/api/**/*.ts\n---\n\n## API Route Rules\n- Validate request body with zod schemas\n- Return standardized { data, error } response shape\n- Always set appropriate HTTP status codes",
      explanation:
        "The glob pattern in the frontmatter tells Claude when to load each rule file. Test rules only apply when working on .test.ts files, API rules only for files in src/api/.",
    },
    {
      type: "keyPoint",
      body: "Rules in `.claude/rules/` are only loaded when Claude works with files matching their glob pattern. No glob means the rule always loads. This is more efficient than putting everything in CLAUDE.md, which loads every rule every time.",
    },
    {
      type: "inPractice",
      body: "Good candidates for rules files: test conventions, API endpoint patterns, component structure guidelines, database migration rules, and documentation standards. If a rule only applies to a specific type of file, move it from CLAUDE.md to a rules file with the appropriate glob pattern.",
    },
    {
      type: "tip",
      body: "You can share rules across projects by using symlinks. If you have a common set of TypeScript rules, create them once and symlink them into each project's `.claude/rules/` directory.",
    },
  ],

  quiz: [
    {
      id: "q1",
      type: "multiple-choice",
      question: "Where do you put path-specific rules for Claude?",
      options: [
        "In CLAUDE.md only",
        "In .claude/rules/ directory",
        "In package.json",
        "In .eslintrc",
      ],
      correctAnswer: 1,
      explanation:
        "The .claude/rules/ directory is where you put path-specific rules. Each rule file can include a glob pattern to control when it loads.",
    },
    {
      id: "q2",
      type: "multiple-choice",
      question:
        "What does the glob pattern in a rules file's frontmatter control?",
      options: [
        "Which files the rule can modify",
        "When the rule file is loaded — only when Claude works with matching files",
        "Which users can see the rule",
        "The priority order of rules",
      ],
      correctAnswer: 1,
      explanation:
        "The glob pattern controls when the rule is loaded. If Claude isn't working with files that match the pattern, the rule won't be loaded into context.",
    },
    {
      id: "q3",
      type: "true-false",
      question:
        "You can share rules across projects by using symlinks to .claude/rules/ files.",
      options: ["True", "False"],
      correctAnswer: 0,
      explanation:
        "Symlinks are a great way to share common rules across projects — create the rule file once and symlink it into each project's .claude/rules/ directory.",
    },
  ],
};
