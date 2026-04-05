import { AppsSection } from "./_sections/apps";
import { CollectionsSection } from "./_sections/collections";
import { HeroSection } from "./_sections/hero";

export const revalidate = false;
export const dynamic = "force-static";

const HomePage = () => {
  return (
    <main>
      <HeroSection className="mt-16" />

      <AppsSection className="py-12" />

      <CollectionsSection className="py-14" />
    </main>
  );
};

export default HomePage;
