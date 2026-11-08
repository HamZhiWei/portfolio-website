import { Link } from 'react-router-dom'

import { ProjectCard } from '@/components/ProjectCard'
import { SectionTitle } from '@/components/SectionTitle'
import { useTranslation } from '@/hooks/useTranslation'
import { getFeaturedProjects } from '@/lib/projects'

export function FeaturedProjects() {
  const { t } = useTranslation()
  const featured = getFeaturedProjects(3)

  return (
    <section id="featured-projects" className="section-shell">
      <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <SectionTitle title={t('featuredProjects.title')} />
        <Link
          to="/projects"
          className="inline-flex items-center gap-1 text-sm font-semibold text-accent hover:underline"
        >
          {t('featuredProjects.viewMore')} →
        </Link>
      </div>

      {featured.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      ) : (
        <p className="text-text-muted">{t('featuredProjects.placeholder')}</p>
      )}
    </section>
  )
}
