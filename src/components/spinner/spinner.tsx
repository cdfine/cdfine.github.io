import type { SizeProp } from '@fortawesome/fontawesome-svg-core'
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useTranslation } from 'react-i18next'

import { TranslationKeys } from '@/locales/translation-keys'

interface SpinnerProps {
  size?: SizeProp
}

export const Spinner = ({ size = '2x' }: SpinnerProps) => {
  const { t } = useTranslation()

  return (
    <div
      role="status"
      className="flex min-h-full w-full flex-1 items-center justify-center"
    >
      <FontAwesomeIcon
        icon={faCircleNotch}
        size={size}
        spin
        className="text-primary"
      />
      <span className="sr-only">{t(TranslationKeys.SpinnerLabel)}</span>
    </div>
  )
}
