import { AppsSection } from './_sections/apps'
import { CollectionsSection } from './_sections/collections'
import { HeroSection } from './_sections/hero'

const HomePage = () => {
  return (
    <main>
      <HeroSection />

      <AppsSection />

      <CollectionsSection />
    </main>
  )
}

export default HomePage
