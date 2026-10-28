// To add a theme: add an entry here, a [data-theme] block in src/theme.css,
// and a themeSwitcher label in each locale and in the ThemeSwitcher component.
// Palettes from https://github.com/cdfine/chappellRoan
export const themeModes = {
  'midwest-princess': 'light',
  'pink-pony-club': 'dark',
  'hot-to-go': 'light',
  'red-wine-supernova': 'dark',
  'good-luck-babe': 'light',
  valentino: 'dark',
} as const satisfies Record<string, 'light' | 'dark'>

// Used until a theme is chosen, picked by the OS colour scheme.
// Must match the names in the inline script in index.html
export const systemThemes = {
  light: 'midwest-princess',
  dark: 'pink-pony-club',
} as const satisfies Record<'light' | 'dark', keyof typeof themeModes>
