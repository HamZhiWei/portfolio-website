import type { ButtonHTMLAttributes, ReactNode } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'ghost'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
  variant?: ButtonVariant
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-primary text-white hover:bg-[#5d34ad]',
  secondary:
    'bg-accent text-white hover:bg-[#f07d35]',
  ghost:
    'bg-transparent text-primary border border-primary/30 hover:bg-secondary/30',
}

export function Button({
  children,
  variant = 'primary',
  className = '',
  type = 'button',
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`inline-flex items-center justify-center gap-2 rounded-[var(--radius-button)] px-5 py-2.5 text-sm font-semibold transition ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
