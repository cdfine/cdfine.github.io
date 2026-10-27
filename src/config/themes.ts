// To add a theme: add an entry here, a [data-theme] block in src/theme.css,
// and a themeSwitcher label in each locale. `light` and `dark` are required
// because `system` resolves to one of them.
export const themeModes = {
  light: 'light',
  dark: 'dark',
} as const satisfies { light: 'light'; dark: 'dark' } & Record<
  string,
  'light' | 'dark'
>

export const defaultTheme = 'system' satisfies
  keyof typeof themeModes | 'system'
