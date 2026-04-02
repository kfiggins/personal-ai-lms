export default {
  id: "adv-02-parallel-sessions",
  title: "Parallel Sessions",
  whyItMatters:
    "Running multiple Claude Code sessions simultaneously can dramatically increase your throughput. Instead of waiting for one task to finish before starting the next, you can have Claude working on several things at once.",

  content: [
    {
      type: "text",
      body: "Claude Code supports running multiple sessions at the same time, each working independently on different tasks. This is one of the most powerful productivity multipliers available to you — instead of sequentially tackling tasks, you can parallelize your workflow.\n\nThe simplest approach is opening multiple terminal windows or tabs, each running its own `claude` session. Each session has its own context window and conversation history, so they won't interfere with each other.",
    },
    {
      type: "keyPoint",
      body: "Git worktrees are the key enabler for parallel sessions that modify code. Use `claude -w feature-name` (or `claude --worktree feature-name`) to launch Claude in an isolated branch copy of your repository. Each worktree is a separate directory with its own branch, so multiple sessions can edit files without conflicts.",
    },
    {
      type: "text",
      body: "Different platforms support parallel sessions in different ways:\n\n- **Terminal**: Open multiple tabs or use a terminal multiplexer like tmux\n- **Desktop app**: Supports multiple sessions side by side in separate windows\n- **Web**: Supports multiple parallel tasks, each in its own tab\n- **VS Code**: Run multiple Claude panels or use split views",
    },
    {
      type: "inPractice",
      body: "The **writer/reviewer pattern** is a particularly effective use of parallel sessions. One session writes code for a feature while another session reviews the changes as they come in. The reviewer can catch issues the writer misses, since it has a fresh perspective and separate context. You can even have the reviewer session watch the PR and leave comments.",
    },
    {
      type: "tip",
      body: "Start with two parallel sessions before scaling up. Managing too many sessions at once can become overhead. The sweet spot for most developers is 2-3 concurrent sessions working on related but independent tasks.",
    },
  ],

  quiz: [
    {
      id: "q1",
      type: "multiple-choice",
      question: "What flag launches Claude Code in an isolated git worktree?",
      options: [
        "claude --branch feature-name",
        "claude -w feature-name",
        "claude --parallel feature-name",
        "claude --isolate feature-name",
      ],
      correctAnswer: 1,
      explanation:
        "Use `claude -w feature-name` (or `claude --worktree feature-name`) to launch in an isolated worktree with its own branch copy.",
    },
    {
      id: "q2",
      type: "multiple-choice",
      question: "Why are git worktrees important for parallel sessions?",
      options: [
        "They make Claude run faster",
        "They reduce token usage",
        "They provide separate directories with their own branches so sessions don't conflict",
        "They automatically merge changes from multiple sessions",
      ],
      correctAnswer: 2,
      explanation:
        "Git worktrees give each session its own directory and branch, preventing file conflicts when multiple sessions modify code simultaneously.",
    },
    {
      id: "q3",
      type: "multiple-choice",
      question: "What is the writer/reviewer pattern?",
      options: [
        "A pattern where Claude writes documentation and reviews code",
        "One session writes code while another reviews the changes",
        "A pattern for writing unit tests before implementation",
        "A way to alternate between writing and reading files",
      ],
      correctAnswer: 1,
      explanation:
        "In the writer/reviewer pattern, one Claude session writes code while another session reviews the changes with fresh context, catching issues the writer might miss.",
    },
    {
      id: "q4",
      type: "multiple-choice",
      question: "What is a recommended starting point for parallel sessions?",
      options: [
        "5-10 sessions for maximum throughput",
        "One session at a time until you're an expert",
        "2-3 concurrent sessions on related but independent tasks",
        "As many sessions as your machine can handle",
      ],
      correctAnswer: 2,
      explanation:
        "Start with 2-3 sessions before scaling up. Too many concurrent sessions creates management overhead that can offset the productivity gains.",
    },
  ],
};
