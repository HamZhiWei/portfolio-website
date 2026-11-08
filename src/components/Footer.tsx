import { Mail } from 'lucide-react'

import { GithubIcon, LinkedinIcon } from '@/components/SocialIcons'
import { contactLinks } from '@/data/contact'
import { useTranslation } from '@/hooks/useTranslation'

export function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="border-t border-primary/10 bg-dark text-secondary">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm md:flex-row md:px-6">
        <p>{t('footer.copyright')}</p>
        <div className="flex items-center gap-4">
          <a
            href={`mailto:${contactLinks.email}`}
            className="hover:text-accent"
            aria-label={t('contact.email')}
          >
            <Mail size={18} />
          </a>
          <a
            href={contactLinks.github}
            target="_blank"
            rel="noreferrer noopener"
            className="hover:text-accent"
            aria-label={t('contact.github')}
          >
            <GithubIcon size={18} />
          </a>
          <a
            href={contactLinks.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            className="hover:text-accent"
            aria-label={t('contact.linkedin')}
          >
            <LinkedinIcon size={18} />
          </a>
        </div>
        <p className="text-secondary/80">Creativity meets Technology.</p>
      </div>
    </footer>
  )
}
