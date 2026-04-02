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
};

export async function loadModuleContent(id) {
  const loader = contentLoaders[id];
  if (!loader) return null;
  const mod = await loader();
  return mod.default;
}
