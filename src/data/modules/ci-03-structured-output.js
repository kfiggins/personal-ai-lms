export default {
  id: "ci-03-structured-output",
  title: "Structured Output",
  whyItMatters:
    "When you're building automation, you need machine-readable output — not prose. Claude Code's structured output flags let you get JSON, streaming JSON, or schema-validated responses that your scripts can parse reliably.",

  content: [
    {
      type: "text",
      body: "By default, Claude returns human-readable text. But when you're feeding Claude's output into another program, you need structured data. Claude Code supports multiple output formats: plain JSON for easy parsing, streaming JSON for real-time processing, and schema-validated JSON when you need guaranteed structure.",
    },
    {
      type: "keyPoint",
      body: "Use `--output-format json` for a JSON response object, `--output-format stream-json` for newline-delimited streaming events, and `--json-schema '{...}'` to validate that the output matches a specific structure. These flags work with print mode (`-p`).",
    },
    {
      type: "example",
      title: "Structured output formats",
      code: `# Get a JSON response\nclaude -p "list the exported functions in utils.js" --output-format json\n\n# Stream JSON events as they arrive\nclaude -p "analyze this codebase" --output-format stream-json\n\n# Validate output against a schema\nclaude -p "list all API endpoints" --json-schema '{\n  "type": "object",\n  "properties": {\n    "endpoints": {\n      "type": "array",\n      "items": {\n        "type": "object",\n        "properties": {\n          "method": { "type": "string" },\n          "path": { "type": "string" },\n          "description": { "type": "string" }\n        },\n        "required": ["method", "path"]\n      }\n    }\n  },\n  "required": ["endpoints"]\n}'`,
      explanation:
        "The JSON format gives you a structured response you can parse with `jq` or any JSON library. The streaming format is useful for long-running tasks where you want to process results as they arrive. The schema flag ensures the output structure matches what your code expects.",
    },
    {
      type: "inPractice",
      body: "Structured output is how you integrate Claude into larger systems. A CI pipeline might ask Claude to analyze a PR and return JSON with severity ratings, which are then posted as review comments. A build script might validate API schemas by having Claude return structured data that feeds into a test assertion.",
    },
    {
      type: "tip",
      body: "Use `--json-schema` when the downstream consumer expects a specific shape. It's more reliable than asking Claude to \"return JSON\" in the prompt — the schema flag enforces the structure at the output level.",
    },
  ],

  quiz: [
    {
      id: "q1",
      type: "multiple-choice",
      question: "Which flag produces a JSON response from Claude?",
      options: [
        "--format json",
        "--output-format json",
        "--json",
        "--response-type json",
      ],
      correctAnswer: 1,
      explanation:
        "`--output-format json` tells Claude to return its response as a JSON object, suitable for programmatic parsing.",
    },
    {
      id: "q2",
      type: "multiple-choice",
      question: "What does `--json-schema` do?",
      options: [
        "Pretty-prints JSON output",
        "Converts Claude's response to YAML",
        "Validates that the output matches a specific JSON structure",
        "Adds schema comments to the output",
      ],
      correctAnswer: 2,
      explanation:
        "`--json-schema` validates Claude's output against a provided JSON Schema, ensuring the response matches the expected structure your code depends on.",
    },
    {
      id: "q3",
      type: "multiple-choice",
      question: "When would you use `--output-format stream-json`?",
      options: [
        "When you need the smallest possible response",
        "When you want to process results as they arrive in real time",
        "When you only need plain text",
        "When working offline",
      ],
      correctAnswer: 1,
      explanation:
        "Streaming JSON (`--output-format stream-json`) sends newline-delimited JSON events as they're generated, letting you process results in real time rather than waiting for the full response.",
    },
  ],
};
