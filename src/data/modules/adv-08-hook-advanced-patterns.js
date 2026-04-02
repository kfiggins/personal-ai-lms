export default {
  id: "adv-08-hook-advanced-patterns",
  title: "Hook Advanced Patterns",
  whyItMatters:
    "Hooks are more than simple pre/post scripts. Advanced hook patterns let you build runtime permission systems, webhook integrations, dynamic context injection, and subagent lifecycle management — turning Claude Code into a fully customizable platform.",

  content: [
    {
      type: "text",
      body: "Beyond basic hooks, Claude Code supports several advanced patterns that enable powerful automation:\n\n**PreToolUse hooks for runtime permission evaluation**: Instead of static allow/deny rules, you can write hooks that evaluate each tool call dynamically. Your hook receives the tool name and parameters, runs custom logic (check a policy server, evaluate the file path, inspect the command), and returns a decision.",
    },
    {
      type: "keyPoint",
      body: "Hook exit codes control the flow:\n- **Exit code 0**: Hook succeeded, action proceeds\n- **Exit code 2**: Block the action — Claude is told it cannot perform this tool call\n- **Any other non-zero exit code**: Hook error, but action still proceeds\n\nExit code 2 is specifically designed for permission hooks that need to block actions. This is how you build custom security policies.",
    },
    {
      type: "text",
      body: "**HTTP hooks for webhook integrations**: Hooks can make HTTP requests to external services. Use this to notify Slack when Claude starts a session, log actions to an audit system, or check with a policy server before allowing file writes.\n\n**Prompt hooks for dynamic context injection**: Hooks that run at session start can inject context into Claude's prompt. Load relevant documentation, pull the latest config, or fetch team-specific guidelines dynamically.\n\n**Agent hooks for subagent lifecycle**: Hooks can run when subagents are created or complete, letting you track agent hierarchies, enforce limits on concurrent agents, or aggregate results.",
    },
    {
      type: "text",
      body: "Hooks can also produce **JSON output** to modify tool inputs or outputs. By writing JSON to stdout, a PreToolUse hook can rewrite the parameters of a tool call before it executes, and a PostToolUse hook can transform the result before Claude sees it. This enables patterns like:\n\n- Rewriting file paths to enforce directory boundaries\n- Adding headers to HTTP requests automatically\n- Redacting sensitive data from tool outputs\n- Injecting additional context into search results",
    },
    {
      type: "tip",
      body: "Start with simple logging hooks to understand the hook lifecycle before building complex permission or modification hooks. A hook that logs all tool calls to a file gives you visibility into exactly what Claude does and when.",
    },
  ],

  quiz: [
    {
      id: "q1",
      type: "multiple-choice",
      question: "What does exit code 2 mean in a hook?",
      options: [
        "The hook encountered an error",
        "The hook succeeded with warnings",
        "Block the action — Claude cannot perform this tool call",
        "Retry the action with different parameters",
      ],
      correctAnswer: 2,
      explanation:
        "Exit code 2 specifically blocks the action. It's designed for permission hooks that need to prevent Claude from performing certain tool calls.",
    },
    {
      id: "q2",
      type: "multiple-choice",
      question: "How can hooks modify tool inputs or outputs?",
      options: [
        "By editing the tool's source code",
        "By writing JSON to stdout",
        "By setting environment variables",
        "By modifying Claude's system prompt",
      ],
      correctAnswer: 1,
      explanation:
        "Hooks can write JSON to stdout to modify tool parameters (PreToolUse) or transform results (PostToolUse) before Claude sees them.",
    },
    {
      id: "q3",
      type: "multiple-choice",
      question: "What is a prompt hook used for?",
      options: [
        "Correcting Claude's grammar",
        "Injecting dynamic context at session start",
        "Speeding up Claude's responses",
        "Managing file permissions",
      ],
      correctAnswer: 1,
      explanation:
        "Prompt hooks run at session start to inject dynamic context — loading documentation, fetching config, or pulling team-specific guidelines into Claude's prompt.",
    },
    {
      id: "q4",
      type: "multiple-choice",
      question: "Which hook pattern would you use to notify Slack when Claude starts a session?",
      options: [
        "PreToolUse hook with exit code 2",
        "Prompt hook with JSON output",
        "HTTP hook that makes a webhook request",
        "Agent hook for subagent lifecycle",
      ],
      correctAnswer: 2,
      explanation:
        "HTTP hooks can make requests to external services like Slack. A session-start hook that sends a webhook notification is a common integration pattern.",
    },
  ],
};
