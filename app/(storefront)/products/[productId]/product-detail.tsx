"use client";
import React from "react";
import { Button } from "@/ui/button";
import { Text } from "@/ui/text";
import { QuantitySelector } from "@/modules/store-front/quantity-selector";
import { OpayLink } from "@/common/opay-link";
import { AddToCart } from "@/modules/store-front/add-to-cart";

export const ProductDetail = ({ product }: { product: Product }) => {
  const [quantity, setQuantity] = React.useState(1);

  return (
    <>
      <div className="flex flex-col gap-5">
        {/* <ProductOptions options={options} variants={variants.nodes} /> */}
        <QuantitySelector
          quantity={quantity}
          increment={() => setQuantity((q) => q + 1)}
          decrement={() => setQuantity((q) => (q > 1 ? q - 1 : q))}
        />
      </div>

      <div className="flex flex-col gap-2">
        <AddToCart product={product} quantity={quantity} />
        <Button variant="secondary">Buy now</Button>
        <Text asLabel className="text-xs text-center">
          Checkout powered by&nbsp;
          <OpayLink />
        </Text>
      </div>
    </>
  );
};
