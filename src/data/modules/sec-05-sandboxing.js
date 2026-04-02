export default {
  id: "sec-05-sandboxing",
  title: "Sandboxing",
  whyItMatters:
    "Even with permissions, limiting what Claude can access on the filesystem and network adds defense in depth. Sandboxing ensures that even if something unexpected happens, the blast radius is contained.",

  content: [
    {
      type: "text",
      body: "Claude Code's sandboxing system provides two types of isolation: **filesystem isolation** (controlling which paths Claude can read from and write to) and **network isolation** (controlling which domains Claude can reach). Together, these create a confined environment that limits what Claude can access beyond the permission system.",
    },
    {
      type: "keyPoint",
      body: "Sandboxing is configured in your `settings.json` under the `sandbox` key. You specify path prefixes for filesystem access and domain patterns for network access. This acts as a hard boundary — even if a permission rule would allow an action, the sandbox can still block it if it falls outside the allowed paths or domains.",
    },
    {
      type: "example",
      title: "Configuring sandbox restrictions",
      code: '// In settings.json\n{\n  "sandbox": {\n    "filesystem": {\n      "readPaths": [\n        "/Users/me/projects",\n        "/usr/local/share"\n      ],\n      "writePaths": [\n        "/Users/me/projects/current-project"\n      ]\n    },\n    "network": {\n      "allowedDomains": [\n        "api.github.com",\n        "registry.npmjs.org",\n        "docs.anthropic.com"\n      ]\n    }\n  }\n}',
      explanation:
        "This configuration lets Claude read from your projects directory and a shared resources directory, but only write to your current project. Network access is limited to GitHub's API, npm registry, and Anthropic docs — no other domains can be reached.",
    },
    {
      type: "text",
      body: "Path prefixes give you fine-grained control. You might allow reads broadly (so Claude can explore your codebase and reference documentation) while restricting writes to a specific project directory. This prevents accidental modifications to unrelated projects or system files.",
    },
    {
      type: "inPractice",
      body: "Sandboxing is especially valuable in enterprise environments where developers work across multiple sensitive projects. By restricting Claude to only the current project's directory and approved network endpoints, you prevent data leakage between projects and unauthorized external communication.",
    },
  ],

  quiz: [
    {
      id: "q1",
      type: "multiple-choice",
      question: "What two types of isolation does Claude Code's sandbox provide?",
      options: [
        "CPU and memory isolation",
        "Process and thread isolation",
        "Filesystem and network isolation",
        "User and group isolation",
      ],
      correctAnswer: 2,
      explanation:
        "Claude Code's sandbox provides filesystem isolation (controlling read/write paths) and network isolation (controlling which domains can be reached).",
    },
    {
      id: "q2",
      type: "multiple-choice",
      question: "Where is sandboxing configured?",
      options: [
        "In a .sandbox file at the project root",
        "In settings.json under the sandbox key",
        "Through environment variables only",
        "In the Claude Code UI settings panel",
      ],
      correctAnswer: 1,
      explanation:
        "Sandbox configuration lives in settings.json under the sandbox key, where you can specify filesystem paths and network domains.",
    },
    {
      id: "q3",
      type: "multiple-choice",
      question:
        "If a permission rule allows an action but the sandbox blocks the path, what happens?",
      options: [
        "The permission rule overrides the sandbox",
        "Claude asks the user to decide",
        "The sandbox blocks it — sandbox acts as a hard boundary",
        "The action runs but is logged for review",
      ],
      correctAnswer: 2,
      explanation:
        "The sandbox acts as a hard boundary. Even if a permission rule would allow an action, the sandbox can still block it if the path or domain falls outside its allowed list.",
    },
    {
      id: "q4",
      type: "multiple-choice",
      question: "Why might you allow broader read paths than write paths?",
      options: [
        "Read operations are always safe",
        "So Claude can explore code and references without being able to modify unrelated projects",
        "Write paths are more expensive",
        "Read paths don't affect the sandbox",
      ],
      correctAnswer: 1,
      explanation:
        "Broader read access lets Claude explore your codebase and reference documentation, while restricted write access prevents accidental modifications to unrelated projects or system files.",
    },
  ],
};
