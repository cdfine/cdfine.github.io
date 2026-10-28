export const paths = {
  landing: {
    path: '/',
    getHref: () => '/',
  },
  research: {
    path: '/research',
    getHref: () => '/research',
  },
  teaching: {
    path: '/teaching',
    getHref: () => '/teaching',
  },
  dei: {
    path: '/dei',
    getHref: () => '/dei',
  },
  coaching: {
    path: '/coaching',
    getHref: () => '/coaching',
  },
  blog: {
    path: '/blog',
    getHref: () => '/blog',
  },
} as const
