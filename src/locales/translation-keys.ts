import type { ParseKeys } from 'i18next'

// Every value must be a real key in en-US.json, or tsc fails
export const TranslationKeys = {
  AppName: 'app.name',

  LandingTitle: 'landing.title',
  LandingDescription: 'landing.description',

  NotFoundTitle: 'notFound.title',
  NotFoundDescription: 'notFound.description',
  NotFoundHomeLink: 'notFound.homeLink',

  LanguageSwitcherLabel: 'languageSwitcher.label',
  LanguageSwitcherEnUS: 'languageSwitcher.en-US',
  LanguageSwitcherEnGB: 'languageSwitcher.en-GB',

  ThemeSwitcherLabel: 'themeSwitcher.label',
  ThemeSwitcherSystem: 'themeSwitcher.system',
  ThemeSwitcherLight: 'themeSwitcher.light',
  ThemeSwitcherDark: 'themeSwitcher.dark',

  SpinnerLabel: 'spinner.label',

  NavbarAriaLabel: 'navbar.ariaLabel',
  NavbarOpenMenu: 'navbar.openMenu',
  NavbarCloseMenu: 'navbar.closeMenu',

  FooterDesigner: 'footer.designer',
  FooterCopyright: 'footer.copyright',
} as const satisfies Record<string, ParseKeys>
