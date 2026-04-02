// Maps module IDs to dynamic imports of their content files.
// As content files are created, add their dynamic import here.

const contentLoaders = {
  "gs-01-what-is-claude-code": () => import("./template.js"),
  // Add more mappings as module content files are created:
  // "gs-02-installing-claude-code": () => import("./gs-02-installing-claude-code.js"),
};

export async function loadModuleContent(id) {
  const loader = contentLoaders[id];
  if (!loader) return null;
  const mod = await loader();
  return mod.default;
}
