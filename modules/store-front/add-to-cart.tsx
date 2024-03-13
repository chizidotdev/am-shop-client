"use client";
import { Button } from "@/ui/button";
import React from "react";
import { useAddToCart } from "./useCart";
import { Permissions } from "../auth/permissions";

export const AddToCart = ({ product, quantity }: { product: Product; quantity: number }) => {
  const { mutate, isPending } = useAddToCart();

  const addToCart = () => {
    mutate({ productId: product.id, quantity });
  };

  return (
    <Permissions role="authenticated">
      <Button onClick={addToCart} isLoading={isPending} className="w-full">
        Add to cart
      </Button>
    </Permissions>
  );
};
