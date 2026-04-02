export default {
  id: "cfg-10-keybindings",
  title: "Keybindings",
  whyItMatters:
    "Custom keybindings let you adapt Claude Code's keyboard shortcuts to match your muscle memory — so you spend less time thinking about keys and more time building.",

  content: [
    {
      type: "text",
      body: "Claude Code lets you customize keyboard shortcuts by editing ~/.claude/keybindings.json. You can override the default bindings or add entirely new ones, including chord bindings (multi-key sequences) for less common actions.",
    },
    {
      type: "example",
      title: "Example: Custom keybindings file",
      code: '// ~/.claude/keybindings.json\n[\n  {\n    "key": "ctrl+s",\n    "command": "submit",\n    "description": "Submit the current prompt"\n  },\n  {\n    "key": "ctrl+k ctrl+c",\n    "command": "clear",\n    "description": "Chord binding: Ctrl+K then Ctrl+C to clear"\n  }\n]',
      explanation:
        "Each keybinding maps a key combination to a command. Chord bindings use two key presses in sequence — press Ctrl+K, release, then press Ctrl+C. This is great for less frequently used commands.",
    },
    {
      type: "keyPoint",
      body: "Chord bindings let you create multi-key sequences, similar to VS Code's keybinding system. The first key press starts the chord, and the second completes the action. This gives you many more possible shortcuts without conflicting with existing single-key bindings.",
    },
    {
      type: "tip",
      body: "Start by overriding just the shortcuts that clash with your terminal or habits. You don't need to customize everything — the defaults are designed to work well out of the box.",
    },
  ],

  quiz: [
    {
      id: "q1",
      type: "multiple-choice",
      question: "Where are custom keybindings configured?",
      options: [
        "~/.claude/settings.json",
        "~/.claude/keybindings.json",
        ".claude/keybindings.json",
        "~/.config/claude/keys.json",
      ],
      correctAnswer: 1,
      explanation:
        "Custom keybindings are configured in ~/.claude/keybindings.json in your home directory.",
    },
    {
      id: "q2",
      type: "multiple-choice",
      question: "What is a chord binding?",
      options: [
        "A binding that plays a sound",
        "A multi-key sequence where you press keys in order",
        "A binding that only works with the Shift key",
        "A binding for musical notation input",
      ],
      correctAnswer: 1,
      explanation:
        "A chord binding is a multi-key sequence — you press the first key combination, release, then press the second to complete the action.",
    },
    {
      id: "q3",
      type: "true-false",
      question: "You must customize all keybindings to use Claude Code effectively.",
      options: ["True", "False"],
      correctAnswer: 1,
      explanation:
        "The default keybindings work well out of the box. Customization is optional — only override the shortcuts that conflict with your workflow.",
    },
  ],
};
