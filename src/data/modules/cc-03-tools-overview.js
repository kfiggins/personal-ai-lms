export default {
  id: "cc-03-tools-overview",
  title: "Tools Overview",
  whyItMatters:
    "Tools are what make Claude Code agentic — without them, it could only respond with text.",

  content: [
    {
      type: "text",
      body: "Without tools, Claude is just a text-in, text-out model. It can reason and generate responses, but it can't actually do anything in your environment. Tools are what give Claude Code its superpowers — the ability to read your files, edit code, run commands, search the web, and navigate your codebase.",
    },
    {
      type: "keyPoint",
      body: "Tools fall into five categories: file operations (read, edit, create files), search (find files and content), execution (run shell commands), web (search and fetch pages), and code intelligence (understand project structure). Each tool call returns information that feeds back into the agentic loop.",
    },
    {
      type: "example",
      title: "How tools chain together",
      code: "claude \"find and fix the broken import in the auth module\"",
      explanation:
        "Claude might: (1) use Grep to search for import errors, (2) use Read to examine the file, (3) use Edit to fix the import path, (4) use Bash to run the build and verify the fix. Each tool result informs the next decision.",
    },
    {
      type: "text",
      body: "You don't need to tell Claude which tools to use — it decides based on what it needs. Ask it to \"fix the tests\" and it will figure out that it needs to read test files, understand the errors, edit the code, and re-run the tests. The tool selection is part of the model's reasoning.",
    },
    {
      type: "inPractice",
      body: "Understanding the tool categories helps you write better prompts. If you know Claude can search the web, you can ask it to look up an API's documentation. If you know it can run commands, you can ask it to check the test output. The more you know about what tools exist, the more you can leverage them.",
    },
  ],

  quiz: [
    {
      id: "q1",
      type: "multiple-choice",
      question: "What happens if Claude has no tools available?",
      options: [
        "It can still edit files",
        "It can only respond with text",
        "It crashes",
        "It automatically installs tools",
      ],
      correctAnswer: 1,
      explanation:
        "Without tools, Claude can only reason and generate text responses. Tools are what allow it to take action in your environment — reading files, editing code, and running commands.",
    },
    {
      id: "q2",
      type: "multiple-choice",
      question: "What are the five categories of tools in Claude Code?",
      options: [
        "Read, write, delete, copy, move",
        "File operations, search, execution, web, code intelligence",
        "Git, npm, docker, ssh, curl",
        "Input, output, transform, validate, deploy",
      ],
      correctAnswer: 1,
      explanation:
        "The five tool categories are: file operations (read/edit/create), search (find files and content), execution (run commands), web (search and fetch), and code intelligence (understand project structure).",
    },
    {
      id: "q3",
      type: "true-false",
      question: "You need to tell Claude which specific tools to use for a task.",
      options: ["True", "False"],
      correctAnswer: 1,
      explanation:
        "Claude decides which tools to use based on its reasoning about the task. You just describe what you want done, and it figures out the right tools to accomplish it.",
    },
    {
      id: "q4",
      type: "multiple-choice",
      question: "What happens with the result of each tool call?",
      options: [
        "It is discarded after use",
        "It feeds back into the agentic loop to inform the next action",
        "It is saved to a log file",
        "It is sent directly to the user",
      ],
      correctAnswer: 1,
      explanation:
        "Each tool result feeds back into the agentic loop. Claude reads the output, reasons about it, and decides what to do next — this is how it chains multiple actions together.",
    },
  ],
};
