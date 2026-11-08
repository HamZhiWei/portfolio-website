import type { ReactNode } from 'react'

export type JellyRadioItem =
  | string
  | {
      value: string
      label: string
      icon?: ReactNode
      disabled?: boolean
    }

export type JellyRadioProps = {
  items?: JellyRadioItem[]
  value?: string
  defaultValue?: string
  onChange?: (value: string, index: number) => void
  chipColor?: string
  activeColor?: string
  textColor?: string
  activeTextColor?: string
  size?: 'sm' | 'md' | 'lg'
  gap?: number
  radius?: number
  swell?: number
  barge?: number
  shrink?: number
  jelly?: number
  bounce?: number
  stagger?: number
  stiffness?: number
  disabled?: boolean
  ariaLabel?: string
  className?: string
}

declare const JellyRadio: (props: JellyRadioProps) => ReactNode

export default JellyRadio
