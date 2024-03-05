import React from "react";
import { MdOutlineShoppingBag } from "react-icons/md";
import { Button } from "@/ui/button";

export const CartButton = () => {
  return (
    <Button variant="ghost" className="rounded-full h-10 w-10 p-2">
      <MdOutlineShoppingBag size={20} />
    </Button>
  );
};
