import aboutPortrait from '@/assets/about-portrait.gif'
import { GlowCard } from '@/components/GlowCard'
import { SectionTitle } from '@/components/SectionTitle'
import { useTranslation } from '@/hooks/useTranslation'

export function About() {
  const { t } = useTranslation()

  return (
    <section id="about" className="section-shell">
      <SectionTitle title={t('about.title')} eyebrow={t('about.eyebrow')} />

      <div className="grid items-center gap-8 md:grid-cols-2">
        <GlowCard animated>
          <article className="h-full p-6 md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">
              {t('about.introTitle')}
            </p>
            <p className="mt-3 text-[0.975rem] leading-relaxed text-text-muted">
              {t('about.intro')}
            </p>
          </article>
        </GlowCard>

        <div className="flex justify-center md:justify-end">
          <img
            src={aboutPortrait}
            alt={t('about.portraitAlt')}
            className="h-auto w-full max-w-[360px] object-contain"
          />
        </div>
      </div>
    </section>
  )
}
