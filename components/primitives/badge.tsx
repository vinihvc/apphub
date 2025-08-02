import { cn } from '@/lib/cn'
import { type VariantProps, cva } from 'class-variance-authority'
import { Slot } from 'radix-ui'
import type * as React from 'react'

export const badgeVariants = cva(
  [
    'w-fit',
    'inline-flex shrink-0 items-center justify-center gap-1',
    '',
    'whitespace-nowrap font-medium text-xs',
    'rounded-md border',
    'select-none overflow-hidden',
    'transition-[color,box-shadow]',
    'focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50',
    'aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40',
    '[&>svg]:pointer-events-none [&>svg]:size-3',
  ],
  {
    variants: {
      variant: {
        solid: [
          'border-transparent',
          'bg-primary',
          'text-primary-foreground',
          '[a&]:hover:bg-primary/90',
        ],
        destructive: [
          'border-transparent',
          'bg-destructive',
          'text-white',
          'focus-visible:ring-destructive/20',
          'dark:bg-destructive/60',
          'dark:focus-visible:ring-destructive/40',
          '[a&]:hover:bg-destructive/90',
        ],
        outline: [
          'text-foreground',
          '[a&]:hover:bg-accent',
          '[a&]:hover:text-accent-foreground',
        ],
      },
      size: {
        sm: 'h-5 px-2',
        md: 'h-6 px-3',
        lg: 'h-8 px-4',
      },
    },
    defaultVariants: {
      variant: 'solid',
      size: 'md',
    },
  },
)

interface BadgeProps
  extends React.ComponentProps<'span'>,
    VariantProps<typeof badgeVariants> {
  /**
   * If true, the badge will be rendered as a child element.
   */
  asChild?: boolean
}

export const Badge = (props: BadgeProps) => {
  const { className, variant, size, asChild = false, ...rest } = props

  const Comp = asChild ? Slot.Root : 'span'

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant, size }), className)}
      {...rest}
    />
  )
}
