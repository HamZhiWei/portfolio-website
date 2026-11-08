import type { CSSProperties, ReactNode } from 'react'

export type TechTextProps = {
  text?: string
  fontFamily?: string
  fontWeight?: number | string
  fontSize?: number
  letterSpacing?: number
  color?: string
  accentColor?: string
  align?: 'left' | 'center' | 'right'
  reach?: number
  softness?: number
  dashLength?: number
  dashGap?: number
  strokeWidth?: number
  lineStyle?: 'solid' | 'dashed'
  reveal?: 'letter' | 'area'
  specks?: number
  selection?: boolean
  labels?: boolean
  draggable?: boolean
  bounce?: number
  sweep?: boolean
  speed?: number
  clickKick?: boolean
  intro?: 'none' | 'type' | 'assemble' | 'metrics'
  introDuration?: number
  guides?: boolean
  /** Shapes randomly chosen each time letter focus changes. */
  frameShapes?: Array<'rectangle' | 'circle' | 'triangle'>
  className?: string
  style?: CSSProperties
}

declare const TechText: (props: TechTextProps) => ReactNode

export default TechText
