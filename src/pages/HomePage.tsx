import { About } from '@/sections/About'
import { Contact } from '@/sections/Contact'
import { FeaturedProjects } from '@/sections/FeaturedProjects'
import { Hero } from '@/sections/Hero'
import { Skills } from '@/sections/Skills'

export function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <FeaturedProjects />
      <Contact />
    </>
  )
}
