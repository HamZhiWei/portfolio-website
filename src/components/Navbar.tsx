import { useMemo } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'

import JellyRadio from '@/components/JellyRadio'
import { LanguageSwitcher } from '@/components/LanguageSwitcher'
import { useTranslation } from '@/hooks/useTranslation'

const NAV_ITEMS = [
  { value: 'home', path: '/', hash: '' },
  { value: 'about', path: '/', hash: 'about' },
  { value: 'skills', path: '/', hash: 'skills' },
  { value: 'projects', path: '/projects', hash: '' },
  { value: 'contact', path: '/', hash: 'contact' },
] as const

function activeNav(pathname: string, hash: string) {
  if (pathname.startsWith('/projects')) return 'projects'
  const id = hash.replace('#', '')
  if (NAV_ITEMS.some((item) => item.hash && item.hash === id)) return id
  return 'home'
}

export function Navbar() {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const location = useLocation()
  const current = activeNav(location.pathname, location.hash)

  const items = useMemo(
    () =>
      NAV_ITEMS.map((item) => ({
        value: item.value,
        label: t(`nav.${item.value}`),
      })),
    [t],
  )

  const handleChange = (value: string) => {
    const item = NAV_ITEMS.find((entry) => entry.value === value)
    if (!item) return

    if (item.hash) {
      navigate(`/#${item.hash}`)
      requestAnimationFrame(() => {
        document.getElementById(item.hash)?.scrollIntoView({ behavior: 'smooth' })
      })
      return
    }

    navigate(item.path)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <header className="sticky top-0 z-50 border-b border-primary/10 bg-background/90 backdrop-blur">
      <nav className="mx-auto flex min-h-[var(--nav-height)] max-w-6xl items-center justify-between gap-3 px-3 py-2 md:px-6">
        <NavLink to="/" className="shrink-0 font-heading text-lg font-bold text-primary">
          Zhi Wei
        </NavLink>

        <div className="min-w-0 flex-1 overflow-x-auto">
          <JellyRadio
            className="mx-auto"
            items={items}
            value={current}
            onChange={handleChange}
            size="sm"
            gap={6}
            radius={14}
            barge={4}
            swell={0.16}
            chipColor="#EFE4FF"
            activeColor="#7041C7"
            textColor="#251E30"
            activeTextColor="#FFFFFF"
            ariaLabel="Site sections"
          />
        </div>

        <LanguageSwitcher />
      </nav>
    </header>
  )
}
