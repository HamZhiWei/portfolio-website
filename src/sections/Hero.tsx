import TechText from '@/components/TechText'
import { useTranslation } from '@/hooks/useTranslation'

export function Hero() {
  const { t } = useTranslation()

  return (
    <section id="home" className="section-shell">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-accent">
        {t('hero.title')}
      </p>

      <div className="h-[min(42vw,280px)] w-full min-h-[160px]">
        <TechText
          text="My Porfolio"
          color="#7041C7"
          accentColor="#FF914D"
          fontFamily="'Space Grotesk', sans-serif"
          fontWeight={700}
          fontSize={150}
          letterSpacing={-0.04}
          align="center"
          intro="type"
          introDuration={1.6}
          sweep
          clickKick
          labels={false}
          frameShapes={['rectangle', 'circle', 'triangle']}
        />
      </div>

      <p className="mt-4 max-w-xl text-text-muted">{t('hero.placeholder')}</p>
    </section>
  )
}
