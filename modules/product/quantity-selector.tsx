import { Button, buttonVariants } from "@/ui/button";
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
          className="h-7 text-xl"
        >
          -
        </Button>
        <span
          className={buttonVariants({
            size: "icon",
            variant: "outline",
            className: "pointer-events-none h-7",
          })}
        >
          {quantity}
        </span>
        <Button
          onClick={() => setQuantity(quantity + 1)}
          variant="outline"
          size="icon"
          className="h-7 text-xl"
        >
          +
        </Button>
      </div>
    </div>
  );
};
