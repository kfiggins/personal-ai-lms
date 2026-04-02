export default {
  id: "ext-05-hook-events",
  title: "Hook Events",
  whyItMatters:
    "Knowing what events are available determines what you can automate. Each event fires at a specific point in Claude Code's lifecycle, giving you precise control over when your hooks run.",

  content: [
    {
      type: "text",
      body: "Claude Code emits events throughout its lifecycle, and hooks let you tap into them. Each event has a specific purpose and receives relevant context as JSON on stdin. Understanding which event to use is the key to writing effective hooks.",
    },
    {
      type: "keyPoint",
      body: "The core events are: **PreToolUse** (before a tool runs — can block it), **PostToolUse** (after a tool completes — can add context), **UserPromptSubmit** (when the user sends a message), **Stop** (when Claude finishes a response), **Notification** (when Claude sends a notification), and **SessionStart/SessionEnd** (session lifecycle).",
    },
    {
      type: "example",
      title: "Event timing and data",
      code: "# PreToolUse — fires BEFORE the tool runs\n# Receives: tool name, parameters\n# Can: modify params, block execution (exit 2), approve (exit 0)\n\n# PostToolUse — fires AFTER the tool completes\n# Receives: tool name, parameters, result\n# Can: add context back to Claude, log results\n\n# UserPromptSubmit — fires when user sends a message\n# Receives: the user's prompt text\n# Can: transform the prompt, add context, block submission\n\n# Stop — fires when Claude finishes its turn\n# Receives: the stop reason, final message\n# Can: send notifications, log completion, trigger follow-up\n\n# Notification — fires when Claude sends a notification\n# Receives: notification content\n# Can: route to Slack, email, custom systems",
      explanation:
        "Pre events let you intercept and potentially block actions. Post events let you react to completed actions. Lifecycle events (Stop, SessionStart) let you manage session-level automation.",
    },
    {
      type: "inPractice",
      body: "PreToolUse is popular for safety guards — blocking writes to protected paths or preventing dangerous bash commands. PostToolUse is great for auto-formatting and logging. Stop is useful for notifications when long tasks complete. UserPromptSubmit can add context or enforce patterns.",
    },
    {
      type: "tip",
      body: "Use matchers to narrow which tool triggers a hook. A PostToolUse hook with a matcher for 'Edit' only fires when files are edited, not on every single tool use. This keeps hooks focused and performant.",
    },
  ],

  quiz: [
    {
      id: "q1",
      type: "multiple-choice",
      question:
        "Which hook event lets you block a tool from running?",
      options: ["PostToolUse", "Stop", "PreToolUse", "Notification"],
      correctAnswer: 2,
      explanation:
        "PreToolUse fires before a tool runs and can block execution by returning exit code 2. This is how you create safety guards that prevent certain actions.",
    },
    {
      id: "q2",
      type: "multiple-choice",
      question: "When does the PostToolUse event fire?",
      options: [
        "Before a tool starts executing",
        "After a tool completes its execution",
        "When the user types a command",
        "When Claude Code starts up",
      ],
      correctAnswer: 1,
      explanation:
        "PostToolUse fires after a tool has completed its execution. It receives the tool name, parameters, and result, making it perfect for post-processing like formatting.",
    },
    {
      id: "q3",
      type: "multiple-choice",
      question: "What does the UserPromptSubmit event allow you to do?",
      options: [
        "Change the Claude model",
        "Transform or add context to the user's prompt before Claude processes it",
        "Format output after Claude responds",
        "Install new MCP servers",
      ],
      correctAnswer: 1,
      explanation:
        "UserPromptSubmit fires when the user sends a message. Your hook can transform the prompt, add additional context, or even block submission.",
    },
    {
      id: "q4",
      type: "multiple-choice",
      question: "Which event would you use to send a Slack notification when Claude finishes a task?",
      options: ["PreToolUse", "UserPromptSubmit", "SessionStart", "Stop"],
      correctAnswer: 3,
      explanation:
        "The Stop event fires when Claude finishes its turn. This is the right place to trigger notifications about task completion.",
    },
    {
      id: "q5",
      type: "true-false",
      question:
        "Hook events receive context as JSON data on stdin.",
      options: ["True", "False"],
      correctAnswer: 0,
      explanation:
        "Hooks receive relevant context as JSON on stdin. For example, PreToolUse receives the tool name and parameters, while PostToolUse also includes the result.",
    },
  ],
};
