export default {
  id: "ext-07-what-is-mcp",
  title: "What is MCP?",
  whyItMatters:
    "MCP is what lets Claude Code reach beyond your local filesystem. Without it, Claude can only work with files and commands on your machine. With MCP, Claude can read Google Drive docs, update Jira tickets, query databases, and interact with virtually any external system.",

  content: [
    {
      type: "text",
      body: "MCP stands for Model Context Protocol — an open standard for connecting AI models to external data sources and tools. In Claude Code, MCP servers act as bridges: each one connects Claude to a different external system. Think of it like giving Claude hands to reach into other tools you already use.",
    },
    {
      type: "keyPoint",
      body: "MCP follows a **client-server architecture**. Claude Code is the client. MCP servers are lightweight programs that expose tools and data from external systems. When Claude needs to interact with an external system, it calls the appropriate MCP server's tools — just like it calls built-in tools like Read or Edit.",
    },
    {
      type: "example",
      title: "MCP in action",
      code: "# Without MCP:\nUser: \"Check what Sentry errors we have\"\nClaude: \"I can't access Sentry directly. You'll need to\n        check the dashboard and paste the errors here.\"\n\n# With MCP (Sentry server installed):\nUser: \"Check what Sentry errors we have\"\nClaude: *uses Sentry MCP tools to query errors*\n        \"Found 3 unresolved errors in the last 24 hours:\n         1. TypeError in auth.ts:42 (12 occurrences)\n         2. ...\"",
      explanation:
        "MCP servers make external data directly accessible to Claude. Instead of you copying and pasting between tools, Claude can query and interact with external systems natively.",
    },
    {
      type: "inPractice",
      body: "Popular MCP servers include Sentry (error tracking), GitHub (repos, issues, PRs), PostgreSQL (database queries), filesystem access beyond the project, and many more. The ecosystem is growing rapidly since MCP is an open standard that anyone can build servers for.",
    },
    {
      type: "tip",
      body: "MCP tools appear alongside Claude's built-in tools. Claude doesn't distinguish between them — it picks the right tool for the job whether it's built-in or provided by an MCP server.",
    },
  ],

  quiz: [
    {
      id: "q1",
      type: "multiple-choice",
      question: "What does MCP stand for?",
      options: [
        "Model Configuration Protocol",
        "Multi-Channel Processing",
        "Model Context Protocol",
        "Machine Communication Pipeline",
      ],
      correctAnswer: 2,
      explanation:
        "MCP stands for Model Context Protocol. It's an open standard for connecting AI models to external data sources and tools.",
    },
    {
      id: "q2",
      type: "multiple-choice",
      question: "In the MCP architecture, what role does Claude Code play?",
      options: [
        "The server",
        "The client",
        "The protocol layer",
        "The data source",
      ],
      correctAnswer: 1,
      explanation:
        "Claude Code is the MCP client. MCP servers are separate programs that provide tools and data from external systems. Claude Code connects to these servers to access their capabilities.",
    },
    {
      id: "q3",
      type: "true-false",
      question:
        "MCP is a proprietary Anthropic protocol that only works with Claude.",
      options: ["True", "False"],
      correctAnswer: 1,
      explanation:
        "MCP is an open standard. While Claude Code supports it natively, other AI tools can also implement MCP support. Anyone can build MCP servers.",
    },
    {
      id: "q4",
      type: "multiple-choice",
      question: "What is the best analogy for what MCP servers do?",
      options: [
        "They replace Claude's built-in tools",
        "They act as bridges connecting Claude to external systems",
        "They store Claude's memory between sessions",
        "They manage Claude's permission settings",
      ],
      correctAnswer: 1,
      explanation:
        "MCP servers are bridges between Claude and external systems. Each server exposes tools that let Claude interact with a specific service like Sentry, GitHub, or a database.",
    },
  ],
};
