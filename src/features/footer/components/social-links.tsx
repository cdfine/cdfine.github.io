import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import type { ParseKeys } from 'i18next'
import { useTranslation } from 'react-i18next'

import { IconLink } from '@/components/icon-link/icon-link'
import { TranslationKeys } from '@/locales/translation-keys'

const socialLinks: {
  to: string
  icon: IconDefinition
  label: ParseKeys
  openInNewTab?: boolean
}[] = [
  {
    to: 'mailto:c.fine@sussex.ac.uk',
    icon: faEnvelope,
    label: TranslationKeys.FooterSocialLinksEmail,
    openInNewTab: false,
  },
]

export const SocialLinks = () => {
  const { t } = useTranslation()

  return (
    <nav aria-label={t(TranslationKeys.FooterSocialLinksAriaLabel)}>
      <ul className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 md:justify-start">
        {socialLinks.map((link) => (
          <li key={link.to}>
            <IconLink
              to={link.to}
              icon={link.icon}
              openInNewTab={link.openInNewTab}
            >
              {t(link.label)}
            </IconLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
