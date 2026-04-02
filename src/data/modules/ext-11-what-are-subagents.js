export default {
  id: "ext-11-what-are-subagents",
  title: "What Are Subagents?",
  whyItMatters:
    "Subagents let Claude delegate tasks to specialized instances without bloating your main conversation. This means better focus, cleaner context, and the ability to run multiple tasks in parallel — like having a team instead of a single assistant.",

  content: [
    {
      type: "text",
      body: "Subagents are separate Claude instances that get their own fresh context window. When Claude needs to do something complex — like exploring a large codebase, designing an architecture, or running a multi-step workflow — it can spin up a subagent to handle it. The subagent does the work and reports back, keeping your main conversation clean.",
    },
    {
      type: "keyPoint",
      body: "Key benefits of subagents: they get a **fresh context window** (don't consume your main context), can run **in parallel** (multiple subagents working simultaneously), have **scoped permissions** (only the tools they need), and return a **concise summary** (instead of flooding your conversation with intermediate steps).",
    },
    {
      type: "example",
      title: "Subagent in action",
      code: "# You ask Claude: \"Find all the places we handle authentication\"\n\n# Instead of Claude searching file by file in your conversation:\n# Claude spawns an Explore subagent\n# → Subagent searches the codebase (its own context)\n# → Subagent finds 12 relevant files\n# → Returns a summary to your conversation\n\n# Your main context stays clean — you see the results,\n# not the 50+ search operations it took to find them.",
      explanation:
        "Without subagents, complex searches would fill your context window with tool calls and results. Subagents do the heavy lifting in their own context and return just the relevant findings.",
    },
    {
      type: "inPractice",
      body: "Claude automatically uses subagents when appropriate — you don't always need to ask for them. But you can also explicitly request them: \"Use a subagent to explore how error handling works across the project.\" Claude has three built-in subagent types and you can create custom ones for your specific workflows.",
    },
    {
      type: "tip",
      body: "Subagents are especially valuable in large codebases where exploration involves many file reads and searches. The bigger your project, the more context you save by delegating to subagents.",
    },
  ],

  quiz: [
    {
      id: "q1",
      type: "multiple-choice",
      question: "What is the main advantage of using subagents?",
      options: [
        "They use a cheaper model to save money",
        "They get their own context window, keeping your main conversation clean",
        "They can access the internet directly",
        "They bypass permission checks",
      ],
      correctAnswer: 1,
      explanation:
        "Subagents get their own fresh context window. This means complex operations like codebase exploration don't bloat your main conversation — the subagent handles the work and returns a concise summary.",
    },
    {
      id: "q2",
      type: "true-false",
      question:
        "You must always explicitly ask Claude to use a subagent.",
      options: ["True", "False"],
      correctAnswer: 1,
      explanation:
        "Claude automatically delegates to subagents when appropriate. You can also explicitly request them, but Claude will often spin up subagents on its own for complex tasks.",
    },
    {
      id: "q3",
      type: "multiple-choice",
      question: "How many built-in subagent types does Claude Code have?",
      options: ["1", "2", "3", "5"],
      correctAnswer: 2,
      explanation:
        "Claude Code has three built-in subagent types: Explore (fast codebase search), Plan (read-only design), and General-purpose (all tools available for complex tasks).",
    },
    {
      id: "q4",
      type: "multiple-choice",
      question: "Can subagents run in parallel?",
      options: [
        "No, only one subagent can run at a time",
        "Yes, multiple subagents can work simultaneously",
        "Only two subagents can run in parallel",
        "Parallel execution requires a special plugin",
      ],
      correctAnswer: 1,
      explanation:
        "Multiple subagents can run simultaneously. This is one of their key strengths — Claude can spin up several subagents to research different parts of a question at the same time.",
    },
  ],
};
