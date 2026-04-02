// Thin wrapper around DataContext for backwards compatibility.

import { useData } from '../contexts/DataContext.jsx'

export function useSettings() {
  const data = useData()

  return {
    settings: data.settings,
    updateSetting: data.updateSetting,
  }
}
