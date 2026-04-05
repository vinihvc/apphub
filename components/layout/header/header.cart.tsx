"use client";

import { CircleOff, LayoutGrid } from "lucide-react";
import React from "react";
import { Badge } from "@/components/primitives/badge";
import { Button } from "@/components/primitives/button";
import {
  Popover,
  PopoverContent,
  PopoverFooter,
  PopoverTrigger,
} from "@/components/primitives/popover";
import { CopyCommand } from "@/components/ui/copy-command";
import { useCartStore } from "@/lib/cart";
import { CartItem } from "./header.cart-item";

const HeaderCart = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const { items, getCartCount, clearCart } = useCartStore();

  const cartCount = getCartCount();

  const handleClearCart = () => {
    clearCart();
    setIsOpen(false);
  };

  return (
    <Popover
      modal={false}
      onOpenChange={({ open }) => setIsOpen(open)}
      open={isOpen}
      positioning={{
        placement: "bottom-end",
        gutter: 18,
      }}
    >
      <PopoverTrigger asChild>
        <Button
          className="relative max-md:hidden"
          size="icon-md"
          variant="ghost"
        >
          <LayoutGrid />

          {cartCount > 0 && (
            <div className="fade-in-0 zoom-in-95 absolute -top-1 -right-1 animate-in">
              <Badge className="flex p-0 text-[0.625rem]" pill size="sm">
                <span className="sr-only">Apps to install</span>
                {cartCount}
              </Badge>
            </div>
          )}
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-full p-0 sm:min-w-80">
        <div className="border-b p-4">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold">Apps ({cartCount})</h3>
            {cartCount > 0 && (
              <Button onClick={handleClearCart} variant="ghost">
                Clear apps
              </Button>
            )}
          </div>
        </div>

        <div className="max-h-64 overflow-y-auto">
          {items.length === 0 ? (
            <div className="flex select-none flex-col items-center gap-2 p-6 text-center text-muted-foreground">
              <CircleOff className="mx-auto size-6 opacity-50" />
              <p className="font-medium text-sm">The list is empty</p>
            </div>
          ) : (
            items.map((app) => <CartItem app={app} key={app.slug} />)
          )}
        </div>

        {items.length > 0 && (
          <PopoverFooter>
            <CopyCommand className="w-full" data={items} size="sm">
              Copy script
            </CopyCommand>
          </PopoverFooter>
        )}
      </PopoverContent>
    </Popover>
  );
};

export default HeaderCart;
