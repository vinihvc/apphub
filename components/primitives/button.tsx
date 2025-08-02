import { type VariantProps, cva } from 'class-variance-authority'
import { Slot } from 'radix-ui'
import type * as React from 'react'

import { cn } from '@/lib/cn'

const buttonVariants = cva(
  [
    'inline-flex shrink-0 items-center justify-center gap-2',
    'rounded-md border',
    'whitespace-nowrap font-medium text-sm',
    'outline-none',
    'transition-all',
    'focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background',
    'disabled:pointer-events-none disabled:opacity-50',
    'aria-invalid:border-destructive aria-invalid:ring-destructive/20',
    'dark:aria-invalid:ring-destructive/40',
    "[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  ],
  {
    variants: {
      variant: {
        solid: [
          'bg-primary',
          'text-primary-foreground',
          'shadow-xs',
          'hover:bg-primary/90',
        ],
        destructive: [
          'bg-destructive',
          'text-white',
          'shadow-xs',
          'hover:bg-destructive/90',
          'focus-visible:ring-destructive/20',
          'dark:bg-destructive/60 dark:focus-visible:ring-destructive/40',
        ],
        outline: [
          'border',
          'bg-background',
          'shadow-xs',
          'hover:bg-accent hover:text-accent-foreground',
          'dark:border-input dark:bg-input/30 dark:hover:bg-accent/50',
        ],
        ghost: [
          'border-transparent',
          'hover:bg-accent hover:text-accent-foreground',
          'dark:hover:bg-accent/50',
        ],
        link: [
          'border-transparent',
          'text-primary',
          'underline-offset-4',
          'hover:underline',
        ],
      },
      size: {
        sm: 'h-8 gap-1.5 rounded-md px-3 has-[>svg]:px-2.5',
        md: 'h-9 px-4 py-2 has-[>svg]:px-3',
        lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
        icon: 'size-8',
      },
    },
    defaultVariants: {
      variant: 'solid',
      size: 'md',
    },
  },
)

interface ButtonProps
  extends React.ComponentProps<'button'>,
    VariantProps<typeof buttonVariants> {
  /**
   * If true, the button will be rendered as a child element.
   */
  asChild?: boolean
}

export const Button = (props: ButtonProps) => {
  const { className, variant, size, asChild, ...rest } = props

  const Comp = asChild ? Slot.Root : 'button'

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...rest}
    />
  )
}
