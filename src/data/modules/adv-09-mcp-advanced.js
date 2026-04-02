export default {
  id: "adv-09-mcp-advanced",
  title: "MCP Advanced",
  whyItMatters:
    "Advanced MCP configuration unlocks enterprise-grade integrations — OAuth authentication for secure API access, dynamic headers for credential rotation, and managed configuration for controlling MCP across an organization.",

  content: [
    {
      type: "text",
      body: "Beyond basic MCP server setup, Claude Code supports advanced configuration patterns for production and enterprise environments.\n\n**OAuth 2.0 authentication**: MCP servers that require authentication can use OAuth 2.0 flows. Claude Code handles the token exchange, refresh, and storage. When you connect to an OAuth-protected server, Claude initiates the auth flow and securely stores the credentials for future sessions.",
    },
    {
      type: "keyPoint",
      body: "Pre-configured OAuth credentials simplify onboarding for team members. Instead of each developer setting up their own OAuth app, administrators can configure shared credentials that are distributed through managed settings. New team members get access to MCP servers without any manual auth setup.",
    },
    {
      type: "text",
      body: "**Dynamic headers with headersHelper**: Some integrations require headers that change over time — rotating API keys, session tokens, or dynamically generated signatures. The `headersHelper` configuration lets you specify a command that runs before each MCP request to generate the current headers:\n\n```json\n{\n  \"mcpServers\": {\n    \"my-server\": {\n      \"url\": \"https://api.example.com/mcp\",\n      \"headersHelper\": \"node scripts/get-auth-headers.js\"\n    }\n  }\n}\n```\n\nThe command's stdout is parsed as JSON and used as request headers.",
    },
    {
      type: "text",
      body: "**Managed MCP configuration for organizations**: Enterprise administrators can control which MCP servers are available across the organization:\n\n- **Allowlists**: Only permit connections to approved MCP servers\n- **Denylists**: Block specific servers that aren't approved for use\n- **Managed configuration**: Push MCP server configs to all users through managed settings, ensuring consistent access and security policies\n\nThis gives organizations control over what external services Claude can interact with while still letting individual developers customize their setup within those boundaries.",
    },
    {
      type: "tip",
      body: "When building custom MCP servers for your team, implement health check endpoints. Claude Code can verify server availability before attempting operations, giving you better error messages when a server is down.",
    },
  ],

  quiz: [
    {
      id: "q1",
      type: "multiple-choice",
      question: "What does the `headersHelper` configuration do?",
      options: [
        "Adds static headers to all requests",
        "Runs a command before each MCP request to generate dynamic headers",
        "Encrypts MCP request headers",
        "Validates header format before sending",
      ],
      correctAnswer: 1,
      explanation:
        "headersHelper specifies a command that runs before each MCP request. The command's stdout is parsed as JSON and used as request headers, enabling dynamic credentials.",
    },
    {
      id: "q2",
      type: "multiple-choice",
      question: "How do pre-configured OAuth credentials help teams?",
      options: [
        "They make requests faster",
        "They eliminate the need for authentication",
        "They let new team members access MCP servers without manual auth setup",
        "They bypass security policies",
      ],
      correctAnswer: 2,
      explanation:
        "Pre-configured OAuth credentials are distributed through managed settings, so new team members get immediate access to MCP servers without each needing to set up their own OAuth app.",
    },
    {
      id: "q3",
      type: "multiple-choice",
      question: "What is the purpose of MCP server allowlists?",
      options: [
        "Speed up server connections",
        "Only permit connections to approved MCP servers",
        "Prioritize certain servers over others",
        "Cache server responses",
      ],
      correctAnswer: 1,
      explanation:
        "Allowlists restrict which MCP servers can be used, ensuring that only approved servers are accessible. This is part of the managed configuration for enterprise environments.",
    },
    {
      id: "q4",
      type: "multiple-choice",
      question: "How does Claude Code handle OAuth 2.0 for MCP servers?",
      options: [
        "Users must manually paste tokens into each session",
        "OAuth is not supported for MCP",
        "Claude handles token exchange, refresh, and storage automatically",
        "OAuth tokens are stored in CLAUDE.md",
      ],
      correctAnswer: 2,
      explanation:
        "Claude Code manages the full OAuth 2.0 flow — token exchange, refresh, and secure storage. Credentials persist across sessions so you don't need to re-authenticate.",
    },
  ],
};
