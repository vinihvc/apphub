import { cn } from '@/lib/cn'
import { CollectionListBlock } from '../../../../components/blocks/collection-list/collection-list'

interface CollectionsSectionProps extends React.ComponentProps<'section'> {}

export const CollectionsSection = (props: CollectionsSectionProps) => {
  const { className, ...rest } = props

  return (
    <section
      className={cn(
        'border-t bg-primary-foreground py-12 md:py-16 lg:py-20',
        className,
      )}
      {...rest}
    >
      <div className="container grid w-full place-items-center gap-8">
        <div className="grid max-w-screen-sm gap-4 text-center">
          <h2 className="font-bold text-3xl tracking-tight sm:text-4xl md:text-5xl">
            Collections
          </h2>

          <p className="text-balance text-lg text-muted-foreground">
            Copy scripts to install all apps in at once
          </p>
        </div>

        <CollectionListBlock />
      </div>
    </section>
  )
}
