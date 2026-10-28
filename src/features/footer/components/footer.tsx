import { LanguageSwitcher } from '@/components/language-switcher/language-switcher'

import { Copyright } from './copyright'
import { Designer } from './designer'
import { SocialLinks } from './social-links'

export const Footer = () => {
  return (
    <footer className="border-t bg-card text-card-foreground">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-6 text-sm text-muted-foreground">
        <SocialLinks />
        <div className="flex flex-col items-center gap-4 border-t pt-6 md:flex-row md:justify-between">
          <div className="flex flex-col items-center gap-1 md:items-start">
            <Designer />
            <Copyright />
          </div>
          <LanguageSwitcher />
        </div>
      </div>
    </footer>
  )
}
