export default {
  id: "cfg-07-interactive-mode",
  title: "Interactive Mode",
  whyItMatters:
    "Knowing the keyboard shortcuts and input tricks in interactive mode makes your Claude Code sessions faster and more comfortable — especially for longer conversations.",

  content: [
    {
      type: "text",
      body: "Interactive mode is the default way you use Claude Code — you type prompts and Claude responds in a conversational loop. There are several keyboard shortcuts and input features that make this experience smoother, from multi-line input to vim keybindings.",
    },
    {
      type: "keyPoint",
      body: "For multi-line input, press **Shift+Enter** to add a new line, or end a line with a **backslash (\\\\)** to continue on the next line. This is essential for pasting code blocks or writing detailed prompts that span multiple lines.",
    },
    {
      type: "example",
      title: "Example: Useful keyboard shortcuts",
      code: "# Multi-line input\nShift+Enter  →  new line without sending\n\\             →  continue on next line (at end of line)\n\n# Navigation\nTab          →  autocomplete commands\n?            →  show all keyboard shortcuts\nCtrl+C       →  cancel current operation\n\n# Vim mode (if enabled)\n# Use vim keybindings for input editing",
      explanation:
        "These shortcuts help you work efficiently in interactive mode. Tab completion is especially useful for slash commands — start typing and press Tab to autocomplete.",
    },
    {
      type: "tip",
      body: "If you're a vim user, you can enable vim keybindings for the input line. Press ? at any time to see the complete list of keyboard shortcuts available in your current session.",
    },
  ],

  quiz: [
    {
      id: "q1",
      type: "multiple-choice",
      question: "How do you enter a new line without sending your message?",
      options: [
        "Press Enter twice",
        "Press Shift+Enter",
        "Press Ctrl+Enter",
        "Press Alt+Enter",
      ],
      correctAnswer: 1,
      explanation:
        "Shift+Enter adds a new line to your input without sending the message. You can also use a backslash at the end of a line.",
    },
    {
      id: "q2",
      type: "multiple-choice",
      question: "How do you see all available keyboard shortcuts?",
      options: [
        "Type /shortcuts",
        "Press ? at the prompt",
        "Press F1",
        "Type /keys",
      ],
      correctAnswer: 1,
      explanation:
        "Pressing ? at the prompt displays all available keyboard shortcuts for the current session.",
    },
    {
      id: "q3",
      type: "true-false",
      question: "Claude Code supports vim keybindings for input editing.",
      options: ["True", "False"],
      correctAnswer: 0,
      explanation:
        "Yes — vim mode is available in Claude Code for users who prefer vim-style keybindings when editing their input.",
    },
  ],
};
