import { systemThemes, themeModes } from '@/config/themes'

export type Theme = keyof typeof themeModes

export const supportedThemes = Object.keys(themeModes) as Theme[]

// Must match the keys read by the inline script in index.html
const themeStorageKey = 'theme'
const themeModeStorageKey = 'theme-mode'

const darkQuery = window.matchMedia('(prefers-color-scheme: dark)')
const listeners = new Set<() => void>()

const isTheme = (value: unknown): value is Theme =>
  supportedThemes.includes(value as Theme)

// null until a theme is chosen, so the OS colour scheme decides
const readStoredTheme = (): Theme | null => {
  try {
    const stored = localStorage.getItem(themeStorageKey)
    return isTheme(stored) ? stored : null
  } catch {
    return null
  }
}

const writeStorage = (key: string, value: string) => {
  try {
    localStorage.setItem(key, value)
  } catch {
    // Storage can be blocked (e.g. private mode); the theme still applies
  }
}

let storedTheme = readStoredTheme()

const resolveTheme = (): Theme =>
  storedTheme ?? systemThemes[darkQuery.matches ? 'dark' : 'light']

// Sets the attributes theme.css keys its tokens and `dark:` variant off
const applyTheme = () => {
  const theme = resolveTheme()
  const mode = themeModes[theme]
  document.documentElement.dataset.theme = theme
  document.documentElement.dataset.mode = mode
  // Lets index.html set the mode before React loads
  writeStorage(themeModeStorageKey, mode)
}

const update = () => {
  applyTheme()
  listeners.forEach((listener) => listener())
}

export const getTheme = resolveTheme

export const setTheme = (theme: Theme) => {
  storedTheme = theme
  writeStorage(themeStorageKey, theme)
  update()
}

export const subscribeToTheme = (listener: () => void) => {
  listeners.add(listener)
  return () => {
    listeners.delete(listener)
  }
}

// Follow the OS setting until a theme is chosen
darkQuery.addEventListener('change', update)
applyTheme()
