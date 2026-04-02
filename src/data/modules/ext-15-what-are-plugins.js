export default {
  id: "ext-15-what-are-plugins",
  title: "What Are Plugins?",
  whyItMatters:
    "Plugins are the most comprehensive extension mechanism — they bundle skills, agents, hooks, and MCP servers into a single shareable package. Understanding plugins helps you see how all the extension pieces fit together.",

  content: [
    {
      type: "text",
      body: "Plugins package multiple Claude Code extensions into a single, shareable unit. Instead of asking your team to install MCP servers, create skills, and configure hooks separately, a plugin bundles all of that together. Install the plugin, and everything is configured.",
    },
    {
      type: "keyPoint",
      body: "A plugin can contain any combination of: **skills** (slash commands), **agents** (custom subagents), **hooks** (automated actions), and **MCP servers** (external integrations). This makes plugins the highest-level extension mechanism — they compose all the others.",
    },
    {
      type: "example",
      title: "What a plugin might include",
      code: "# Example: \"django-toolkit\" plugin\n# Contains:\n# - Skills: /django-migrate, /django-test, /django-shell\n# - Agent: django-debugger (specialized for Django errors)\n# - Hook: auto-run makemigrations after model changes\n# - MCP: connects to Django admin API\n\n# One install gives you the complete Django workflow",
      explanation:
        "A plugin bundles everything a specific workflow needs. Instead of configuring each piece manually, the plugin handles it. This is especially valuable for onboarding new team members — they install one thing and get the full toolset.",
    },
    {
      type: "inPractice",
      body: "Plugins can be installed from marketplaces or created within your organization. They're especially valuable for teams with complex, standardized workflows. Think of them as the difference between installing individual utilities versus installing a full development environment.",
    },
    {
      type: "tip",
      body: "You don't need to jump straight to plugins. Most teams evolve naturally: start with CLAUDE.md, add skills, then hooks, then MCP. When you find yourself setting up the same combination repeatedly, that's when a plugin makes sense.",
    },
  ],

  quiz: [
    {
      id: "q1",
      type: "multiple-choice",
      question: "What can a plugin contain?",
      options: [
        "Only custom skills",
        "Only MCP server configurations",
        "Skills, agents, hooks, and MCP servers bundled together",
        "Only hooks and skills",
      ],
      correctAnswer: 2,
      explanation:
        "Plugins can bundle any combination of skills, agents, hooks, and MCP servers into a single shareable package. They compose all other extension mechanisms.",
    },
    {
      id: "q2",
      type: "multiple-choice",
      question: "When should you create a plugin instead of individual extensions?",
      options: [
        "Always — plugins are better than individual extensions",
        "When you find yourself setting up the same combination of extensions repeatedly",
        "Only for open-source projects",
        "Only when you have more than 10 extensions",
      ],
      correctAnswer: 1,
      explanation:
        "Plugins make sense when you repeatedly set up the same combination of skills, hooks, agents, and MCP servers. They simplify distribution and onboarding.",
    },
    {
      id: "q3",
      type: "true-false",
      question:
        "Plugins can only be created by Anthropic, not by individual teams.",
      options: ["True", "False"],
      correctAnswer: 1,
      explanation:
        "Anyone can create plugins. They can be shared within your organization, published to marketplaces, or kept private for internal use.",
    },
  ],
};
