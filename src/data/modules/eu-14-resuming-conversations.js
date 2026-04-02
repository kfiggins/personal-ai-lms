export default {
  id: "eu-14-resuming-conversations",
  title: "Resuming Conversations",
  whyItMatters:
    "Real work spans multiple sessions. Knowing how to resume, continue, and fork conversations means you never lose context on ongoing tasks.",

  content: [
    {
      type: "text",
      body: "Claude Code conversations don't have to be one-and-done. You can pick up right where you left off using the continue and resume commands. This is essential for multi-day tasks, ongoing features, or any work that doesn't fit in a single sitting.",
    },
    {
      type: "example",
      title: "Example: Continuing and resuming sessions",
      code: "# Continue the most recent conversation:\nclaude --continue\nclaude -c\n\n# Browse and pick a previous session:\nclaude --resume\nclaude -r",
      explanation:
        "Use --continue (or -c) to instantly jump back into your last session. Use --resume (or -r) to see a list of previous sessions and pick the one you want.",
    },
    {
      type: "keyPoint",
      body: "You can name sessions to find them later: claude -n \"auth-refactor\". Named sessions are much easier to locate when you have many conversations going. It's like naming your branches — a small habit that saves time.",
    },
    {
      type: "tip",
      body: "Use --fork-session to branch off from an existing conversation without affecting the original. This is great when you want to explore an alternative approach while keeping the original session intact.",
    },
    {
      type: "inPractice",
      body: "A typical workflow: start a session for a feature, name it with -n, work on it during the day, close the terminal, and --continue the next morning. If you want to try a different approach, --fork-session to experiment without losing your original progress.",
    },
  ],

  quiz: [
    {
      id: "q1",
      type: "multiple-choice",
      question: "How do you continue your most recent Claude Code conversation?",
      options: [
        "claude --restart",
        "claude --continue or claude -c",
        "claude --last",
        "claude --open",
      ],
      correctAnswer: 1,
      explanation:
        "Use claude --continue or the shorthand claude -c to immediately pick up your most recent conversation with all its context preserved.",
    },
    {
      id: "q2",
      type: "multiple-choice",
      question: "What does claude --resume do?",
      options: [
        "Restarts Claude Code from scratch",
        "Shows a list of previous sessions so you can pick one to continue",
        "Resumes the most recent session automatically",
        "Deletes all previous sessions",
      ],
      correctAnswer: 1,
      explanation:
        "The --resume (or -r) flag shows you a list of your previous sessions and lets you browse and select which one to continue.",
    },
    {
      id: "q3",
      type: "multiple-choice",
      question: "What is the purpose of --fork-session?",
      options: [
        "To delete the current session",
        "To branch off from a conversation without affecting the original",
        "To merge two sessions together",
        "To share a session with a teammate",
      ],
      correctAnswer: 1,
      explanation:
        "--fork-session creates a branch of an existing conversation. You can explore alternative approaches while keeping the original session intact.",
    },
    {
      id: "q4",
      type: "multiple-choice",
      question: "How do you name a Claude Code session for easy retrieval later?",
      options: [
        "claude --name \"my-feature\"",
        "claude -n \"my-feature\"",
        "You can't name sessions",
        "Both A and B",
      ],
      correctAnswer: 3,
      explanation:
        "Use claude -n \"session-name\" to name a session. Named sessions are easier to find when you have many conversations. Both the long form --name and short form -n work.",
    },
  ],
};
