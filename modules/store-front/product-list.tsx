import React from "react";
import { getStoreProducts } from "./useStore";
import { ProductCard } from "./product-card";

export async function ProductList({ storeId }: { storeId: Store["id"] }) {
  const products = await getStoreProducts(storeId);
  if (!products) {
    return null;
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
