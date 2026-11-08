import type { CSSProperties, ReactNode, Ref } from 'react'

export type ClickSparkHandle = {
  spark: (x?: number, y?: number) => void
}

export type ClickSparkProps = {
  sparkColor?: string | string[]
  sparkSize?: number
  sparkRadius?: number
  sparkCount?: number
  sparkWidth?: number
  duration?: number
  easing?: 'linear' | 'ease-in' | 'ease-out' | 'ease-in-out' | 'spring'
  extraScale?: number
  shape?: 'line' | 'streak' | 'dot' | 'star'
  randomness?: number
  gravity?: number
  spread?: number
  direction?: number
  glow?: number
  ring?: boolean
  layer?: 'front' | 'back'
  disabled?: boolean
  className?: string
  style?: CSSProperties
  children?: ReactNode
  ref?: Ref<ClickSparkHandle>
}

declare const ClickSpark: (props: ClickSparkProps) => ReactNode

export default ClickSpark
