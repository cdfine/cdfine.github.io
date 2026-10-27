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
          path: paths.home.path,
          lazy: async () => {
            const { LandingRoute } = await import('./routes/landing')
            return { Component: LandingRoute }
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
