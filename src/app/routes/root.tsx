import { Outlet } from 'react-router'

import { MainLayout } from '@/components/layouts/main-layout'
import { Footer } from '@/features/footer/components/footer'
import { Navbar } from '@/features/navbar/components/navbar'

export const RootLayout = () => {
  return (
    <MainLayout header={<Navbar />} footer={<Footer />}>
      <Outlet />
    </MainLayout>
  )
}
