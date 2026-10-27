import { useSyncExternalStore } from 'react'

import { getTheme, setTheme, subscribeToTheme } from '@/lib/theme'

export const useTheme = () => {
  const theme = useSyncExternalStore(subscribeToTheme, getTheme)

  return { theme, setTheme }
}
