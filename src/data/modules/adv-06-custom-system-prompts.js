export default {
  id: "adv-06-custom-system-prompts",
  title: "Custom System Prompts",
  whyItMatters:
    "Custom system prompts let you fundamentally change how Claude behaves — from creating specialized agents that focus on specific tasks to building restricted modes for CI environments. They're the most powerful customization mechanism available.",

  content: [
    {
      type: "text",
      body: "Claude Code's behavior is guided by its system prompt — the instructions it receives before your conversation begins. By default, this includes general-purpose instructions for software engineering tasks. Custom system prompts let you replace or extend these instructions.\n\nThere are three flags for customizing the system prompt:\n\n- **`--system-prompt \"text\"`**: Replaces the entire default system prompt with your text\n- **`--append-system-prompt \"text\"`**: Adds your text to the end of the default prompt\n- **`--system-prompt-file path/to/file`**: Loads the system prompt from a file",
    },
    {
      type: "keyPoint",
      body: "The difference between `--system-prompt` and `--append-system-prompt` is critical. Replacing the entire prompt (`--system-prompt`) removes all of Claude's default safety instructions and tool-use guidance. Use `--append-system-prompt` unless you specifically need to override the defaults and understand the implications.",
    },
    {
      type: "text",
      body: "Common use cases for custom system prompts:\n\n- **Specialized agents**: Create a \"security reviewer\" that only looks for vulnerabilities, or a \"documentation writer\" that focuses on API docs\n- **Restricted modes**: Limit Claude to read-only operations in CI pipelines\n- **Custom personas**: Set up Claude with domain-specific knowledge or communication style\n- **Automated pipelines**: Configure Claude for specific tasks when used in scripts and CI/CD",
    },
    {
      type: "inPractice",
      body: "For team use, store system prompts in files and reference them with `--system-prompt-file`. This makes them version-controlled, reviewable, and shareable. A team might have `prompts/reviewer.md`, `prompts/migrator.md`, and `prompts/docs-writer.md` for different automated workflows.",
    },
  ],

  quiz: [
    {
      id: "q1",
      type: "multiple-choice",
      question: "What does `--system-prompt` do compared to `--append-system-prompt`?",
      options: [
        "They do the same thing",
        "--system-prompt replaces the entire default prompt; --append-system-prompt adds to it",
        "--system-prompt is for files; --append-system-prompt is for inline text",
        "--system-prompt is permanent; --append-system-prompt is temporary",
      ],
      correctAnswer: 1,
      explanation:
        "--system-prompt replaces all default instructions (including safety guidance), while --append-system-prompt adds your text to the end of the default prompt.",
    },
    {
      id: "q2",
      type: "multiple-choice",
      question: "Why should you prefer `--append-system-prompt` over `--system-prompt` in most cases?",
      options: [
        "It's faster to process",
        "It preserves default safety instructions and tool-use guidance",
        "It supports longer prompts",
        "It works in all environments",
      ],
      correctAnswer: 1,
      explanation:
        "Using --append-system-prompt preserves Claude's default safety instructions and tool-use guidance. Replacing the entire prompt removes these safeguards.",
    },
    {
      id: "q3",
      type: "multiple-choice",
      question: "How do you load a system prompt from a file?",
      options: [
        "claude --prompt-file path/to/file",
        "claude --system-prompt-file path/to/file",
        "claude --load-prompt path/to/file",
        "claude --config path/to/file",
      ],
      correctAnswer: 1,
      explanation:
        "Use `--system-prompt-file path/to/file` to load a system prompt from a file, which is ideal for version-controlled, team-shared prompts.",
    },
    {
      id: "q4",
      type: "multiple-choice",
      question: "Which is a good use case for custom system prompts?",
      options: [
        "Making Claude respond faster",
        "Increasing the context window",
        "Creating a specialized security reviewer agent",
        "Reducing token costs",
      ],
      correctAnswer: 2,
      explanation:
        "Custom system prompts are perfect for creating specialized agents like security reviewers, documentation writers, or restricted CI modes that focus on specific tasks.",
    },
  ],
};
