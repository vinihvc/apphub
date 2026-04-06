import type { Metadata } from "next";
import { AppsListBlock } from "@/components/blocks/apps-list/apps-list";
import { Separator } from "@/components/primitives/separator";
import { createMetadata, createOgImageUrl } from "@/lib/metadata";
import { HeroSection } from "./_sections/hero";

export const revalidate = false;
export const dynamic = "force-static";

const appsTitle = "Apps";
const appsDescription =
  "Find the best apps to enhance your work and creativity.";

export const metadata: Metadata = createMetadata({
  title: appsTitle,
  description: appsDescription,
  url: "/apps",
  imageUrl: createOgImageUrl({
    title: appsTitle,
    description: appsDescription,
  }),
});

const AppsRootPage = () => {
  return (
    <main>
      <div className="container grid gap-8 py-12">
        <HeroSection />

        <Separator />

        <AppsListBlock limit={99} />
      </div>
    </main>
  );
};

export default AppsRootPage;
