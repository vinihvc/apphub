import { CategoriesFilterBlock } from "@/components/blocks/filters/categories";
import { PlatformsFilterBlock } from "@/components/blocks/filters/platforms";
import { SearchBlock } from "@/components/blocks/search";

export const HeroSection = () => {
  return (
    <div className="grid gap-4">
      <div className="grid gap-1 text-center sm:text-left">
        <h1 className="font-semibold text-3xl">Apps</h1>

        <p className="text-muted-foreground">
          Find the best apps to enhance your work and creativity.
        </p>
      </div>

      <div className="mx-auto flex w-full flex-col justify-between gap-4 sm:flex-row sm:items-center sm:gap-8">
        <SearchBlock
          className="max-w-md"
          placeholder="e.g Cursor, Raycast, Firefox"
        />

        <div className="flex items-center justify-end gap-2">
          <CategoriesFilterBlock />
          <PlatformsFilterBlock />
        </div>
      </div>
    </div>
  );
};
