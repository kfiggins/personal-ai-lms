// Maps module IDs to dynamic imports of their content files.
// As content files are created, add their dynamic import here.

const contentLoaders = {
  // Getting Started
  "gs-01-what-is-claude-code": () => import("./gs-01-what-is-claude-code.js"),
  "gs-02-where-claude-code-runs": () => import("./gs-02-where-claude-code-runs.js"),
  "gs-03-installing-claude-code": () => import("./gs-03-installing-claude-code.js"),
  "gs-04-logging-in": () => import("./gs-04-logging-in.js"),
  "gs-05-your-first-session": () => import("./gs-05-your-first-session.js"),
  "gs-06-asking-questions": () => import("./gs-06-asking-questions.js"),
  "gs-07-making-code-changes": () => import("./gs-07-making-code-changes.js"),
  "gs-08-git-with-claude-code": () => import("./gs-08-git-with-claude-code.js"),
  "gs-09-fixing-bugs": () => import("./gs-09-fixing-bugs.js"),
  "gs-10-essential-cli-commands": () => import("./gs-10-essential-cli-commands.js"),
  "gs-11-pro-tips-for-beginners": () => import("./gs-11-pro-tips-for-beginners.js"),
  "gs-12-what-you-can-do-overview": () => import("./gs-12-what-you-can-do-overview.js"),

  // Core Concepts
  "cc-01-the-agentic-loop": () => import("./cc-01-the-agentic-loop.js"),
  "cc-02-models-and-reasoning": () => import("./cc-02-models-and-reasoning.js"),
  "cc-03-tools-overview": () => import("./cc-03-tools-overview.js"),
  "cc-04-file-operations-tools": () => import("./cc-04-file-operations-tools.js"),
  "cc-05-search-tools": () => import("./cc-05-search-tools.js"),
  "cc-06-execution-tools": () => import("./cc-06-execution-tools.js"),
  "cc-07-web-tools": () => import("./cc-07-web-tools.js"),
  "cc-08-what-claude-can-access": () => import("./cc-08-what-claude-can-access.js"),
  "cc-09-sessions-explained": () => import("./cc-09-sessions-explained.js"),
  "cc-10-the-context-window": () => import("./cc-10-the-context-window.js"),
  "cc-11-context-management": () => import("./cc-11-context-management.js"),
  "cc-12-checkpoints-and-undo": () => import("./cc-12-checkpoints-and-undo.js"),
  "cc-13-permission-modes-intro": () => import("./cc-13-permission-modes-intro.js"),
  "cc-14-execution-environments": () => import("./cc-14-execution-environments.js"),

  // Everyday Usage
  "eu-01-exploring-a-codebase": () => import("./eu-01-exploring-a-codebase.js"),
  "eu-02-fixing-bugs-workflow": () => import("./eu-02-fixing-bugs-workflow.js"),
  "eu-03-refactoring-code": () => import("./eu-03-refactoring-code.js"),
  "eu-04-writing-tests": () => import("./eu-04-writing-tests.js"),
  "eu-05-creating-commits-and-prs": () => import("./eu-05-creating-commits-and-prs.js"),
  "eu-06-working-with-documentation": () => import("./eu-06-working-with-documentation.js"),
  "eu-07-be-specific-upfront": () => import("./eu-07-be-specific-upfront.js"),
  "eu-08-give-claude-verification": () => import("./eu-08-give-claude-verification.js"),
  "eu-09-explore-before-implementing": () => import("./eu-09-explore-before-implementing.js"),
  "eu-10-delegate-dont-dictate": () => import("./eu-10-delegate-dont-dictate.js"),
  "eu-11-iterative-conversation": () => import("./eu-11-iterative-conversation.js"),
  "eu-12-working-with-images": () => import("./eu-12-working-with-images.js"),
  "eu-13-referencing-files": () => import("./eu-13-referencing-files.js"),
  "eu-14-resuming-conversations": () => import("./eu-14-resuming-conversations.js"),

  // Configuration & Settings
  "cfg-01-settings-overview": () => import("./cfg-01-settings-overview.js"),
  "cfg-02-user-settings-file": () => import("./cfg-02-user-settings-file.js"),
  "cfg-03-project-settings": () => import("./cfg-03-project-settings.js"),
  "cfg-04-environment-variables": () => import("./cfg-04-environment-variables.js"),
  "cfg-05-cli-reference-flags": () => import("./cfg-05-cli-reference-flags.js"),
  "cfg-06-built-in-commands": () => import("./cfg-06-built-in-commands.js"),
  "cfg-07-interactive-mode": () => import("./cfg-07-interactive-mode.js"),
  "cfg-08-model-configuration": () => import("./cfg-08-model-configuration.js"),
  "cfg-09-terminal-optimization": () => import("./cfg-09-terminal-optimization.js"),
  "cfg-10-keybindings": () => import("./cfg-10-keybindings.js"),
  "cfg-11-fast-mode": () => import("./cfg-11-fast-mode.js"),
  "cfg-12-output-styles": () => import("./cfg-12-output-styles.js"),

  // Memory & Context
  "mc-01-what-is-claude-md": () => import("./mc-01-what-is-claude-md.js"),
  "mc-02-creating-claude-md": () => import("./mc-02-creating-claude-md.js"),
  "mc-03-effective-claude-md": () => import("./mc-03-effective-claude-md.js"),
  "mc-04-claude-md-scopes": () => import("./mc-04-claude-md-scopes.js"),
  "mc-05-rules-directory": () => import("./mc-05-rules-directory.js"),
  "mc-06-auto-memory": () => import("./mc-06-auto-memory.js"),
  "mc-07-the-claude-directory": () => import("./mc-07-the-claude-directory.js"),
  "mc-08-context-window-deep-dive": () => import("./mc-08-context-window-deep-dive.js"),
  "mc-09-managing-context": () => import("./mc-09-managing-context.js"),
  "mc-10-memory-command": () => import("./mc-10-memory-command.js"),

  // Extending Claude Code
  "ext-01-extensibility-overview": () => import("./ext-01-extensibility-overview.js"),
  "ext-02-what-are-skills": () => import("./ext-02-what-are-skills.js"),
  "ext-03-creating-a-skill": () => import("./ext-03-creating-a-skill.js"),
  "ext-04-what-are-hooks": () => import("./ext-04-what-are-hooks.js"),
  "ext-05-hook-events": () => import("./ext-05-hook-events.js"),
  "ext-06-creating-a-hook": () => import("./ext-06-creating-a-hook.js"),
  "ext-07-what-is-mcp": () => import("./ext-07-what-is-mcp.js"),
  "ext-08-installing-mcp-servers": () => import("./ext-08-installing-mcp-servers.js"),
  "ext-09-mcp-practical-examples": () => import("./ext-09-mcp-practical-examples.js"),
  "ext-10-mcp-tool-search": () => import("./ext-10-mcp-tool-search.js"),
  "ext-11-what-are-subagents": () => import("./ext-11-what-are-subagents.js"),
  "ext-12-built-in-subagents": () => import("./ext-12-built-in-subagents.js"),
  "ext-13-creating-custom-subagents": () => import("./ext-13-creating-custom-subagents.js"),
  "ext-14-subagent-patterns": () => import("./ext-14-subagent-patterns.js"),
  "ext-15-what-are-plugins": () => import("./ext-15-what-are-plugins.js"),
  "ext-16-channels-overview": () => import("./ext-16-channels-overview.js"),

  // Platforms & Integrations
  "plt-01-platforms-overview": () => import("./plt-01-platforms-overview.js"),
  "plt-02-vs-code-extension": () => import("./plt-02-vs-code-extension.js"),
  "plt-03-vs-code-features": () => import("./plt-03-vs-code-features.js"),
  "plt-04-jetbrains-plugin": () => import("./plt-04-jetbrains-plugin.js"),
  "plt-05-desktop-app": () => import("./plt-05-desktop-app.js"),
  "plt-06-claude-code-on-the-web": () => import("./plt-06-claude-code-on-the-web.js"),
  "plt-07-remote-control": () => import("./plt-07-remote-control.js"),
  "plt-08-chrome-integration": () => import("./plt-08-chrome-integration.js"),
  "plt-09-slack-integration": () => import("./plt-09-slack-integration.js"),
  "plt-10-computer-use": () => import("./plt-10-computer-use.js"),
  "plt-11-voice-dictation": () => import("./plt-11-voice-dictation.js"),
  "plt-12-statusline-and-fullscreen": () => import("./plt-12-statusline-and-fullscreen.js"),

  // CI/CD & Automation
  "ci-01-automation-overview": () => import("./ci-01-automation-overview.js"),
  "ci-02-print-mode": () => import("./ci-02-print-mode.js"),
  "ci-03-structured-output": () => import("./ci-03-structured-output.js"),
  "ci-04-programmatic-usage": () => import("./ci-04-programmatic-usage.js"),
  "ci-05-github-actions-setup": () => import("./ci-05-github-actions-setup.js"),
  "ci-06-github-actions-workflows": () => import("./ci-06-github-actions-workflows.js"),
  "ci-07-gitlab-cicd": () => import("./ci-07-gitlab-cicd.js"),
  "ci-08-automated-code-review": () => import("./ci-08-automated-code-review.js"),
  "ci-09-scheduled-tasks-cloud": () => import("./ci-09-scheduled-tasks-cloud.js"),
  "ci-10-scheduled-tasks-local": () => import("./ci-10-scheduled-tasks-local.js"),
  "ci-11-piping-and-scripting": () => import("./ci-11-piping-and-scripting.js"),
  "ci-12-agent-teams": () => import("./ci-12-agent-teams.js"),

  // Security & Enterprise
  "sec-01-security-overview": () => import("./sec-01-security-overview.js"),
  "sec-02-permission-system-deep-dive": () => import("./sec-02-permission-system-deep-dive.js"),
  "sec-03-permission-rule-syntax": () => import("./sec-03-permission-rule-syntax.js"),
  "sec-04-permission-modes-deep-dive": () => import("./sec-04-permission-modes-deep-dive.js"),
  "sec-05-sandboxing": () => import("./sec-05-sandboxing.js"),
  "sec-06-prompt-injection-protection": () => import("./sec-06-prompt-injection-protection.js"),
  "sec-07-data-usage-and-privacy": () => import("./sec-07-data-usage-and-privacy.js"),
  "sec-08-zero-data-retention": () => import("./sec-08-zero-data-retention.js"),
  "sec-09-managing-costs": () => import("./sec-09-managing-costs.js"),
  "sec-10-reducing-token-usage": () => import("./sec-10-reducing-token-usage.js"),
  "sec-11-enterprise-deployment": () => import("./sec-11-enterprise-deployment.js"),
  "sec-12-managed-settings": () => import("./sec-12-managed-settings.js"),

  // Advanced Topics
  "adv-01-advanced-prompting": () => import("./adv-01-advanced-prompting.js"),
  "adv-02-parallel-sessions": () => import("./adv-02-parallel-sessions.js"),
  "adv-03-git-worktrees": () => import("./adv-03-git-worktrees.js"),
  "adv-04-extended-thinking": () => import("./adv-04-extended-thinking.js"),
  "adv-05-agent-teams-deep-dive": () => import("./adv-05-agent-teams-deep-dive.js"),
  "adv-06-custom-system-prompts": () => import("./adv-06-custom-system-prompts.js"),
  "adv-07-auto-mode": () => import("./adv-07-auto-mode.js"),
  "adv-08-hook-advanced-patterns": () => import("./adv-08-hook-advanced-patterns.js"),
  "adv-09-mcp-advanced": () => import("./adv-09-mcp-advanced.js"),
  "adv-10-building-plugins": () => import("./adv-10-building-plugins.js"),
  "adv-11-monitoring-and-observability": () => import("./adv-11-monitoring-and-observability.js"),
  "adv-12-troubleshooting": () => import("./adv-12-troubleshooting.js"),
};

export async function loadModuleContent(id) {
  const loader = contentLoaders[id];
  if (!loader) return null;
  const mod = await loader();
  return mod.default;
}
