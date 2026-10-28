import type { ParseKeys } from 'i18next'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router'

import { ThemeSwitcher } from '@/components/theme-switcher/theme-switcher'
import { paths } from '@/config/paths'
import { TranslationKeys } from '@/locales/translation-keys'

import { MobileMenu } from './mobile-menu'
import { NavLink } from './nav-link'

const navItems: { to: string; label: ParseKeys }[] = [
  { to: paths.research.getHref(), label: TranslationKeys.NavbarResearch },
  { to: paths.teaching.getHref(), label: TranslationKeys.NavbarTeaching },
  { to: paths.dei.getHref(), label: TranslationKeys.NavbarDei },
  { to: paths.coaching.getHref(), label: TranslationKeys.NavbarCoaching },
  { to: paths.blog.getHref(), label: TranslationKeys.NavbarBlog },
]

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { t } = useTranslation()

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="border-b bg-card text-card-foreground">
      <nav
        aria-label={t(TranslationKeys.NavbarAriaLabel)}
        className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-3"
      >
        <Link
          to={paths.landing.getHref()}
          className="text-lg font-bold tracking-tight text-foreground"
          onClick={closeMenu}
        >
          {t(TranslationKeys.AppName)}
        </Link>

        <MobileMenu
          isOpen={isMenuOpen}
          onToggle={() => setIsMenuOpen((isOpen) => !isOpen)}
        >
          {navItems.length > 0 && (
            <ul className="flex flex-col items-center gap-1 md:mr-auto md:flex-row md:gap-2">
              {navItems.map((item) => (
                <li key={item.to}>
                  <NavLink to={item.to} onClick={closeMenu}>
                    {t(item.label)}
                  </NavLink>
                </li>
              ))}
            </ul>
          )}
          <ThemeSwitcher />
        </MobileMenu>
      </nav>
    </header>
  )
}
