import type { PropsWithChildren } from 'react'
import { NavLink as RouterNavLink } from 'react-router'

interface NavLinkProps {
  to: string
  onClick?: () => void
}

export const NavLink = ({
  to,
  onClick,
  children,
}: PropsWithChildren<NavLinkProps>) => {
  return (
    <RouterNavLink
      to={to}
      // Without `end`, "/" would match (and highlight) on every route
      end
      className={({ isActive }) =>
        `block rounded-md px-3 py-2 text-sm font-medium ${
          isActive
            ? 'bg-accent text-primary'
            : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
        }`
      }
      onClick={onClick}
    >
      {children}
    </RouterNavLink>
  )
}
