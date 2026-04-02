// Central registry for all LMS modules, categories, and helper functions.

export const CATEGORIES = [
  { id: "getting-started", title: "Getting Started", icon: "🚀", description: "Install Claude Code and understand what it does", order: 1 },
  { id: "core-concepts", title: "Core Concepts", icon: "🧠", description: "How Claude Code works under the hood", order: 2 },
  { id: "everyday-usage", title: "Everyday Usage", icon: "💻", description: "Common workflows and best practices", order: 3 },
  { id: "configuration", title: "Configuration & Settings", icon: "⚙️", description: "Customize Claude Code to your workflow", order: 4 },
  { id: "memory-context", title: "Memory & Context", icon: "📝", description: "CLAUDE.md, auto memory, and context management", order: 5 },
  { id: "extensibility", title: "Extending Claude Code", icon: "🔌", description: "Skills, hooks, MCP, subagents, and plugins", order: 6 },
  { id: "platforms", title: "Platforms & Integrations", icon: "🖥️", description: "VS Code, JetBrains, Desktop, Web, and more", order: 7 },
  { id: "cicd-automation", title: "CI/CD & Automation", icon: "🔄", description: "GitHub Actions, GitLab CI/CD, scheduled tasks", order: 8 },
  { id: "security-enterprise", title: "Security & Enterprise", icon: "🔒", description: "Permissions, sandboxing, enterprise deployment", order: 9 },
  { id: "advanced", title: "Advanced Topics", icon: "🎓", description: "Agent teams, computer use, and power features", order: 10 },
];

export const MODULES = [
  // Getting Started
  { id: "gs-01-what-is-claude-code", title: "What is Claude Code?", category: "getting-started", categoryTitle: "Getting Started", order: 1, estimatedMinutes: 3, prerequisites: [], docSource: "overview" },
  { id: "gs-02-where-claude-code-runs", title: "Where Claude Code Runs", category: "getting-started", categoryTitle: "Getting Started", order: 2, estimatedMinutes: 3, prerequisites: ["gs-01-what-is-claude-code"], docSource: "overview" },
  { id: "gs-03-installing-claude-code", title: "Installing Claude Code", category: "getting-started", categoryTitle: "Getting Started", order: 3, estimatedMinutes: 4, prerequisites: ["gs-02-where-claude-code-runs"], docSource: "quickstart" },
  { id: "gs-04-logging-in", title: "Logging In", category: "getting-started", categoryTitle: "Getting Started", order: 4, estimatedMinutes: 3, prerequisites: ["gs-03-installing-claude-code"], docSource: "authentication" },
  { id: "gs-05-your-first-session", title: "Your First Session", category: "getting-started", categoryTitle: "Getting Started", order: 5, estimatedMinutes: 4, prerequisites: ["gs-04-logging-in"], docSource: "quickstart" },
  { id: "gs-06-asking-questions", title: "Asking Questions About Your Code", category: "getting-started", categoryTitle: "Getting Started", order: 6, estimatedMinutes: 3, prerequisites: ["gs-05-your-first-session"], docSource: "quickstart" },
  { id: "gs-07-making-code-changes", title: "Making Code Changes", category: "getting-started", categoryTitle: "Getting Started", order: 7, estimatedMinutes: 4, prerequisites: ["gs-06-asking-questions"], docSource: "quickstart" },
  { id: "gs-08-git-with-claude-code", title: "Git with Claude Code", category: "getting-started", categoryTitle: "Getting Started", order: 8, estimatedMinutes: 4, prerequisites: ["gs-07-making-code-changes"], docSource: "quickstart" },
  { id: "gs-09-fixing-bugs", title: "Fixing Bugs", category: "getting-started", categoryTitle: "Getting Started", order: 9, estimatedMinutes: 3, prerequisites: ["gs-07-making-code-changes"], docSource: "quickstart" },
  { id: "gs-10-essential-cli-commands", title: "Essential CLI Commands", category: "getting-started", categoryTitle: "Getting Started", order: 10, estimatedMinutes: 5, prerequisites: ["gs-05-your-first-session"], docSource: "quickstart" },
  { id: "gs-11-pro-tips-for-beginners", title: "Pro Tips for Beginners", category: "getting-started", categoryTitle: "Getting Started", order: 11, estimatedMinutes: 4, prerequisites: ["gs-05-your-first-session"], docSource: "quickstart" },
  { id: "gs-12-what-you-can-do-overview", title: "What You Can Do: Overview", category: "getting-started", categoryTitle: "Getting Started", order: 12, estimatedMinutes: 4, prerequisites: ["gs-05-your-first-session"], docSource: "overview" },

  // Core Concepts
  { id: "cc-01-the-agentic-loop", title: "The Agentic Loop", category: "core-concepts", categoryTitle: "Core Concepts", order: 1, estimatedMinutes: 5, prerequisites: ["gs-05-your-first-session"], docSource: "how-claude-code-works" },
  { id: "cc-02-models-and-reasoning", title: "Models and Reasoning", category: "core-concepts", categoryTitle: "Core Concepts", order: 2, estimatedMinutes: 4, prerequisites: ["cc-01-the-agentic-loop"], docSource: "how-claude-code-works" },
  { id: "cc-03-tools-overview", title: "Tools Overview", category: "core-concepts", categoryTitle: "Core Concepts", order: 3, estimatedMinutes: 4, prerequisites: ["cc-01-the-agentic-loop"], docSource: "how-claude-code-works" },
  { id: "cc-04-file-operations-tools", title: "File Operations Tools", category: "core-concepts", categoryTitle: "Core Concepts", order: 4, estimatedMinutes: 4, prerequisites: ["cc-03-tools-overview"], docSource: "tools-reference" },
  { id: "cc-05-search-tools", title: "Search Tools", category: "core-concepts", categoryTitle: "Core Concepts", order: 5, estimatedMinutes: 4, prerequisites: ["cc-03-tools-overview"], docSource: "tools-reference" },
  { id: "cc-06-execution-tools", title: "Execution Tools", category: "core-concepts", categoryTitle: "Core Concepts", order: 6, estimatedMinutes: 4, prerequisites: ["cc-03-tools-overview"], docSource: "tools-reference" },
  { id: "cc-07-web-tools", title: "Web Tools", category: "core-concepts", categoryTitle: "Core Concepts", order: 7, estimatedMinutes: 3, prerequisites: ["cc-03-tools-overview"], docSource: "tools-reference" },
  { id: "cc-08-what-claude-can-access", title: "What Claude Can Access", category: "core-concepts", categoryTitle: "Core Concepts", order: 8, estimatedMinutes: 4, prerequisites: ["cc-01-the-agentic-loop"], docSource: "how-claude-code-works" },
  { id: "cc-09-sessions-explained", title: "Sessions Explained", category: "core-concepts", categoryTitle: "Core Concepts", order: 9, estimatedMinutes: 4, prerequisites: ["cc-01-the-agentic-loop"], docSource: "how-claude-code-works" },
  { id: "cc-10-the-context-window", title: "The Context Window", category: "core-concepts", categoryTitle: "Core Concepts", order: 10, estimatedMinutes: 5, prerequisites: ["cc-01-the-agentic-loop"], docSource: "context-window" },
  { id: "cc-11-context-management", title: "Context Management", category: "core-concepts", categoryTitle: "Core Concepts", order: 11, estimatedMinutes: 5, prerequisites: ["cc-10-the-context-window"], docSource: "how-claude-code-works" },
  { id: "cc-12-checkpoints-and-undo", title: "Checkpoints and Undo", category: "core-concepts", categoryTitle: "Core Concepts", order: 12, estimatedMinutes: 3, prerequisites: ["cc-01-the-agentic-loop"], docSource: "how-claude-code-works" },
  { id: "cc-13-permission-modes-intro", title: "Permission Modes Intro", category: "core-concepts", categoryTitle: "Core Concepts", order: 13, estimatedMinutes: 4, prerequisites: ["cc-01-the-agentic-loop"], docSource: "how-claude-code-works" },
  { id: "cc-14-execution-environments", title: "Execution Environments", category: "core-concepts", categoryTitle: "Core Concepts", order: 14, estimatedMinutes: 3, prerequisites: ["cc-01-the-agentic-loop"], docSource: "how-claude-code-works" },

  // Everyday Usage
  { id: "eu-01-writing-prompts", title: "Writing Effective Prompts", category: "everyday-usage", categoryTitle: "Everyday Usage", order: 1, estimatedMinutes: 6, prerequisites: ["gs-05-your-first-session"], docSource: "prompting" },
  { id: "eu-02-fixing-bugs", title: "Fixing Bugs with Claude Code", category: "everyday-usage", categoryTitle: "Everyday Usage", order: 2, estimatedMinutes: 5, prerequisites: ["eu-01-writing-prompts"], docSource: "common-tasks" },
  { id: "eu-03-code-reviews", title: "Code Reviews and Refactoring", category: "everyday-usage", categoryTitle: "Everyday Usage", order: 3, estimatedMinutes: 5, prerequisites: ["eu-01-writing-prompts"], docSource: "common-tasks" },
  { id: "eu-01-exploring-a-codebase", title: "Exploring a Codebase", category: "everyday-usage", categoryTitle: "Everyday Usage", order: 4, estimatedMinutes: 4, prerequisites: ["gs-05-your-first-session"], docSource: "common-workflows" },
  { id: "eu-02-fixing-bugs-workflow", title: "Fixing Bugs Workflow", category: "everyday-usage", categoryTitle: "Everyday Usage", order: 5, estimatedMinutes: 5, prerequisites: ["gs-05-your-first-session"], docSource: "common-workflows" },
  { id: "eu-03-refactoring-code", title: "Refactoring Code", category: "everyday-usage", categoryTitle: "Everyday Usage", order: 6, estimatedMinutes: 4, prerequisites: ["gs-05-your-first-session"], docSource: "common-workflows" },
  { id: "eu-04-writing-tests", title: "Writing Tests", category: "everyday-usage", categoryTitle: "Everyday Usage", order: 7, estimatedMinutes: 5, prerequisites: ["gs-05-your-first-session"], docSource: "common-workflows" },
  { id: "eu-05-creating-commits-and-prs", title: "Creating Commits and PRs", category: "everyday-usage", categoryTitle: "Everyday Usage", order: 8, estimatedMinutes: 4, prerequisites: ["gs-08-git-with-claude-code"], docSource: "common-workflows" },
  { id: "eu-06-working-with-documentation", title: "Working with Documentation", category: "everyday-usage", categoryTitle: "Everyday Usage", order: 9, estimatedMinutes: 4, prerequisites: ["gs-05-your-first-session"], docSource: "common-workflows" },
  { id: "eu-07-be-specific-upfront", title: "Be Specific Upfront", category: "everyday-usage", categoryTitle: "Everyday Usage", order: 10, estimatedMinutes: 4, prerequisites: ["gs-05-your-first-session"], docSource: "best-practices" },
  { id: "eu-08-give-claude-verification", title: "Give Claude Verification", category: "everyday-usage", categoryTitle: "Everyday Usage", order: 11, estimatedMinutes: 4, prerequisites: ["gs-05-your-first-session"], docSource: "best-practices" },
  { id: "eu-09-explore-before-implementing", title: "Explore Before Implementing", category: "everyday-usage", categoryTitle: "Everyday Usage", order: 12, estimatedMinutes: 5, prerequisites: ["gs-05-your-first-session"], docSource: "best-practices" },
  { id: "eu-10-delegate-dont-dictate", title: "Delegate, Don't Dictate", category: "everyday-usage", categoryTitle: "Everyday Usage", order: 13, estimatedMinutes: 4, prerequisites: ["gs-05-your-first-session"], docSource: "best-practices" },
  { id: "eu-11-iterative-conversation", title: "Iterative Conversation", category: "everyday-usage", categoryTitle: "Everyday Usage", order: 14, estimatedMinutes: 4, prerequisites: ["gs-05-your-first-session"], docSource: "best-practices" },
  { id: "eu-12-working-with-images", title: "Working with Images", category: "everyday-usage", categoryTitle: "Everyday Usage", order: 15, estimatedMinutes: 3, prerequisites: ["gs-05-your-first-session"], docSource: "common-workflows" },
  { id: "eu-13-referencing-files", title: "Referencing Files", category: "everyday-usage", categoryTitle: "Everyday Usage", order: 16, estimatedMinutes: 4, prerequisites: ["gs-05-your-first-session"], docSource: "common-workflows" },
  { id: "eu-14-resuming-conversations", title: "Resuming Conversations", category: "everyday-usage", categoryTitle: "Everyday Usage", order: 17, estimatedMinutes: 4, prerequisites: ["gs-05-your-first-session"], docSource: "common-workflows" },

  // Configuration & Settings
  { id: "cf-01-settings-overview", title: "Settings Overview", category: "configuration", categoryTitle: "Configuration & Settings", order: 1, estimatedMinutes: 4, prerequisites: ["gs-05-your-first-session"], docSource: "settings" },
  { id: "cf-02-permission-modes", title: "Permission Modes", category: "configuration", categoryTitle: "Configuration & Settings", order: 2, estimatedMinutes: 5, prerequisites: ["cf-01-settings-overview"], docSource: "permissions" },
  { id: "cf-03-model-configuration", title: "Model Configuration", category: "configuration", categoryTitle: "Configuration & Settings", order: 3, estimatedMinutes: 4, prerequisites: ["cf-01-settings-overview"], docSource: "model-config" },
  { id: "cfg-01-settings-overview", title: "Configuration Scopes", category: "configuration", categoryTitle: "Configuration & Settings", order: 4, estimatedMinutes: 4, prerequisites: ["gs-05-your-first-session"], docSource: "settings" },
  { id: "cfg-02-user-settings-file", title: "User Settings File", category: "configuration", categoryTitle: "Configuration & Settings", order: 5, estimatedMinutes: 3, prerequisites: ["cfg-01-settings-overview"], docSource: "settings" },
  { id: "cfg-03-project-settings", title: "Project Settings", category: "configuration", categoryTitle: "Configuration & Settings", order: 6, estimatedMinutes: 3, prerequisites: ["cfg-01-settings-overview"], docSource: "settings" },
  { id: "cfg-04-environment-variables", title: "Environment Variables", category: "configuration", categoryTitle: "Configuration & Settings", order: 7, estimatedMinutes: 4, prerequisites: ["cfg-01-settings-overview"], docSource: "env-vars" },
  { id: "cfg-05-cli-reference-flags", title: "CLI Reference Flags", category: "configuration", categoryTitle: "Configuration & Settings", order: 8, estimatedMinutes: 5, prerequisites: ["cfg-01-settings-overview"], docSource: "cli-reference" },
  { id: "cfg-06-built-in-commands", title: "Built-in Commands", category: "configuration", categoryTitle: "Configuration & Settings", order: 9, estimatedMinutes: 4, prerequisites: ["gs-05-your-first-session"], docSource: "commands" },
  { id: "cfg-07-interactive-mode", title: "Interactive Mode", category: "configuration", categoryTitle: "Configuration & Settings", order: 10, estimatedMinutes: 3, prerequisites: ["gs-05-your-first-session"], docSource: "interactive-mode" },
  { id: "cfg-08-model-configuration", title: "Model Configuration", category: "configuration", categoryTitle: "Configuration & Settings", order: 11, estimatedMinutes: 4, prerequisites: ["cfg-01-settings-overview"], docSource: "model-config" },
  { id: "cfg-09-terminal-optimization", title: "Terminal Optimization", category: "configuration", categoryTitle: "Configuration & Settings", order: 12, estimatedMinutes: 3, prerequisites: ["gs-05-your-first-session"], docSource: "terminal-config" },
  { id: "cfg-10-keybindings", title: "Keybindings", category: "configuration", categoryTitle: "Configuration & Settings", order: 13, estimatedMinutes: 3, prerequisites: ["cfg-01-settings-overview"], docSource: "keybindings" },
  { id: "cfg-11-fast-mode", title: "Fast Mode", category: "configuration", categoryTitle: "Configuration & Settings", order: 14, estimatedMinutes: 3, prerequisites: ["gs-05-your-first-session"], docSource: "fast-mode" },
  { id: "cfg-12-output-styles", title: "Output Styles", category: "configuration", categoryTitle: "Configuration & Settings", order: 15, estimatedMinutes: 3, prerequisites: ["gs-05-your-first-session"], docSource: "output-styles" },

  // Memory & Context
  { id: "mc-01-claude-md", title: "CLAUDE.md Files", category: "memory-context", categoryTitle: "Memory & Context", order: 1, estimatedMinutes: 6, prerequisites: ["cf-01-settings-overview"], docSource: "claude-md" },
  { id: "mc-02-auto-memory", title: "Auto Memory System", category: "memory-context", categoryTitle: "Memory & Context", order: 2, estimatedMinutes: 5, prerequisites: ["mc-01-claude-md"], docSource: "memory" },
  { id: "mc-03-context-management", title: "Context Management Strategies", category: "memory-context", categoryTitle: "Memory & Context", order: 3, estimatedMinutes: 5, prerequisites: ["mc-02-auto-memory"], docSource: "context-management" },
  { id: "mc-01-what-is-claude-md", title: "What is CLAUDE.md?", category: "memory-context", categoryTitle: "Memory & Context", order: 4, estimatedMinutes: 4, prerequisites: ["gs-05-your-first-session"], docSource: "memory" },
  { id: "mc-02-creating-claude-md", title: "Creating Your CLAUDE.md", category: "memory-context", categoryTitle: "Memory & Context", order: 5, estimatedMinutes: 4, prerequisites: ["mc-01-what-is-claude-md"], docSource: "memory" },
  { id: "mc-03-effective-claude-md", title: "Writing an Effective CLAUDE.md", category: "memory-context", categoryTitle: "Memory & Context", order: 6, estimatedMinutes: 5, prerequisites: ["mc-02-creating-claude-md"], docSource: "memory" },
  { id: "mc-04-claude-md-scopes", title: "CLAUDE.md Scopes and Hierarchy", category: "memory-context", categoryTitle: "Memory & Context", order: 7, estimatedMinutes: 4, prerequisites: ["mc-01-what-is-claude-md"], docSource: "memory" },
  { id: "mc-05-rules-directory", title: "The Rules Directory", category: "memory-context", categoryTitle: "Memory & Context", order: 8, estimatedMinutes: 4, prerequisites: ["mc-04-claude-md-scopes"], docSource: "memory" },
  { id: "mc-06-auto-memory", title: "Auto Memory", category: "memory-context", categoryTitle: "Memory & Context", order: 9, estimatedMinutes: 4, prerequisites: ["mc-01-what-is-claude-md"], docSource: "memory" },
  { id: "mc-07-the-claude-directory", title: "The .claude Directory", category: "memory-context", categoryTitle: "Memory & Context", order: 10, estimatedMinutes: 4, prerequisites: ["gs-05-your-first-session"], docSource: "claude-directory" },
  { id: "mc-08-context-window-deep-dive", title: "Context Window Deep Dive", category: "memory-context", categoryTitle: "Memory & Context", order: 11, estimatedMinutes: 5, prerequisites: ["cc-10-the-context-window"], docSource: "context-window" },
  { id: "mc-09-managing-context", title: "Managing Context Effectively", category: "memory-context", categoryTitle: "Memory & Context", order: 12, estimatedMinutes: 5, prerequisites: ["mc-08-context-window-deep-dive"], docSource: "how-claude-code-works" },
  { id: "mc-10-memory-command", title: "The /memory Command", category: "memory-context", categoryTitle: "Memory & Context", order: 13, estimatedMinutes: 3, prerequisites: ["mc-06-auto-memory"], docSource: "memory" },

  // Extending Claude Code
  { id: "ex-01-custom-skills", title: "Custom Slash Commands", category: "extensibility", categoryTitle: "Extending Claude Code", order: 1, estimatedMinutes: 5, prerequisites: ["cf-01-settings-overview"], docSource: "skills" },
  { id: "ex-02-hooks", title: "Hooks and Automation", category: "extensibility", categoryTitle: "Extending Claude Code", order: 2, estimatedMinutes: 6, prerequisites: ["ex-01-custom-skills"], docSource: "hooks" },
  { id: "ex-03-mcp-servers", title: "MCP Servers", category: "extensibility", categoryTitle: "Extending Claude Code", order: 3, estimatedMinutes: 7, prerequisites: ["ex-01-custom-skills"], docSource: "mcp" },
  { id: "ext-01-extensibility-overview", title: "Extensibility Overview", category: "extensibility", categoryTitle: "Extending Claude Code", order: 4, estimatedMinutes: 4, prerequisites: ["gs-05-your-first-session"], docSource: "features-overview" },
  { id: "ext-02-what-are-skills", title: "What Are Skills?", category: "extensibility", categoryTitle: "Extending Claude Code", order: 5, estimatedMinutes: 4, prerequisites: ["gs-05-your-first-session"], docSource: "skills" },
  { id: "ext-03-creating-a-skill", title: "Creating a Skill", category: "extensibility", categoryTitle: "Extending Claude Code", order: 6, estimatedMinutes: 4, prerequisites: ["ext-02-what-are-skills"], docSource: "skills" },
  { id: "ext-04-what-are-hooks", title: "What Are Hooks?", category: "extensibility", categoryTitle: "Extending Claude Code", order: 7, estimatedMinutes: 4, prerequisites: ["gs-05-your-first-session"], docSource: "hooks-guide" },
  { id: "ext-05-hook-events", title: "Hook Events", category: "extensibility", categoryTitle: "Extending Claude Code", order: 8, estimatedMinutes: 5, prerequisites: ["ext-04-what-are-hooks"], docSource: "hooks-reference" },
  { id: "ext-06-creating-a-hook", title: "Creating a Hook", category: "extensibility", categoryTitle: "Extending Claude Code", order: 9, estimatedMinutes: 4, prerequisites: ["ext-04-what-are-hooks"], docSource: "hooks-guide" },
  { id: "ext-07-what-is-mcp", title: "What is MCP?", category: "extensibility", categoryTitle: "Extending Claude Code", order: 10, estimatedMinutes: 4, prerequisites: ["gs-05-your-first-session"], docSource: "mcp" },
  { id: "ext-08-installing-mcp-servers", title: "Installing MCP Servers", category: "extensibility", categoryTitle: "Extending Claude Code", order: 11, estimatedMinutes: 4, prerequisites: ["ext-07-what-is-mcp"], docSource: "mcp" },
  { id: "ext-09-mcp-practical-examples", title: "MCP Practical Examples", category: "extensibility", categoryTitle: "Extending Claude Code", order: 12, estimatedMinutes: 4, prerequisites: ["ext-08-installing-mcp-servers"], docSource: "mcp" },
  { id: "ext-10-mcp-tool-search", title: "MCP Tool Search", category: "extensibility", categoryTitle: "Extending Claude Code", order: 13, estimatedMinutes: 3, prerequisites: ["ext-07-what-is-mcp"], docSource: "mcp" },
  { id: "ext-11-what-are-subagents", title: "What Are Subagents?", category: "extensibility", categoryTitle: "Extending Claude Code", order: 14, estimatedMinutes: 4, prerequisites: ["gs-05-your-first-session"], docSource: "sub-agents" },
  { id: "ext-12-built-in-subagents", title: "Built-in Subagents", category: "extensibility", categoryTitle: "Extending Claude Code", order: 15, estimatedMinutes: 4, prerequisites: ["ext-11-what-are-subagents"], docSource: "sub-agents" },
  { id: "ext-13-creating-custom-subagents", title: "Creating Custom Subagents", category: "extensibility", categoryTitle: "Extending Claude Code", order: 16, estimatedMinutes: 4, prerequisites: ["ext-11-what-are-subagents"], docSource: "sub-agents" },
  { id: "ext-14-subagent-patterns", title: "Subagent Patterns", category: "extensibility", categoryTitle: "Extending Claude Code", order: 17, estimatedMinutes: 4, prerequisites: ["ext-11-what-are-subagents"], docSource: "sub-agents" },
  { id: "ext-15-what-are-plugins", title: "What Are Plugins?", category: "extensibility", categoryTitle: "Extending Claude Code", order: 18, estimatedMinutes: 3, prerequisites: ["ext-01-extensibility-overview"], docSource: "plugins" },
  { id: "ext-16-channels-overview", title: "Channels Overview", category: "extensibility", categoryTitle: "Extending Claude Code", order: 19, estimatedMinutes: 3, prerequisites: ["gs-05-your-first-session"], docSource: "channels" },

  // Platforms & Integrations
  { id: "pl-01-vscode-extension", title: "VS Code Extension", category: "platforms", categoryTitle: "Platforms & Integrations", order: 1, estimatedMinutes: 4, prerequisites: ["gs-05-your-first-session"], docSource: "vscode" },
  { id: "pl-02-jetbrains-extension", title: "JetBrains Extension", category: "platforms", categoryTitle: "Platforms & Integrations", order: 2, estimatedMinutes: 4, prerequisites: ["gs-05-your-first-session"], docSource: "jetbrains" },
  { id: "pl-03-desktop-web", title: "Desktop and Web Apps", category: "platforms", categoryTitle: "Platforms & Integrations", order: 3, estimatedMinutes: 3, prerequisites: ["gs-05-your-first-session"], docSource: "desktop-web" },
  { id: "plt-01-platforms-overview", title: "Platforms Overview", category: "platforms", categoryTitle: "Platforms & Integrations", order: 4, estimatedMinutes: 4, prerequisites: ["gs-05-your-first-session"], docSource: "platforms" },
  { id: "plt-02-vs-code-extension", title: "VS Code Extension", category: "platforms", categoryTitle: "Platforms & Integrations", order: 5, estimatedMinutes: 4, prerequisites: ["gs-05-your-first-session"], docSource: "vs-code" },
  { id: "plt-03-vs-code-features", title: "VS Code Advanced Features", category: "platforms", categoryTitle: "Platforms & Integrations", order: 6, estimatedMinutes: 4, prerequisites: ["plt-02-vs-code-extension"], docSource: "vs-code" },
  { id: "plt-04-jetbrains-plugin", title: "JetBrains Plugin", category: "platforms", categoryTitle: "Platforms & Integrations", order: 7, estimatedMinutes: 4, prerequisites: ["gs-05-your-first-session"], docSource: "jetbrains" },
  { id: "plt-05-desktop-app", title: "Desktop App", category: "platforms", categoryTitle: "Platforms & Integrations", order: 8, estimatedMinutes: 4, prerequisites: ["gs-05-your-first-session"], docSource: "desktop" },
  { id: "plt-06-claude-code-on-the-web", title: "Claude Code on the Web", category: "platforms", categoryTitle: "Platforms & Integrations", order: 9, estimatedMinutes: 4, prerequisites: ["gs-05-your-first-session"], docSource: "claude-code-on-the-web" },
  { id: "plt-07-remote-control", title: "Remote Control", category: "platforms", categoryTitle: "Platforms & Integrations", order: 10, estimatedMinutes: 3, prerequisites: ["gs-05-your-first-session"], docSource: "remote-control" },
  { id: "plt-08-chrome-integration", title: "Chrome Integration", category: "platforms", categoryTitle: "Platforms & Integrations", order: 11, estimatedMinutes: 3, prerequisites: ["gs-05-your-first-session"], docSource: "chrome" },
  { id: "plt-09-slack-integration", title: "Slack Integration", category: "platforms", categoryTitle: "Platforms & Integrations", order: 12, estimatedMinutes: 3, prerequisites: ["gs-05-your-first-session"], docSource: "slack" },
  { id: "plt-10-computer-use", title: "Computer Use", category: "platforms", categoryTitle: "Platforms & Integrations", order: 13, estimatedMinutes: 3, prerequisites: ["gs-05-your-first-session"], docSource: "computer-use" },
  { id: "plt-11-voice-dictation", title: "Voice Dictation", category: "platforms", categoryTitle: "Platforms & Integrations", order: 14, estimatedMinutes: 3, prerequisites: ["gs-05-your-first-session"], docSource: "voice-dictation" },
  { id: "plt-12-statusline-and-fullscreen", title: "Status Line and Fullscreen Mode", category: "platforms", categoryTitle: "Platforms & Integrations", order: 15, estimatedMinutes: 3, prerequisites: ["gs-05-your-first-session"], docSource: "statusline" },

  // CI/CD & Automation
  { id: "ci-01-github-actions", title: "GitHub Actions Integration", category: "cicd-automation", categoryTitle: "CI/CD & Automation", order: 1, estimatedMinutes: 7, prerequisites: ["eu-01-writing-prompts"], docSource: "github-actions" },
  { id: "ci-02-gitlab-ci", title: "GitLab CI/CD Integration", category: "cicd-automation", categoryTitle: "CI/CD & Automation", order: 2, estimatedMinutes: 6, prerequisites: ["ci-01-github-actions"], docSource: "gitlab-ci" },
  { id: "ci-03-scheduled-tasks", title: "Scheduled Tasks and Triggers", category: "cicd-automation", categoryTitle: "CI/CD & Automation", order: 3, estimatedMinutes: 5, prerequisites: ["ci-01-github-actions"], docSource: "scheduled-tasks" },
  { id: "ci-01-automation-overview", title: "Automation Overview", category: "cicd-automation", categoryTitle: "CI/CD & Automation", order: 4, estimatedMinutes: 4, prerequisites: ["gs-05-your-first-session"], docSource: "common-workflows" },
  { id: "ci-02-print-mode", title: "Print Mode", category: "cicd-automation", categoryTitle: "CI/CD & Automation", order: 5, estimatedMinutes: 4, prerequisites: ["ci-01-automation-overview"], docSource: "headless" },
  { id: "ci-03-structured-output", title: "Structured Output", category: "cicd-automation", categoryTitle: "CI/CD & Automation", order: 6, estimatedMinutes: 4, prerequisites: ["ci-02-print-mode"], docSource: "headless" },
  { id: "ci-04-programmatic-usage", title: "Programmatic Usage", category: "cicd-automation", categoryTitle: "CI/CD & Automation", order: 7, estimatedMinutes: 5, prerequisites: ["ci-02-print-mode"], docSource: "headless" },
  { id: "ci-05-github-actions-setup", title: "GitHub Actions Setup", category: "cicd-automation", categoryTitle: "CI/CD & Automation", order: 8, estimatedMinutes: 4, prerequisites: ["ci-01-automation-overview"], docSource: "github-actions" },
  { id: "ci-06-github-actions-workflows", title: "GitHub Actions Workflows", category: "cicd-automation", categoryTitle: "CI/CD & Automation", order: 9, estimatedMinutes: 4, prerequisites: ["ci-05-github-actions-setup"], docSource: "github-actions" },
  { id: "ci-07-gitlab-cicd", title: "GitLab CI/CD", category: "cicd-automation", categoryTitle: "CI/CD & Automation", order: 10, estimatedMinutes: 4, prerequisites: ["ci-01-automation-overview"], docSource: "gitlab-ci-cd" },
  { id: "ci-08-automated-code-review", title: "Automated Code Review", category: "cicd-automation", categoryTitle: "CI/CD & Automation", order: 11, estimatedMinutes: 5, prerequisites: ["ci-05-github-actions-setup"], docSource: "code-review" },
  { id: "ci-09-scheduled-tasks-cloud", title: "Scheduled Tasks (Cloud)", category: "cicd-automation", categoryTitle: "CI/CD & Automation", order: 12, estimatedMinutes: 4, prerequisites: ["ci-01-automation-overview"], docSource: "web-scheduled-tasks" },
  { id: "ci-10-scheduled-tasks-local", title: "Scheduled Tasks (Local)", category: "cicd-automation", categoryTitle: "CI/CD & Automation", order: 13, estimatedMinutes: 4, prerequisites: ["ci-01-automation-overview"], docSource: "scheduled-tasks" },
  { id: "ci-11-piping-and-scripting", title: "Piping and Scripting", category: "cicd-automation", categoryTitle: "CI/CD & Automation", order: 14, estimatedMinutes: 5, prerequisites: ["ci-02-print-mode"], docSource: "common-workflows" },
  { id: "ci-12-agent-teams", title: "Agent Teams", category: "cicd-automation", categoryTitle: "CI/CD & Automation", order: 15, estimatedMinutes: 4, prerequisites: ["ci-01-automation-overview"], docSource: "agent-teams" },

  // Security & Enterprise
  { id: "se-01-sandboxing", title: "Sandboxing and Safety", category: "security-enterprise", categoryTitle: "Security & Enterprise", order: 1, estimatedMinutes: 5, prerequisites: ["cf-02-permission-modes"], docSource: "security" },
  { id: "se-02-enterprise-deployment", title: "Enterprise Deployment", category: "security-enterprise", categoryTitle: "Security & Enterprise", order: 2, estimatedMinutes: 6, prerequisites: ["se-01-sandboxing"], docSource: "enterprise" },
  { id: "se-03-audit-compliance", title: "Audit and Compliance", category: "security-enterprise", categoryTitle: "Security & Enterprise", order: 3, estimatedMinutes: 5, prerequisites: ["se-01-sandboxing"], docSource: "compliance" },
  { id: "sec-01-security-overview", title: "Security Overview", category: "security-enterprise", categoryTitle: "Security & Enterprise", order: 4, estimatedMinutes: 4, prerequisites: ["gs-05-your-first-session"], docSource: "security" },
  { id: "sec-02-permission-system-deep-dive", title: "Permission System Deep Dive", category: "security-enterprise", categoryTitle: "Security & Enterprise", order: 5, estimatedMinutes: 5, prerequisites: ["sec-01-security-overview"], docSource: "permissions" },
  { id: "sec-03-permission-rule-syntax", title: "Permission Rule Syntax", category: "security-enterprise", categoryTitle: "Security & Enterprise", order: 6, estimatedMinutes: 4, prerequisites: ["sec-02-permission-system-deep-dive"], docSource: "permissions" },
  { id: "sec-04-permission-modes-deep-dive", title: "Permission Modes Deep Dive", category: "security-enterprise", categoryTitle: "Security & Enterprise", order: 7, estimatedMinutes: 4, prerequisites: ["sec-02-permission-system-deep-dive"], docSource: "permission-modes" },
  { id: "sec-05-sandboxing", title: "Sandboxing", category: "security-enterprise", categoryTitle: "Security & Enterprise", order: 8, estimatedMinutes: 4, prerequisites: ["sec-01-security-overview"], docSource: "sandboxing" },
  { id: "sec-06-prompt-injection-protection", title: "Prompt Injection Protection", category: "security-enterprise", categoryTitle: "Security & Enterprise", order: 9, estimatedMinutes: 4, prerequisites: ["sec-01-security-overview"], docSource: "security" },
  { id: "sec-07-data-usage-and-privacy", title: "Data Usage and Privacy", category: "security-enterprise", categoryTitle: "Security & Enterprise", order: 10, estimatedMinutes: 3, prerequisites: ["sec-01-security-overview"], docSource: "data-usage" },
  { id: "sec-08-zero-data-retention", title: "Zero Data Retention", category: "security-enterprise", categoryTitle: "Security & Enterprise", order: 11, estimatedMinutes: 3, prerequisites: ["sec-07-data-usage-and-privacy"], docSource: "zero-data-retention" },
  { id: "sec-09-managing-costs", title: "Managing Costs", category: "security-enterprise", categoryTitle: "Security & Enterprise", order: 12, estimatedMinutes: 4, prerequisites: ["gs-05-your-first-session"], docSource: "costs" },
  { id: "sec-10-reducing-token-usage", title: "Reducing Token Usage", category: "security-enterprise", categoryTitle: "Security & Enterprise", order: 13, estimatedMinutes: 4, prerequisites: ["sec-09-managing-costs"], docSource: "costs" },
  { id: "sec-11-enterprise-deployment", title: "Enterprise Deployment", category: "security-enterprise", categoryTitle: "Security & Enterprise", order: 14, estimatedMinutes: 4, prerequisites: ["sec-01-security-overview"], docSource: "third-party-integrations" },
  { id: "sec-12-managed-settings", title: "Managed Settings", category: "security-enterprise", categoryTitle: "Security & Enterprise", order: 15, estimatedMinutes: 3, prerequisites: ["sec-11-enterprise-deployment"], docSource: "server-managed-settings" },

  // Advanced Topics
  { id: "ad-01-subagents", title: "Multi-Agent Workflows", category: "advanced", categoryTitle: "Advanced Topics", order: 1, estimatedMinutes: 7, prerequisites: ["cc-03-tools-overview", "ex-01-custom-skills"], docSource: "subagents" },
  { id: "ad-02-computer-use", title: "Computer Use", category: "advanced", categoryTitle: "Advanced Topics", order: 2, estimatedMinutes: 6, prerequisites: ["ad-01-subagents"], docSource: "computer-use" },
  { id: "ad-03-agent-teams", title: "Agent Teams and Orchestration", category: "advanced", categoryTitle: "Advanced Topics", order: 3, estimatedMinutes: 8, prerequisites: ["ad-01-subagents"], docSource: "agent-teams" },
  { id: "adv-01-advanced-prompting", title: "Advanced Prompting", category: "advanced", categoryTitle: "Advanced Topics", order: 4, estimatedMinutes: 5, prerequisites: ["gs-05-your-first-session"], docSource: "best-practices" },
  { id: "adv-02-parallel-sessions", title: "Parallel Sessions", category: "advanced", categoryTitle: "Advanced Topics", order: 5, estimatedMinutes: 4, prerequisites: ["gs-05-your-first-session"], docSource: "best-practices" },
  { id: "adv-03-git-worktrees", title: "Git Worktrees", category: "advanced", categoryTitle: "Advanced Topics", order: 6, estimatedMinutes: 4, prerequisites: ["adv-02-parallel-sessions"], docSource: "common-workflows" },
  { id: "adv-04-extended-thinking", title: "Extended Thinking", category: "advanced", categoryTitle: "Advanced Topics", order: 7, estimatedMinutes: 4, prerequisites: ["gs-05-your-first-session"], docSource: "common-workflows" },
  { id: "adv-05-agent-teams-deep-dive", title: "Agent Teams Deep Dive", category: "advanced", categoryTitle: "Advanced Topics", order: 8, estimatedMinutes: 5, prerequisites: ["adv-02-parallel-sessions"], docSource: "agent-teams" },
  { id: "adv-06-custom-system-prompts", title: "Custom System Prompts", category: "advanced", categoryTitle: "Advanced Topics", order: 9, estimatedMinutes: 4, prerequisites: ["gs-05-your-first-session"], docSource: "cli-reference" },
  { id: "adv-07-auto-mode", title: "Auto Mode", category: "advanced", categoryTitle: "Advanced Topics", order: 10, estimatedMinutes: 4, prerequisites: ["sec-02-permission-system-deep-dive"], docSource: "permission-modes" },
  { id: "adv-08-hook-advanced-patterns", title: "Hook Advanced Patterns", category: "advanced", categoryTitle: "Advanced Topics", order: 11, estimatedMinutes: 5, prerequisites: ["ext-04-what-are-hooks"], docSource: "hooks-reference" },
  { id: "adv-09-mcp-advanced", title: "MCP Advanced", category: "advanced", categoryTitle: "Advanced Topics", order: 12, estimatedMinutes: 4, prerequisites: ["ext-07-what-is-mcp"], docSource: "mcp" },
  { id: "adv-10-building-plugins", title: "Building Plugins", category: "advanced", categoryTitle: "Advanced Topics", order: 13, estimatedMinutes: 4, prerequisites: ["ext-15-what-are-plugins"], docSource: "plugins" },
  { id: "adv-11-monitoring-and-observability", title: "Monitoring and Observability", category: "advanced", categoryTitle: "Advanced Topics", order: 14, estimatedMinutes: 4, prerequisites: ["gs-05-your-first-session"], docSource: "monitoring-usage" },
  { id: "adv-12-troubleshooting", title: "Troubleshooting", category: "advanced", categoryTitle: "Advanced Topics", order: 15, estimatedMinutes: 4, prerequisites: ["gs-05-your-first-session"], docSource: "troubleshooting" },
];

// Build lookup maps for fast access
const moduleMap = new Map(MODULES.map((m) => [m.id, m]));
const categoryMap = new Map(CATEGORIES.map((c) => [c.id, c]));

// All modules sorted by category order then module order
const sortedModules = [...MODULES].sort((a, b) => {
  const catA = categoryMap.get(a.category)?.order ?? 0;
  const catB = categoryMap.get(b.category)?.order ?? 0;
  if (catA !== catB) return catA - catB;
  return a.order - b.order;
});

export function getModule(id) {
  return moduleMap.get(id) ?? null;
}

export function getModulesByCategory(categoryId) {
  return sortedModules.filter((m) => m.category === categoryId);
}

export function getCategory(categoryId) {
  return categoryMap.get(categoryId) ?? null;
}

export function getAllModules() {
  return sortedModules;
}

export function getNextModule(currentId) {
  const idx = sortedModules.findIndex((m) => m.id === currentId);
  if (idx === -1 || idx === sortedModules.length - 1) return null;
  return sortedModules[idx + 1];
}

export function getPrevModule(currentId) {
  const idx = sortedModules.findIndex((m) => m.id === currentId);
  if (idx <= 0) return null;
  return sortedModules[idx - 1];
}

export async function getModuleContent(id) {
  const { loadModuleContent } = await import("./modules/index.js");
  return loadModuleContent(id);
}
