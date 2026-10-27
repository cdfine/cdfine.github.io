import { useTranslation } from 'react-i18next'

import { TranslationKeys } from '@/locales/translation-keys'

// Read once on load, so rendering stays pure
const currentYear = new Date().getFullYear()

export const Copyright = () => {
  const { t } = useTranslation()

  return (
    <p>
      {t(TranslationKeys.FooterCopyright, {
        year: currentYear,
        appName: t(TranslationKeys.AppName),
      })}
    </p>
  )
}
