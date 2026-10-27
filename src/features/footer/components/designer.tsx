import { Trans } from 'react-i18next'
import { Link } from 'react-router'

import { designer } from '@/config/designer'
import { TranslationKeys } from '@/locales/translation-keys'

export const Designer = () => {
  return (
    <p>
      <Trans
        i18nKey={TranslationKeys.FooterDesigner}
        values={{ name: designer.name }}
        components={{
          website: (
            <Link
              to={designer.url}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-foreground"
            />
          ),
        }}
      />
    </p>
  )
}
