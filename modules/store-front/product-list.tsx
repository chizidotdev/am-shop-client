import React from "react";
import { getStoreProducts } from "./useStore";
import { ProductCard } from "./product-card";
import { EmptyIcon } from "@/common/empty-icon";
import { Text } from "@/ui/text";

export async function ProductList({ storeId }: { storeId: Store["id"] }) {
  const products = await getStoreProducts(storeId);

  if (!products) {
    return (
      <div className="flex flex-col justify-center items-center text-center max-w-lg mx-auto my-10">
        <EmptyIcon />
        <Text variant="h4">No products available</Text>
        <Text className="mt-2">This store has no products available at the moment.</Text>
      </div>
    );
  }

  const { data: storeProducts } = products;

  return (
    <div className="product-grid w-full">
      {storeProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
