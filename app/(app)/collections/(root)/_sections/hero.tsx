import { SearchBlock } from "@/components/blocks/search";

export const HeroSection = () => {
  return (
    <div className="grid gap-4">
      <div className="grid gap-1">
        <h1 className="font-semibold text-3xl">Collections</h1>

        <p className="text-muted-foreground">
          Discover app collections tailored for specific workflows and use
          cases.
        </p>
      </div>

      <div className="mx-auto flex w-full items-center justify-between gap-8">
        <SearchBlock
          className="max-w-md"
          placeholder="e.g. Development, Productivity, etc."
        />
      </div>
    </div>
  );
};
