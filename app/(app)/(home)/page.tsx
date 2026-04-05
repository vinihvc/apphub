import type { Metadata } from "next";
import { createMetadata, createOgImageUrl } from "@/lib/metadata";
import { AppsSection } from "./_sections/apps";
import { CollectionsSection } from "./_sections/collections";
import { HeroSection } from "./_sections/hero";

export const revalidate = false;
export const dynamic = "force-static";

const homeTitle = "Home";
const homeDescription =
  "Curated list of apps for your new machine. Select all apps you want and we'll install them for you.";

export const metadata: Metadata = createMetadata({
  title: homeTitle,
  description: homeDescription,
  url: "/",
  imageUrl: createOgImageUrl({
    title: homeTitle,
    description: homeDescription,
  }),
});

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
