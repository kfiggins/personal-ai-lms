import { getAchievementStatus } from "../utils/achievementStore.js";

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

const CATEGORY_ORDER = [
  "Consistency",
  "Mastery",
  "Review",
  "Mixed Practice",
  "Calibration",
];

function AchievementsSection() {
  const achievements = getAchievementStatus();
  const unlockedCount = achievements.filter((a) => a.unlocked).length;

  // Group by category
  const grouped = {};
  for (const cat of CATEGORY_ORDER) {
    grouped[cat] = achievements.filter((a) => a.category === cat);
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Achievements</h2>
        <span className="text-sm text-text-secondary">
          <span className="text-amber-400 font-medium">{unlockedCount}</span> /{" "}
          {achievements.length} unlocked
        </span>
      </div>

      <div className="space-y-4">
        {CATEGORY_ORDER.map((cat) => (
          <div
            key={cat}
            className="bg-dark-surface border border-dark-border rounded-xl p-5"
          >
            <h3 className="text-sm font-medium text-text-secondary uppercase tracking-wide mb-3">
              {cat}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {grouped[cat].map((a) => (
                <div
                  key={a.id}
                  className={`flex items-center gap-3 rounded-lg p-3 border transition-colors ${
                    a.unlocked
                      ? "border-amber-500/30 bg-amber-500/5"
                      : "border-dark-border/50 bg-dark-card/30 opacity-50"
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-lg shrink-0 border ${
                      a.unlocked
                        ? "bg-amber-500/15 border-amber-500/30"
                        : "bg-dark-border/30 border-dark-border/50 grayscale"
                    }`}
                  >
                    {a.unlocked ? (ICON_MAP[a.icon] || "\u{1F3C6}") : "\u{1F512}"}
                  </div>
                  <div className="min-w-0">
                    <div
                      className={`text-sm font-semibold ${
                        a.unlocked ? "text-text-primary" : "text-text-secondary"
                      }`}
                    >
                      {a.name}
                    </div>
                    <div className="text-xs text-text-secondary leading-tight">
                      {a.description}
                    </div>
                    {a.unlocked && a.unlockedAt && (
                      <div className="text-xs text-amber-400/60 mt-0.5">
                        {new Date(a.unlockedAt).toLocaleDateString()}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AchievementsSection;
