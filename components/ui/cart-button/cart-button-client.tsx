"use client";

import { PlusIcon } from "lucide-react";
import { Button } from "@/components/primitives/button";
import type { AppType } from "@/content/apps";
import { cn } from "@/lib/cn";
import { useCartStore } from "@/store/cart";

interface CartButtonClientProps extends React.ComponentProps<typeof Button> {
  /**
   * The data to add to the cart
   */
  data: AppType | AppType[];
}

const CartButtonClient = (props: CartButtonClientProps) => {
  const { data, className, ...rest } = props;

  const { addToCart, removeFromCart } = useCartStore();

  const isInCart = useCartStore((state) =>
    Array.isArray(data)
      ? data.some((app) => state.isInCart(app.slug))
      : state.isInCart(data.slug)
  );

  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();

    if (Array.isArray(data)) {
      for (const app of data) {
        isInCart ? removeFromCart(app.slug) : addToCart(app);
      }
    } else {
      isInCart ? removeFromCart(data.slug) : addToCart(data);
    }
  };

  return (
    <Button
      aria-label={`${isInCart ? "Remove from" : "Add to"} Cart`}
      className={cn(
        "hidden sm:inline-flex",
        {
          "border-destructive/32 bg-destructive/5 text-destructive shadow-destructive/24 hover:bg-destructive/10 hover:text-destructive dark:bg-destructive/10 [&_svg]:rotate-45":
            isInCart,
        },
        className
      )}
      onClick={handleAddToCart}
      size="icon-md"
      variant="outline"
      {...rest}
    >
      <PlusIcon className="transition-all" />
    </Button>
  );
};

export default CartButtonClient;
