export default {
  id: "ext-08-installing-mcp-servers",
  title: "Installing MCP Servers",
  whyItMatters:
    "MCP servers are only useful if you can install and configure them. Understanding the different server types and scopes lets you set up integrations quickly and share them with your team.",

  content: [
    {
      type: "text",
      body: "MCP servers come in three types: remote HTTP servers (hosted services you connect to), remote SSE servers (deprecated, being replaced by HTTP), and local stdio servers (programs that run on your machine). Most servers you'll encounter are either remote HTTP or local stdio.",
    },
    {
      type: "example",
      title: "Installing an MCP server",
      code: "# Install a local stdio server (e.g., Sentry)\nclaude mcp add sentry -- npx @sentry/mcp --token YOUR_TOKEN\n\n# Install a remote HTTP server\nclaude mcp add my-server --transport http https://my-server.example.com/mcp\n\n# List installed servers\nclaude mcp list\n\n# Remove a server\nclaude mcp remove sentry",
      explanation:
        "The `claude mcp add` command is the primary way to install MCP servers. For local servers, everything after -- is the command to start the server. For remote servers, you specify the transport and URL.",
    },
    {
      type: "keyPoint",
      body: "MCP servers can be installed at three scopes: **local** (just for you, stored in user settings), **project** (shared with the team via .mcp.json in the project root), and **user** (available across all your projects, stored in ~/.claude/). Project scope is great for team-wide integrations.",
    },
    {
      type: "example",
      title: "Project-level MCP configuration",
      code: "// .mcp.json in project root (committed to git)\n{\n  \"mcpServers\": {\n    \"postgres\": {\n      \"command\": \"npx\",\n      \"args\": [\"@modelcontextprotocol/server-postgres\"],\n      \"env\": {\n        \"DATABASE_URL\": \"postgresql://localhost:5432/mydb\"\n      }\n    }\n  }\n}",
      explanation:
        "A .mcp.json file in your project root lets you share MCP server configurations with your team. Anyone who clones the repo gets the same integrations automatically.",
    },
    {
      type: "tip",
      body: "Use environment variables for sensitive values like API tokens instead of hardcoding them. The env field in MCP configuration supports referencing environment variables from your shell.",
    },
  ],

  quiz: [
    {
      id: "q1",
      type: "multiple-choice",
      question: "What command installs an MCP server in Claude Code?",
      options: [
        "claude install mcp",
        "claude mcp add",
        "npm install @mcp/server",
        "claude plugins install",
      ],
      correctAnswer: 1,
      explanation:
        "The `claude mcp add` command is used to install MCP servers. You provide the server name and the command to run it.",
    },
    {
      id: "q2",
      type: "multiple-choice",
      question:
        "How do you share MCP server configurations with your team?",
      options: [
        "Copy settings.json to each team member",
        "Create a .mcp.json file in the project root and commit it",
        "Email the configuration to everyone",
        "MCP configurations can't be shared",
      ],
      correctAnswer: 1,
      explanation:
        "A .mcp.json file in the project root is the project-scope configuration for MCP servers. When committed to git, everyone on the team gets the same integrations.",
    },
    {
      id: "q3",
      type: "multiple-choice",
      question: "What are the three types of MCP servers?",
      options: [
        "Fast, medium, and slow",
        "Public, private, and hybrid",
        "Remote HTTP, remote SSE (deprecated), and local stdio",
        "Read-only, write-only, and read-write",
      ],
      correctAnswer: 2,
      explanation:
        "MCP servers come in three types: remote HTTP (hosted services), remote SSE (deprecated, replaced by HTTP), and local stdio (programs running on your machine).",
    },
    {
      id: "q4",
      type: "true-false",
      question:
        "You should hardcode API tokens directly in .mcp.json for convenience.",
      options: ["True", "False"],
      correctAnswer: 1,
      explanation:
        "Never hardcode sensitive values like API tokens. Use environment variables instead, which can be referenced in the env field of the MCP configuration.",
    },
  ],
};
