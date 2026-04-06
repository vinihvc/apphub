"use client";

import { useFilter } from "@ark-ui/react";
import { useListCollection } from "@ark-ui/react/combobox";
import type { LucideIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";
import {
  Command,
  CommandContent,
  CommandDialog,
  CommandDialogContent,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/primitives/command";
import { ShimmerImage } from "@/components/ui/shimmer-image";
import { APP_COLLECTIONS } from "@/content/collections";
import { getApps } from "@/services/queries";

type SearchListItem =
  | {
      categoryText: string;
      developer: string;
      group: "Apps";
      kind: "app";
      label: string;
      slug: string;
      value: `app:${string}`;
    }
  | {
      description: string;
      group: "Collections";
      icon: LucideIcon;
      kind: "collection";
      label: string;
      slug: string;
      value: `collection:${string}`;
    };

interface GlobalSearchDialogProps
  extends React.ComponentProps<typeof CommandDialog> {}

const GlobalSearchDialog = (props: GlobalSearchDialogProps) => {
  const { onOpenChange, ...dialogProps } = props;

  const router = useRouter();

  const apps = React.useMemo(() => getApps(), []);

  const initialItems = React.useMemo<SearchListItem[]>(() => {
    const appItems: SearchListItem[] = apps.map((app) => ({
      value: `app:${app.slug}`,
      label: app.name,
      group: "Apps",
      kind: "app",
      slug: app.slug,
      developer: app.developer,
      categoryText: app.category.join(" "),
    }));

    const collectionItems: SearchListItem[] = APP_COLLECTIONS.map((c) => ({
      value: `collection:${c.slug}`,
      label: c.title,
      group: "Collections",
      kind: "collection",
      slug: c.slug,
      description: c.description,
      icon: c.icon,
    }));

    return [...appItems, ...collectionItems];
  }, [apps]);

  const { contains } = useFilter({ sensitivity: "base" });
  const { collection, filter } = useListCollection<SearchListItem>({
    initialItems,
    filter: contains,
    groupBy: (item) => item.group,
    itemToString: (item) =>
      item.kind === "app"
        ? `${item.label} ${item.developer} ${item.categoryText}`
        : `${item.label} ${item.description}`,
  });

  const handleSelect = (itemValue: string) => {
    const prefix = "app:";
    if (itemValue.startsWith(prefix)) {
      router.push(`/apps/${itemValue.slice(prefix.length)}`);
    } else {
      const colPrefix = "collection:";
      router.push(`/collections/${itemValue.slice(colPrefix.length)}`);
    }
    onOpenChange?.({ open: false });
  };

  return (
    <CommandDialog {...dialogProps} onOpenChange={onOpenChange}>
      <CommandDialogContent className="overflow-hidden p-0">
        <Command
          collection={collection}
          onInputValueChange={({ inputValue }) => filter(inputValue)}
          onSelect={({ itemValue }) => handleSelect(itemValue)}
        >
          <CommandInput placeholder="Search for apps or collections..." />

          <CommandContent>
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              {collection.group().map(([group, items]) => (
                <CommandGroup heading={group} key={group}>
                  {items.map((item) =>
                    item.kind === "app" ? (
                      <CommandItem item={item} key={item.value}>
                        <div className="flex w-full items-center gap-4">
                          <ShimmerImage
                            alt={item.label}
                            className="rounded-md"
                            height={24}
                            src={`/images/apps/${item.slug}.webp`}
                            width={24}
                          />

                          <div className="grid gap-1">
                            <span className="font-medium text-sm">
                              {item.label}
                            </span>
                            <p className="text-muted-foreground text-sm">
                              {item.developer}
                            </p>
                          </div>
                        </div>
                      </CommandItem>
                    ) : (
                      <CommandItem item={item} key={item.value}>
                        <div className="flex w-full items-center gap-5">
                          <item.icon className="size-6" />

                          <span className="font-medium text-sm">
                            {item.label}
                          </span>
                        </div>
                      </CommandItem>
                    )
                  )}
                </CommandGroup>
              ))}
            </CommandList>
          </CommandContent>
        </Command>
      </CommandDialogContent>
    </CommandDialog>
  );
};

export default GlobalSearchDialog;
