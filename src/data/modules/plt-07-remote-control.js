export default {
  id: "plt-07-remote-control",
  title: "Remote Control",
  whyItMatters:
    "Remote control lets you continue a local Claude Code session from your phone or any browser. Your code stays on your machine — only the interface is remote. It's perfect for monitoring progress or giving quick instructions when you're away from your desk.",

  content: [
    {
      type: "text",
      body: "Remote control connects your local Claude Code session to a web interface you can access from anywhere. Start it with `claude --remote-control` or `claude remote-control`, and you'll get a link you can open on your phone or any browser. Your code never leaves your machine — the remote interface just sends and receives messages.",
    },
    {
      type: "keyPoint",
      body: "Your code stays local — remote control only streams the conversation interface. It works with claude.ai/code and the Claude mobile app. Start it with `claude --remote-control` or `claude remote-control`.",
    },
    {
      type: "example",
      title: "Using remote control",
      code: "# Start a remote control session\nclaude --remote-control\n\n# You'll get a URL to open in any browser\n# Open it on your phone, tablet, or another computer\n\n# From the remote interface, you can:\n# - See what Claude is doing\n# - Send new instructions\n# - Approve or reject changes\n# - Monitor long-running tasks",
      explanation:
        "Remote control is like having a window into your local session. You get full visibility and control without exposing your codebase to any external servers.",
    },
    {
      type: "inPractice",
      body: "A common workflow: start a big refactor on your dev machine, enable remote control, then monitor it from your phone while grabbing coffee. If Claude needs approval for a permission prompt, you can handle it from your phone. Your code never leaves your machine.",
    },
    {
      type: "tip",
      body: "Remote control is different from the web interface. The web runs code in the cloud; remote control keeps everything local and just streams the conversation. Use remote control when you want your local environment and tools.",
    },
  ],

  quiz: [
    {
      id: "q1",
      type: "multiple-choice",
      question:
        "How do you start a remote control session?",
      options: [
        "claude --web",
        "claude --remote-control",
        "claude start --remote",
        "claude connect --phone",
      ],
      correctAnswer: 1,
      explanation:
        "Start a remote control session with `claude --remote-control` or `claude remote-control`. You'll get a URL you can open on any device.",
    },
    {
      id: "q2",
      type: "multiple-choice",
      question:
        "Where does your code run when using remote control?",
      options: [
        "On Anthropic's servers",
        "On your local machine",
        "In the cloud",
        "On your phone",
      ],
      correctAnswer: 1,
      explanation:
        "Your code stays on your local machine. Remote control only streams the conversation interface — no code is sent to external servers.",
    },
    {
      id: "q3",
      type: "multiple-choice",
      question:
        "What's the difference between remote control and Claude Code on the web?",
      options: [
        "They are the same thing",
        "Remote control keeps code local; the web runs code in the cloud",
        "Remote control is faster",
        "The web version has more features",
      ],
      correctAnswer: 1,
      explanation:
        "Remote control streams your local session to a browser — code stays on your machine. Claude Code on the web (claude.ai/code) runs entirely in the cloud with no local setup.",
    },
  ],
};
