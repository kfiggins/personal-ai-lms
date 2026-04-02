export default {
  id: "mc-04-claude-md-scopes",
  title: "CLAUDE.md Scopes and Hierarchy",
  whyItMatters:
    "CLAUDE.md isn't just one file — it can exist at multiple levels. Understanding the hierarchy lets you put the right instructions in the right place, from personal preferences to folder-specific rules.",

  content: [
    {
      type: "text",
      body: "CLAUDE.md files work at three scopes: project root, subdirectories, and user-level. All levels are loaded together, with subdirectory files adding to (not replacing) the parent. This means you can have broad project rules at the root and specialized rules for specific parts of your codebase.",
    },
    {
      type: "keyPoint",
      body: "The three scopes are: **Project root** (`CLAUDE.md` in your repo root — main project instructions), **Subdirectory** (`CLAUDE.md` in any subfolder — folder-specific rules that add to the parent), and **User-level** (`~/.claude/CLAUDE.md` — personal preferences that apply across all your projects).",
    },
    {
      type: "example",
      title: "Multi-level CLAUDE.md setup",
      code: "# ~/.claude/CLAUDE.md (user-level)\nI prefer concise code comments. Use American English spelling.\n\n# /my-project/CLAUDE.md (project root)\n## Tech Stack\n- React 18 + TypeScript\n- Use CSS Modules for styling\n\n# /my-project/src/api/CLAUDE.md (subdirectory)\n## API Guidelines\n- All endpoints return { data, error, status }\n- Use zod for request validation\n- Log all errors with structuredLogger",
      explanation:
        "When Claude works on an API file, it sees all three levels: your personal preferences, the project-wide standards, and the API-specific rules.",
    },
    {
      type: "inPractice",
      body: "Use the project root CLAUDE.md for your main coding standards and architecture overview. Use subdirectory CLAUDE.md files for specialized areas — like stricter rules for your API layer or different conventions for your test files. Use your user-level CLAUDE.md for personal preferences that should follow you across all projects.",
    },
    {
      type: "tip",
      body: "You can import additional files into your CLAUDE.md using the `@path` syntax. For example, `@docs/api-patterns.md` will pull in that file's content. This is great for keeping your CLAUDE.md lean while still providing detailed reference material.",
    },
  ],

  quiz: [
    {
      id: "q1",
      type: "multiple-choice",
      question: "How many scopes can CLAUDE.md files exist at?",
      options: ["One", "Two", "Three", "Four"],
      correctAnswer: 2,
      explanation:
        "CLAUDE.md exists at three scopes: project root, subdirectories, and user-level (~/.claude/CLAUDE.md).",
    },
    {
      id: "q2",
      type: "multiple-choice",
      question:
        "What happens when a subdirectory has its own CLAUDE.md?",
      options: [
        "It replaces the project root CLAUDE.md",
        "It adds to the parent CLAUDE.md — both are loaded",
        "It causes a conflict error",
        "Only the subdirectory version is read",
      ],
      correctAnswer: 1,
      explanation:
        "Subdirectory CLAUDE.md files add to the parent — they don't replace it. Claude sees both the root-level and subdirectory-level instructions.",
    },
    {
      id: "q3",
      type: "multiple-choice",
      question: "Where does the user-level CLAUDE.md live?",
      options: [
        "In the project root",
        "In ~/.claude/CLAUDE.md",
        "In /etc/claude/CLAUDE.md",
        "In .claude/CLAUDE.md within the project",
      ],
      correctAnswer: 1,
      explanation:
        "The user-level CLAUDE.md lives at ~/.claude/CLAUDE.md. It contains personal preferences that apply across all your projects.",
    },
    {
      id: "q4",
      type: "multiple-choice",
      question: "What syntax imports additional files into CLAUDE.md?",
      options: [
        "#include <filepath>",
        "import 'filepath'",
        "@path syntax (e.g., @docs/api-patterns.md)",
        "require('filepath')",
      ],
      correctAnswer: 2,
      explanation:
        "The @path syntax (like @docs/api-patterns.md) imports additional files into your CLAUDE.md, keeping it lean while providing detailed reference material.",
    },
  ],
};
