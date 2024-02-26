"use client";
import { shopProductSearchData } from "@/lib/data";
import { ProductCard } from "@/modules/product/product-card";
import { Button } from "@/ui/button";

export default function Home() {
  console.log(">>>>", shopProductSearchData);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Button>Click me</Button>

      <div className="product-grid w-full mt-10">
        {shopProductSearchData.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
