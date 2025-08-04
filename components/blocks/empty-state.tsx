import { CircleOff } from 'lucide-react'
import { cn } from '@/lib/cn'

interface EmptyStateProps extends React.ComponentProps<'div'> {
  /**
   * The title of the empty state
   */
  title: string
  /**
   * The description of the empty state
   */
  description: string
}

export const EmptyState = (props: EmptyStateProps) => {
  const { className, ...rest } = props

  return (
    <div
      className={cn('grid place-items-center gap-4 py-10', className)}
      {...rest}
    >
      <CircleOff className="text-primary" />

      <div className="flex flex-col items-center gap-1">
        <h2 className="font-bold text-lg">{props.title}</h2>

        <p className="font-medium text-muted-foreground text-sm">
          {props.description}
        </p>
      </div>
    </div>
  )
}
