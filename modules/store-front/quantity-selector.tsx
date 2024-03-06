import { Button, buttonVariants } from "@/ui/button";
import { cn } from "@/lib/utils";
import React from "react";

type QuantitySelectorProps = {
  quantity: number;
  increment: () => void;
  decrement: () => void;
  label?: boolean;
};

export const QuantitySelector = ({
  quantity,
  increment,
  decrement,
  label = true,
}: QuantitySelectorProps) => {
  return (
    <div className="flex justify-between text-md font-semibold">
      {label && <span>Quantity</span>}
      <div className="inline-flex items-center justify-between">
        <Button
          onClick={decrement}
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
          onClick={increment}
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
