export default {
  id: "sec-02-permission-system-deep-dive",
  title: "Permission System Deep Dive",
  whyItMatters:
    "The permission system is your primary control mechanism for what Claude can and can't do. Understanding how rules are evaluated — deny first, then ask, then allow — lets you craft precise policies that balance safety with productivity.",

  content: [
    {
      type: "text",
      body: "Claude Code uses a tiered permission system with three levels: **allow**, **ask**, and **deny**. Each tool action is evaluated against your permission rules to determine whether it runs automatically, prompts you for approval, or is blocked entirely. This gives you fine-grained control over Claude's behavior.",
    },
    {
      type: "keyPoint",
      body: "Permission rules are evaluated in a specific order: **deny** rules are checked first, then **ask** rules, then **allow** rules. This means deny always wins — if a deny rule matches an action, it's blocked regardless of any allow rules that might also match. This 'deny-first' approach is a deliberate security choice.",
    },
    {
      type: "text",
      body: "Rules are tool-specific and can include specifiers that narrow what they match. For example, you can create rules that apply only to certain Bash commands, specific file patterns, or particular MCP tools. This lets you allow safe operations while restricting risky ones.",
    },
    {
      type: "example",
      title: "Permission rule with specifiers",
      code: '// In settings.json\n{\n  "permissions": {\n    "allow": [\n      "Bash(git *)",        // Allow all git commands\n      "Read(**/*.ts)",       // Allow reading TypeScript files\n      "Edit(**/*.test.ts)"   // Allow editing test files\n    ],\n    "deny": [\n      "Bash(rm -rf *)",     // Never allow recursive force delete\n      "Bash(curl *)"        // Block curl commands\n    ]\n  }\n}',
      explanation:
        "The `Bash(git *)` rule allows all git commands to run without prompting. The deny rules block dangerous commands regardless of any other rules. Specifiers use wildcard patterns to match against tool arguments.",
    },
    {
      type: "inPractice",
      body: "Most developers start with the default 'ask for everything' mode and gradually build up allow rules for commands they use frequently, like git operations, test runners, and linters. Keep deny rules for anything truly dangerous, like force-deleting files or pushing to production.",
    },
  ],

  quiz: [
    {
      id: "q1",
      type: "multiple-choice",
      question: "In what order are permission rules evaluated?",
      options: [
        "Allow, then ask, then deny",
        "Ask, then allow, then deny",
        "Deny, then ask, then allow",
        "Rules are evaluated randomly",
      ],
      correctAnswer: 2,
      explanation:
        "Rules are evaluated deny-first, then ask, then allow. This ensures that deny rules always take precedence — a critical security guarantee.",
    },
    {
      id: "q2",
      type: "multiple-choice",
      question: "What does `Bash(git *)` mean as a permission rule?",
      options: [
        "Deny all git commands",
        "Allow any Bash command starting with 'git'",
        "Ask before running git commands",
        "Only allow 'git' with no arguments",
      ],
      correctAnswer: 1,
      explanation:
        "The specifier `git *` is a wildcard pattern that matches any Bash command starting with 'git'. When placed in an allow rule, git commands run without prompting.",
    },
    {
      id: "q3",
      type: "multiple-choice",
      question:
        "If both an allow rule and a deny rule match the same action, what happens?",
      options: [
        "The allow rule wins because it was defined first",
        "Claude asks the user to decide",
        "The deny rule wins — deny always takes precedence",
        "The most specific rule wins",
      ],
      correctAnswer: 2,
      explanation:
        "Deny always wins. Because deny rules are evaluated first, if a deny rule matches an action, it's blocked regardless of any allow rules that might also match.",
    },
    {
      id: "q4",
      type: "multiple-choice",
      question: "What are the three tiers in Claude Code's permission system?",
      options: [
        "Read, write, execute",
        "Low, medium, high",
        "Allow, ask, deny",
        "User, admin, root",
      ],
      correctAnswer: 2,
      explanation:
        "The three tiers are allow (runs automatically), ask (prompts for approval), and deny (blocks the action). Together they provide fine-grained control.",
    },
    {
      id: "q5",
      type: "multiple-choice",
      question: "What's a recommended approach for building permission rules?",
      options: [
        "Start with 'allow everything' and add deny rules",
        "Start with 'ask for everything' and gradually add allow rules",
        "Copy permission rules from a teammate",
        "Disable all permissions for maximum speed",
      ],
      correctAnswer: 1,
      explanation:
        "Starting with 'ask for everything' and gradually allowing safe operations is the recommended approach. It lets you build trust incrementally while staying safe.",
    },
  ],
};
