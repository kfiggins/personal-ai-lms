export default {
  id: "sec-10-reducing-token-usage",
  title: "Reducing Token Usage",
  whyItMatters:
    "Tokens are the currency of AI interactions. Learning practical techniques to reduce unnecessary token consumption saves money and often makes Claude faster and more focused too.",

  content: [
    {
      type: "text",
      body: "Every interaction with Claude Code consumes tokens — for your input, Claude's output, and the entire conversation context. As your session grows, each new interaction becomes more expensive because the full context is sent with every request. The good news: several practical strategies can dramatically reduce token usage.",
    },
    {
      type: "keyPoint",
      body: "Five key strategies for reducing token usage:\n\n1. **Manage context**: Use `/clear` between unrelated tasks and `/compact` to summarize long conversations\n2. **Choose the right model**: Use Sonnet for routine tasks, Opus only for complex reasoning\n3. **Reduce MCP overhead**: Enable tool search so Claude doesn't load all MCP tool definitions into context\n4. **Use hooks for processing**: Offload repetitive operations (linting, formatting) to hooks instead of having Claude do them\n5. **Delegate to subagents**: Verbose operations like searching large codebases run in separate context windows when delegated to subagents",
    },
    {
      type: "example",
      title: "Context management in practice",
      code: '# Clear context between unrelated tasks\n/clear\n\n# Compact a long conversation to save tokens\n/compact\n\n# Be specific instead of vague\n# Bad (causes Claude to search broadly):\n"fix the bug"\n\n# Good (focused, fewer tokens spent searching):\n"fix the null check in src/auth/login.ts line 42"\n\n# Use subagents for broad searches\n"search the codebase for all usages of the deprecated\n getUserById function and list them"',
      explanation:
        "Being specific reduces the tokens Claude spends exploring. Clearing context between tasks prevents old, irrelevant context from inflating costs. Subagents run in their own context window, keeping your main session lean.",
    },
    {
      type: "text",
      body: "**MCP tool overhead** is a hidden cost many users miss. When you have many MCP servers installed, their tool definitions are loaded into Claude's context, consuming tokens on every interaction. Enabling tool search (deferred tool loading) means tool definitions are only loaded when Claude actually needs them, significantly reducing baseline token usage.",
    },
    {
      type: "inPractice",
      body: "The most effective single change is using `/clear` between unrelated tasks. A developer who tackles three separate bugs in one session without clearing pays for the accumulated context of all three. Three separate, clean sessions would cost less and give better results because Claude isn't distracted by irrelevant context.",
    },
  ],

  quiz: [
    {
      id: "q1",
      type: "multiple-choice",
      question: "Why does each interaction get more expensive over a long session?",
      options: [
        "Anthropic charges more per hour",
        "The full conversation context is sent with every request",
        "Claude's model gets more expensive over time",
        "Network costs increase with distance",
      ],
      correctAnswer: 1,
      explanation:
        "The full conversation context is sent with every new request. As your session grows, each interaction includes more tokens, making it progressively more expensive.",
    },
    {
      id: "q2",
      type: "multiple-choice",
      question: "What does `/compact` do?",
      options: [
        "Deletes all files Claude created",
        "Switches to a smaller model",
        "Summarizes the conversation to reduce context size",
        "Compresses file contents",
      ],
      correctAnswer: 2,
      explanation:
        "/compact summarizes the existing conversation into a shorter form, reducing the context size and token usage for subsequent interactions.",
    },
    {
      id: "q3",
      type: "multiple-choice",
      question: "How do subagents help reduce token usage?",
      options: [
        "They use a cheaper model",
        "They run in their own context window, keeping the main session lean",
        "They don't consume any tokens",
        "They compress results before returning",
      ],
      correctAnswer: 1,
      explanation:
        "Subagents run in separate context windows. Verbose operations like broad codebase searches happen in the subagent's context, and only the concise results come back to your main session.",
    },
    {
      id: "q4",
      type: "multiple-choice",
      question: "What is 'MCP tool overhead'?",
      options: [
        "The time MCP servers take to start",
        "Network latency to MCP servers",
        "Token cost of loading all MCP tool definitions into context",
        "Memory used by MCP server processes",
      ],
      correctAnswer: 2,
      explanation:
        "MCP tool definitions are loaded into Claude's context, consuming tokens on every interaction. Tool search (deferred loading) only loads definitions when needed, reducing this overhead.",
    },
  ],
};
