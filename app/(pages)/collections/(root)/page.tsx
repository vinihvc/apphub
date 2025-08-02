import { CollectionListBlock } from '@/components/blocks/collection-list/collection-list'
import { SearchBlock } from '@/components/blocks/search'

const CollectionsRootPage = () => {
  return (
    <main className="container gap-8 py-32">
      <div className="grid gap-4">
        <div className="mx-auto grid max-w-screen-sm place-items-center gap-1">
          <h1 className="font-bold text-3xl tracking-tight sm:text-4xl md:text-5xl">
            Collections
          </h1>

          <p className="text-muted-foreground md:text-lg">
            Discover app collections tailored for specific workflows and use
            cases.
          </p>
        </div>

        <SearchBlock placeholder="e.g Developer Tools, Productivity, etc." />
      </div>

      <CollectionListBlock />
    </main>
  )
}

export default CollectionsRootPage
