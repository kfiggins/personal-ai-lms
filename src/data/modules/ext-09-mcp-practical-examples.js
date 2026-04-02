export default {
  id: "ext-09-mcp-practical-examples",
  title: "MCP Practical Examples",
  whyItMatters:
    "Seeing real MCP configurations helps you get started faster. These examples cover the most popular integrations — error tracking, code hosting, and databases — so you can adapt them to your own setup.",

  content: [
    {
      type: "text",
      body: "Let's walk through three of the most commonly used MCP servers: Sentry for error tracking, GitHub for repository operations, and PostgreSQL for database access. Each shows a different pattern of how MCP brings external data into Claude's reach.",
    },
    {
      type: "example",
      title: "Sentry — error tracking",
      code: "# Install the Sentry MCP server\nclaude mcp add sentry -- npx @sentry/mcp --token YOUR_SENTRY_TOKEN\n\n# Now you can ask Claude:\n# \"What are the top unresolved errors this week?\"\n# \"Show me the stack trace for issue PROJ-1234\"\n# \"Which errors started after yesterday's deploy?\"",
      explanation:
        "The Sentry MCP server gives Claude direct access to your error tracking data. Claude can query issues, read stack traces, and help you prioritize and debug production errors — all without leaving your conversation.",
    },
    {
      type: "example",
      title: "PostgreSQL — database access",
      code: "# Install the PostgreSQL MCP server\nclaude mcp add postgres -- npx @modelcontextprotocol/server-postgres\n\n# Set the connection string via environment\n# DATABASE_URL=postgresql://user:pass@localhost:5432/mydb\n\n# Now you can ask Claude:\n# \"What's the schema of the users table?\"\n# \"How many orders were placed last month?\"\n# \"Write and run a query to find duplicate emails\"",
      explanation:
        "The PostgreSQL MCP server lets Claude query your database directly. This is incredibly powerful for data exploration, debugging data issues, and writing queries. Claude can see schemas, run SELECT queries, and help you understand your data.",
    },
    {
      type: "keyPoint",
      body: "Once installed, MCP tools appear as available tools Claude can use — just like Read, Edit, and Bash. Claude automatically picks the right tool for the job. You don't need to tell Claude which MCP server to use; it figures that out from your request.",
    },
    {
      type: "tip",
      body: "Start with one MCP server that addresses your biggest pain point. If you're constantly switching to Sentry to check errors, install the Sentry server first. You can always add more servers later.",
    },
  ],

  quiz: [
    {
      id: "q1",
      type: "multiple-choice",
      question:
        "After installing the Sentry MCP server, how do you tell Claude to use it?",
      options: [
        "You must prefix your request with @sentry",
        "You need to run /use-sentry first",
        "Just ask your question naturally — Claude picks the right tool",
        "You must switch to a special Sentry mode",
      ],
      correctAnswer: 2,
      explanation:
        "MCP tools appear alongside Claude's built-in tools. Claude automatically selects the right tool based on your request — you don't need any special syntax or commands.",
    },
    {
      id: "q2",
      type: "multiple-choice",
      question: "What can the PostgreSQL MCP server do?",
      options: [
        "Only read database schemas",
        "Only run pre-approved queries",
        "Query databases, read schemas, and help explore data",
        "Only backup and restore databases",
      ],
      correctAnswer: 2,
      explanation:
        "The PostgreSQL MCP server gives Claude broad database access — reading schemas, running queries, and helping you explore and understand your data.",
    },
    {
      id: "q3",
      type: "multiple-choice",
      question: "What's the recommended approach for adding MCP servers?",
      options: [
        "Install all available servers at once for maximum capability",
        "Start with one server that addresses your biggest pain point",
        "Only use MCP servers in production environments",
        "Wait until you have at least 10 use cases",
      ],
      correctAnswer: 1,
      explanation:
        "Start with one server that solves your most frequent pain point. This keeps things simple and lets you learn the MCP workflow before adding more integrations.",
    },
  ],
};
