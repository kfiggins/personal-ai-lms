export default {
  id: "ci-02-print-mode",
  title: "Print Mode",
  whyItMatters:
    "Print mode (`claude -p`) is how you use Claude Code in scripts, pipelines, and automation. It runs a single query, outputs the result, and exits — no interactive session required.",

  content: [
    {
      type: "text",
      body: 'Print mode turns Claude Code into a non-interactive command-line tool. You give it a prompt with `-p`, it processes your request, and it prints the result to stdout. There\'s no conversation, no follow-up — just one shot in, one shot out. This is the foundation of every Claude automation.',
    },
    {
      type: "keyPoint",
      body: '`claude -p "your query"` runs Claude non-interactively. It reads the prompt (and any piped stdin), generates a response, and exits. This is the building block for all script and CI/CD integrations.',
    },
    {
      type: "example",
      title: "Print mode in action",
      code: '# Basic query\nclaude -p "what does the main function in app.js do?"\n\n# Pipe file content\ncat src/utils.js | claude -p "find any bugs in this code"\n\n# Pipe command output\ngit log --oneline -20 | claude -p "summarize recent changes"\n\n# Combine with redirection\nclaude -p "generate a README for this project" > README.md\n\n# Use in a conditional\nif claude -p "does this code have SQL injection risks?" < query.js | grep -q "yes"; then\n  echo "Security issue found!"\n  exit 1\nfi',
      explanation:
        "Print mode works like any other CLI tool. Pipe data in via stdin, pass the prompt with `-p`, and capture the output with redirection or piping. It composes naturally with shell constructs.",
    },
    {
      type: "inPractice",
      body: "Print mode is used in pre-commit hooks to review staged changes, in CI pipelines to analyze PRs, in cron jobs to audit code, and in shell scripts to automate repetitive tasks. Because it exits after one response, it's safe to call from any automation context.",
    },
    {
      type: "tip",
      body: 'When piping data to Claude, include context in your prompt about what the data is. For example: `cat app.log | claude -p "these are application logs from the last hour — summarize any errors"`. The more context you give, the better the analysis.',
    },
  ],

  quiz: [
    {
      id: "q1",
      type: "multiple-choice",
      question: "What does `claude -p` do?",
      options: [
        "Opens Claude in a persistent session",
        "Runs Claude non-interactively with a single prompt",
        "Starts Claude in plan mode",
        "Prints Claude's configuration",
      ],
      correctAnswer: 1,
      explanation:
        '`claude -p` runs Claude in print mode — it processes a single prompt non-interactively and exits. For example: `claude -p "explain this code"`.',
    },
    {
      id: "q2",
      type: "multiple-choice",
      question: "How do you pipe file content into Claude in print mode?",
      options: [
        'claude -p "analyze" --file=data.txt',
        'cat data.txt | claude -p "analyze this"',
        'claude -p --stdin data.txt "analyze"',
        'claude --pipe data.txt -p "analyze"',
      ],
      correctAnswer: 1,
      explanation:
        'You pipe data to Claude via stdin, just like any Unix tool: `cat data.txt | claude -p "analyze this"`. Claude reads stdin along with the prompt.',
    },
    {
      id: "q3",
      type: "multiple-choice",
      question: "What happens after Claude finishes processing in print mode?",
      options: [
        "It waits for follow-up input",
        "It opens an interactive session",
        "It exits immediately",
        "It saves the conversation for later",
      ],
      correctAnswer: 2,
      explanation:
        "In print mode, Claude exits immediately after producing its output. There's no interactive session or follow-up — it's a single request/response cycle.",
    },
    {
      id: "q4",
      type: "multiple-choice",
      question: "Which is a valid use of print mode output?",
      options: [
        "Only viewing it in the terminal",
        "Redirecting to a file, piping to another command, or using in conditionals",
        "It can only be captured with a special SDK",
        "Output can only be JSON format",
      ],
      correctAnswer: 1,
      explanation:
        "Print mode output goes to stdout, so you can redirect it to files, pipe it to other commands, use it in conditionals — anything you'd do with normal CLI output.",
    },
  ],
};
