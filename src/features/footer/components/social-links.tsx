import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import {
  faBluesky,
  faGoogleScholar,
  faOrcid,
  faResearchgate,
  faSquareLinkedin,
} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faDna, faFlask, faLandmark } from '@fortawesome/free-solid-svg-icons'
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
  {
    to: 'https://bsky.app/profile/carlifine.bsky.social',
    icon: faBluesky,
    label: TranslationKeys.FooterSocialLinksBluesky,
  },
  {
    to: 'https://www.linkedin.com/in/carlifine/',
    icon: faSquareLinkedin,
    label: TranslationKeys.FooterSocialLinksLinkedIn,
  },
  {
    to: 'https://scholar.google.com/citations?user=I3SqY0kAAAAJ&hl=en',
    icon: faGoogleScholar,
    label: TranslationKeys.FooterSocialLinksGoogleScholar,
  },
  {
    to: 'https://profiles.sussex.ac.uk/p503745-carli-fine',
    icon: faLandmark,
    label: TranslationKeys.FooterSocialLinksSussex,
  },
  {
    to: 'https://orcid.org/0000-0003-3691-3410',
    icon: faOrcid,
    label: TranslationKeys.FooterSocialLinksOrcid,
  },
  {
    to: 'https://osf.io/65hba',
    icon: faFlask,
    label: TranslationKeys.FooterSocialLinksOsf,
  },
  {
    to: 'https://www.webofscience.com/wos/author/record/PLS-1006-2026',
    icon: faDna,
    label: TranslationKeys.FooterSocialLinksWebOfScience,
  },
  {
    to: 'https://www.researchgate.net/profile/Carli-Fine',
    icon: faResearchgate,
    label: TranslationKeys.FooterSocialLinksResearchGate,
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
