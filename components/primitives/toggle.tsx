import { Toggle as TogglePrimitive } from 'radix-ui'
import { cn } from '@/lib/cn'

export const Toggle = (
  props: React.ComponentProps<typeof TogglePrimitive.Root>,
) => {
  const { className, ...rest } = props

  return (
    <TogglePrimitive.Root
      className={cn(
        'focus-visible:border-ring focus-visible:ring-[2px] focus-visible:ring-ring/50',
        'disabled:pointer-events-none disabled:opacity-50',
        className,
      )}
      data-slot="toggle"
      {...rest}
    />
  )
}
