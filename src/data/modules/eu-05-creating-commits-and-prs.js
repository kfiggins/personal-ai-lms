export default {
  id: "eu-05-creating-commits-and-prs",
  title: "Creating Commits and PRs",
  whyItMatters:
    "Good commit messages and well-structured PRs make collaboration easier. Claude Code can handle the git workflow so you can focus on the code itself.",

  content: [
    {
      type: "text",
      body: "Claude Code integrates deeply with git. It can stage your changes, write descriptive commit messages based on what actually changed, create branches, and even open pull requests — all from natural language instructions. You don't need to remember git commands or craft commit messages from scratch.",
    },
    {
      type: "example",
      title: "Example: Creating a commit",
      code: "claude \"commit my changes with a descriptive message\"",
      explanation:
        "Claude examines the diff of your staged and unstaged changes, writes a clear commit message summarizing what changed and why, and creates the commit. It follows conventional commit patterns if your project uses them.",
    },
    {
      type: "keyPoint",
      body: "Claude can also create pull requests. It generates a PR title, writes a description summarizing all the changes, and can even fill in your PR template. Just say \"create a PR for my changes\" and Claude handles the rest.",
    },
    {
      type: "tip",
      body: "You can also ask Claude to create a branch before committing: \"create a feature branch called fix-checkout-bug and commit my changes.\" Claude handles the entire git workflow in sequence.",
    },
    {
      type: "inPractice",
      body: "A common workflow is to make your code changes with Claude, then ask it to commit and push. Claude writes commit messages that accurately reflect the changes because it actually understands the code — not just the diff. This produces much better commit histories than manually written messages.",
    },
  ],

  quiz: [
    {
      id: "q1",
      type: "multiple-choice",
      question: "What can Claude Code do with git?",
      options: [
        "Only view the git log",
        "Stage changes, write commit messages, create branches, and open PRs",
        "Only create commits, not branches",
        "Only work with GitHub, not other git hosts",
      ],
      correctAnswer: 1,
      explanation:
        "Claude Code handles the full git workflow: staging changes, writing commit messages, creating branches, and opening pull requests — all from natural language.",
    },
    {
      id: "q2",
      type: "true-false",
      question:
        "Claude Code writes better commit messages because it understands the code changes, not just the diff.",
      options: ["True", "False"],
      correctAnswer: 0,
      explanation:
        "Because Claude actually reads and understands your code, it can write commit messages that explain what changed and why — going beyond just listing the modified files.",
    },
    {
      id: "q3",
      type: "multiple-choice",
      question: "Which is the best way to ask Claude to commit your work?",
      options: [
        "\"git commit -m 'changes'\"",
        "\"commit my changes with a descriptive message\"",
        "\"save file\"",
        "\"push to production\"",
      ],
      correctAnswer: 1,
      explanation:
        "Asking Claude to \"commit my changes with a descriptive message\" lets it examine the diff and write a clear, accurate commit message. You describe what you want in plain English.",
    },
  ],
};
