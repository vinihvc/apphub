import type { Metadata } from "next";
import { CollectionListBlock } from "@/components/blocks/collection-list/collection-list";
import { Separator } from "@/components/primitives/separator";
import { createMetadata, createOgImageUrl } from "@/lib/metadata";
import { HeroSection } from "./_sections/hero";

export const revalidate = false;
export const dynamic = "force-static";

const collectionsTitle = "Collections";
const collectionsDescription =
  "Discover app collections tailored for specific workflows and use cases.";

export const metadata: Metadata = createMetadata({
  title: collectionsTitle,
  description: collectionsDescription,
  url: "/collections",
  imageUrl: createOgImageUrl({
    title: collectionsTitle,
    description: collectionsDescription,
  }),
});

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
