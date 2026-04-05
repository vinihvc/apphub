import { SearchIcon } from "lucide-react";
import dynamic from "next/dynamic";
import React from "react";
import { Button } from "@/components/primitives/button";
import { Kbd, KbdGroup } from "@/components/primitives/kbd";

const GlobalSearchDialog = dynamic(
  () => import("@/components/dialog/global-search"),
  {
    ssr: false,
  }
);

export const HeaderSearch = () => {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
    };

    document.addEventListener("keydown", down);

    return () => {
      document.removeEventListener("keydown", down);
    };
  }, []);

  return (
    <>
      <div className="hidden w-full flex-1 md:flex md:w-auto md:flex-none">
        <Button
          aria-label="Search"
          className="justify-start shadow-none"
          clickEffect={false}
          onClick={() => setOpen(true)}
          variant="outline"
        >
          <SearchIcon />
          <KbdGroup>
            <Kbd variant="outline">⌘</Kbd>
            <Kbd variant="outline">K</Kbd>
          </KbdGroup>
        </Button>
      </div>

      <GlobalSearchDialog
        onOpenChange={({ open: next }) => setOpen(next)}
        open={open}
      />
    </>
  );
};
