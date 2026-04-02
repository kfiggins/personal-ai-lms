export default {
  id: "eu-07-be-specific-upfront",
  title: "Be Specific Upfront",
  whyItMatters:
    "The quality of Claude Code's output is directly tied to the quality of your input. Specific prompts get you to the right answer faster with fewer back-and-forth iterations.",

  content: [
    {
      type: "text",
      body: "Vague prompts work — Claude Code is smart enough to figure out what you mean most of the time. But specific prompts work dramatically better. When you reference specific files, mention constraints, and point to patterns you want followed, Claude spends less time exploring and more time executing.",
    },
    {
      type: "example",
      title: "Example: Vague vs. specific prompts",
      code: "# Vague (works but slower):\n\"fix the checkout bug\"\n\n# Specific (much faster):\n\"The checkout flow is broken for users with expired cards. Check src/payments/ — the error happens when processing the card status.\"",
      explanation:
        "The specific prompt tells Claude exactly where to look and what the issue is. It can jump straight to src/payments/ instead of searching the entire codebase for checkout-related code.",
    },
    {
      type: "keyPoint",
      body: "Three things to include for better results: (1) reference specific files or directories, (2) mention constraints or requirements, and (3) point to existing patterns you want followed. This upfront investment pays off in faster, more accurate results.",
    },
    {
      type: "tip",
      body: "You don't need to be exhaustive — just specific. \"Add validation to the signup form in src/components/SignupForm.tsx — email should be required and password needs at least 8 characters\" is perfect. You gave the file, the task, and the requirements.",
    },
    {
      type: "inPractice",
      body: "Think about what information a capable colleague would need to do the task. You wouldn't just say \"fix the bug\" to a teammate — you'd say which bug, where it happens, and any relevant context. Give Claude the same courtesy and you'll get better results.",
    },
  ],

  quiz: [
    {
      id: "q1",
      type: "multiple-choice",
      question: "Which prompt will likely get the best results from Claude Code?",
      options: [
        "\"Fix the bug\"",
        "\"Something is wrong with the app\"",
        "\"The checkout flow breaks for expired cards — check src/payments/processor.js\"",
        "\"Make the code better\"",
      ],
      correctAnswer: 2,
      explanation:
        "Specific prompts with file paths, descriptions of the issue, and relevant context let Claude jump straight to the problem instead of searching the entire codebase.",
    },
    {
      id: "q2",
      type: "multiple-choice",
      question:
        "What three things should you include for better Claude Code results?",
      options: [
        "File paths, programming language, and your name",
        "Specific files, constraints/requirements, and patterns to follow",
        "The git branch, commit hash, and author",
        "The operating system, terminal type, and shell",
      ],
      correctAnswer: 1,
      explanation:
        "Reference specific files or directories, mention constraints or requirements, and point to existing patterns you want followed. These three elements dramatically improve Claude's output.",
    },
    {
      id: "q3",
      type: "true-false",
      question:
        "Vague prompts never work with Claude Code — you must always be extremely detailed.",
      options: ["True", "False"],
      correctAnswer: 1,
      explanation:
        "Vague prompts do work — Claude is smart enough to figure things out. But specific prompts work much faster and produce better results. You don't need to be exhaustive, just specific about the key details.",
    },
    {
      id: "q4",
      type: "multiple-choice",
      question: "What's a good mental model for writing Claude Code prompts?",
      options: [
        "Write like you're talking to a search engine",
        "Write like you're delegating to a capable colleague — give the context they'd need",
        "Write as little as possible to save tokens",
        "Write full technical specifications with UML diagrams",
      ],
      correctAnswer: 1,
      explanation:
        "Think about what a capable colleague would need to complete the task. You'd tell them which bug, where it happens, and relevant context — do the same for Claude Code.",
    },
  ],
};
