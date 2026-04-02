import { useSettings } from "../hooks/useSettings.js";

const SETTING_GROUPS = [
  {
    title: "Learning Features",
    settings: [
      {
        key: "confidenceRating",
        label: "Confidence rating on quiz questions",
        description:
          'When enabled, quizzes ask "How confident are you?" before revealing the answer. Helps calibrate your self-assessment over time.',
      },
      {
        key: "preTestBeforeModules",
        label: "Pre-test before new modules",
        description:
          "When enabled, a short diagnostic quiz appears before each new module to gauge what you already know.",
      },
    ],
  },
  {
    title: "Display",
    settings: [
      {
        key: "showStreak",
        label: "Show streak on dashboard",
        description:
          "Display your current day streak on the dashboard hero section.",
      },
      {
        key: "showAchievementNotifications",
        label: "Show achievement notifications",
        description:
          "Show toast notifications when you unlock new achievements.",
      },
    ],
  },
];

function Toggle({ enabled, onChange }) {
  return (
    <button
      role="switch"
      aria-checked={enabled}
      onClick={() => onChange(!enabled)}
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors shrink-0 cursor-pointer ${
        enabled ? "bg-accent" : "bg-dark-border"
      }`}
    >
      <span
        className={`inline-block h-4 w-4 rounded-full bg-white transition-transform ${
          enabled ? "translate-x-6" : "translate-x-1"
        }`}
      />
    </button>
  );
}

function Settings() {
  const { settings, updateSetting } = useSettings();

  return (
    <div className="max-w-2xl mx-auto py-4">
      <h1 className="text-3xl font-bold mb-2">Settings</h1>
      <p className="text-text-secondary mb-8">
        Customize your learning experience.
      </p>

      <div className="space-y-8">
        {SETTING_GROUPS.map((group) => (
          <div key={group.title}>
            <h2 className="text-sm font-semibold text-text-secondary uppercase tracking-wide mb-4">
              {group.title}
            </h2>
            <div className="bg-dark-surface border border-dark-border rounded-xl divide-y divide-dark-border">
              {group.settings.map((setting) => (
                <div
                  key={setting.key}
                  className="flex items-center justify-between gap-4 p-4"
                >
                  <div className="min-w-0">
                    <div className="font-medium text-text-primary">
                      {setting.label}
                    </div>
                    <div className="text-sm text-text-secondary mt-0.5">
                      {setting.description}
                    </div>
                  </div>
                  <Toggle
                    enabled={settings[setting.key]}
                    onChange={(val) => updateSetting(setting.key, val)}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Settings;
