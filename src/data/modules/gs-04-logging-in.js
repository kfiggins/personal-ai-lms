export default {
  id: "gs-04-logging-in",
  title: "Logging In",
  whyItMatters:
    "You need to authenticate before Claude Code can do anything — understanding your account options makes setup smooth.",

  content: [
    {
      type: "text",
      body: "Claude Code supports several account types: Claude Pro, Claude Max, Claude Teams, Claude Enterprise, and Anthropic Console accounts. You can also connect through cloud providers like Amazon Bedrock or Google Vertex AI.",
    },
    {
      type: "keyPoint",
      body: "The first time you run `claude`, it will automatically open your browser to log in. After that, your credentials are stored securely and you won't need to log in again unless they expire.",
    },
    {
      type: "text",
      body: "You can manage your authentication at any time using built-in commands:\n\n• `/login` — Switch accounts or re-authenticate\n• `/logout` — Sign out of your current session\n\nCredentials are stored securely using your operating system's native keychain — macOS Keychain on Mac, and an encrypted file on Linux.",
    },
    {
      type: "inPractice",
      body: "Most users log in once and forget about it. If you work with multiple accounts (for example, a personal Claude Pro and a work Teams account), use `/login` to switch between them.",
    },
  ],

  quiz: [
    {
      id: "q1",
      type: "multiple-choice",
      question: "What happens the first time you run `claude`?",
      options: [
        "It shows an error asking for an API key",
        "It opens your browser to log in",
        "It asks you to create a new account in the terminal",
        "It runs in offline mode",
      ],
      correctAnswer: 1,
      explanation:
        "The first time you run Claude Code, it automatically opens your browser so you can log in with your Anthropic account.",
    },
    {
      id: "q2",
      type: "multiple-choice",
      question: "Where are Claude Code credentials stored on macOS?",
      options: [
        "In a plain text file",
        "In an environment variable",
        "In the macOS Keychain",
        "In the browser cookies",
      ],
      correctAnswer: 2,
      explanation:
        "On macOS, credentials are stored securely in the native Keychain. On Linux, they're stored in an encrypted file.",
    },
    {
      id: "q3",
      type: "multiple-choice",
      question: "Which command lets you switch to a different account?",
      options: ["/switch", "/login", "/auth", "/account"],
      correctAnswer: 1,
      explanation:
        "The `/login` command lets you re-authenticate or switch to a different account. Use `/logout` to sign out entirely.",
    },
  ],
};
