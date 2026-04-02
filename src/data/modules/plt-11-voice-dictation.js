export default {
  id: "plt-11-voice-dictation",
  title: "Voice Dictation",
  whyItMatters:
    "Voice dictation lets you speak your prompts instead of typing them. It's faster for long descriptions, great when you're away from the keyboard, and makes Claude Code accessible in more situations.",

  content: [
    {
      type: "text",
      body: "Voice dictation adds push-to-talk voice input to Claude Code. Instead of typing out a long prompt, you can hold a key and speak. Your speech is transcribed and sent as a message. It's especially useful for describing complex tasks, dictating longer instructions, or when your hands are busy.",
    },
    {
      type: "keyPoint",
      body: "Voice dictation uses **push-to-talk** — hold the key to speak, release to send. It's great for **longer descriptions** that would be tedious to type, and for working **away from the keyboard** when you want to give Claude instructions without sitting down.",
    },
    {
      type: "example",
      title: "Voice dictation use cases",
      code: "# Instead of typing a long prompt:\n# Hold the push-to-talk key and say:\n\n\"I need you to refactor the authentication module.\nThe current implementation uses session tokens stored\nin cookies, but we need to switch to JWT tokens\nstored in HTTP-only cookies. Make sure to update\nthe middleware, the login endpoint, the logout\nendpoint, and all the tests.\"\n\n# Much faster than typing all that out!",
      explanation:
        "Voice dictation shines when you need to convey a lot of context. Speaking is typically 3-4x faster than typing, and you can describe complex requirements more naturally.",
    },
    {
      type: "inPractice",
      body: "Developers use voice dictation when explaining complex bugs, describing architecture changes, or dictating code review feedback. It's also useful during pair programming sessions or when you're standing at a whiteboard and want to give Claude a task without going back to the keyboard.",
    },
    {
      type: "tip",
      body: "Speak clearly and use natural language — Claude handles conversational speech well. You don't need to use special commands or format your speech differently from how you'd type.",
    },
  ],

  quiz: [
    {
      id: "q1",
      type: "multiple-choice",
      question:
        "How does voice dictation work in Claude Code?",
      options: [
        "Always-on voice listening",
        "Push-to-talk — hold a key to speak",
        "Voice activation with a wake word",
        "Automatic transcription of all audio",
      ],
      correctAnswer: 1,
      explanation:
        "Voice dictation uses push-to-talk. Hold the designated key to speak, and release to send your message. It's not always-on listening.",
    },
    {
      id: "q2",
      type: "multiple-choice",
      question:
        "When is voice dictation most useful?",
      options: [
        "For single-word commands",
        "For longer descriptions and complex instructions",
        "Only for code review",
        "Only when the keyboard is broken",
      ],
      correctAnswer: 1,
      explanation:
        "Voice dictation is most useful for longer descriptions and complex instructions. Speaking is typically 3-4x faster than typing, making it ideal for detailed prompts.",
    },
    {
      id: "q3",
      type: "multiple-choice",
      question:
        "Do you need to use special syntax when speaking to Claude?",
      options: [
        "Yes, you must use specific voice commands",
        "Yes, you must spell out punctuation",
        "No, just speak naturally",
        "Yes, you must prefix with 'Claude'",
      ],
      correctAnswer: 2,
      explanation:
        "Just speak naturally. Claude handles conversational speech well, so you don't need special commands or formatting — talk the same way you'd type.",
    },
  ],
};
