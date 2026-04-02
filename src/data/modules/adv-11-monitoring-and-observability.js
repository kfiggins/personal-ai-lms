export default {
  id: "adv-11-monitoring-and-observability",
  title: "Monitoring and Observability",
  whyItMatters:
    "As Claude Code becomes part of your daily workflow, understanding how it's being used — session counts, token costs, code output, and active time — is essential for managing budgets, measuring ROI, and identifying opportunities to improve your team's AI-assisted development.",

  content: [
    {
      type: "text",
      body: "Claude Code supports **OpenTelemetry integration** for exporting metrics and traces. This lets you feed Claude Code telemetry into your existing observability stack — Datadog, Grafana, New Relic, or any OpenTelemetry-compatible backend.\n\nThe telemetry includes both high-level metrics and granular events, giving you visibility from overall usage patterns down to individual tool calls.",
    },
    {
      type: "keyPoint",
      body: "Key metrics you can track:\n\n- **Session count**: How many Claude sessions are running across your team\n- **Lines of code**: Code generated, modified, and deleted per session\n- **Cost**: Token spend per user, team, or project\n- **Tokens**: Input and output token counts with breakdown by operation\n- **Active time**: How long developers spend actively working with Claude",
    },
    {
      type: "text",
      body: "The event stream provides granular visibility into what Claude does:\n\n- **Prompts**: What users ask Claude to do\n- **Tool results**: Outputs from file reads, searches, and command execution\n- **API requests**: Calls to the Claude API with timing and token counts\n- **Errors**: Failed operations, permission denials, and tool errors\n\nThe **analytics dashboard** provides a team-level view that aggregates these metrics, making it easy to spot trends, identify heavy users, and track adoption over time.",
    },
    {
      type: "inPractice",
      body: "ROI measurement is one of the most valuable applications of monitoring. By correlating Claude Code usage with development velocity metrics (PRs merged, issues closed, cycle time), you can quantify the impact of AI-assisted development on your team's output. This data is invaluable for justifying continued investment and identifying where Claude adds the most value.",
    },
  ],

  quiz: [
    {
      id: "q1",
      type: "multiple-choice",
      question: "What integration does Claude Code use for exporting metrics?",
      options: [
        "Custom REST API",
        "OpenTelemetry",
        "StatsD",
        "CloudWatch",
      ],
      correctAnswer: 1,
      explanation:
        "Claude Code uses OpenTelemetry for exporting metrics and traces, which is compatible with most observability platforms like Datadog, Grafana, and New Relic.",
    },
    {
      id: "q2",
      type: "multiple-choice",
      question: "Which of these is NOT a metric Claude Code can track?",
      options: [
        "Token spend per user",
        "Lines of code generated",
        "Developer typing speed",
        "Active time with Claude",
      ],
      correctAnswer: 2,
      explanation:
        "Claude Code tracks session counts, lines of code, costs, tokens, and active time — but not developer typing speed, which isn't part of the Claude interaction.",
    },
    {
      id: "q3",
      type: "multiple-choice",
      question: "How can monitoring data help justify AI tooling investment?",
      options: [
        "By showing how many prompts were sent",
        "By correlating Claude usage with development velocity metrics like PRs merged and cycle time",
        "By counting the number of sessions started",
        "By measuring network bandwidth usage",
      ],
      correctAnswer: 1,
      explanation:
        "ROI measurement correlates Claude Code usage with development velocity metrics (PRs merged, issues closed, cycle time) to quantify the impact of AI-assisted development.",
    },
  ],
};
