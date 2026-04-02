export default {
  id: "cc-07-web-tools",
  title: "Web Tools",
  whyItMatters:
    "Web tools let Claude look things up for you — documentation, error messages, and API references — without leaving your terminal.",

  content: [
    {
      type: "text",
      body: "Sometimes Claude needs information that isn't in your codebase. Web tools let it search the internet and fetch web pages to find documentation, look up error messages, check API references, or find examples. This means Claude can help with libraries and frameworks it hasn't seen in your project before.",
    },
    {
      type: "keyPoint",
      body: "There are two web tools: WebSearch finds relevant pages by query (like searching Google), and WebFetch retrieves the content of a specific URL. Claude uses these when it encounters an unfamiliar error, needs to check a library's docs, or wants to verify current best practices.",
    },
    {
      type: "example",
      title: "Using web tools for debugging",
      code: "# You say:\nclaude \"I'm getting a CORS error when calling the API from localhost\"\n\n# Claude might:\n# 1. Read your code to understand the setup\n# 2. WebSearch: \"CORS error localhost fetch API solution\"\n# 3. WebFetch: the relevant documentation page\n# 4. Apply the fix based on what it learned",
      explanation:
        "Claude combines local code reading with web research to find and apply the right solution. It doesn't just guess — it looks up current documentation.",
    },
    {
      type: "inPractice",
      body: "You can explicitly ask Claude to look something up: \"check the React docs for how useEffect cleanup works\" or \"search for the latest Next.js migration guide.\" Claude will fetch the information and use it to help you. This is especially useful for new APIs or recently changed libraries.",
    },
  ],

  quiz: [
    {
      id: "q1",
      type: "multiple-choice",
      question: "What do web tools allow Claude Code to do?",
      options: [
        "Deploy your app to the web",
        "Search the internet and fetch web pages for reference",
        "Create websites automatically",
        "Monitor your production servers",
      ],
      correctAnswer: 1,
      explanation:
        "Web tools let Claude search the internet and fetch web pages to find documentation, look up error messages, and check API references.",
    },
    {
      id: "q2",
      type: "multiple-choice",
      question: "When might Claude use web tools?",
      options: [
        "Only when you explicitly ask it to search",
        "When it encounters an unfamiliar error or needs to check documentation",
        "Every time it edits a file",
        "Only when offline",
      ],
      correctAnswer: 1,
      explanation:
        "Claude uses web tools when it encounters unfamiliar errors, needs to check library documentation, or wants to verify best practices. You can also ask it to search explicitly.",
    },
    {
      id: "q3",
      type: "multiple-choice",
      question: "What is the difference between WebSearch and WebFetch?",
      options: [
        "WebSearch finds pages by query; WebFetch retrieves content from a specific URL",
        "WebSearch is faster; WebFetch is more accurate",
        "WebSearch works offline; WebFetch requires internet",
        "There is no difference",
      ],
      correctAnswer: 0,
      explanation:
        "WebSearch finds relevant pages by query (like a search engine), while WebFetch retrieves the actual content from a specific URL you or Claude already knows about.",
    },
  ],
};
