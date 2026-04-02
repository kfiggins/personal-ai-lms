export default {
  id: "eu-10-delegate-dont-dictate",
  title: "Delegate, Don't Dictate",
  whyItMatters:
    "Micromanaging Claude Code wastes your time and limits its effectiveness. When you delegate like you would to a capable colleague, you get better results with less effort.",

  content: [
    {
      type: "text",
      body: "A common mistake with Claude Code is telling it exactly which files to open, which commands to run, and which lines to change. That's dictating — and it defeats the purpose of having an agentic assistant. Instead, delegate: describe what you want accomplished and let Claude figure out the how.",
    },
    {
      type: "example",
      title: "Example: Dictating vs. delegating",
      code: "# Dictating (too prescriptive):\n\"Open src/auth/login.js, go to line 42, change the if statement to check for null\"\n\n# Delegating (much better):\n\"Users can log in with empty passwords — fix the authentication validation\"",
      explanation:
        "The delegating approach tells Claude what's wrong and what outcome you want. Claude finds the right files, identifies the root cause, and applies the best fix — which might be different (and better) than what you would have prescribed.",
    },
    {
      type: "keyPoint",
      body: "Give context and direction, not step-by-step instructions. Trust Claude to choose which files to read, which commands to run, and how to structure the changes. You'll often be surprised that it finds a better approach than what you had in mind.",
    },
    {
      type: "tip",
      body: "Think of it like delegating to a smart new hire. You'd say \"We need to add rate limiting to the API — we're getting hammered by bots\" not \"Open file X, add line Y, then open file Z...\" Give the what and why, let them handle the how.",
    },
    {
      type: "inPractice",
      body: "Delegation works best when you combine it with specificity: describe the problem clearly, provide relevant context, mention constraints — but don't prescribe the implementation. The sweet spot is giving Claude enough information to make good decisions without micromanaging the process.",
    },
  ],

  quiz: [
    {
      id: "q1",
      type: "multiple-choice",
      question: "What's the difference between dictating and delegating to Claude Code?",
      options: [
        "There is no difference",
        "Dictating means prescribing exact steps; delegating means describing the goal and letting Claude figure out how",
        "Delegating is slower than dictating",
        "Dictating always produces better results",
      ],
      correctAnswer: 1,
      explanation:
        "Dictating prescribes exact steps (open this file, change this line). Delegating describes the outcome you want and lets Claude decide how to achieve it — which usually produces better results.",
    },
    {
      id: "q2",
      type: "true-false",
      question:
        "You should always tell Claude Code exactly which files to open and which lines to change.",
      options: ["True", "False"],
      correctAnswer: 1,
      explanation:
        "You should describe what you want accomplished and let Claude figure out which files to read and how to make the changes. Micromanaging limits Claude's effectiveness.",
    },
    {
      id: "q3",
      type: "multiple-choice",
      question:
        "What's the ideal balance when prompting Claude Code?",
      options: [
        "Give as little information as possible",
        "Prescribe every single step in detail",
        "Provide clear context and goals, but let Claude handle the implementation details",
        "Only use single-word prompts",
      ],
      correctAnswer: 2,
      explanation:
        "The sweet spot is providing enough context (the problem, constraints, desired outcome) for Claude to make good decisions, without micromanaging the implementation process.",
    },
  ],
};
