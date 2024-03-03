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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/ui/dialog";
import { Button } from "@/ui/button";
import { DotsVerticalIcon } from "@radix-ui/react-icons";
import { useDeleteProduct } from "./useProducts";
import { useDashboard } from "../context-store";

export const ProductActions = ({ product }: { product: Product }) => {
  const productLink = `/products/${product.id}`;
  const { store } = useDashboard();

  const [open, setOpen] = React.useState(false);
  const { mutate, isPending } = useDeleteProduct(() => setOpen(false));

  const deleteProduct = () => {
    if (!store?.id) return;

    mutate({ id: product.id, storeId: store?.id });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
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
          <DropdownMenuItem disabled>Mark out of stock</DropdownMenuItem>
          <DialogTrigger className="w-full">
            <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
          </DialogTrigger>
          <DropdownMenuItem disabled>
            Export &nbsp;
            <ComingSoonBadge />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete the product from your store.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="flex-row justify-center space-x-2">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Cancel
            </Button>
          </DialogClose>
          <Button type="button" variant="destructive" isLoading={isPending} onClick={deleteProduct}>
            Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
