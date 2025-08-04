import type * as React from 'react'
import { cn } from '@/lib/cn'

export const Card = ({ className, ...props }: React.ComponentProps<'div'>) => {
  return (
    <div
      className={cn(
        'rounded-md border bg-card text-card-foreground shadow-sm transition-all hover:bg-accent/50',
        className,
      )}
      data-slot="card"
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
      className={cn(
        '@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6',
        className,
      )}
      data-slot="card-header"
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
      className={cn('font-semibold leading-none', className)}
      data-slot="card-title"
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
      className={cn('text-muted-foreground text-sm', className)}
      data-slot="card-description"
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
      className={cn(
        'col-start-2 row-span-2 row-start-1 self-start justify-self-end',
        className,
      )}
      data-slot="card-action"
      {...props}
    />
  )
}

export const CardContent = ({
  className,
  ...props
}: React.ComponentProps<'div'>) => {
  return (
    <div className={cn('p-4', className)} data-slot="card-content" {...props} />
  )
}

export const CardFooter = ({
  className,
  ...props
}: React.ComponentProps<'div'>) => {
  return (
    <div
      className={cn('flex items-center px-6 [.border-t]:pt-6', className)}
      data-slot="card-footer"
      {...props}
    />
  )
}
