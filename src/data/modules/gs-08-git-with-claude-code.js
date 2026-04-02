export default {
  id: "gs-08-git-with-claude-code",
  title: "Git with Claude Code",
  whyItMatters:
    "Claude Code works directly with git, making version control tasks faster and less error-prone.",

  content: [
    {
      type: "text",
      body: "Claude Code understands git and can help you with common version control tasks. You can ask it about your changes, create commits, manage branches, and even resolve merge conflicts — all through natural language.",
    },
    {
      type: "example",
      title: "Common Git Tasks",
      code: "# Check what's changed\n> what files have I changed?\n\n# Create a commit\n> commit my changes with a descriptive message\n\n# Work with branches\n> create a new branch called feature/user-auth\n\n# Resolve conflicts\n> help me resolve the merge conflicts",
      explanation:
        "Claude Code interacts directly with git on your behalf. It reads the current state of your repository, understands what's staged and unstaged, and executes git commands for you.",
    },
    {
      type: "keyPoint",
      body: "Claude Code writes thoughtful commit messages based on the actual changes — not just generic summaries. It looks at the diff and describes what changed and why.",
    },
    {
      type: "inPractice",
      body: "After a coding session, try saying \"commit my changes with a descriptive message.\" Claude Code reviews the diff, writes a meaningful commit message, and creates the commit. It's one of the most popular day-to-day uses.",
    },
  ],

  quiz: [
    {
      id: "q1",
      type: "multiple-choice",
      question: "What can Claude Code help you with in git?",
      options: [
        "Only creating commits",
        "Checking changes, committing, branching, and resolving conflicts",
        "Only viewing the git log",
        "Only pushing to remote",
      ],
      correctAnswer: 1,
      explanation:
        "Claude Code can help with a wide range of git tasks: checking changes, creating commits, managing branches, resolving merge conflicts, and more.",
    },
    {
      id: "q2",
      type: "true-false",
      question:
        "Claude Code just uses generic commit messages like \"updated files\".",
      options: ["True", "False"],
      correctAnswer: 1,
      explanation:
        "Claude Code reads the actual diff and writes descriptive, meaningful commit messages that explain what changed and why.",
    },
    {
      id: "q3",
      type: "multiple-choice",
      question:
        "How would you ask Claude Code to create a commit?",
      options: [
        "git commit -m \"changes\"",
        "\"commit my changes with a descriptive message\"",
        "Press Ctrl+C",
        "Run the /git command",
      ],
      correctAnswer: 1,
      explanation:
        "Just ask in natural language: \"commit my changes with a descriptive message.\" Claude Code handles the rest, including writing the commit message.",
    },
  ],
};
