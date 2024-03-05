import React from "react";
import { formatCurrency, cn } from "@/lib/utils";
import { Text } from "@/ui/text";

export const ProductPrice = ({ originalPrice, price }: { originalPrice?: Money; price: Money }) => {
  return (
    <div className="font-bold flex items-center gap-2">
      <Text className={cn(originalPrice && "text-red-500 dark:text-red-600")}>
        {formatCurrency(Number(price))}
      </Text>
      {originalPrice && (
        <Text className="line-through text-muted-foreground">
          {formatCurrency(Number(originalPrice))}
        </Text>
      )}
    </div>
  );
};
