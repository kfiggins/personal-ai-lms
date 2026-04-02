export default {
  id: "cfg-12-output-styles",
  title: "Output Styles",
  whyItMatters:
    "Output styles let you adapt Claude Code for tasks beyond software engineering — like writing, analysis, and content creation — by customizing how Claude formats its responses.",

  content: [
    {
      type: "text",
      body: "While Claude Code is built for software engineering, it's also a powerful general-purpose tool. Output styles let you customize how Claude formats its responses, making it suitable for writing prose, analyzing data, creating documentation, and other non-coding tasks.",
    },
    {
      type: "example",
      title: "Example: Custom output formatting",
      code: "# Use --append-system-prompt for custom output styles\nclaude --append-system-prompt \"Format all responses as bullet points. Be concise.\"\n\n# For writing tasks\nclaude --append-system-prompt \"Write in a professional but conversational tone. Use short paragraphs.\"\n\n# For analysis tasks\nclaude --append-system-prompt \"Present findings in a structured format with headers and key takeaways.\"",
      explanation:
        "The --append-system-prompt flag lets you customize Claude's output format for different types of work. This is especially useful for non-coding tasks where the default developer-focused formatting isn't ideal.",
    },
    {
      type: "keyPoint",
      body: "You can adapt Claude Code for many non-software tasks: **writing** (blog posts, documentation, emails), **analysis** (data interpretation, report summaries), **research** (gathering information from files and organizing findings), and **content creation** (templates, outlines, proposals). The key is giving clear formatting instructions.",
    },
    {
      type: "tip",
      body: "For recurring non-coding workflows, save your output style instructions in a CLAUDE.md file or a custom slash command. That way you don't have to re-type your formatting preferences every session.",
    },
  ],

  quiz: [
    {
      id: "q1",
      type: "multiple-choice",
      question: "What flag lets you customize Claude's output formatting?",
      options: [
        "--format",
        "--style",
        "--append-system-prompt",
        "--output-mode",
      ],
      correctAnswer: 2,
      explanation:
        "The --append-system-prompt flag adds custom instructions to Claude's system prompt, including formatting and style guidelines.",
    },
    {
      id: "q2",
      type: "true-false",
      question:
        "Claude Code can only be used for software engineering tasks.",
      options: ["True", "False"],
      correctAnswer: 1,
      explanation:
        "While Claude Code is optimized for software engineering, it can be adapted for writing, analysis, research, and other tasks using output styles and custom prompts.",
    },
    {
      id: "q3",
      type: "multiple-choice",
      question:
        "Where can you save output style instructions for reuse across sessions?",
      options: [
        "Only in CLI flags each time you launch",
        "In a CLAUDE.md file or a custom slash command",
        "They can't be saved — you must re-type them",
        "In your browser bookmarks",
      ],
      correctAnswer: 1,
      explanation:
        "You can save formatting instructions in a CLAUDE.md file or create a custom slash command so you don't have to re-type them every session.",
    },
  ],
};
