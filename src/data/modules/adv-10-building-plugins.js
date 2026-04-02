export default {
  id: "adv-10-building-plugins",
  title: "Building Plugins",
  whyItMatters:
    "Plugins bundle skills, agents, hooks, and MCP servers into distributable packages. They're how you share reusable Claude Code extensions with your team or the broader community — packaging your best automation into something others can install in seconds.",

  content: [
    {
      type: "text",
      body: "A Claude Code plugin is a structured package that can contain any combination of:\n\n- **Skills**: Custom slash commands\n- **Agents**: Specialized subagent definitions\n- **Hooks**: Pre/post action automation\n- **MCP servers**: Tool integrations\n\nBy bundling these together, a plugin can provide a complete solution for a specific workflow — like a \"Python testing\" plugin that includes test-running skills, a test-coverage agent, formatting hooks, and a pytest MCP server.",
    },
    {
      type: "keyPoint",
      body: "Create a new plugin scaffold with `claude plugin create`. This generates the standard plugin structure with a manifest file, directory layout for each component type, and a README. The manifest describes what the plugin provides and any configuration it needs.",
    },
    {
      type: "text",
      body: "**Plugin marketplaces** let teams distribute plugins internally. Instead of each developer manually installing extensions, the team admin publishes plugins to a marketplace and team members can browse and install them. This creates a shared ecosystem of tools and automation that grows with your team's needs.\n\nTo publish a plugin, use the plugin publishing workflow which validates the plugin structure, runs any tests, and makes it available in the configured marketplace.",
    },
    {
      type: "inPractice",
      body: "Start by extracting a workflow you've already built with individual skills and hooks into a plugin. If you have a code review skill, a formatting hook, and a linting MCP server that you always use together, bundling them into a \"code quality\" plugin makes them installable as a single unit and shareable with your team.",
    },
  ],

  quiz: [
    {
      id: "q1",
      type: "multiple-choice",
      question: "What can a Claude Code plugin contain?",
      options: [
        "Only skills (slash commands)",
        "Only MCP servers",
        "Any combination of skills, agents, hooks, and MCP servers",
        "Only hooks and skills",
      ],
      correctAnswer: 2,
      explanation:
        "Plugins can bundle any combination of skills, agents, hooks, and MCP servers into a single distributable package.",
    },
    {
      id: "q2",
      type: "multiple-choice",
      question: "How do you create a new plugin?",
      options: [
        "Manually create a plugin.json file",
        "Use `claude plugin create` to generate the scaffold",
        "Fork an existing plugin repository",
        "Install the plugin SDK separately",
      ],
      correctAnswer: 1,
      explanation:
        "Use `claude plugin create` to generate the standard plugin structure with a manifest file, directory layout, and README.",
    },
    {
      id: "q3",
      type: "multiple-choice",
      question: "What are plugin marketplaces used for?",
      options: [
        "Selling plugins commercially",
        "Distributing plugins within a team so members can browse and install them",
        "Hosting plugin source code",
        "Running plugin tests automatically",
      ],
      correctAnswer: 1,
      explanation:
        "Plugin marketplaces let teams distribute plugins internally. Admins publish plugins and team members can browse and install them, creating a shared extension ecosystem.",
    },
  ],
};
