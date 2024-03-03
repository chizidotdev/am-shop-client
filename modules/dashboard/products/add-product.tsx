"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/ui/dialog";
import { AddProductForm } from "./add-product-form";
import { ScrollArea, ScrollBar } from "@/ui/scroll-area";
import { useState } from "react";

export function AddProduct({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent className="max-w-md">
        <DialogHeader className="text-center sm:text-center items-center">
          <DialogTitle>Add Product</DialogTitle>
          <DialogDescription>Add product details and images to your store.</DialogDescription>
        </DialogHeader>

        <ScrollArea className="max-h-full">
          <AddProductForm callback={() => setOpen(false)} />
          <ScrollBar />
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
