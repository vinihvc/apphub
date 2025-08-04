import type * as React from 'react'
import { cn } from '@/lib/cn'

export const Kbd = (props: React.ComponentProps<'kbd'>) => {
  const { className, ...rest } = props

  return (
    <kbd
      className={cn(
        'px-1.5 py-0.5',
        'font-mono text-xs tracking-wide',
        'bg-muted',
        'text-muted-foreground',
        'rounded-md border',
        'select-none',
        className,
      )}
      data-slot="kbd"
      {...rest}
    />
  )
}
