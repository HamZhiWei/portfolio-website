import { Link, useParams } from 'react-router-dom'

import { MarkdownContent } from '@/components/MarkdownContent'
import { useTranslation } from '@/hooks/useTranslation'
import { getProjectBySlug } from '@/lib/projects'

export function ProjectDetailPage() {
  const { slug = '' } = useParams()
  const { t } = useTranslation()
  const project = getProjectBySlug(slug)

  if (!project) {
    return (
      <section className="section-shell">
        <p className="text-text-muted">{t('projectDetail.notFound')}</p>
        <Link to="/projects" className="mt-4 inline-flex text-sm font-semibold text-accent">
          {t('projectDetail.back')}
        </Link>
      </section>
    )
  }

  return (
    <article className="section-shell max-w-3xl">
      <Link to="/projects" className="text-sm font-semibold text-accent hover:underline">
        ← {t('projectDetail.back')}
      </Link>

      <header className="mt-6">
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">
          Project
        </p>
        <h1 className="mt-2 font-heading text-4xl font-bold text-primary">{project.title}</h1>
        <p className="mt-3 text-text-muted">{project.summary}</p>
        {project.tech.length > 0 ? (
          <ul className="mt-4 flex flex-wrap gap-2">
            {project.tech.map((item) => (
              <li
                key={item}
                className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
              >
                {item}
              </li>
            ))}
          </ul>
        ) : null}
      </header>

      <div className="mt-8 overflow-hidden rounded-[var(--radius-card)] border border-primary/10">
        <img src={project.cover} alt={project.title} className="w-full object-cover" />
      </div>

      <div className="mt-10">
        <MarkdownContent content={project.content} />
      </div>
    </article>
  )
}
