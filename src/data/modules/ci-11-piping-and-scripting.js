export default {
  id: "ci-11-piping-and-scripting",
  title: "Piping and Scripting",
  whyItMatters:
    "Claude Code shines when chained with other CLI tools. Piping logs, diffs, and command output through Claude lets you build powerful analysis and verification scripts with just a few lines of shell.",

  content: [
    {
      type: "text",
      body: "Because Claude Code follows the Unix philosophy, it works naturally in shell pipelines. Pipe application logs for anomaly detection, git diffs for security review, or build output for error analysis. You can embed Claude in build scripts, pre-commit hooks, and verification workflows.",
    },
    {
      type: "keyPoint",
      body: "Pipe any text data to Claude with `|` and use `-p` for the prompt. Chain Claude's output to other tools with another `|`. This lets you build sophisticated analysis pipelines using tools you already know.",
    },
    {
      type: "example",
      title: "Piping patterns",
      code: `# Analyze recent logs for anomalies
tail -200 app.log | claude -p "explain any anomalies in these logs"

# Security review of changed files
git diff main --name-only | claude -p "review these changed files for security issues"

# Analyze build failures
npm run build 2>&1 | claude -p "explain what went wrong and suggest fixes"

# Generate release notes from commits
git log v1.0..HEAD --oneline | claude -p "write release notes from these commits"

# Check for common mistakes in staged changes
git diff --cached | claude -p "check for debugging code, hardcoded secrets, or TODO comments"`,
      explanation:
        "Each example pipes the output of a standard CLI tool into Claude for analysis. The key insight is that Claude can understand and reason about any text data — logs, diffs, build output, commit histories, and more.",
    },
    {
      type: "example",
      title: "Claude in build scripts",
      code: `#!/bin/bash
# verify.sh — run as part of CI or pre-commit

set -e

# Check for security issues in changed files
echo "Checking for security issues..."
ISSUES=$(git diff --cached | claude -p "list any security issues (SQL injection, XSS, hardcoded secrets). Reply NONE if clean." --max-turns 3)

if echo "$ISSUES" | grep -qv "NONE"; then
  echo "Security issues found:"
  echo "$ISSUES"
  exit 1
fi

echo "All checks passed."`,
      explanation:
        "This script integrates Claude into a verification workflow. It checks staged changes for security issues and fails the build if any are found. The `--max-turns 3` flag keeps execution bounded.",
    },
    {
      type: "inPractice",
      body: "The most valuable piping patterns are: log analysis (`tail` + Claude), diff review (`git diff` + Claude), and build diagnostics (build command + Claude). These save minutes of manual reading and catch issues humans skim over.",
    },
    {
      type: "tip",
      body: "When piping large amounts of data, consider filtering first. `tail -200` is better than piping a 10,000-line log — it keeps costs down and helps Claude focus on the relevant data.",
    },
  ],

  quiz: [
    {
      id: "q1",
      type: "multiple-choice",
      question: "How do you pipe log output to Claude for analysis?",
      options: [
        "claude --read app.log",
        'tail -200 app.log | claude -p "explain anomalies"',
        "claude -p app.log --analyze",
        "cat app.log > claude",
      ],
      correctAnswer: 1,
      explanation:
        'Use the standard Unix pipe: `tail -200 app.log | claude -p "explain anomalies"`. Claude reads the piped data as stdin along with the prompt.',
    },
    {
      id: "q2",
      type: "multiple-choice",
      question: "How can you review changed files for security issues?",
      options: [
        "claude --security-scan",
        "git security-check | claude",
        'git diff main --name-only | claude -p "review for security issues"',
        "claude -p --scan-security",
      ],
      correctAnswer: 2,
      explanation:
        'Pipe the git diff output to Claude: `git diff main --name-only | claude -p "review these changed files for security issues"`. Claude analyzes the changes in context.',
    },
    {
      id: "q3",
      type: "multiple-choice",
      question: "Why should you filter data before piping to Claude?",
      options: [
        "Claude can't read large inputs",
        "It keeps costs down and helps Claude focus on relevant data",
        "Filtering is required for the pipe to work",
        "Claude only accepts 10 lines of input",
      ],
      correctAnswer: 1,
      explanation:
        "Filtering (e.g., `tail -200` instead of the full log) reduces token usage, keeps costs down, and helps Claude focus on the most relevant data rather than processing thousands of irrelevant lines.",
    },
    {
      id: "q4",
      type: "multiple-choice",
      question: "What's a practical use of Claude in a build script?",
      options: [
        "Replacing the compiler",
        "Checking staged changes for security issues before commit",
        "Writing the entire application",
        "Managing npm packages",
      ],
      correctAnswer: 1,
      explanation:
        "A common build script pattern is checking staged changes for security issues, debugging code, or hardcoded secrets before allowing a commit or build to proceed.",
    },
  ],
};
