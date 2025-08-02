import { cn } from '@/lib/cn'
import type * as React from 'react'

export const Card = ({ className, ...props }: React.ComponentProps<'div'>) => {
  return (
    <div
      data-slot="card"
      className={cn(
        'rounded-md border bg-card text-card-foreground shadow-sm transition-all hover:bg-accent/50',
        className,
      )}
      {...props}
    />
  )
}

export const CardHeader = ({
  className,
  ...props
}: React.ComponentProps<'div'>) => {
  return (
    <div
      data-slot="card-header"
      className={cn(
        '@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6',
        className,
      )}
      {...props}
    />
  )
}

export const CardTitle = ({
  className,
  ...props
}: React.ComponentProps<'div'>) => {
  return (
    <div
      data-slot="card-title"
      className={cn('font-semibold leading-none', className)}
      {...props}
    />
  )
}

export const CardDescription = ({
  className,
  ...props
}: React.ComponentProps<'div'>) => {
  return (
    <div
      data-slot="card-description"
      className={cn('text-muted-foreground text-sm', className)}
      {...props}
    />
  )
}

export const CardAction = ({
  className,
  ...props
}: React.ComponentProps<'div'>) => {
  return (
    <div
      data-slot="card-action"
      className={cn(
        'col-start-2 row-span-2 row-start-1 self-start justify-self-end',
        className,
      )}
      {...props}
    />
  )
}

export const CardContent = ({
  className,
  ...props
}: React.ComponentProps<'div'>) => {
  return (
    <div data-slot="card-content" className={cn('p-4', className)} {...props} />
  )
}

export const CardFooter = ({
  className,
  ...props
}: React.ComponentProps<'div'>) => {
  return (
    <div
      data-slot="card-footer"
      className={cn('flex items-center px-6 [.border-t]:pt-6', className)}
      {...props}
    />
  )
}
