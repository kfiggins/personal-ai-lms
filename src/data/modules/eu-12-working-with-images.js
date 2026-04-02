export default {
  id: "eu-12-working-with-images",
  title: "Working with Images",
  whyItMatters:
    "Claude Code is multimodal — it can see images. This means you can share screenshots, mockups, and diagrams to communicate visually, which is often faster and clearer than describing things in words.",

  content: [
    {
      type: "text",
      body: "Claude Code can process images directly in your conversation. You can drag and drop images into the prompt, paste screenshots from your clipboard, or reference image files in your project. This is incredibly useful for visual work like implementing designs or debugging UI issues.",
    },
    {
      type: "example",
      title: "Example: Implementing a design from a mockup",
      code: "[drag and drop a design mockup image]\n\"Implement this design as a React component. Use Tailwind CSS for styling.\"",
      explanation:
        "Claude sees the mockup and writes code to match the visual design — including layout, colors, spacing, and typography. It's like handing a design to a frontend developer.",
    },
    {
      type: "keyPoint",
      body: "Screenshots are especially useful for bug reports. Instead of describing a visual bug in words, paste a screenshot showing the problem. Claude can see exactly what's wrong and fix it — a misaligned element, a wrong color, an overflow issue.",
    },
    {
      type: "tip",
      body: "You can combine images with text instructions. For example: paste a screenshot and say \"the sidebar should be 20px narrower and the header color should match the mockup.\" The image provides the visual context while your text adds specific requirements.",
    },
    {
      type: "inPractice",
      body: "Common use cases for images: implementing a design from a Figma mockup, fixing visual bugs by showing the current vs. expected appearance, documenting error states with screenshots, and referencing architecture diagrams when discussing system design.",
    },
  ],

  quiz: [
    {
      id: "q1",
      type: "multiple-choice",
      question: "How can you share images with Claude Code?",
      options: [
        "You can't — Claude Code only works with text",
        "Drag and drop, paste from clipboard, or reference image files",
        "Only by uploading to a URL first",
        "Only through the VS Code extension",
      ],
      correctAnswer: 1,
      explanation:
        "Claude Code supports multiple ways to share images: drag and drop into the prompt, paste from your clipboard, or reference image files in your project.",
    },
    {
      id: "q2",
      type: "true-false",
      question:
        "Pasting a screenshot of a visual bug is often more effective than describing it in words.",
      options: ["True", "False"],
      correctAnswer: 0,
      explanation:
        "Screenshots show Claude exactly what the visual issue looks like — misaligned elements, wrong colors, overflow problems. A picture often communicates the bug faster and more precisely than words.",
    },
    {
      id: "q3",
      type: "multiple-choice",
      question: "What's a good use case for sharing images with Claude Code?",
      options: [
        "Implementing a UI from a design mockup",
        "Fixing visual bugs shown in a screenshot",
        "Referencing architecture diagrams during discussion",
        "All of the above",
      ],
      correctAnswer: 3,
      explanation:
        "Images are useful for many workflows: implementing designs from mockups, debugging visual issues with screenshots, and referencing diagrams during architectural discussions.",
    },
  ],
};
