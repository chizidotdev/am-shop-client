"use client";

import { IoBagHandle } from "react-icons/io5";
import { Button } from "@/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/ui/sheet";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/ui/drawer";
import { useMediaQuery } from "@/common/hooks/useMediaQuery";

export function Cart() {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <Sheet>
        <SheetTrigger asChild>
          <IoBagHandle className="w-6 h-6 cursor-pointer" />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Cart</SheetTitle>
          </SheetHeader>
          {/*<Cart />*/}
          <SheetFooter className="justify-self-end">
            <SheetClose asChild>
              <Button type="submit">Checkout</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    );
  }
  return (
    <Drawer>
      <DrawerTrigger>
        <IoBagHandle className="w-6 h-6 cursor-pointer" />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Cart</DrawerTitle>
        </DrawerHeader>
        {/*<Cart />*/}
        <DrawerFooter>
          <DrawerClose className="text-end">
            <Button>Checkout</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
