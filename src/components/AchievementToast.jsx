import { useState, useEffect } from "react";

const ICON_MAP = {
  footprints: "\u{1F9B6}",
  calendar: "\u{1F4C5}",
  flame: "\u{1F525}",
  star: "\u2B50",
  crown: "\u{1F451}",
  book: "\u{1F4DA}",
  graduation: "\u{1F393}",
  refresh: "\u{1F504}",
  brain: "\u{1F9E0}",
  repeat: "\u{1F501}",
  shuffle: "\u{1F500}",
  target: "\u{1F3AF}",
  eye: "\u{1F441}\uFE0F",
  compass: "\u{1F9ED}",
};

function AchievementToast({ achievements, onDismiss }) {
  const [visible, setVisible] = useState([]);

  useEffect(() => {
    if (!achievements || achievements.length === 0) return;

    // Show each achievement with a stagger
    achievements.forEach((a, i) => {
      const showTimer = setTimeout(() => {
        setVisible((prev) => [...prev, a.id]);
      }, i * 400);

      const hideTimer = setTimeout(() => {
        setVisible((prev) => prev.filter((id) => id !== a.id));
        if (i === achievements.length - 1) {
          setTimeout(onDismiss, 500);
        }
      }, 4000 + i * 400);

      return () => {
        clearTimeout(showTimer);
        clearTimeout(hideTimer);
      };
    });
  }, [achievements, onDismiss]);

  if (!achievements || achievements.length === 0) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 pointer-events-none">
      {achievements.map((a) => (
        <div
          key={a.id}
          className={`pointer-events-auto flex items-center gap-3 bg-dark-surface border border-amber-500/40 rounded-xl px-5 py-3 shadow-lg shadow-black/30 transition-all duration-500 ${
            visible.includes(a.id)
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-8"
          }`}
        >
          <div className="w-10 h-10 rounded-full bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-lg shrink-0">
            {ICON_MAP[a.icon] || "\u{1F3C6}"}
          </div>
          <div className="min-w-0">
            <div className="text-xs text-amber-400 font-medium uppercase tracking-wide">
              Achievement Unlocked
            </div>
            <div className="text-sm font-semibold text-text-primary">
              {a.name}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AchievementToast;
