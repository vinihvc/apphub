import { CollectionListBlock } from "@/components/blocks/collection-list/collection-list";
import { Separator } from "@/components/primitives/separator";
import { HeroSection } from "./_sections/hero";

export const revalidate = false;
export const dynamic = "force-static";

const CollectionsRootPage = () => {
  return (
    <main>
      <div className="container grid gap-8 py-12">
        <HeroSection />

        <Separator />

        <CollectionListBlock />
      </div>
    </main>
  );
};

export default CollectionsRootPage;
