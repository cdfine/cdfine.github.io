import { useTranslation } from 'react-i18next'

import { type SupportedLanguage, supportedLanguages } from '@/lib/i18n'
import { TranslationKeys } from '@/locales/translation-keys'

const languageLabels = {
  'en-US': TranslationKeys.LanguageSwitcherEnUS,
  'en-GB': TranslationKeys.LanguageSwitcherEnGB,
} as const satisfies Record<SupportedLanguage, string>

export const LanguageSwitcher = () => {
  const { t, i18n } = useTranslation()

  return (
    <label className="flex items-center gap-2 text-sm text-muted-foreground">
      {t(TranslationKeys.LanguageSwitcherLabel)}
      <select
        className="rounded-md bg-muted px-2 py-1 text-foreground"
        value={i18n.resolvedLanguage}
        onChange={(e) => {
          void i18n.changeLanguage(e.target.value)
        }}
      >
        {supportedLanguages.map((lng) => (
          <option key={lng} value={lng}>
            {t(languageLabels[lng])}
          </option>
        ))}
      </select>
    </label>
  )
}
