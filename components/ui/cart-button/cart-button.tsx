"use client";

import { PlusIcon } from "lucide-react";
import dynamic from "next/dynamic";
import { Button } from "@/components/primitives/button";

const CartButtonClient = dynamic(() => import("./cart-button-client"), {
  ssr: false,
  loading: () => (
    <Button size="icon-xs" variant="outline">
      <PlusIcon />
    </Button>
  ),
});

interface CartButtonProps
  extends React.ComponentProps<typeof CartButtonClient> {}

export const CartButton = (props: CartButtonProps) => {
  return <CartButtonClient {...props} />;
};
