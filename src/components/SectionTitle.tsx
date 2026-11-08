type SectionTitleProps = {
  title: string
  subtitle?: string
  eyebrow?: string
}

export function SectionTitle({ title, subtitle, eyebrow }: SectionTitleProps) {
  return (
    <div className="mb-10 max-w-2xl">
      {eyebrow ? (
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.16em] text-accent">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-heading text-3xl font-bold text-text md:text-4xl">{title}</h2>
      {subtitle ? <p className="mt-3 text-text-muted">{subtitle}</p> : null}
    </div>
  )
}
