function InPracticeBlock({ body }) {
  return (
    <div className="border-l-4 border-blue-400 bg-blue-400/10 rounded-r-lg p-5 my-6">
      <div className="flex gap-3">
        <span className="text-xl flex-shrink-0">🔧</span>
        <div>
          <p className="text-sm font-semibold text-blue-300 mb-1">
            When to use this
          </p>
          <p className="leading-relaxed">{body}</p>
        </div>
      </div>
    </div>
  );
}

export default InPracticeBlock;
