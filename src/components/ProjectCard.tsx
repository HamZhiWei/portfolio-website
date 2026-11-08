import { Link } from 'react-router-dom'

import { GlowCard } from '@/components/GlowCard'
import type { Project } from '@/lib/projects'

type ProjectCardProps = {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <GlowCard className="project-card transition duration-300 hover:-translate-y-2">
      <article className="flex h-full flex-col">
        <div className="aspect-[16/10] overflow-hidden bg-secondary/40">
          <img
            src={project.cover}
            alt={project.title}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex flex-1 flex-col p-5">
          <h3 className="font-heading text-xl font-semibold text-text">{project.title}</h3>
          <p className="mt-2 flex-1 text-sm text-text-muted">{project.summary}</p>
          {project.tech.length > 0 ? (
            <ul className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((item) => (
                <li
                  key={item}
                  className="rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary"
                >
                  {item}
                </li>
              ))}
            </ul>
          ) : null}
          <Link
            to={`/projects/${project.slug}`}
            className="mt-5 inline-flex text-sm font-semibold text-accent hover:underline"
          >
            View Details
          </Link>
        </div>
      </article>
    </GlowCard>
  )
}
