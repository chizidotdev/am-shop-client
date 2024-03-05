"use client";
import { Button, buttonVariants } from "@/ui/button";
import { cn } from "@/lib/utils";
import React from "react";

export const QuantitySelector = () => {
  const [quantity, setQuantity] = React.useState(1);

  return (
    <div className="flex justify-between text-md font-semibold">
      <span>Quantity</span>
      <div className="inline-flex items-center justify-between">
        <Button
          onClick={() => setQuantity(quantity - 1)}
          variant="outline"
          size="icon"
          className="h-7 text-xl rounded-r-none"
        >
          -
        </Button>
        <span
          className={cn(
            buttonVariants({
              size: "icon",
              variant: "outline",
            }),
            "pointer-events-none h-7 rounded-none",
          )}
        >
          {quantity}
        </span>
        <Button
          onClick={() => setQuantity(quantity + 1)}
          variant="outline"
          size="icon"
          className="h-7 text-xl rounded-l-none"
        >
          +
        </Button>
      </div>
    </div>
  );
};
