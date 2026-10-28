import { useTranslation } from 'react-i18next'
import { Link } from 'react-router'

import { paths } from '@/config/paths'
import { TranslationKeys } from '@/locales/translation-keys'

export const NotFoundRoute = () => {
  const { t } = useTranslation()

  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-4">
      <h1 className="text-4xl font-bold tracking-tight">
        {t(TranslationKeys.NotFoundTitle)}
      </h1>
      <p className="text-muted-foreground">
        {t(TranslationKeys.NotFoundDescription)}
      </p>
      <Link
        to={paths.landing.getHref()}
        className="text-primary hover:text-primary/80"
      >
        {t(TranslationKeys.NotFoundHomeLink)}
      </Link>
    </div>
  )
}
