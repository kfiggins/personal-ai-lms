export default {
  id: "mc-06-auto-memory",
  title: "Auto Memory",
  whyItMatters:
    "Auto memory lets Claude learn from your sessions over time — remembering your build commands, project patterns, and preferences so it doesn't ask the same questions twice.",

  content: [
    {
      type: "text",
      body: "As you work with Claude Code, it automatically saves learnings about your project and preferences. These memories are stored in `~/.claude/memory/` as a MEMORY.md file. At the start of each session, the first 200 lines (or 25KB) of this file are loaded automatically, giving Claude a head start on understanding your workflow.",
    },
    {
      type: "keyPoint",
      body: "Auto memory captures things like: **build commands** that work for your project, **project patterns** Claude discovers while reading your code, **your preferences** for how you like things done, and **corrections** you've made during sessions. It's like Claude keeping notes for its future self.",
    },
    {
      type: "example",
      title: "What auto memory might save",
      code: "# Example entries Claude might auto-save:\n\n- This project uses pnpm, not npm — run `pnpm test` for tests\n- User prefers single-line imports grouped by: external, internal, types\n- The Postgres connection requires SSL in production (DATABASE_SSL=true)\n- When fixing bugs, user wants to see the failing test first before the fix",
      explanation:
        "These are the kinds of learnings Claude picks up naturally during your sessions. They persist across conversations so Claude doesn't have to relearn them.",
    },
    {
      type: "inPractice",
      body: "Auto memory is most valuable in the first few weeks of using Claude Code on a project. It rapidly builds up knowledge about your workflows and preferences. Over time, you might want to promote important learnings into your CLAUDE.md for more reliable, structured persistence — auto memory has a size limit, so the most important rules belong in CLAUDE.md.",
    },
    {
      type: "tip",
      body: "You can enable or disable auto memory in your settings. If you're working on sensitive projects or prefer full control over what Claude remembers, you can turn it off and rely solely on CLAUDE.md for persistent context.",
    },
  ],

  quiz: [
    {
      id: "q1",
      type: "multiple-choice",
      question: "Where are auto memory entries stored?",
      options: [
        "In your project's CLAUDE.md",
        "In ~/.claude/memory/ as MEMORY.md",
        "In .claude/settings.json",
        "In the cloud, synced to your account",
      ],
      correctAnswer: 1,
      explanation:
        "Auto memory is stored locally in ~/.claude/memory/ as a MEMORY.md file. It's loaded at the start of each session.",
    },
    {
      id: "q2",
      type: "multiple-choice",
      question: "How much of the auto memory file is loaded at session start?",
      options: [
        "The entire file, regardless of size",
        "The first 200 lines or 25KB",
        "Only the last 50 entries",
        "A random sample of entries",
      ],
      correctAnswer: 1,
      explanation:
        "The first 200 lines or 25KB of the MEMORY.md file are loaded at session start. This limit ensures memory doesn't consume too much of the context window.",
    },
    {
      id: "q3",
      type: "true-false",
      question: "Auto memory can be disabled in settings.",
      options: ["True", "False"],
      correctAnswer: 0,
      explanation:
        "You can enable or disable auto memory in your Claude Code settings if you prefer full control over what Claude remembers.",
    },
    {
      id: "q4",
      type: "multiple-choice",
      question:
        "What's the relationship between auto memory and CLAUDE.md?",
      options: [
        "They are the same thing",
        "Auto memory replaces CLAUDE.md",
        "Auto memory captures learnings over time; CLAUDE.md is for deliberate, structured instructions",
        "CLAUDE.md is auto-generated from memory entries",
      ],
      correctAnswer: 2,
      explanation:
        "Auto memory captures learnings organically during sessions, while CLAUDE.md is where you deliberately write structured project instructions. Important learnings from auto memory should be promoted to CLAUDE.md.",
    },
  ],
};
