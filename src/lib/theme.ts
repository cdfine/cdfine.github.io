import { defaultTheme, themeModes } from '@/config/themes'

type NamedTheme = keyof typeof themeModes
export type Theme = NamedTheme | 'system'

export const supportedThemes: Theme[] = [
  'system',
  ...(Object.keys(themeModes) as NamedTheme[]),
]

// Must match the keys read by the inline script in index.html
const themeStorageKey = 'theme'
const themeModeStorageKey = 'theme-mode'

const darkQuery = window.matchMedia('(prefers-color-scheme: dark)')
const listeners = new Set<() => void>()

const isTheme = (value: unknown): value is Theme =>
  supportedThemes.includes(value as Theme)

const readStoredTheme = (): Theme => {
  try {
    const stored = localStorage.getItem(themeStorageKey)
    return isTheme(stored) ? stored : defaultTheme
  } catch {
    return defaultTheme
  }
}

const writeStorage = (key: string, value: string) => {
  try {
    localStorage.setItem(key, value)
  } catch {
    // Storage can be blocked (e.g. private mode); the theme still applies
  }
}

let currentTheme = readStoredTheme()

// `system` resolves to plain light or dark
const resolveTheme = (theme: Theme): NamedTheme =>
  theme === 'system' ? (darkQuery.matches ? 'dark' : 'light') : theme

// Sets the attributes theme.css keys its tokens and `dark:` variant off
const applyTheme = () => {
  const resolved = resolveTheme(currentTheme)
  const mode = themeModes[resolved]
  document.documentElement.dataset.theme = resolved
  document.documentElement.dataset.mode = mode
  // Lets index.html set the mode before React loads
  writeStorage(themeModeStorageKey, mode)
}

export const getTheme = () => currentTheme

export const setTheme = (theme: Theme) => {
  currentTheme = theme
  writeStorage(themeStorageKey, theme)
  applyTheme()
  listeners.forEach((listener) => listener())
}

export const subscribeToTheme = (listener: () => void) => {
  listeners.add(listener)
  return () => {
    listeners.delete(listener)
  }
}

// Re-evaluate `system` when the OS setting changes
darkQuery.addEventListener('change', applyTheme)
applyTheme()
