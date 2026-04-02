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
};

export async function loadModuleContent(id) {
  const loader = contentLoaders[id];
  if (!loader) return null;
  const mod = await loader();
  return mod.default;
}
