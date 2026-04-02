function TipBlock({ body }) {
  return (
    <div className="border-l-4 border-green-400 bg-green-400/10 rounded-r-lg p-5 my-6">
      <div className="flex gap-3">
        <span className="text-xl flex-shrink-0">✨</span>
        <div>
          <p className="text-sm font-semibold text-green-300 mb-1">Tip</p>
          <p className="leading-relaxed">{body}</p>
        </div>
      </div>
    </div>
  );
}

export default TipBlock;
