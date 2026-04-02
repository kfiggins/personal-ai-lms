export default {
  id: "ext-16-channels-overview",
  title: "Channels Overview",
  whyItMatters:
    "Channels let external events reach Claude while you're away. CI failures, monitoring alerts, and chat messages can flow into your session — turning Claude from a tool you actively use into one that reacts to your environment.",

  content: [
    {
      type: "text",
      body: "Channels push external events into a running Claude Code session. Think of them as inbound pipes: CI results, monitoring alerts, chat messages, or any external signal can be forwarded to Claude. When something arrives, Claude can react to it — even while you're away from your desk.",
    },
    {
      type: "keyPoint",
      body: "Channels are built on the MCP server architecture. External systems send events through a channel, and Claude receives them as context it can act on. This turns Claude from a pull-based tool (you ask, it responds) into a push-based assistant (events arrive, it reacts).",
    },
    {
      type: "example",
      title: "Channel use cases",
      code: "# CI/CD results channel:\n# → GitHub Actions build fails\n# → Channel forwards failure details to Claude\n# → Claude analyzes the error and suggests a fix\n\n# Monitoring alerts channel:\n# → Sentry detects a spike in errors\n# → Channel pushes alert to Claude\n# → Claude investigates the relevant code\n\n# Chat messages channel:\n# → Teammate sends a question in Slack\n# → Channel forwards it to Claude\n# → Claude prepares context for when you return",
      explanation:
        "Channels bridge the gap between external events and Claude's ability to help. Instead of you manually copying CI output or error details into Claude, channels deliver them automatically.",
    },
    {
      type: "inPractice",
      body: "Channels are most valuable for long-running workflows. If you kick off a deploy and step away, a channel can notify Claude when it completes (or fails). Claude can then analyze the result, and when you return, you have a diagnosis waiting — not just a raw error log.",
    },
    {
      type: "tip",
      body: "Channels work best when combined with hooks and skills. A channel delivers the event, a hook can trigger automated processing, and a skill can define the workflow Claude follows. Together, they create a reactive development environment.",
    },
  ],

  quiz: [
    {
      id: "q1",
      type: "multiple-choice",
      question: "What do channels do in Claude Code?",
      options: [
        "Create communication between subagents",
        "Push external events into a running Claude Code session",
        "Connect Claude to external databases",
        "Manage multiple conversation windows",
      ],
      correctAnswer: 1,
      explanation:
        "Channels push external events (CI results, alerts, messages) into a running Claude Code session. They let Claude react to things happening outside your direct conversation.",
    },
    {
      id: "q2",
      type: "multiple-choice",
      question: "What architecture are channels built on?",
      options: [
        "WebSocket connections",
        "REST APIs",
        "MCP server architecture",
        "GraphQL subscriptions",
      ],
      correctAnswer: 2,
      explanation:
        "Channels are built on the MCP server architecture. They use the same protocol that powers external tool integrations, extended to support inbound event delivery.",
    },
    {
      id: "q3",
      type: "true-false",
      question:
        "Channels can only deliver events when you are actively using Claude Code.",
      options: ["True", "False"],
      correctAnswer: 1,
      explanation:
        "Channels can deliver events to a running session even while you're away. Claude can process them and have results ready when you return. The session just needs to be running.",
    },
  ],
};
