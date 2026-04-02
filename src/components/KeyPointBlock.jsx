function KeyPointBlock({ body }) {
  return (
    <div className="border-l-4 border-amber-500 bg-amber-500/10 rounded-r-lg p-5 my-6">
      <div className="flex gap-3">
        <span className="text-xl flex-shrink-0">💡</span>
        <p className="leading-relaxed">{body}</p>
      </div>
    </div>
  );
}

export default KeyPointBlock;
