export default {
  id: "ci-04-programmatic-usage",
  title: "Programmatic Usage",
  whyItMatters:
    "Beyond simple CLI calls, Claude Code can be driven programmatically via the Agent SDK, with fine-grained controls for iteration limits, cost caps, and stateless execution. This is how you build robust, production-grade automation.",

  content: [
    {
      type: "text",
      body: "When you need more control than a shell script provides, the Claude Code Agent SDK lets you run Claude from Python or TypeScript. You can also use CLI flags to limit how many turns the agent takes, set a budget ceiling, skip session persistence, and strip startup overhead for faster execution.",
    },
    {
      type: "keyPoint",
      body: "Key flags for programmatic usage: `--max-turns` limits how many agentic iterations Claude performs, `--max-budget-usd` sets a hard cost cap, `--no-session-persistence` makes each run fully stateless, and `--bare` skips auto-discovery of CLAUDE.md and other context for faster startup.",
    },
    {
      type: "example",
      title: "Programmatic controls",
      code: '# Limit Claude to 5 agentic turns\nclaude -p "refactor the auth module" --max-turns 5\n\n# Set a cost ceiling of $0.50\nclaude -p "analyze the entire codebase" --max-budget-usd 0.50\n\n# Stateless run — no session saved\nclaude -p "check for lint errors" --no-session-persistence\n\n# Fast startup — skip CLAUDE.md discovery\nclaude -p "what version of node is required?" --bare\n\n# Combine flags for CI\nclaude -p "review this PR" \\\n  --max-turns 10 \\\n  --max-budget-usd 1.00 \\\n  --no-session-persistence \\\n  --output-format json',
      explanation:
        "In CI environments, you want predictable behavior: bounded costs, limited iterations, no leftover state, and fast execution. These flags give you that control.",
    },
    {
      type: "text",
      body: "The Agent SDK takes this further by letting you embed Claude as a library in your Python or TypeScript applications. You can programmatically provide context, handle tool calls, and process results — building Claude into your own tools and workflows.",
    },
    {
      type: "inPractice",
      body: "CI pipelines typically combine `--max-turns` and `--max-budget-usd` as safety rails, `--no-session-persistence` to avoid polluting the workspace, and `--output-format json` for parseable results. The `--bare` flag shaves seconds off startup when you don't need project context — important when running hundreds of calls in a pipeline.",
    },
    {
      type: "tip",
      body: "Always set `--max-budget-usd` in CI. Without it, a runaway prompt could generate unexpected costs. A dollar or two is usually more than enough for code review tasks.",
    },
  ],

  quiz: [
    {
      id: "q1",
      type: "multiple-choice",
      question: "What does `--max-turns` control?",
      options: [
        "The maximum number of output lines",
        "How many agentic iterations Claude can perform",
        "The number of files Claude can read",
        "How many times Claude retries on failure",
      ],
      correctAnswer: 1,
      explanation:
        "`--max-turns` limits the number of agentic iterations (tool use cycles) Claude performs. This prevents runaway execution in automated environments.",
    },
    {
      id: "q2",
      type: "multiple-choice",
      question: "Why use `--no-session-persistence` in CI?",
      options: [
        "It makes Claude run faster",
        "It prevents session state from polluting the workspace",
        "It's required for JSON output",
        "It enables multi-turn conversations",
      ],
      correctAnswer: 1,
      explanation:
        "`--no-session-persistence` ensures each run is fully stateless — no session files are saved. This keeps your CI workspace clean and prevents runs from interfering with each other.",
    },
    {
      id: "q3",
      type: "multiple-choice",
      question: "What does the `--bare` flag do?",
      options: [
        "Removes all formatting from output",
        "Skips auto-discovery of CLAUDE.md and other context for faster startup",
        "Runs Claude without any model",
        "Disables all tools",
      ],
      correctAnswer: 1,
      explanation:
        "`--bare` skips the auto-discovery of CLAUDE.md files and other project context, resulting in faster startup. Useful when you don't need project context for the task.",
    },
    {
      id: "q4",
      type: "multiple-choice",
      question: "Why should you always set `--max-budget-usd` in CI?",
      options: [
        "It's required for the command to work",
        "It makes responses higher quality",
        "It prevents unexpected costs from runaway prompts",
        "It enables structured output",
      ],
      correctAnswer: 2,
      explanation:
        "`--max-budget-usd` sets a hard cost ceiling. In CI, where prompts run unattended, this prevents a single runaway task from generating unexpected bills.",
    },
  ],
};
