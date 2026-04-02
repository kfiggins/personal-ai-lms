export default {
  id: "ext-10-mcp-tool-search",
  title: "MCP Tool Search",
  whyItMatters:
    "As you install more MCP servers, the number of available tools can grow large. Tool search keeps Claude fast and focused by only loading tool definitions when they're actually needed, instead of cramming everything into the context window.",

  content: [
    {
      type: "text",
      body: "Every MCP server exposes one or more tools, and each tool has a full definition (name, description, parameters). When you have many servers installed, loading all those definitions into Claude's context at once wastes valuable space. Tool search solves this by deferring tool definitions — Claude sees tool names but only loads full definitions when needed.",
    },
    {
      type: "keyPoint",
      body: "With tool search enabled, Claude sees a **list of available tool names** from your MCP servers but doesn't load their full parameter schemas until it needs to use one. When Claude decides to use a specific tool, it fetches the full definition on demand. This keeps the context window lean.",
    },
    {
      type: "example",
      title: "How tool search works",
      code: "# Without tool search (many MCP servers installed):\n# Context window stuffed with 50+ tool definitions\n# → Less room for your actual conversation\n# → Slower responses\n\n# With tool search enabled:\n# Claude sees: \"sentry_get_issues, sentry_get_events,\n#   postgres_query, postgres_schema, github_list_prs, ...\"\n# Full definitions loaded only when Claude picks a tool\n# → Context stays lean\n# → Same capabilities, better performance",
      explanation:
        "Tool search is like a lazy-loading strategy. Claude knows what tools exist but only loads the details when it decides to use one. This is especially valuable when you have many MCP servers installed.",
    },
    {
      type: "tip",
      body: "Tool search is most valuable when you have three or more MCP servers installed. If you only have one or two, the overhead of full tool definitions is minimal and tool search may not make a noticeable difference.",
    },
  ],

  quiz: [
    {
      id: "q1",
      type: "multiple-choice",
      question: "What problem does MCP tool search solve?",
      options: [
        "Finding MCP servers to install",
        "Context window bloat from too many tool definitions",
        "Searching for files in the project",
        "Connecting to remote databases",
      ],
      correctAnswer: 1,
      explanation:
        "Tool search prevents context window bloat when many MCP servers are installed. Instead of loading all tool definitions upfront, it defers them until Claude actually needs to use a specific tool.",
    },
    {
      id: "q2",
      type: "multiple-choice",
      question: "With tool search enabled, what does Claude initially see?",
      options: [
        "No MCP tools at all",
        "Full tool definitions for all tools",
        "Tool names without full parameter definitions",
        "Only the most recently used tools",
      ],
      correctAnswer: 2,
      explanation:
        "With tool search, Claude sees a list of available tool names but the full definitions (parameters, detailed descriptions) are only loaded when Claude decides to use a specific tool.",
    },
    {
      id: "q3",
      type: "true-false",
      question:
        "Tool search reduces Claude's capabilities by hiding some tools.",
      options: ["True", "False"],
      correctAnswer: 1,
      explanation:
        "Tool search doesn't reduce capabilities. Claude still sees all available tool names and can use any of them. It just loads the full definitions on demand instead of all at once.",
    },
  ],
};
