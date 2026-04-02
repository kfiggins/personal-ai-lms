export default {
  id: "cc-09-sessions-explained",
  title: "Sessions Explained",
  whyItMatters:
    "Understanding sessions helps you manage your work across multiple interactions with Claude Code.",

  content: [
    {
      type: "text",
      body: "Each time you start Claude Code, you begin a new session. Sessions are independent — each one starts with a fresh context window, as if Claude is meeting your project for the first time. Your conversation, tool results, and context are all tied to that specific session.",
    },
    {
      type: "keyPoint",
      body: "Sessions are saved locally and tied to directories. You can resume a previous session with --continue (picks up the last session in the current directory) or --resume (lets you choose from a list of past sessions). This is useful when you want to continue a conversation or give follow-up instructions.",
    },
    {
      type: "example",
      title: "Session management commands",
      code: "# Start a fresh session:\nclaude\n\n# Continue the last session in this directory:\nclaude --continue\n\n# Pick from a list of past sessions:\nclaude --resume\n\n# Branch off the current session to try a different approach:\n# Use --fork-session from within a session",
      explanation:
        "Use --continue to pick up right where you left off, --resume to choose a specific past session, and --fork-session to branch off and experiment without affecting the original session.",
    },
    {
      type: "inPractice",
      body: "Start fresh sessions for new tasks and use --continue for follow-ups on the same task. If you're exploring multiple approaches to a problem, --fork-session lets you branch off and try something different without losing your original conversation. Think of sessions like browser tabs — each one has its own state.",
    },
  ],

  quiz: [
    {
      id: "q1",
      type: "true-false",
      question:
        "Claude Code remembers everything from your previous session when you start a new one.",
      options: ["True", "False"],
      correctAnswer: 1,
      explanation:
        "Each new session starts with a fresh context window. Claude doesn't automatically remember previous sessions — use --continue or --resume to pick up a past session.",
    },
    {
      id: "q2",
      type: "multiple-choice",
      question: "What does the --continue flag do?",
      options: [
        "Creates a new session with extra context",
        "Resumes the last session in the current directory",
        "Continues running a background task",
        "Reconnects to a remote session",
      ],
      correctAnswer: 1,
      explanation:
        "The --continue flag picks up the last session you had in the current directory, restoring the conversation so you can give follow-up instructions.",
    },
    {
      id: "q3",
      type: "multiple-choice",
      question: "What is the difference between --continue and --resume?",
      options: [
        "They do the same thing",
        "--continue picks up the last session; --resume lets you choose from a list",
        "--continue is faster; --resume is more accurate",
        "--continue works offline; --resume requires internet",
      ],
      correctAnswer: 1,
      explanation:
        "--continue automatically resumes the last session in the current directory, while --resume shows you a list of past sessions to choose from.",
    },
    {
      id: "q4",
      type: "multiple-choice",
      question: "What does --fork-session do?",
      options: [
        "Copies your code to a new branch",
        "Branches off the current session to try a different approach",
        "Creates a shared session with another user",
        "Forks the repository on GitHub",
      ],
      correctAnswer: 1,
      explanation:
        "--fork-session branches off your current conversation so you can try a different approach without affecting the original session. It's like creating a save point.",
    },
  ],
};
