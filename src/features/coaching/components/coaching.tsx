import { useTranslation } from 'react-i18next'

import { TranslationKeys } from '@/locales/translation-keys'

export const Coaching = () => {
  const { t } = useTranslation()

  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-4">
      <h1 className="text-4xl font-bold tracking-tight">
        {t(TranslationKeys.CoachingTitle)}
      </h1>
      <p className="text-muted-foreground">
        {t(TranslationKeys.CoachingDescription)}
      </p>
    </div>
  )
}
