import type { ReactNode } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({
  children,
}: LayoutProps) {

  return (
    <div className='flex min-h-screen flex-col bg-[#131313] text-[#e5e2e1]'>

      <Navbar />

      <main className='flex-1'>
        {children}
      </main>

      <Footer />

    </div>
  )
}