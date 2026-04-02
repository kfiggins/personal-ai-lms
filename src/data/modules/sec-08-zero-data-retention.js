export default {
  id: "sec-08-zero-data-retention",
  title: "Zero Data Retention",
  whyItMatters:
    "For organizations with strict compliance requirements, zero-data-retention (ZDR) ensures that no conversation data persists on Anthropic's servers after processing. Understanding what ZDR covers — and what it limits — helps you evaluate whether it's the right fit.",

  content: [
    {
      type: "text",
      body: "Zero-data-retention (ZDR) is an enterprise feature where Anthropic does not store any of your conversation data after it's been processed. Your prompts, code, and Claude's responses are processed in real-time and then discarded — nothing is retained on Anthropic's servers for any purpose, including trust and safety review.",
    },
    {
      type: "keyPoint",
      body: "What ZDR means in practice:\n\n- **No data stored** after request processing is complete\n- **No trust and safety retention** — data is not kept even for safety review\n- **No conversation history** on Anthropic's side — you manage your own context\n- This is available for Enterprise plans and requires explicit enablement",
    },
    {
      type: "text",
      body: "ZDR does come with some limitations. Certain features that depend on server-side data persistence may be disabled or limited under ZDR:\n\n- Conversation history may not be available across sessions on Anthropic's side\n- Some analytics and usage reporting features may be limited\n- Abuse detection capabilities may be reduced since no data is retained for review\n\nThese trade-offs are generally acceptable for organizations where the compliance requirements outweigh the convenience features.",
    },
    {
      type: "inPractice",
      body: "To request ZDR enablement, work with your Anthropic account team or sales representative. It's typically configured at the organization level, so all users within the organization benefit from the same data handling policy. ZDR is particularly important for healthcare, finance, government, and defense sectors.",
    },
  ],

  quiz: [
    {
      id: "q1",
      type: "multiple-choice",
      question: "What does zero-data-retention mean?",
      options: [
        "Data is encrypted but still stored",
        "Data is stored for 24 hours then deleted",
        "No conversation data persists after processing",
        "Data is anonymized before storage",
      ],
      correctAnswer: 2,
      explanation:
        "Zero-data-retention means no conversation data is stored after processing. Prompts, code, and responses are processed in real-time and then discarded entirely.",
    },
    {
      id: "q2",
      type: "multiple-choice",
      question: "What's a trade-off of enabling zero-data-retention?",
      options: [
        "Slower response times",
        "Reduced model quality",
        "Some features like server-side conversation history may be limited",
        "Higher API costs",
      ],
      correctAnswer: 2,
      explanation:
        "ZDR may limit features that depend on server-side data persistence, such as conversation history and some analytics. These trade-offs are acceptable for compliance-driven organizations.",
    },
    {
      id: "q3",
      type: "multiple-choice",
      question: "How do you enable zero-data-retention?",
      options: [
        "Toggle a setting in Claude Code's config",
        "Set an environment variable",
        "Work with your Anthropic account team to enable it at the organization level",
        "It's enabled by default for all plans",
      ],
      correctAnswer: 2,
      explanation:
        "ZDR is an enterprise feature that requires working with your Anthropic account team. It's configured at the organization level, benefiting all users in the org.",
    },
  ],
};
