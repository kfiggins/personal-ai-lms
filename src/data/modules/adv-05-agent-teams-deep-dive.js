export default {
  id: "adv-05-agent-teams-deep-dive",
  title: "Agent Teams Deep Dive",
  whyItMatters:
    "Agent teams let you orchestrate multiple Claude Code sessions that communicate and coordinate with each other. For large, parallelizable tasks, this is the difference between a serial slog and a highly efficient parallel workflow.",

  content: [
    {
      type: "text",
      body: "Agent teams go beyond simple parallel sessions. Instead of running independent Claude instances that don't know about each other, agent teams provide a coordination layer where sessions can share tasks, exchange messages, and work toward a common goal.\n\nEnable agent teams with:\n```\nclaude --agent-teams\n```\n\nThis starts Claude in team mode, where it can spawn and coordinate with other agents.",
    },
    {
      type: "keyPoint",
      body: "The lead agent pattern is central to how agent teams work. One agent acts as the coordinator — it breaks down the overall task, assigns subtasks to worker agents, and synthesizes their results. The lead agent sees the big picture while workers focus on specific pieces.",
    },
    {
      type: "text",
      body: "Agent teams support shared tasks and inter-agent messaging:\n\n- **Shared tasks**: The lead agent creates a task list that all agents can see and claim. As agents complete tasks, the status updates are visible to the whole team.\n- **Inter-agent messaging**: Agents can send messages to each other for coordination. A worker agent can notify the lead when it's done, ask for clarification, or flag a blocking issue.\n- **Result synthesis**: The lead agent collects outputs from all workers and combines them into a coherent result.",
    },
    {
      type: "inPractice",
      body: "Agent teams are best for large, parallelizable tasks: migrating a codebase from one framework to another, implementing a feature that spans many files, or running a comprehensive review across multiple services. For smaller tasks, simple parallel sessions or subagents are usually sufficient and have less coordination overhead.",
    },
    {
      type: "tip",
      body: "Think of agent teams like a development team standup. The lead agent is the tech lead who assigns work and keeps things on track. Worker agents are developers who focus on their assigned tasks and report back. The value comes from coordination, not just parallelism.",
    },
  ],

  quiz: [
    {
      id: "q1",
      type: "multiple-choice",
      question: "How do you enable agent teams mode?",
      options: [
        "claude --parallel",
        "claude --agent-teams",
        "claude --multi-agent",
        "claude --team-mode",
      ],
      correctAnswer: 1,
      explanation:
        "Use `claude --agent-teams` to start Claude in team mode, enabling it to spawn and coordinate with other agents.",
    },
    {
      id: "q2",
      type: "multiple-choice",
      question: "What role does the lead agent play in an agent team?",
      options: [
        "It runs the fastest and does the most work",
        "It handles all the git operations",
        "It coordinates by breaking down tasks, assigning work, and synthesizing results",
        "It provides the context window for all other agents",
      ],
      correctAnswer: 2,
      explanation:
        "The lead agent is the coordinator — it breaks down the overall task, assigns subtasks to worker agents, and synthesizes their results into a coherent output.",
    },
    {
      id: "q3",
      type: "multiple-choice",
      question: "What types of tasks are agent teams best suited for?",
      options: [
        "Quick one-file bug fixes",
        "Large, parallelizable tasks like codebase migrations",
        "Interactive pair programming sessions",
        "Reading and summarizing documentation",
      ],
      correctAnswer: 1,
      explanation:
        "Agent teams shine for large, parallelizable tasks like codebase migrations, multi-file features, or cross-service reviews. Smaller tasks don't benefit from the coordination overhead.",
    },
    {
      id: "q4",
      type: "multiple-choice",
      question: "How do agents in a team communicate?",
      options: [
        "Through shared files in the repository",
        "Via shared tasks and inter-agent messaging",
        "Through a central database",
        "They don't — each agent works independently",
      ],
      correctAnswer: 1,
      explanation:
        "Agent teams support shared task lists that all agents can see and claim, plus inter-agent messaging for coordination, clarification, and status updates.",
    },
  ],
};
