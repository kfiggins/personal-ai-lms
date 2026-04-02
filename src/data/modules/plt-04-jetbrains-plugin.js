export default {
  id: "plt-04-jetbrains-plugin",
  title: "JetBrains Plugin",
  whyItMatters:
    "If you work in IntelliJ IDEA, PyCharm, WebStorm, or another JetBrains IDE, the Claude Code plugin brings agentic coding right into your familiar environment — no need to switch to a separate terminal or editor.",

  content: [
    {
      type: "text",
      body: "The Claude Code plugin works across the JetBrains IDE family — IntelliJ IDEA, PyCharm, WebStorm, GoLand, Rider, and others. Install it from the JetBrains Marketplace and you get Claude Code integrated directly into the IDE you already know.",
    },
    {
      type: "keyPoint",
      body: "Key features include **interactive diff viewing** to review proposed changes before accepting them, and **selection context sharing** so you can highlight code in the editor and send it directly to Claude for context.",
    },
    {
      type: "example",
      title: "Using Claude Code in JetBrains",
      code: "# Install from JetBrains Marketplace:\n# Settings → Plugins → Marketplace → Search \"Claude Code\"\n\n# Or install via JetBrains Toolbox\n\n# Usage:\n# 1. Open the Claude Code panel in your IDE\n# 2. Select code in the editor to share context\n# 3. Ask Claude to refactor, explain, or fix\n# 4. Review the interactive diff before accepting",
      explanation:
        "The workflow is straightforward: select code, ask Claude, review the diff, and accept or reject. The interactive diff viewer shows you exactly what will change.",
    },
    {
      type: "inPractice",
      body: "JetBrains users appreciate keeping everything in one IDE. The plugin lets you select a method, ask Claude to optimize it, and see the proposed changes in a familiar diff viewer. You don't lose any of the JetBrains features you rely on — code completion, debugging, refactoring tools — they all work alongside Claude.",
    },
    {
      type: "tip",
      body: "Select the relevant code before asking Claude a question. This gives Claude precise context and leads to better, more targeted responses than describing the code in words.",
    },
  ],

  quiz: [
    {
      id: "q1",
      type: "multiple-choice",
      question:
        "Which JetBrains IDEs support the Claude Code plugin?",
      options: [
        "Only IntelliJ IDEA",
        "IntelliJ IDEA and PyCharm only",
        "IntelliJ IDEA, PyCharm, WebStorm, and other JetBrains IDEs",
        "Only WebStorm",
      ],
      correctAnswer: 2,
      explanation:
        "The Claude Code plugin works across the JetBrains IDE family, including IntelliJ IDEA, PyCharm, WebStorm, GoLand, Rider, and others.",
    },
    {
      id: "q2",
      type: "multiple-choice",
      question:
        "How do you share code context with Claude in the JetBrains plugin?",
      options: [
        "Copy and paste the code into the chat",
        "Select code in the editor — it's automatically shared",
        "Use a special /context command",
        "Export the file and upload it",
      ],
      correctAnswer: 1,
      explanation:
        "You can select code in the editor and it gets shared with Claude as context. This is faster and more precise than copying and pasting.",
    },
    {
      id: "q3",
      type: "multiple-choice",
      question:
        "Where do you install the Claude Code JetBrains plugin?",
      options: [
        "From npm",
        "From the VS Code Marketplace",
        "From the JetBrains Marketplace",
        "From the Claude Code CLI",
      ],
      correctAnswer: 2,
      explanation:
        "The plugin is installed from the JetBrains Marketplace. Go to Settings → Plugins → Marketplace and search for \"Claude Code\".",
    },
  ],
};
