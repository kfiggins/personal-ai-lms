export default {
  id: "plt-10-computer-use",
  title: "Computer Use",
  whyItMatters:
    "Computer use lets Claude see your screen and interact with GUI applications — opening apps, clicking buttons, typing text. It extends Claude's capabilities beyond code files to anything you can do on your desktop.",

  content: [
    {
      type: "text",
      body: "Computer use gives Claude the ability to see your screen and interact with graphical applications. Claude can open apps, click buttons, type into fields, and read what's on screen. Currently available on macOS, this feature is great for testing native apps, automating GUI workflows, and visual debugging.",
    },
    {
      type: "keyPoint",
      body: "Claude can **see your screen**, **open applications**, **click buttons and menus**, **type text into fields**, and **read on-screen content**. This bridges the gap between code and the visual applications that code produces. Currently macOS only.",
    },
    {
      type: "example",
      title: "Computer use scenarios",
      code: "# Testing a native app:\n\"Open the app, navigate to Settings,\n and verify the new theme option appears\"\n\n# Visual debugging:\n\"Take a screenshot of the dashboard page\n and tell me if the chart is rendering correctly\"\n\n# GUI automation:\n\"Open Figma, export the icon assets\n from the design file, and save them\n to the assets directory\"",
      explanation:
        "Computer use is ideal for tasks that require visual verification or interaction with GUI applications. Claude can do what you'd normally do manually — click through an app, verify something looks right, or automate repetitive GUI tasks.",
    },
    {
      type: "inPractice",
      body: "Computer use is particularly valuable for testing native desktop apps, verifying visual changes in UI frameworks, and automating repetitive GUI tasks. For example, after making a CSS change, Claude can open the browser, navigate to the page, and confirm the layout looks correct — all without you touching the mouse.",
    },
    {
      type: "warning",
      body: "Computer use is currently only available on macOS. Claude interacts with your actual screen, so be mindful of any sensitive information visible during a computer use session.",
    },
  ],

  quiz: [
    {
      id: "q1",
      type: "multiple-choice",
      question:
        "What does computer use allow Claude to do?",
      options: [
        "Run code faster",
        "See the screen and interact with GUI applications",
        "Access remote servers",
        "Use more memory",
      ],
      correctAnswer: 1,
      explanation:
        "Computer use lets Claude see your screen and interact with graphical applications — opening apps, clicking buttons, typing text, and reading on-screen content.",
    },
    {
      id: "q2",
      type: "multiple-choice",
      question:
        "On which operating system is computer use currently available?",
      options: [
        "Windows only",
        "Linux only",
        "macOS only",
        "All operating systems",
      ],
      correctAnswer: 2,
      explanation:
        "Computer use is currently available on macOS only.",
    },
    {
      id: "q3",
      type: "multiple-choice",
      question:
        "Which is a good use case for computer use?",
      options: [
        "Editing text files",
        "Running unit tests",
        "Testing native apps and verifying visual changes",
        "Writing documentation",
      ],
      correctAnswer: 2,
      explanation:
        "Computer use excels at tasks requiring visual verification or GUI interaction — testing native apps, verifying UI changes, and automating GUI workflows. For text files and tests, the standard tools are better suited.",
    },
  ],
};
