import type { PropsWithChildren, ReactNode } from 'react'

interface MainLayoutProps {
  header?: ReactNode
  footer?: ReactNode
}

export const MainLayout = ({
  header,
  footer,
  children,
}: PropsWithChildren<MainLayoutProps>) => {
  return (
    <div className="flex min-h-dvh flex-col">
      {header}
      <main className="flex flex-1 flex-col">{children}</main>
      {footer}
    </div>
  )
}
