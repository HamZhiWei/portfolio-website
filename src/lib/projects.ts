import matter from 'gray-matter'

export type ProjectFrontmatter = {
  title: string
  slug: string
  featured: boolean
  order: number
  tech: string[]
  cover: string
  github: string
  demo: string
  summary: string
}

export type Project = ProjectFrontmatter & {
  content: string
}

const markdownModules = import.meta.glob('../content/projects/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>

function parseProject(raw: string): Project {
  const { data, content } = matter(raw)
  const frontmatter = data as Partial<ProjectFrontmatter>

  return {
    title: frontmatter.title ?? 'Untitled Project',
    slug: frontmatter.slug ?? 'untitled',
    featured: Boolean(frontmatter.featured),
    order: typeof frontmatter.order === 'number' ? frontmatter.order : 999,
    tech: Array.isArray(frontmatter.tech) ? frontmatter.tech.map(String) : [],
    cover: frontmatter.cover ?? '/images/projects/placeholder.svg',
    github: frontmatter.github ?? '',
    demo: frontmatter.demo ?? '',
    summary: frontmatter.summary ?? '',
    content: content.trim(),
  }
}

export function getAllProjects(): Project[] {
  return Object.values(markdownModules)
    .map(parseProject)
    .sort((a, b) => a.order - b.order)
}

export function getFeaturedProjects(limit = 3): Project[] {
  return getAllProjects()
    .filter((project) => project.featured)
    .slice(0, limit)
}

export function getProjectBySlug(slug: string): Project | undefined {
  return getAllProjects().find((project) => project.slug === slug)
}
