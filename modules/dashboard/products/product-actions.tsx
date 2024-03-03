import React from "react";
import { ComingSoonBadge } from "@/common/coming-soon-badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/ui/dropdown-menu";
import { Button } from "@/ui/button";
import { DotsVerticalIcon } from "@radix-ui/react-icons";

export const ProductActions = ({ product }: { product: Product }) => {
  const productLink = `/products/${product.id}`;
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild className="mx-auto flex justify-center">
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Open menu</span>
            <DotsVerticalIcon className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuItem onClick={() => navigator.clipboard.writeText(productLink)}>
            Copy product Link
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>View Product</DropdownMenuItem>
          <DropdownMenuItem>Mark out of stock</DropdownMenuItem>
          <DropdownMenuItem disabled>
            Export &nbsp;
            <ComingSoonBadge />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
