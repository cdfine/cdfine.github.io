import type { ParseKeys } from 'i18next'

// Every value must be a real key in en-US.json, or tsc fails
export const TranslationKeys = {
  AppName: 'app.name',

  LandingTitle: 'landing.title',
  LandingDescription: 'landing.description',

  ResearchTitle: 'research.title',
  ResearchDescription: 'research.description',

  TeachingTitle: 'teaching.title',
  TeachingDescription: 'teaching.description',

  DeiTitle: 'dei.title',
  DeiDescription: 'dei.description',

  CoachingTitle: 'coaching.title',
  CoachingDescription: 'coaching.description',

  BlogTitle: 'blog.title',
  BlogDescription: 'blog.description',

  NotFoundTitle: 'notFound.title',
  NotFoundDescription: 'notFound.description',
  NotFoundHomeLink: 'notFound.homeLink',

  LanguageSwitcherLabel: 'languageSwitcher.label',
  LanguageSwitcherEnUS: 'languageSwitcher.en-US',
  LanguageSwitcherEnGB: 'languageSwitcher.en-GB',

  ThemeSwitcherLabel: 'themeSwitcher.label',
  ThemeSwitcherMidwestPrincess: 'themeSwitcher.midwestPrincess',
  ThemeSwitcherPinkPonyClub: 'themeSwitcher.pinkPonyClub',
  ThemeSwitcherHotToGo: 'themeSwitcher.hotToGo',
  ThemeSwitcherRedWineSupernova: 'themeSwitcher.redWineSupernova',
  ThemeSwitcherGoodLuckBabe: 'themeSwitcher.goodLuckBabe',
  ThemeSwitcherValentino: 'themeSwitcher.valentino',

  SpinnerLabel: 'spinner.label',

  NavbarAriaLabel: 'navbar.ariaLabel',
  NavbarOpenMenu: 'navbar.openMenu',
  NavbarCloseMenu: 'navbar.closeMenu',
  NavbarResearch: 'navbar.research',
  NavbarTeaching: 'navbar.teaching',
  NavbarDei: 'navbar.dei',
  NavbarCoaching: 'navbar.coaching',
  NavbarBlog: 'navbar.blog',

  FooterDesigner: 'footer.designer',
  FooterCopyright: 'footer.copyright',
} as const satisfies Record<string, ParseKeys>
