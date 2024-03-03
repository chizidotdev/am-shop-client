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
import { useDeleteProduct, useUpdateProduct } from "./useProducts";
import { useDashboard } from "../context-store";
import { toast } from "sonner";

export const ProductActions = ({ product }: { product: Product }) => {
  const { store } = useDashboard();

  const [open, setOpen] = React.useState(false);
  const { mutate: deleteProductMutation, isPending } = useDeleteProduct(() => setOpen(false));

  const { mutate: updateProductMutation } = useUpdateProduct();

  const toggleStockStatus = () => {
    if (!store?.id) return;

    updateProductMutation({
      id: product.id,
      storeId: store.id,
      data: { outOfStock: !product.outOfStock },
    });
  };

  const deleteProduct = () => {
    if (!store?.id) return;

    deleteProductMutation({ id: product.id, storeId: store?.id });
  };

  const copyProductLink = async () => {
    if (!window || !product) return;
    const productLink = `${window.location.origin}/products/${product.id}`;
    await navigator.clipboard.writeText(productLink);
    toast.info("Product Link copied to clipboard");
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DropdownMenu>
        <DropdownMenuTrigger className="flex mx-auto">
          <Button variant="ghost" size="icon">
            <span className="sr-only">Open menu</span>
            <DotsVerticalIcon className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuItem onClick={copyProductLink}>Copy product Link</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={toggleStockStatus}>
            {product.outOfStock ? 'Label "In Stock"' : 'Label "Out of Stock"'}
          </DropdownMenuItem>
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
