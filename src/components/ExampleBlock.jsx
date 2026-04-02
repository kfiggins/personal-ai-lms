function ExampleBlock({ title, code, explanation }) {
  return (
    <div className="my-6 space-y-3">
      {title && (
        <h4 className="text-sm font-semibold text-text-secondary uppercase tracking-wide">
          {title}
        </h4>
      )}
      <pre className="bg-[#0d1117] border border-dark-border rounded-lg p-4 overflow-x-auto">
        <code className="text-sm font-mono text-green-300 leading-relaxed whitespace-pre-wrap">
          {code}
        </code>
      </pre>
      {explanation && (
        <p className="text-text-secondary text-sm leading-relaxed">
          {explanation}
        </p>
      )}
    </div>
  );
}

export default ExampleBlock;
