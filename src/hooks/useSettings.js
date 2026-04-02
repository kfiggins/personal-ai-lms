import { useState, useCallback } from "react";
import * as store from "../utils/settingsStore.js";

export function useSettings() {
  const [settings, setSettings] = useState(store.getSettings);

  const updateSetting = useCallback((key, value) => {
    const updated = store.updateSetting(key, value);
    setSettings({ ...updated });
    return updated;
  }, []);

  return { settings, updateSetting };
}
