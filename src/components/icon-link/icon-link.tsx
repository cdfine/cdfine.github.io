import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { PropsWithChildren } from 'react'
import { Link } from 'react-router'

interface IconLinkProps {
  to: string
  icon: IconDefinition
  openInNewTab?: boolean
}

export const IconLink = ({
  to,
  icon,
  openInNewTab = true,
  children,
}: PropsWithChildren<IconLinkProps>) => {
  return (
    <Link
      to={to}
      {...(openInNewTab && { target: '_blank', rel: 'noopener noreferrer' })}
      className="inline-flex items-center gap-2 rounded-md px-2 py-1 transition-colors hover:bg-accent hover:text-accent-foreground"
    >
      <FontAwesomeIcon icon={icon} />
      <span>{children}</span>
    </Link>
  )
}
