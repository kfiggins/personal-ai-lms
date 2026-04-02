export default {
  id: "sec-03-permission-rule-syntax",
  title: "Permission Rule Syntax",
  whyItMatters:
    "Permission rules use a specific syntax with wildcard patterns and tool specifiers. Knowing the format lets you write precise rules that match exactly the commands and file patterns you intend — no more, no less.",

  content: [
    {
      type: "text",
      body: "Every permission rule follows the format `Tool(specifier)`, where `Tool` is the name of the Claude Code tool and the specifier narrows what the rule matches. The specifier uses wildcard patterns — similar to glob patterns you might know from `.gitignore` files or shell expansion.",
    },
    {
      type: "keyPoint",
      body: "Different tools use different specifier formats:\n\n- **Bash**: Matches against the command string — `Bash(npm test *)`, `Bash(git *)`\n- **Read/Edit**: Uses gitignore-style path patterns — `Read(**/*.ts)`, `Edit(src/components/**)`\n- **WebFetch**: Matches against the domain — `WebFetch(example.com)`, `WebFetch(*.github.com)`\n- **MCP tools**: Uses the full tool name — `mcp__servername__toolname`",
    },
    {
      type: "example",
      title: "Common permission rule patterns",
      code: '// Bash command patterns\n"Bash(git *)"           // All git commands\n"Bash(npm test *)"      // npm test with any arguments\n"Bash(python *)"        // All python commands\n"Bash(make *)"          // All make targets\n\n// File path patterns (gitignore-style)\n"Read(**/*.ts)"         // Read any TypeScript file\n"Read(src/**)"          // Read anything under src/\n"Edit(**/*.test.ts)"    // Edit test files only\n"Edit(docs/**/*.md)"    // Edit markdown files in docs/\n\n// Web domain patterns\n"WebFetch(example.com)"         // Exact domain match\n"WebFetch(*.github.com)"        // Any GitHub subdomain\n"WebFetch(docs.anthropic.com)"  // Specific subdomain\n\n// MCP tool matching\n"mcp__github__create_issue"     // Specific MCP tool\n"mcp__slack__*"                 // All Slack MCP tools',
      explanation:
        "The wildcard `*` matches any characters within a segment. For file paths, `**` matches across directory boundaries (just like gitignore). MCP tools use double-underscore separators between server name and tool name.",
    },
    {
      type: "inPractice",
      body: "When writing rules, start specific and broaden only if needed. `Bash(git commit *)` is safer than `Bash(git *)`, which is safer than `Bash(*)`. The same applies to file patterns — `Edit(src/components/**/*.tsx)` is more precise than `Edit(**/*.tsx)`.",
    },
  ],

  quiz: [
    {
      id: "q1",
      type: "multiple-choice",
      question: "What is the general format of a permission rule?",
      options: [
        "action:target:level",
        "Tool(specifier)",
        "permission.tool.pattern",
        "{tool: pattern, level: action}",
      ],
      correctAnswer: 1,
      explanation:
        "Permission rules follow the format Tool(specifier), where Tool is the Claude Code tool name and the specifier is a wildcard pattern that narrows what the rule matches.",
    },
    {
      id: "q2",
      type: "multiple-choice",
      question:
        "Which pattern would allow reading all TypeScript files in the project?",
      options: [
        'Read("*.ts")',
        "Read(*.typescript)",
        "Read(**/*.ts)",
        "Read(all.ts)",
      ],
      correctAnswer: 2,
      explanation:
        "Read(**/*.ts) uses the gitignore-style double-star pattern (**) to match across directory boundaries, and *.ts to match all TypeScript files.",
    },
    {
      id: "q3",
      type: "multiple-choice",
      question: "How are MCP tool permissions specified?",
      options: [
        "MCP(server, tool)",
        "mcp__servername__toolname",
        "mcp.server.tool",
        "Tool(mcp:server:tool)",
      ],
      correctAnswer: 1,
      explanation:
        "MCP tools use double-underscore separators: mcp__servername__toolname. You can also use wildcards like mcp__slack__* to match all tools from a specific server.",
    },
    {
      id: "q4",
      type: "multiple-choice",
      question:
        "What's the difference between `Bash(git *)` and `Bash(git commit *)`?",
      options: [
        "They're identical in scope",
        "git * only matches single-word git commands",
        "git * matches all git commands; git commit * only matches git commit",
        "git commit * is invalid syntax",
      ],
      correctAnswer: 2,
      explanation:
        "Bash(git *) matches any Bash command starting with 'git', including push, reset, etc. Bash(git commit *) only matches git commit commands — a more specific and safer rule.",
    },
  ],
};
