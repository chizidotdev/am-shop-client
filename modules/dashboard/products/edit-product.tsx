"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/ui/dialog";
import { ScrollArea, ScrollBar } from "@/ui/scroll-area";
import { useState } from "react";
import { EditProductForm } from "./edit-product-form";

export function EditProduct({
  children,
  product,
}: {
  product: Product;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-md">
        <DialogHeader className="text-center sm:text-center items-center">
          <DialogTitle>Edit Product</DialogTitle>
          <DialogDescription>Edit product details below</DialogDescription>
        </DialogHeader>

        <ScrollArea className="max-h-full">
          <EditProductForm product={product} callback={() => setOpen(false)} />
          <ScrollBar />
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
