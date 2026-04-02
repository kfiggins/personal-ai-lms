export default {
  id: "cfg-09-terminal-optimization",
  title: "Terminal Optimization",
  whyItMatters:
    "Your terminal emulator, font, and shell configuration directly affect how well Claude Code renders output and how smooth your experience feels — a few tweaks can make a big difference.",

  content: [
    {
      type: "text",
      body: "Claude Code runs in your terminal, so the quality of your terminal setup matters. Some terminal emulators handle Claude Code's output better than others, and the right font and shell configuration can prevent rendering issues and improve readability.",
    },
    {
      type: "keyPoint",
      body: "Recommended terminal emulators include **iTerm2** (macOS), **Ghostty**, **WezTerm**, and **Windows Terminal**. These handle Claude Code's rich output well, including progress indicators and formatted code. The default macOS Terminal.app works but may have rendering quirks with some features.",
    },
    {
      type: "example",
      title: "Tips for a smooth experience",
      code: "# Use a monospace font with good Unicode support\n# Recommended: JetBrains Mono, Fira Code, or Cascadia Code\n\n# Ensure your terminal supports 256 colors or true color\n# Most modern terminals do by default\n\n# If you see rendering issues, try:\n# - Increasing terminal width (120+ columns recommended)\n# - Using a simpler prompt (PS1) if output gets garbled\n# - Disabling shell integrations that conflict with Claude's output",
      explanation:
        "A good monospace font with Unicode support ensures code and special characters render correctly. A wider terminal gives Claude more room for code output and diffs.",
    },
    {
      type: "tip",
      body: "If you notice visual glitches or slow output, try a different terminal emulator before troubleshooting other settings. The terminal is often the root cause of display issues.",
    },
  ],

  quiz: [
    {
      id: "q1",
      type: "multiple-choice",
      question:
        "Which of these is a recommended terminal emulator for Claude Code on macOS?",
      options: ["Notepad", "iTerm2", "Microsoft Word", "Calculator"],
      correctAnswer: 1,
      explanation:
        "iTerm2 is a top recommendation for Claude Code on macOS, with excellent rendering support for rich terminal output.",
    },
    {
      id: "q2",
      type: "true-false",
      question:
        "The default macOS Terminal.app works perfectly with all Claude Code features.",
      options: ["True", "False"],
      correctAnswer: 1,
      explanation:
        "While Terminal.app works, it may have rendering quirks with some Claude Code features. Terminals like iTerm2 or Ghostty provide a smoother experience.",
    },
    {
      id: "q3",
      type: "multiple-choice",
      question:
        "What's the first thing to try if you see visual glitches in Claude Code?",
      options: [
        "Reinstall Claude Code",
        "Try a different terminal emulator",
        "Reboot your computer",
        "Clear your shell history",
      ],
      correctAnswer: 1,
      explanation:
        "The terminal emulator is often the root cause of display issues. Trying a different one is the quickest way to determine if your terminal is the problem.",
    },
  ],
};
