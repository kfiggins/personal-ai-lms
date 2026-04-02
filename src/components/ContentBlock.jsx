import KeyPointBlock from "./KeyPointBlock.jsx";
import ExampleBlock from "./ExampleBlock.jsx";
import InPracticeBlock from "./InPracticeBlock.jsx";
import TipBlock from "./TipBlock.jsx";

function ContentBlock({ block }) {
  switch (block.type) {
    case "text":
      return <p className="leading-[1.8] my-4">{block.body}</p>;

    case "keyPoint":
      return <KeyPointBlock body={block.body} />;

    case "example":
      return (
        <ExampleBlock
          title={block.title}
          code={block.code}
          explanation={block.explanation}
        />
      );

    case "inPractice":
      return <InPracticeBlock body={block.body} />;

    case "tip":
      return <TipBlock body={block.body} />;

    case "warning":
      return (
        <div className="border-l-4 border-red-400 bg-red-400/10 rounded-r-lg p-5 my-6">
          <div className="flex gap-3">
            <span className="text-xl flex-shrink-0">⚠️</span>
            <div>
              <p className="text-sm font-semibold text-red-300 mb-1">Warning</p>
              <p className="leading-relaxed">{block.body}</p>
            </div>
          </div>
        </div>
      );

    case "list":
      if (block.ordered) {
        return (
          <ol className="list-decimal list-inside space-y-2 my-4 pl-2 leading-relaxed">
            {block.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ol>
        );
      }
      return (
        <ul className="list-disc list-inside space-y-2 my-4 pl-2 leading-relaxed">
          {block.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      );

    default:
      return null;
  }
}

export default ContentBlock;
