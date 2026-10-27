import { useTranslation } from 'react-i18next'

import { useTheme } from '@/hooks/use-theme'
import { type Theme, supportedThemes } from '@/lib/theme'
import { TranslationKeys } from '@/locales/translation-keys'

const themeLabels = {
  system: TranslationKeys.ThemeSwitcherSystem,
  light: TranslationKeys.ThemeSwitcherLight,
  dark: TranslationKeys.ThemeSwitcherDark,
} as const satisfies Record<Theme, string>

export const ThemeSwitcher = () => {
  const { t } = useTranslation()
  const { theme, setTheme } = useTheme()

  return (
    <label className="flex items-center gap-2 text-sm text-muted-foreground">
      {t(TranslationKeys.ThemeSwitcherLabel)}
      <select
        className="rounded-md bg-muted px-2 py-1 text-foreground"
        value={theme}
        onChange={(e) => {
          setTheme(e.target.value as Theme)
        }}
      >
        {supportedThemes.map((option) => (
          <option key={option} value={option}>
            {t(themeLabels[option])}
          </option>
        ))}
      </select>
    </label>
  )
}
