import { Mail, Phone } from 'lucide-react'

import { GlowCard } from '@/components/GlowCard'
import { GithubIcon, LinkedinIcon } from '@/components/SocialIcons'
import { SectionTitle } from '@/components/SectionTitle'
import { contactLinks } from '@/data/contact'
import { useTranslation } from '@/hooks/useTranslation'

const links = [
  {
    id: 'email',
    href: `mailto:${contactLinks.email}`,
    labelKey: 'contact.email',
    value: contactLinks.email,
    icon: Mail,
  },
  {
    id: 'github',
    href: contactLinks.github,
    labelKey: 'contact.github',
    value: 'HamZhiWei33',
    icon: GithubIcon,
  },
  {
    id: 'linkedin',
    href: contactLinks.linkedin,
    labelKey: 'contact.linkedin',
    value: 'zhi-wei-ham',
    icon: LinkedinIcon,
  },
  {
    id: 'phone',
    href: contactLinks.phoneHref,
    labelKey: 'contact.phone',
    value: contactLinks.phone,
    icon: Phone,
  },
] as const

export function Contact() {
  const { t } = useTranslation()

  return (
    <section id="contact" className="section-shell">
      <SectionTitle
        title={t('contact.title')}
        eyebrow={t('contact.eyebrow')}
        subtitle={t('contact.subtitle')}
      />

      <div className="grid gap-4 sm:grid-cols-2">
        {links.map((item) => {
          const Icon = item.icon
          return (
            <GlowCard key={item.id}>
              <a
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noreferrer noopener' : undefined}
                className="flex h-full items-center gap-4 p-5 transition hover:text-primary"
              >
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon size={20} />
                </span>
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                    {t(item.labelKey)}
                  </span>
                  <span className="mt-1 block text-sm font-medium text-text">{item.value}</span>
                </span>
              </a>
            </GlowCard>
          )
        })}
      </div>
    </section>
  )
}
