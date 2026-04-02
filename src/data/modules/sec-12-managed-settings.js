export default {
  id: "sec-12-managed-settings",
  title: "Managed Settings",
  whyItMatters:
    "In team environments, you need consistent security policies across every developer's machine without relying on each person to configure things correctly. Managed settings give admins central control over Claude Code's behavior organization-wide.",

  content: [
    {
      type: "text",
      body: "Managed settings (also called server-managed settings) let organization administrators push Claude Code configuration centrally. Instead of relying on developers to set up permissions, allowed tools, and security policies individually, admins define them once and they're applied everywhere. This is the enterprise answer to 'how do we ensure consistent policies?'",
    },
    {
      type: "keyPoint",
      body: "Managed settings override user and project settings. The hierarchy is:\n\n1. **Managed settings** (highest priority — set by admins)\n2. **Project settings** (`.claude/settings.json` in the repo)\n3. **User settings** (`~/.claude/settings.json`)\n\nThis means admins can enforce minimum security standards that individual developers can't override, while still allowing customization within those boundaries.",
    },
    {
      type: "example",
      title: "What admins can control with managed settings",
      code: '// Managed settings can control:\n{\n  // Which tools are allowed or blocked\n  "permissions": {\n    "deny": ["Bash(curl *)", "Bash(wget *)"],\n    "mode": "auto"\n  },\n  \n  // Which MCP servers can be installed\n  "allowedMcpServers": [\n    "github",\n    "slack",\n    "company-internal-tools"\n  ],\n  \n  // Hook restrictions\n  "hooks": {\n    "allowedCommands": ["eslint", "prettier", "jest"]\n  },\n  \n  // Force specific security settings\n  "sandbox": {\n    "network": {\n      "allowedDomains": ["*.company.com", "api.github.com"]\n    }\n  }\n}',
      explanation:
        "Admins can restrict which commands Claude can run, which MCP servers are permitted, what hooks can execute, and which domains Claude can reach. Developers can add more restrictive rules on top but can't loosen managed restrictions.",
    },
    {
      type: "text",
      body: "**DevContainers** offer another path to consistency. By defining a development container configuration, teams ensure every developer gets the same environment — same tools, same settings, same Claude Code configuration. This is especially useful for onboarding new team members or contractors who need a secure, pre-configured environment from day one.",
    },
    {
      type: "inPractice",
      body: "The typical enterprise setup combines managed settings with DevContainers: managed settings enforce organization-wide policies (blocked commands, allowed MCP servers, network restrictions), while DevContainers ensure the development environment is consistent and reproducible. Together, they give security teams confidence that Claude Code is being used safely across the organization.",
    },
  ],

  quiz: [
    {
      id: "q1",
      type: "multiple-choice",
      question: "What is the priority order for Claude Code settings?",
      options: [
        "User > Project > Managed",
        "Project > Managed > User",
        "Managed > Project > User",
        "All settings have equal priority",
      ],
      correctAnswer: 2,
      explanation:
        "Managed settings have the highest priority, followed by project settings, then user settings. This ensures admin-enforced policies can't be overridden by individual developers.",
    },
    {
      id: "q2",
      type: "multiple-choice",
      question: "Can a developer override a managed setting on their machine?",
      options: [
        "Yes, user settings always take priority",
        "Yes, but only for non-security settings",
        "No — managed settings override user and project settings",
        "Only if they have admin access",
      ],
      correctAnswer: 2,
      explanation:
        "Managed settings override user and project settings. Developers can add more restrictive rules but can't loosen restrictions set by managed settings.",
    },
    {
      id: "q3",
      type: "multiple-choice",
      question: "How do DevContainers complement managed settings?",
      options: [
        "They replace managed settings entirely",
        "They provide consistent, reproducible development environments with pre-configured Claude Code settings",
        "They only work in Docker environments",
        "They're only for CI/CD pipelines",
      ],
      correctAnswer: 1,
      explanation:
        "DevContainers ensure every developer gets the same environment with consistent tools and Claude Code configuration. Combined with managed settings for policy enforcement, they provide comprehensive control.",
    },
  ],
};
