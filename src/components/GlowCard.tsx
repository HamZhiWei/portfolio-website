import type { ReactNode } from 'react'

import BorderGlow from '@/components/BorderGlow'

type GlowCardProps = {
  children: ReactNode
  className?: string
  innerClassName?: string
  backgroundColor?: string
  glowColor?: string
  animated?: boolean
}

const BRAND_COLORS = ['#7041C7', '#FF914D', '#C8A9F5']

export function GlowCard({
  children,
  className = '',
  innerClassName = '',
  backgroundColor = '#FFFFFF',
  glowColor = '270 70 78',
  animated = false,
}: GlowCardProps) {
  return (
    <BorderGlow
      className={className}
      innerClassName={innerClassName}
      backgroundColor={backgroundColor}
      glowColor={glowColor}
      colors={BRAND_COLORS}
      borderRadius={20}
      glowRadius={28}
      glowIntensity={1}
      fillOpacity={0.4}
      animated={animated}
    >
      {children}
    </BorderGlow>
  )
}
