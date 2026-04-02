export default {
  id: "sec-01-security-overview",
  title: "Security Overview",
  whyItMatters:
    "Claude Code runs shell commands on your machine with real access to your files and tools. Understanding its security architecture isn't optional — it's the foundation that makes safe AI-assisted development possible.",

  content: [
    {
      type: "text",
      body: "Claude Code's security model is built on a simple principle: the human stays in control. Rather than trying to restrict what Claude can do through complex sandboxing alone, the architecture combines multiple layers of protection — permissions, sandboxing, and user awareness — to keep you safely in the driver's seat.",
    },
    {
      type: "keyPoint",
      body: "The permission-based architecture is the foundation of Claude Code's security. Every potentially impactful action — running shell commands, editing files, making network requests — goes through a permission system that you control. Nothing happens without your awareness and approval (unless you explicitly choose otherwise).",
    },
    {
      type: "text",
      body: "Claude Code includes several built-in protections that work automatically:\n\n- **Sandboxed Bash execution**: Commands run in a controlled environment with configurable restrictions on filesystem and network access.\n- **Write access restrictions**: By default, Claude asks before modifying files, giving you a chance to review changes.\n- **Prompt fatigue mitigation**: The system is designed to avoid training you to blindly click 'approve' by batching related permissions and remembering your choices for similar actions.\n- **Context-aware analysis**: Claude evaluates whether content from external sources (like web pages or files) might be trying to manipulate it through prompt injection.",
    },
    {
      type: "inPractice",
      body: "Your responsibility as a user is to review the actions Claude proposes before approving them. Think of it like code review — you wouldn't merge a PR without reading it, and you shouldn't approve Claude's actions without understanding what they do. The permission system is designed to make this review process natural and non-intrusive.",
    },
    {
      type: "tip",
      body: "Start with the default permission mode, which asks for approval on everything. As you build confidence and trust in specific workflows, you can selectively relax permissions for actions you're comfortable automating.",
    },
  ],

  quiz: [
    {
      id: "q1",
      type: "multiple-choice",
      question: "What is the foundation of Claude Code's security model?",
      options: [
        "AI-based threat detection",
        "Permission-based architecture with human control",
        "Network-level firewalls",
        "Encrypted communication channels",
      ],
      correctAnswer: 1,
      explanation:
        "Claude Code's security is built on a permission-based architecture where the human stays in control. Every impactful action requires your awareness and approval.",
    },
    {
      id: "q2",
      type: "multiple-choice",
      question: "Which of these is a built-in protection in Claude Code?",
      options: [
        "Automatic code signing",
        "Sandboxed Bash execution",
        "AI model self-certification",
        "Blockchain-based audit trail",
      ],
      correctAnswer: 1,
      explanation:
        "Sandboxed Bash execution is one of several built-in protections, along with write access restrictions, prompt fatigue mitigation, and context-aware analysis.",
    },
    {
      id: "q3",
      type: "multiple-choice",
      question:
        "What is the user's primary responsibility in Claude Code's security model?",
      options: [
        "Writing security policies",
        "Configuring network firewalls",
        "Reviewing actions before approving them",
        "Running security scans after each session",
      ],
      correctAnswer: 2,
      explanation:
        "Your responsibility is to review actions Claude proposes before approving them — like code review for AI actions. The permission system makes this review process natural.",
    },
    {
      id: "q4",
      type: "multiple-choice",
      question: "What does 'prompt fatigue mitigation' help prevent?",
      options: [
        "Claude running out of context window",
        "Users blindly clicking 'approve' on every action",
        "Too many error messages",
        "Slow response times",
      ],
      correctAnswer: 1,
      explanation:
        "Prompt fatigue mitigation prevents you from being overwhelmed with approval dialogs to the point where you stop reading them. It batches related permissions and remembers your choices.",
    },
  ],
};
