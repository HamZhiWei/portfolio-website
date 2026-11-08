import LogoLoop from '@/components/LogoLoop'
import { SectionTitle } from '@/components/SectionTitle'
import { SkillCard } from '@/components/SkillCard'
import { SkillLogo } from '@/components/SkillLogo'
import { skillLogos } from '@/data/skillLogos'
import { skills } from '@/data/skills'
import { useTranslation } from '@/hooks/useTranslation'

export function Skills() {
  const { t } = useTranslation()

  return (
    <section id="skills" className="section-shell">
      <SectionTitle title={t('skills.title')} eyebrow={t('skills.eyebrow')} />
      {skills.length > 0 ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group) => (
            <SkillCard
              key={group.id}
              category={t(`skills.categories.${group.id}`)}
              skills={group.items}
            />
          ))}
        </div>
      ) : (
        <p className="text-text-muted">{t('skills.placeholder')}</p>
      )}

      <div className="mt-12">
        <LogoLoop
          logos={skillLogos}
          speed={90}
          direction="left"
          logoHeight={36}
          gap={44}
          fadeOut
          fadeOutWidth={0.12}
          scaleOnHover
          labels="hover"
          pauseOnHover
          ariaLabel={t('skills.logoLoopLabel')}
          renderItem={(item) =>
            'src' in item ? (
              <SkillLogo src={item.src} title={item.title ?? item.alt ?? ''} />
            ) : null
          }
        />
      </div>
    </section>
  )
}
