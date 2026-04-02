export default {
  id: "sec-11-enterprise-deployment",
  title: "Enterprise Deployment",
  whyItMatters:
    "Large organizations need Claude Code to work within their existing infrastructure — through cloud providers, behind proxies, and with centralized configuration. Understanding deployment options lets you integrate Claude Code into enterprise environments securely.",

  content: [
    {
      type: "text",
      body: "Claude Code supports enterprise deployment through multiple cloud providers and network configurations. Instead of connecting directly to Anthropic's API, organizations can route traffic through their existing cloud infrastructure, giving them more control over data residency, access management, and billing.",
    },
    {
      type: "keyPoint",
      body: "Supported enterprise platforms:\n\n- **Amazon Bedrock**: Run Claude through AWS with your existing AWS credentials and billing\n- **Google Vertex AI**: Access Claude through Google Cloud Platform\n- **Microsoft Azure AI Foundry**: Use Claude within Azure's ecosystem\n\nEach platform lets you use Claude Code while keeping data within your chosen cloud provider's infrastructure.",
    },
    {
      type: "example",
      title: "Configuring cloud providers and network",
      code: '# Amazon Bedrock\nexport CLAUDE_CODE_USE_BEDROCK=1\nexport AWS_REGION=us-west-2\n\n# Google Vertex AI\nexport CLAUDE_CODE_USE_VERTEX=1\nexport CLOUD_ML_REGION=us-east5\nexport ANTHROPIC_VERTEX_PROJECT_ID=my-project\n\n# LLM Gateway / Proxy configuration\nexport ANTHROPIC_BASE_URL=https://llm-gateway.company.com/v1\nexport ANTHROPIC_AUTH_TOKEN=your-token\n\n# Custom CA certificate (for corporate proxies)\nexport NODE_EXTRA_CA_CERTS=/path/to/corporate-ca.pem\n\n# mTLS configuration\nexport ANTHROPIC_CLIENT_CERT=/path/to/client.pem\nexport ANTHROPIC_CLIENT_KEY=/path/to/client-key.pem',
      explanation:
        "Environment variables configure which platform Claude Code connects to and how it handles network routing. LLM gateways let organizations centralize access, apply rate limits, and audit usage across teams.",
    },
    {
      type: "text",
      body: "**Server-managed settings** allow organizations to push configuration to all Claude Code installations without touching individual developer machines. This is ideal for enforcing security policies, setting default permission modes, configuring allowed MCP servers, and standardizing tool access across the organization.",
    },
    {
      type: "inPractice",
      body: "Most enterprises start by routing Claude Code through their cloud provider of choice, then add an LLM gateway for centralized access control and usage monitoring. Server-managed settings come next for enforcing org-wide policies. This layered approach lets you adopt Claude Code incrementally while maintaining your security posture.",
    },
  ],

  quiz: [
    {
      id: "q1",
      type: "multiple-choice",
      question:
        "Which cloud platforms support running Claude Code in enterprise environments?",
      options: [
        "Only Amazon Bedrock",
        "Amazon Bedrock, Google Vertex AI, and Microsoft Azure AI Foundry",
        "Only Google Cloud Platform",
        "Any platform that supports Docker",
      ],
      correctAnswer: 1,
      explanation:
        "Claude Code supports Amazon Bedrock, Google Vertex AI, and Microsoft Azure AI Foundry, letting organizations use their existing cloud infrastructure.",
    },
    {
      id: "q2",
      type: "multiple-choice",
      question: "What does an LLM gateway provide for enterprise deployments?",
      options: [
        "Faster model inference",
        "Centralized access control, rate limiting, and usage auditing",
        "Free API access",
        "Automatic code review",
      ],
      correctAnswer: 1,
      explanation:
        "An LLM gateway lets organizations centralize access to Claude, apply rate limits, audit usage across teams, and route traffic through approved infrastructure.",
    },
    {
      id: "q3",
      type: "multiple-choice",
      question: "How do server-managed settings work?",
      options: [
        "Developers configure them locally",
        "They're pushed to all Claude Code installations without touching individual machines",
        "They require a special plugin",
        "They only work in CI/CD environments",
      ],
      correctAnswer: 1,
      explanation:
        "Server-managed settings are pushed centrally to all Claude Code installations, enforcing org-wide policies for security, permissions, and tool access without requiring individual configuration.",
    },
  ],
};
