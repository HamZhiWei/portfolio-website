const DEFAULT_SRC = '/images/skills/default.svg'

type SkillLogoProps = {
  src: string
  title: string
}

export function SkillLogo({ src, title }: SkillLogoProps) {
  return (
    <img
      src={src}
      alt=""
      title={title}
      width={36}
      height={36}
      loading="lazy"
      decoding="async"
      draggable={false}
      onError={(event) => {
        const image = event.currentTarget
        if (image.src.includes('default.svg')) return
        image.src = DEFAULT_SRC
      }}
    />
  )
}
