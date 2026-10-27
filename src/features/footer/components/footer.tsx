import { LanguageSwitcher } from '@/components/language-switcher/language-switcher'

import { Copyright } from './copyright'
import { Designer } from './designer'

export const Footer = () => {
  return (
    <footer className="border-t bg-card text-card-foreground">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-6 text-sm text-muted-foreground md:flex-row md:justify-between">
        <div className="flex flex-col items-center gap-1 md:items-start">
          <Designer />
          <Copyright />
        </div>
        <LanguageSwitcher />
      </div>
    </footer>
  )
}
