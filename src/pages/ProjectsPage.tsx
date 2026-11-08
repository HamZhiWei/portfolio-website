import { ProjectCard } from '@/components/ProjectCard'
import { SectionTitle } from '@/components/SectionTitle'
import { useTranslation } from '@/hooks/useTranslation'
import { getAllProjects } from '@/lib/projects'

export function ProjectsPage() {
  const { t } = useTranslation()
  const projects = getAllProjects()

  return (
    <section className="section-shell">
      <SectionTitle title={t('projectsPage.title')} />
      {projects.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      ) : (
        <p className="text-text-muted">{t('projectsPage.placeholder')}</p>
      )}
    </section>
  )
}
