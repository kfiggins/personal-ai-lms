export default {
  id: "adv-01-advanced-prompting",
  title: "Advanced Prompting",
  whyItMatters:
    "Even experienced Claude Code users fall into common prompting traps. Learning to recognize and avoid these patterns — while building reliable feedback loops — separates productive sessions from frustrating ones.",

  content: [
    {
      type: "text",
      body: "There are several common failure patterns that even power users fall into. Recognizing them is the first step to more effective Claude Code usage:\n\n- **Kitchen sink sessions**: Cramming too many unrelated tasks into a single conversation. Each topic dilutes context and increases the chance of confusion. Start fresh sessions for distinct tasks.\n- **Over-correcting**: Reacting to one mistake by adding excessive constraints. If Claude indents with spaces instead of tabs, don't rewrite your entire CLAUDE.md — just mention the preference once.\n- **Over-specified CLAUDE.md**: Filling your CLAUDE.md with dozens of micro-rules. Claude works best with clear principles, not a wall of instructions. Keep it focused on what actually matters.",
    },
    {
      type: "keyPoint",
      body: "The trust-then-verify gap is the most important concept in advanced prompting. Always give Claude a way to check its own work. Instead of just asking Claude to make a change, ask it to make the change *and then* run the tests, check the types, or verify the output. Self-verification catches mistakes before you even see them.",
    },
    {
      type: "text",
      body: "Course-correction is a skill worth developing. When you see Claude heading in the wrong direction:\n\n- **Press Esc** to stop generation immediately — don't wait for it to finish\n- **Rewind** to a previous checkpoint if things went off track\n- **Undo** specific changes you don't want\n- **Clear context** with `/clear` if the conversation is too polluted\n\nThe earlier you course-correct, the less time and tokens you waste. Watching Claude generate three paragraphs of wrong code when you could have stopped it after the first line is a common beginner mistake.",
    },
    {
      type: "inPractice",
      body: "Developing your intuition takes time. After a few weeks of regular use, you'll start to predict what Claude will do with a given prompt. You'll know when to be more specific, when to let Claude explore, and when to break a task into smaller pieces. Pay attention to what works and what doesn't — the patterns will emerge.",
    },
  ],

  quiz: [
    {
      id: "q1",
      type: "multiple-choice",
      question:
        "What is the 'kitchen sink session' anti-pattern?",
      options: [
        "Using too many tools in one command",
        "Cramming too many unrelated tasks into a single conversation",
        "Having too many files open at once",
        "Running too many tests simultaneously",
      ],
      correctAnswer: 1,
      explanation:
        "Kitchen sink sessions happen when you pile unrelated tasks into one conversation, diluting context and increasing confusion. Start fresh sessions for distinct tasks.",
    },
    {
      id: "q2",
      type: "multiple-choice",
      question:
        "What does the 'trust-then-verify' principle mean?",
      options: [
        "Always review Claude's code manually before committing",
        "Trust Claude completely and skip verification",
        "Give Claude a way to check its own work (run tests, check types, etc.)",
        "Verify Claude's identity before each session",
      ],
      correctAnswer: 2,
      explanation:
        "Trust-then-verify means including self-verification in your prompts — ask Claude to make the change AND run the tests or check the output. This catches mistakes before you see them.",
    },
    {
      id: "q3",
      type: "multiple-choice",
      question: "What should you do when Claude starts heading in the wrong direction?",
      options: [
        "Wait for it to finish and then ask for corrections",
        "Close the terminal and start over",
        "Press Esc to stop immediately and course-correct early",
        "Add more rules to CLAUDE.md",
      ],
      correctAnswer: 2,
      explanation:
        "Press Esc to stop generation immediately. The earlier you course-correct, the less time and tokens you waste. You can rewind, undo, or clear context as needed.",
    },
    {
      id: "q4",
      type: "multiple-choice",
      question: "What is wrong with an over-specified CLAUDE.md?",
      options: [
        "It uses too much disk space",
        "It slows down Claude's startup time",
        "Too many micro-rules dilute focus — Claude works best with clear principles",
        "It conflicts with project settings",
      ],
      correctAnswer: 2,
      explanation:
        "An over-specified CLAUDE.md filled with dozens of micro-rules makes it harder for Claude to prioritize what matters. Keep it focused on clear principles rather than a wall of instructions.",
    },
  ],
};
