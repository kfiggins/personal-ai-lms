export default {
  id: "cc-01-the-agentic-loop",
  title: "The Agentic Loop",
  whyItMatters:
    "Understanding the agentic loop helps you predict what Claude Code will do and when to step in to steer it.",

  content: [
    {
      type: "text",
      body: "Claude Code works in a continuous loop with three phases: gather context, take action, and verify results. When you give it a task, it reads files and searches your codebase (gather), makes edits or runs commands (act), and then checks whether its changes actually work (verify). These phases blend together seamlessly — Claude might chain dozens of actions in a single turn, reading a file, editing it, running tests, spotting a failure, and fixing it without you having to say anything.",
    },
    {
      type: "keyPoint",
      body: "Claude Code is the \"harness\" around the Claude model. The model does the thinking and reasoning; the harness handles tool execution, permission checks, file I/O, and the loop itself. When you type a prompt, the harness sends it to the model, the model decides what tools to call, and the harness executes them and feeds results back.",
    },
    {
      type: "example",
      title: "Example: A typical agentic loop in action",
      code: "claude \"add input validation to the signup form\"",
      explanation:
        "Claude will: (1) search for the signup form files, (2) read the current code, (3) edit the file to add validation, (4) run any existing tests, (5) fix issues if tests fail — all automatically. Each step feeds information into the next.",
    },
    {
      type: "text",
      body: "You can interrupt at any point during the loop. Press Escape to stop Claude mid-action, then provide new instructions or redirect its approach. This is especially useful if you see it heading in the wrong direction — you don't have to wait for it to finish.",
    },
    {
      type: "inPractice",
      body: "Think of the agentic loop like pair programming: Claude does the typing while you watch and steer. Let it run when it's on track, interrupt when it's not. The more context you provide upfront (clear instructions, relevant file paths), the fewer loops it needs.",
    },
  ],

  quiz: [
    {
      id: "q1",
      type: "multiple-choice",
      question: "What are the three phases of the agentic loop?",
      options: [
        "Read, write, deploy",
        "Gather context, take action, verify results",
        "Plan, code, review",
        "Input, process, output",
      ],
      correctAnswer: 1,
      explanation:
        "The agentic loop consists of gathering context (reading files, searching), taking action (editing, running commands), and verifying results (checking tests, reviewing output).",
    },
    {
      id: "q2",
      type: "multiple-choice",
      question:
        "What is the relationship between Claude Code and the Claude model?",
      options: [
        "They are the same thing",
        "Claude Code is the harness that manages tool execution around the Claude model",
        "The Claude model is a plugin for Claude Code",
        "Claude Code replaces the Claude model",
      ],
      correctAnswer: 1,
      explanation:
        "Claude Code is the harness — it handles the loop, tool execution, permissions, and file I/O. The Claude model inside does the reasoning and decides what actions to take.",
    },
    {
      id: "q3",
      type: "true-false",
      question:
        "You must wait for Claude Code to finish its entire loop before you can intervene.",
      options: ["True", "False"],
      correctAnswer: 1,
      explanation:
        "You can interrupt Claude at any point by pressing Escape. You don't have to wait for it to finish — jump in whenever you want to steer it in a different direction.",
    },
    {
      id: "q4",
      type: "multiple-choice",
      question:
        "How do the three phases of the agentic loop typically work in practice?",
      options: [
        "They run strictly one after another in order",
        "They blend together — Claude chains many actions seamlessly",
        "Only one phase runs per session",
        "You must manually trigger each phase",
      ],
      correctAnswer: 1,
      explanation:
        "In practice, the phases blend together. Claude might read a file, edit it, run a test, read the error, and fix it — all in one continuous flow without waiting for you.",
    },
  ],
};
