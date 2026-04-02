export default {
  id: "adv-03-git-worktrees",
  title: "Git Worktrees",
  whyItMatters:
    "Git worktrees let you work on multiple branches simultaneously without stashing or switching. Combined with Claude Code, they enable truly parallel development workflows where multiple sessions modify code in complete isolation.",

  content: [
    {
      type: "text",
      body: "A git worktree is a linked copy of your repository that lives in a separate directory with its own branch. Claude Code has first-class support for worktrees, making it easy to spin up isolated environments for parallel work.\n\nTo create a worktree and start Claude in it:\n```\nclaude --worktree feature-auth\n```\n\nThis creates a new branch (`feature-auth`) in a separate directory and drops you into a Claude session there. Your main working directory stays untouched.",
    },
    {
      type: "keyPoint",
      body: "Each worktree is a fully independent working directory with its own branch, staged changes, and working tree state. Changes in one worktree have zero impact on another. This is what makes parallel development safe — there's no risk of one session's edits conflicting with another's.",
    },
    {
      type: "text",
      body: "Claude Code also uses worktrees internally for subagent isolation. When you use the Agent tool with `isolation: \"worktree\"`, Claude creates a temporary worktree so the subagent can work on an isolated copy of the repo. This is how Claude parallelizes its own work within a single session.\n\nThe `.worktreeinclude` file controls what gets copied into new worktrees. If your project has large directories that aren't needed for most tasks (like build artifacts or data files), you can exclude them to speed up worktree creation.",
    },
    {
      type: "text",
      body: "Worktree lifecycle management is mostly automatic:\n\n- **Creation**: `claude --worktree <name>` or subagent worktrees are created on demand\n- **Work**: Each worktree functions as a normal git checkout — you can commit, push, and create PRs from it\n- **Cleanup**: Subagent worktrees auto-cleanup when the agent finishes if no changes were made. User-created worktrees persist until you manually remove them with `git worktree remove`",
    },
    {
      type: "tip",
      body: "Use descriptive worktree names that match your branch naming convention. `claude --worktree fix-login-redirect` is much more useful than `claude --worktree test1` when you come back to manage multiple worktrees later.",
    },
  ],

  quiz: [
    {
      id: "q1",
      type: "multiple-choice",
      question: "What does `claude --worktree feature-auth` do?",
      options: [
        "Switches to the feature-auth branch",
        "Creates an isolated branch copy in a separate directory and starts Claude there",
        "Stashes current changes and creates a new branch",
        "Opens a new terminal window for the feature-auth branch",
      ],
      correctAnswer: 1,
      explanation:
        "The --worktree flag creates a new git worktree (a separate directory with its own branch) and starts a Claude session inside it, leaving your main directory untouched.",
    },
    {
      id: "q2",
      type: "multiple-choice",
      question: "What file controls what gets copied into new worktrees?",
      options: [
        ".gitignore",
        ".worktreeconfig",
        ".worktreeinclude",
        ".claudeignore",
      ],
      correctAnswer: 2,
      explanation:
        "The .worktreeinclude file controls what gets copied into new worktrees. You can use it to exclude large directories that aren't needed.",
    },
    {
      id: "q3",
      type: "multiple-choice",
      question: "When do subagent worktrees get cleaned up?",
      options: [
        "After every commit",
        "When you close the terminal",
        "Automatically when the agent finishes, if no changes were made",
        "They never get cleaned up automatically",
      ],
      correctAnswer: 2,
      explanation:
        "Subagent worktrees auto-cleanup when the agent finishes if no changes were made. If changes were made, the worktree path and branch are returned in the result.",
    },
    {
      id: "q4",
      type: "multiple-choice",
      question: "How does Claude Code use worktrees internally?",
      options: [
        "For caching compiled code",
        "For backing up your changes",
        "For subagent isolation when using `isolation: \"worktree\"`",
        "For storing conversation history",
      ],
      correctAnswer: 2,
      explanation:
        "Claude Code uses worktrees for subagent isolation. The Agent tool with `isolation: \"worktree\"` creates a temporary worktree so the subagent works on an isolated copy of the repo.",
    },
  ],
};
