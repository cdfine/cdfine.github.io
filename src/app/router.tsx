import { useMemo } from 'react'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router/dom'

import { Spinner } from '@/components/spinner/spinner'
import { paths } from '@/config/paths'

const createAppRouter = () =>
  createBrowserRouter([
    {
      HydrateFallback: () => (
        <div className="flex min-h-dvh">
          <Spinner />
        </div>
      ),
      lazy: async () => {
        const { RootLayout } = await import('./routes/root')
        return { Component: RootLayout }
      },
      children: [
        {
          path: paths.landing.path,
          lazy: async () => {
            const { LandingRoute } = await import('./routes/landing')
            return { Component: LandingRoute }
          },
        },
        {
          path: paths.research.path,
          lazy: async () => {
            const { ResearchRoute } = await import('./routes/research')
            return { Component: ResearchRoute }
          },
        },
        {
          path: paths.teaching.path,
          lazy: async () => {
            const { TeachingRoute } = await import('./routes/teaching')
            return { Component: TeachingRoute }
          },
        },
        {
          path: paths.dei.path,
          lazy: async () => {
            const { DeiRoute } = await import('./routes/dei')
            return { Component: DeiRoute }
          },
        },
        {
          path: paths.coaching.path,
          lazy: async () => {
            const { CoachingRoute } = await import('./routes/coaching')
            return { Component: CoachingRoute }
          },
        },
        {
          path: paths.blog.path,
          lazy: async () => {
            const { BlogRoute } = await import('./routes/blog')
            return { Component: BlogRoute }
          },
        },
        {
          path: '*',
          lazy: async () => {
            const { NotFoundRoute } = await import('./routes/not-found')
            return { Component: NotFoundRoute }
          },
        },
      ],
    },
  ])

export const AppRouter = () => {
  const router = useMemo(() => createAppRouter(), [])

  return <RouterProvider router={router} />
}
