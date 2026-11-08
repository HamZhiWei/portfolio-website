import { Outlet } from 'react-router-dom'

import ClickSpark from '@/components/ClickSpark'
import { Footer } from '@/components/Footer'
import { Navbar } from '@/components/Navbar'

export function MainLayout() {
  return (
    <ClickSpark
      sparkColor="#7041C7"
      sparkCount={10}
      sparkRadius={28}
      duration={450}
      style={{ minHeight: '100vh', height: 'auto' }}
    >
      <div className="flex min-h-screen flex-col bg-background text-text">
        <Navbar />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </ClickSpark>
  )
}
