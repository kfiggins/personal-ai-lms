export default {
  id: "sec-07-data-usage-and-privacy",
  title: "Data Usage and Privacy",
  whyItMatters:
    "When you use Claude Code, your code and conversations are sent to Anthropic's API. Understanding what data is collected, how it's used, and how long it's retained is essential for making informed decisions about what you share.",

  content: [
    {
      type: "text",
      body: "Claude Code sends your prompts, file contents (when read), and tool results to Anthropic's API for processing. This is how Claude understands your codebase and generates responses. Understanding Anthropic's data usage policies helps you decide what's appropriate to share with Claude.",
    },
    {
      type: "keyPoint",
      body: "Key points about Anthropic's data usage:\n\n- **API inputs and outputs** are not used to train models by default for API customers\n- **Conversation data** may be retained for a limited period for trust and safety purposes\n- **Retention periods** vary by plan type — enterprise plans typically have shorter retention or zero-data-retention options\n- **No persistent storage** of your code on Anthropic's side beyond the retention window",
    },
    {
      type: "text",
      body: "Privacy safeguards include:\n\n- Data is encrypted in transit and at rest\n- Access to conversation data is restricted to authorized personnel for safety review\n- Retention periods are clearly defined and data is deleted after they expire\n- Enterprise customers can negotiate custom data handling agreements\n- You can request deletion of your data",
    },
    {
      type: "inPractice",
      body: "For most individual developers, the default privacy protections are sufficient. For enterprise teams handling sensitive code (financial data, healthcare, classified information), consider zero-data-retention options or enterprise agreements with custom data handling terms. Always check your organization's policies before using Claude with proprietary code.",
    },
  ],

  quiz: [
    {
      id: "q1",
      type: "multiple-choice",
      question: "Is your code used to train Anthropic's models when using the API?",
      options: [
        "Yes, all code is used for training",
        "No, API inputs and outputs are not used for model training by default",
        "Only open-source code is used",
        "Only if you opt in",
      ],
      correctAnswer: 1,
      explanation:
        "By default, API inputs and outputs are not used to train Anthropic's models. This applies to Claude Code since it uses the API.",
    },
    {
      id: "q2",
      type: "multiple-choice",
      question: "Why might conversation data be retained for a limited period?",
      options: [
        "For model training purposes",
        "To improve response speed",
        "For trust and safety purposes",
        "To build user profiles",
      ],
      correctAnswer: 2,
      explanation:
        "Conversation data may be retained briefly for trust and safety review purposes, with clearly defined retention periods after which the data is deleted.",
    },
    {
      id: "q3",
      type: "multiple-choice",
      question:
        "What should enterprise teams handling sensitive code consider?",
      options: [
        "Using the free tier for maximum privacy",
        "Zero-data-retention options or custom enterprise agreements",
        "Encrypting code before sending it",
        "Using a VPN to connect to Anthropic",
      ],
      correctAnswer: 1,
      explanation:
        "Enterprise teams with sensitive code should consider zero-data-retention (ZDR) options or enterprise agreements with custom data handling terms to meet their security requirements.",
    },
  ],
};
