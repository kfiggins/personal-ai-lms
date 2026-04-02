export default {
  id: "plt-08-chrome-integration",
  title: "Chrome Integration",
  whyItMatters:
    "Connecting Claude Code to Chrome bridges the gap between your code and your web app. Claude can test pages, read console logs, fill forms, and extract data — making it a powerful tool for web development and debugging.",

  content: [
    {
      type: "text",
      body: "The Chrome integration connects Claude Code to your Chrome browser, letting Claude interact with web pages directly. Enable it with `claude --chrome` and Claude can navigate pages, read console output, fill forms, and extract data. It's especially useful for testing web apps and debugging frontend issues.",
    },
    {
      type: "keyPoint",
      body: "With Chrome integration, Claude can: **test web apps** by navigating and interacting with pages, **debug with console logs** by reading browser output, **automate form filling** and data extraction, and **verify visual changes** after modifying frontend code.",
    },
    {
      type: "example",
      title: "Chrome integration in action",
      code: "# Start Claude Code with Chrome integration\nclaude --chrome\n\n# Example prompts:\n\"Open localhost:3000 and check if the login form works\"\n\n\"Fill out the registration form with test data\n and tell me if there are any console errors\"\n\n\"Extract the table data from the admin dashboard\n and save it as JSON\"",
      explanation:
        "Claude connects to Chrome and can interact with web pages just like a user would — clicking, typing, reading content, and checking the console. This closes the feedback loop between code changes and browser behavior.",
    },
    {
      type: "inPractice",
      body: "Chrome integration is a game-changer for frontend development. Instead of switching between your editor and browser to test changes, Claude can make the code change and immediately verify it works in the browser. It can spot console errors, check responsive layouts, and validate form behavior automatically.",
    },
    {
      type: "tip",
      body: "Combine Chrome integration with Claude's coding abilities for end-to-end workflows: ask Claude to fix a bug, then verify the fix works in the browser — all in one conversation.",
    },
  ],

  quiz: [
    {
      id: "q1",
      type: "multiple-choice",
      question:
        "How do you enable the Chrome integration?",
      options: [
        "Install a Chrome extension",
        "Run `claude --chrome`",
        "Enable it in VS Code settings",
        "It's always on by default",
      ],
      correctAnswer: 1,
      explanation:
        "Enable the Chrome integration by starting Claude Code with the `--chrome` flag: `claude --chrome`.",
    },
    {
      id: "q2",
      type: "multiple-choice",
      question:
        "What can Claude do with Chrome integration?",
      options: [
        "Only read web page text",
        "Test web apps, read console logs, fill forms, and extract data",
        "Only take screenshots",
        "Only run JavaScript in the console",
      ],
      correctAnswer: 1,
      explanation:
        "Chrome integration lets Claude interact with web pages fully — navigating, clicking, typing, reading console output, filling forms, and extracting data from pages.",
    },
    {
      id: "q3",
      type: "multiple-choice",
      question:
        "Why is Chrome integration useful for frontend development?",
      options: [
        "It makes the browser render faster",
        "It lets Claude verify code changes directly in the browser",
        "It replaces the need for CSS",
        "It automatically deploys to production",
      ],
      correctAnswer: 1,
      explanation:
        "Chrome integration closes the feedback loop. Claude can make a code change and immediately verify it works in the browser — checking for console errors, layout issues, and correct behavior.",
    },
  ],
};
