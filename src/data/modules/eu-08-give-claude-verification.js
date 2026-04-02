export default {
  id: "eu-08-give-claude-verification",
  title: "Give Claude Verification",
  whyItMatters:
    "When Claude can verify its own work, it catches mistakes before you have to. Providing test cases and expected outputs turns Claude into a self-correcting system.",

  content: [
    {
      type: "text",
      body: "One of the most powerful things you can do is give Claude Code a way to check its own work. Include test cases, expected outputs, or screenshots so Claude can verify that what it built actually works. This turns the agentic loop into a self-correcting cycle.",
    },
    {
      type: "example",
      title: "Example: Providing test cases",
      code: "claude \"Implement a validateEmail function. Test cases:\n- user@example.com → true\n- invalid-email → false\n- user@.com → false\n- a@b.co → true\"",
      explanation:
        "Claude implements the function, then tests it against each case you provided. If any fail, it fixes the implementation and re-checks — all without you needing to intervene.",
    },
    {
      type: "keyPoint",
      body: "Verification comes in many forms: test cases for logic, screenshots for visual work, expected API responses for backend code, or even just describing what the correct behavior looks like. The key is giving Claude a concrete way to know when it's done.",
    },
    {
      type: "tip",
      body: "For visual work, paste or drag a screenshot or design mockup into the prompt. Claude can compare its output against the visual reference and iterate until it matches. This is especially useful for CSS and layout work.",
    },
    {
      type: "inPractice",
      body: "Think of verification as defining \"done.\" Instead of hoping Claude's output is correct, you're giving it a checklist. The result is higher quality code that's already been tested against your requirements before you even review it.",
    },
  ],

  quiz: [
    {
      id: "q1",
      type: "multiple-choice",
      question: "Why should you give Claude Code verification criteria?",
      options: [
        "It's required — Claude won't work without them",
        "So Claude can check its own work and self-correct before you review",
        "To slow Claude down so it's more careful",
        "Only to make the prompt longer",
      ],
      correctAnswer: 1,
      explanation:
        "Verification criteria let Claude check its own work during the agentic loop. If something doesn't match, it fixes it automatically — giving you higher quality results.",
    },
    {
      id: "q2",
      type: "multiple-choice",
      question: "Which of these is a valid form of verification for Claude Code?",
      options: [
        "Test cases with expected outputs",
        "Screenshots or design mockups",
        "Descriptions of expected behavior",
        "All of the above",
      ],
      correctAnswer: 3,
      explanation:
        "Verification can take many forms: test cases, screenshots, expected API responses, or behavioral descriptions. Any concrete way for Claude to know when it's done counts.",
    },
    {
      id: "q3",
      type: "true-false",
      question:
        "Claude Code can compare its visual output against a screenshot you provide.",
      options: ["True", "False"],
      correctAnswer: 0,
      explanation:
        "You can paste or drag screenshots and design mockups into Claude Code. It uses these as visual references and can iterate on its output until it matches the design.",
    },
  ],
};
