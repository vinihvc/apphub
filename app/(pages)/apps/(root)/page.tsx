import { AppsListBlock } from "@/components/blocks/apps-list/apps-list";
import { Separator } from "@/components/primitives/separator";
import { HeroSection } from "./_sections/hero";

export const revalidate = false;
export const dynamic = "force-static";

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
