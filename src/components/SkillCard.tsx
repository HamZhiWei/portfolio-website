import { GlowCard } from '@/components/GlowCard'

type SkillCardProps = {
  category: string
  skills?: string[]
}

export function SkillCard({ category, skills = [] }: SkillCardProps) {
  return (
    <GlowCard>
      <article className="h-full p-5">
        <h3 className="font-heading text-lg font-semibold text-primary">{category}</h3>
        {skills.length > 0 ? (
          <ul className="mt-3 flex flex-wrap gap-2">
            {skills.map((skill) => (
              <li
                key={skill}
                className="rounded-full bg-secondary/30 px-3 py-1 text-sm text-text"
              >
                {skill}
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-3 text-sm text-text-muted">Skills placeholder</p>
        )}
      </article>
    </GlowCard>
  )
}
