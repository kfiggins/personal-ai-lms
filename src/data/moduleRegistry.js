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
  { id: "cc-01-agentic-loop", title: "The Agentic Loop", category: "core-concepts", categoryTitle: "Core Concepts", order: 1, estimatedMinutes: 5, prerequisites: ["gs-05-your-first-session"], docSource: "agentic-loop" },
  { id: "cc-02-context-window", title: "Understanding the Context Window", category: "core-concepts", categoryTitle: "Core Concepts", order: 2, estimatedMinutes: 4, prerequisites: ["cc-01-agentic-loop"], docSource: "context-window" },
  { id: "cc-03-tool-use", title: "How Tool Use Works", category: "core-concepts", categoryTitle: "Core Concepts", order: 3, estimatedMinutes: 5, prerequisites: ["cc-01-agentic-loop"], docSource: "tool-use" },

  // Everyday Usage
  { id: "eu-01-writing-prompts", title: "Writing Effective Prompts", category: "everyday-usage", categoryTitle: "Everyday Usage", order: 1, estimatedMinutes: 6, prerequisites: ["gs-05-your-first-session"], docSource: "prompting" },
  { id: "eu-02-fixing-bugs", title: "Fixing Bugs with Claude Code", category: "everyday-usage", categoryTitle: "Everyday Usage", order: 2, estimatedMinutes: 5, prerequisites: ["eu-01-writing-prompts"], docSource: "common-tasks" },
  { id: "eu-03-code-reviews", title: "Code Reviews and Refactoring", category: "everyday-usage", categoryTitle: "Everyday Usage", order: 3, estimatedMinutes: 5, prerequisites: ["eu-01-writing-prompts"], docSource: "common-tasks" },

  // Configuration & Settings
  { id: "cf-01-settings-overview", title: "Settings Overview", category: "configuration", categoryTitle: "Configuration & Settings", order: 1, estimatedMinutes: 4, prerequisites: ["gs-05-your-first-session"], docSource: "settings" },
  { id: "cf-02-permission-modes", title: "Permission Modes", category: "configuration", categoryTitle: "Configuration & Settings", order: 2, estimatedMinutes: 5, prerequisites: ["cf-01-settings-overview"], docSource: "permissions" },
  { id: "cf-03-model-configuration", title: "Model Configuration", category: "configuration", categoryTitle: "Configuration & Settings", order: 3, estimatedMinutes: 4, prerequisites: ["cf-01-settings-overview"], docSource: "model-config" },

  // Memory & Context
  { id: "mc-01-claude-md", title: "CLAUDE.md Files", category: "memory-context", categoryTitle: "Memory & Context", order: 1, estimatedMinutes: 6, prerequisites: ["cf-01-settings-overview"], docSource: "claude-md" },
  { id: "mc-02-auto-memory", title: "Auto Memory System", category: "memory-context", categoryTitle: "Memory & Context", order: 2, estimatedMinutes: 5, prerequisites: ["mc-01-claude-md"], docSource: "memory" },
  { id: "mc-03-context-management", title: "Context Management Strategies", category: "memory-context", categoryTitle: "Memory & Context", order: 3, estimatedMinutes: 5, prerequisites: ["mc-02-auto-memory"], docSource: "context-management" },

  // Extending Claude Code
  { id: "ex-01-custom-skills", title: "Custom Slash Commands", category: "extensibility", categoryTitle: "Extending Claude Code", order: 1, estimatedMinutes: 5, prerequisites: ["cf-01-settings-overview"], docSource: "skills" },
  { id: "ex-02-hooks", title: "Hooks and Automation", category: "extensibility", categoryTitle: "Extending Claude Code", order: 2, estimatedMinutes: 6, prerequisites: ["ex-01-custom-skills"], docSource: "hooks" },
  { id: "ex-03-mcp-servers", title: "MCP Servers", category: "extensibility", categoryTitle: "Extending Claude Code", order: 3, estimatedMinutes: 7, prerequisites: ["ex-01-custom-skills"], docSource: "mcp" },

  // Platforms & Integrations
  { id: "pl-01-vscode-extension", title: "VS Code Extension", category: "platforms", categoryTitle: "Platforms & Integrations", order: 1, estimatedMinutes: 4, prerequisites: ["gs-05-your-first-session"], docSource: "vscode" },
  { id: "pl-02-jetbrains-extension", title: "JetBrains Extension", category: "platforms", categoryTitle: "Platforms & Integrations", order: 2, estimatedMinutes: 4, prerequisites: ["gs-05-your-first-session"], docSource: "jetbrains" },
  { id: "pl-03-desktop-web", title: "Desktop and Web Apps", category: "platforms", categoryTitle: "Platforms & Integrations", order: 3, estimatedMinutes: 3, prerequisites: ["gs-05-your-first-session"], docSource: "desktop-web" },

  // CI/CD & Automation
  { id: "ci-01-github-actions", title: "GitHub Actions Integration", category: "cicd-automation", categoryTitle: "CI/CD & Automation", order: 1, estimatedMinutes: 7, prerequisites: ["eu-01-writing-prompts"], docSource: "github-actions" },
  { id: "ci-02-gitlab-ci", title: "GitLab CI/CD Integration", category: "cicd-automation", categoryTitle: "CI/CD & Automation", order: 2, estimatedMinutes: 6, prerequisites: ["ci-01-github-actions"], docSource: "gitlab-ci" },
  { id: "ci-03-scheduled-tasks", title: "Scheduled Tasks and Triggers", category: "cicd-automation", categoryTitle: "CI/CD & Automation", order: 3, estimatedMinutes: 5, prerequisites: ["ci-01-github-actions"], docSource: "scheduled-tasks" },

  // Security & Enterprise
  { id: "se-01-sandboxing", title: "Sandboxing and Safety", category: "security-enterprise", categoryTitle: "Security & Enterprise", order: 1, estimatedMinutes: 5, prerequisites: ["cf-02-permission-modes"], docSource: "security" },
  { id: "se-02-enterprise-deployment", title: "Enterprise Deployment", category: "security-enterprise", categoryTitle: "Security & Enterprise", order: 2, estimatedMinutes: 6, prerequisites: ["se-01-sandboxing"], docSource: "enterprise" },
  { id: "se-03-audit-compliance", title: "Audit and Compliance", category: "security-enterprise", categoryTitle: "Security & Enterprise", order: 3, estimatedMinutes: 5, prerequisites: ["se-01-sandboxing"], docSource: "compliance" },

  // Advanced Topics
  { id: "ad-01-subagents", title: "Multi-Agent Workflows", category: "advanced", categoryTitle: "Advanced Topics", order: 1, estimatedMinutes: 7, prerequisites: ["cc-03-tool-use", "ex-01-custom-skills"], docSource: "subagents" },
  { id: "ad-02-computer-use", title: "Computer Use", category: "advanced", categoryTitle: "Advanced Topics", order: 2, estimatedMinutes: 6, prerequisites: ["ad-01-subagents"], docSource: "computer-use" },
  { id: "ad-03-agent-teams", title: "Agent Teams and Orchestration", category: "advanced", categoryTitle: "Advanced Topics", order: 3, estimatedMinutes: 8, prerequisites: ["ad-01-subagents"], docSource: "agent-teams" },
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
