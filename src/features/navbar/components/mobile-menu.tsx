import { useId, type PropsWithChildren } from 'react'
import { useTranslation } from 'react-i18next'

import { TranslationKeys } from '@/locales/translation-keys'

import { MenuIcon } from './menu-icon'

interface MobileMenuProps {
  isOpen: boolean
  onToggle: () => void
}

export const MobileMenu = ({
  isOpen,
  onToggle,
  children,
}: PropsWithChildren<MobileMenuProps>) => {
  // Generated so the menu's id can't clash with any other id on the page
  const menuId = useId()
  const { t } = useTranslation()

  return (
    <>
      <button
        type="button"
        className="rounded-md p-2 text-muted-foreground hover:bg-accent hover:text-accent-foreground md:hidden"
        aria-controls={menuId}
        aria-expanded={isOpen}
        aria-label={t(
          isOpen
            ? TranslationKeys.NavbarCloseMenu
            : TranslationKeys.NavbarOpenMenu,
        )}
        onClick={onToggle}
      >
        <MenuIcon isOpen={isOpen} />
      </button>

      <div
        id={menuId}
        className={`${isOpen ? 'flex' : 'hidden'} w-full flex-col items-center gap-4 md:flex md:w-auto md:flex-1 md:flex-row md:gap-6`}
      >
        {children}
      </div>
    </>
  )
}
