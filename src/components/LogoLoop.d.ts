import type { CSSProperties, ReactNode } from 'react'

export type LogoLoopImageItem = {
  src: string
  srcSet?: string
  sizes?: string
  width?: number
  height?: number
  alt?: string
  title?: string
  href?: string
  hoverColor?: string
}

export type LogoLoopNodeItem = {
  node: ReactNode
  title?: string
  ariaLabel?: string
  href?: string
  hoverColor?: string
}

export type LogoLoopItem = LogoLoopImageItem | LogoLoopNodeItem

export type LogoLoopProps = {
  logos: LogoLoopItem[]
  speed?: number
  direction?: 'left' | 'right' | 'up' | 'down'
  width?: number | string
  logoHeight?: number
  gap?: number
  pauseOnHover?: boolean
  hoverSpeed?: number
  fadeOut?: boolean
  fadeOutWidth?: number
  scaleOnHover?: boolean
  layout?: 'line' | 'wave' | 'arc' | 'orbit'
  bend?: number
  focus?: number
  magnify?: number
  tiltX?: number
  tiltY?: number
  step?: boolean
  muted?: number
  labels?: 'none' | 'inline' | 'below' | 'hover'
  draggable?: boolean
  scrollBoost?: number
  intro?: boolean
  renderItem?: (item: LogoLoopItem, key: string) => ReactNode
  ariaLabel?: string
  className?: string
  style?: CSSProperties
}

export const LogoLoop: (props: LogoLoopProps) => ReactNode

export default LogoLoop
