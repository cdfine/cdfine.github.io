import { Trans, useTranslation } from 'react-i18next'
import { Link } from 'react-router'

import { TranslationKeys } from '@/locales/translation-keys'

const links = {
  jamieWard: 'https://profiles.sussex.ac.uk/p92444-jamie-ward/about',
  synaesthesiaGroup: 'https://www.sussex.ac.uk/synaesthesia/',
  jaredMedina: 'https://www.jaredmedina.com/',
  davidBrang: 'https://sites.lsa.umich.edu/brang-lab/',
} as const

const linkClassName =
  'font-medium text-primary underline decoration-primary/30 underline-offset-4 transition-colors hover:decoration-primary'

export const Bio = () => {
  const { t } = useTranslation()

  return (
    <div className="flex flex-col gap-5 text-base/relaxed text-foreground/85 sm:text-lg/relaxed">
      <p className="text-lg/relaxed text-foreground sm:text-xl/relaxed">
        {t(TranslationKeys.LandingOrigin)}
      </p>
      <p>
        <Trans
          i18nKey={TranslationKeys.LandingDoctorate}
          components={{
            jamieWard: (
              <Link
                to={links.jamieWard}
                target="_blank"
                rel="noopener noreferrer"
                className={linkClassName}
              />
            ),
            synaesthesiaGroup: (
              <Link
                to={links.synaesthesiaGroup}
                target="_blank"
                rel="noopener noreferrer"
                className={linkClassName}
              />
            ),
          }}
        />
      </p>
      <p>
        <Trans
          i18nKey={TranslationKeys.LandingMasters}
          components={{
            jaredMedina: (
              <Link
                to={links.jaredMedina}
                target="_blank"
                rel="noopener noreferrer"
                className={linkClassName}
              />
            ),
          }}
        />
      </p>
      <p>
        <Trans
          i18nKey={TranslationKeys.LandingLabManager}
          components={{
            davidBrang: (
              <Link
                to={links.davidBrang}
                target="_blank"
                rel="noopener noreferrer"
                className={linkClassName}
              />
            ),
          }}
        />
      </p>
      <p>{t(TranslationKeys.LandingHobbies)}</p>
    </div>
  )
}
