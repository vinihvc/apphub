import { AppsListBlock } from '@/components/blocks/apps-list/apps-list'
import { CategoriesFilterBlock } from '@/components/blocks/filters/categories'
import { PlatformsFilterBlock } from '@/components/blocks/filters/platforms'
import { SearchBlock } from '@/components/blocks/search'

const AppsRootPage = () => {
  return (
    <main className="container gap-8 py-32">
      <div className="grid gap-4">
        <div className="mx-auto grid max-w-screen-sm place-items-center gap-1">
          <h1 className="font-bold text-3xl tracking-tight sm:text-4xl md:text-5xl">
            All Apps
          </h1>

          <p className="text-muted-foreground md:text-lg">
            Browse our curated collection of productivity and creative apps
          </p>
        </div>

        <SearchBlock placeholder="e.g Cursor, Raycast, Firefox" />
      </div>

      <div className="flex items-center justify-end gap-2">
        <CategoriesFilterBlock />
        <PlatformsFilterBlock />
      </div>

      <AppsListBlock limit={99} />
    </main>
  )
}

export default AppsRootPage
