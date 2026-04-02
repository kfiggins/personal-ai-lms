export default {
  id: "ext-13-creating-custom-subagents",
  title: "Creating Custom Subagents",
  whyItMatters:
    "Custom subagents let you define specialized AI assistants tuned for your team's workflows. A code reviewer agent, a data analyst agent, or a security auditor agent — each with the right tools, permissions, and instructions for its role.",

  content: [
    {
      type: "text",
      body: "Custom subagents are defined as markdown files, similar to skills. You create them in .claude/agents/ (project-level) or ~/.claude/agents/ (user-level). Each file defines a specialized agent with its own instructions, tool access, model, and permission settings.",
    },
    {
      type: "example",
      title: "Creating a custom subagent",
      code: "# File: .claude/agents/code-reviewer.md\n---\nname: code-reviewer\ndescription: Reviews code changes for quality, security, and style\ntools:\n  - Read\n  - Glob\n  - Grep\n  - Bash\nmodel: sonnet\npermissionMode: default\nmaxTurns: 10\n---\n\nYou are a code reviewer. When given a diff or file:\n\n1. Check for security vulnerabilities (SQL injection, XSS, etc.)\n2. Verify error handling is comprehensive\n3. Look for performance issues\n4. Ensure naming follows project conventions\n5. Suggest improvements, ranked by importance\n\nBe concise. Focus on issues that matter.",
      explanation:
        "The frontmatter controls the agent's capabilities: which tools it can use, which model powers it, how many turns it gets. The body provides the agent's system instructions — its personality and approach.",
    },
    {
      type: "keyPoint",
      body: "Key frontmatter fields: **name** and **description** (identity), **tools** (which tools the agent can access), **model** (which Claude model to use), **permissionMode** (permission level), **maxTurns** (limit on conversation turns). You can also scope MCP servers and preload skills.",
    },
    {
      type: "inPractice",
      body: "You can set up custom subagents interactively using the `/agents` command in Claude Code. This walks you through the configuration options. Teams often create agents for code review, debugging, data analysis, documentation writing, and security auditing — each specialized for its role.",
    },
    {
      type: "tip",
      body: "Limit your custom agents' tools to what they actually need. A code reviewer doesn't need Write or Edit access — it only needs to read. Scoping tools properly makes agents safer and more focused.",
    },
  ],

  quiz: [
    {
      id: "q1",
      type: "multiple-choice",
      question: "Where do project-level custom subagent definitions live?",
      options: [
        ".claude/skills/",
        ".claude/agents/",
        "~/.claude/subagents/",
        "settings.json",
      ],
      correctAnswer: 1,
      explanation:
        "Project-level custom subagents are defined as markdown files in the .claude/agents/ directory. User-level agents go in ~/.claude/agents/.",
    },
    {
      id: "q2",
      type: "multiple-choice",
      question: "What does the maxTurns frontmatter field control?",
      options: [
        "How many files the agent can read",
        "The maximum number of conversation turns the agent gets",
        "How many times the agent can be invoked per day",
        "The timeout in seconds",
      ],
      correctAnswer: 1,
      explanation:
        "maxTurns limits how many conversation turns (tool calls and responses) the subagent can take. This prevents runaway agents from consuming too many resources.",
    },
    {
      id: "q3",
      type: "multiple-choice",
      question: "What command helps you create custom subagents interactively?",
      options: [
        "/skills",
        "/agents",
        "/create-agent",
        "/subagent-new",
      ],
      correctAnswer: 1,
      explanation:
        "The /agents command provides an interactive setup experience for creating and managing custom subagents.",
    },
    {
      id: "q4",
      type: "true-false",
      question:
        "Custom subagents should generally have access to all available tools for maximum flexibility.",
      options: ["True", "False"],
      correctAnswer: 1,
      explanation:
        "Limit agents' tools to what they actually need. A read-only reviewer doesn't need Write access. Scoping tools properly makes agents safer and more focused on their specific task.",
    },
  ],
};
