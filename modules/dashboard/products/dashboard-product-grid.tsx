import React from "react";
import { Text } from "@/ui/text";
import { Card, CardContent, CardHeader } from "@/ui/card";
import Image from "next/image";
import { formatCurrency } from "@/lib/utils";
import { ProductActions } from "./product-list-actions";
import { cn } from "@/lib/utils";
import { EditProduct } from "./edit-product";

export const DashboardProductGrid = ({ products }: { products: Product[] }) => {
  return (
    <div className="dashboard-product-grid gap-5" style={{ gridAutoRows: "1fr" }}>
      {products.map((product) => (
        <DashboardProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

const DashboardProductCard = ({ product }: { product: Product }) => {
  return (
    <Card className="flex min-h-32">
      <EditProduct product={product}>
        <CardHeader className="relative flex-1 p-2 cursor-pointer">
          <div className="relative flex-1 overflow-hidden">
            <Image
              // src="https://via.placeholder.com/300x400"
              src="https://cdn.shopify.com/s/files/1/0220/4008/4552/products/CLASSIC_3PACK.jpg?v=1657569842"
              objectFit="cover"
              className="rounded-lg"
              fill
              alt={product.title}
            />
            {product.outOfStock && (
              <div
                className={cn(
                  "absolute top-5 -left-12 -rotate-45 px-2 py-1 rounded-md",
                  "bg-destructive text-destructive-foreground w-40 text-center text-xs uppercase",
                )}
              >
                Out of stock
              </div>
            )}
          </div>
        </CardHeader>
      </EditProduct>
      <CardContent className="py-3 px-2 w-1/2 flex flex-col justify-between">
        <div className="flex justify-between items-center">
          <Text className="w-full leading-5">{product.title}</Text>
          <ProductActions product={product} />
        </div>
        <Text asLabel className="line-clamp-2">
          {product.description}
        </Text>
        <div className="flex justify-between items-center mt-2">
          <Text variant="h4">{formatCurrency(product.price)}</Text>
        </div>
      </CardContent>
    </Card>
  );
};
