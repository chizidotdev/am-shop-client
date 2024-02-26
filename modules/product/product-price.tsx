import React from "react";
import { formatCurrency, cn } from "@/lib/utils";
import { Text } from "@/ui/text";

export const ProductPrice = ({
  originalPrice,
  price,
}: {
  originalPrice: MoneyV2;
  price: MoneyV2;
}) => {
  return (
    <div className="font-bold flex items-center gap-2">
      <Text className={cn(originalPrice && "text-red-500 dark:text-red-600")}>
        {formatCurrency(Number(price.amount), price.currencyCode)}
      </Text>
      {originalPrice && (
        <Text className="line-through text-muted-foreground">
          {formatCurrency(Number(originalPrice.amount), originalPrice.currencyCode)}
        </Text>
      )}
    </div>
  );
};
