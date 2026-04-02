export default {
  id: "ci-01-automation-overview",
  title: "Automation Overview",
  whyItMatters:
    "Claude Code isn't just an interactive assistant — it's a composable Unix utility you can pipe data through, run in scripts, and embed in CI/CD pipelines. Understanding this unlocks a whole category of automated workflows.",

  content: [
    {
      type: "text",
      body: "Claude Code follows the Unix philosophy: it does one thing well and composes with other tools. You can pipe data in, get results out, and chain it with any CLI tool you already use. This makes it a natural fit for automation — from simple shell scripts to full CI/CD pipelines.",
    },
    {
      type: "keyPoint",
      body: "The `-p` (print) flag is the gateway to automation. It runs Claude non-interactively: feed it a prompt, get a response, and it exits. No session, no follow-up — just input in, output out, like any other Unix utility.",
    },
    {
      type: "example",
      title: "Claude as a Unix utility",
      code: '# Simple one-shot query\nclaude -p "explain what this project does"\n\n# Pipe data in for analysis\ncat error.log | claude -p "summarize the errors"\n\n# Chain with other tools\ngit diff main | claude -p "review this diff" | tee review.md\n\n# Use in a script\n#!/bin/bash\nfor file in src/*.js; do\n  claude -p "check $file for security issues" < "$file"\ndone',
      explanation:
        "The `-p` flag makes Claude behave like grep, awk, or jq — a tool you compose into pipelines. Data flows in through stdin or the prompt, and results flow out to stdout.",
    },
    {
      type: "inPractice",
      body: "Teams use Claude in CI/CD to automatically review PRs, generate changelogs, triage issues, audit dependencies, and run scheduled maintenance. Because it accepts structured output flags, you can parse its responses programmatically and feed them into other systems.",
    },
    {
      type: "tip",
      body: "Start small: add Claude to one script or one CI step. Once you see how composable it is, you'll find dozens of places where a quick `claude -p` call saves manual work.",
    },
  ],

  quiz: [
    {
      id: "q1",
      type: "multiple-choice",
      question: "What philosophy does Claude Code follow for automation?",
      options: [
        "It requires a custom SDK for all integrations",
        "It follows the Unix philosophy — composable and pipeable",
        "It only works inside GitHub Actions",
        "It needs a GUI to function properly",
      ],
      correctAnswer: 1,
      explanation:
        "Claude Code follows the Unix philosophy: do one thing well and compose with other tools. You can pipe data in, get results out, and chain it with any CLI tool.",
    },
    {
      id: "q2",
      type: "multiple-choice",
      question: "Which flag makes Claude Code run non-interactively?",
      options: [
        "--headless",
        "--batch",
        "-p (print mode)",
        "--ci",
      ],
      correctAnswer: 2,
      explanation:
        "The `-p` flag (print mode) runs Claude non-interactively. It processes the input, prints the result, and exits — perfect for scripts and CI pipelines.",
    },
    {
      id: "q3",
      type: "multiple-choice",
      question: "What can you pipe into Claude Code?",
      options: [
        "Only JSON files",
        "Only code files",
        "Any text data from stdin",
        "Only git diffs",
      ],
      correctAnswer: 2,
      explanation:
        "Claude Code accepts any text data from stdin, just like other Unix utilities. You can pipe in logs, diffs, code files, configuration, or any other text.",
    },
    {
      id: "q4",
      type: "multiple-choice",
      question: "What's a good first step for adopting Claude in CI/CD?",
      options: [
        "Rewrite your entire pipeline at once",
        "Start small — add Claude to one script or CI step",
        "Only use it for scheduled tasks",
        "Wait until you have a custom SDK integration",
      ],
      correctAnswer: 1,
      explanation:
        "Start small by adding Claude to one script or one CI step. Once you see how composable it is, you can expand to more automation use cases.",
    },
  ],
};
