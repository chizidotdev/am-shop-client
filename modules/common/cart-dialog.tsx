"use client";

import { MdOutlineShoppingBag } from "react-icons/md";
import { Button } from "@/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/ui/sheet";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/ui/drawer";
import { useMediaQuery } from "@/common/hooks/useMediaQuery";
import { Cart } from "@/modules/store-front/cart";
import { Permissions } from "@/modules/auth/permissions";
import { useState } from "react";

export function CartDialog() {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const [open, setOpen] = useState(false);

  const closeCart = () => {
    setOpen(false);
  };

  if (isDesktop) {
    return (
      <Sheet open={open} onOpenChange={setOpen}>
        <Permissions role="authenticated">
          <SheetTrigger asChild>
            <Button variant="ghost" className="rounded-full h-10 w-10 p-2">
              <MdOutlineShoppingBag size={20} />
            </Button>
          </SheetTrigger>
        </Permissions>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>{cartConstants.title}</SheetTitle>
          </SheetHeader>
          <Cart closeCart={closeCart} />
        </SheetContent>
      </Sheet>
    );
  }
  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <Permissions role="authenticated">
        <DrawerTrigger>
          <Button variant="ghost" className="rounded-full h-10 w-10 p-2">
            <MdOutlineShoppingBag size={20} />
          </Button>
        </DrawerTrigger>
      </Permissions>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>{cartConstants.title}</DrawerTitle>
        </DrawerHeader>
        <Cart closeCart={closeCart} />
      </DrawerContent>
    </Drawer>
  );
}

const cartConstants = {
  title: "Your Cart",
};
