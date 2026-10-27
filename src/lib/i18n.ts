import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

import enGB from '@/locales/en-GB/en-GB.json'
import enUS from '@/locales/en-US/en-US.json'

export const defaultLanguage = 'en-US'
export const supportedLanguages = ['en-US', 'en-GB'] as const
export type SupportedLanguage = (typeof supportedLanguages)[number]

export const resources = {
  'en-US': { common: enUS },
  'en-GB': { common: enGB },
} as const

void i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    defaultNS: 'common',
    fallbackLng: defaultLanguage,
    supportedLngs: supportedLanguages,
    initAsync: false,
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
    interpolation: {
      escapeValue: false,
    },
  })

// Keep <html lang> in sync for accessibility and SEO
i18n.on('languageChanged', (lng) => {
  document.documentElement.lang = lng
})
document.documentElement.lang = i18n.resolvedLanguage ?? defaultLanguage

export default i18n
