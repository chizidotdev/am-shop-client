import React from "react";
import { Text } from "@/ui/text";
import { Card, CardContent, CardHeader } from "@/ui/card";
import Image from "next/image";
import { formatCurrency } from "@/lib/utils";
import { ProductActions } from "./product-list-actions";

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
      <CardHeader className="relative flex-1 p-2">
        <div className="relative flex-1">
          <Image
            src="https://via.placeholder.com/300x400"
            objectFit="cover"
            className="rounded-lg"
            fill
            alt={product.title}
          />
        </div>
      </CardHeader>
      <CardContent className="py-3 px-2 w-1/2">
        <div className="flex justify-between items-center">
          <Text>{product.title}</Text>
          <ProductActions product={product} />
        </div>
        <Text asLabel className="line-clamp-2">
          {product.description}
        </Text>
        <div className="flex justify-between items-center mt-3">
          <Text variant="h4">{formatCurrency(product.price)}</Text>
        </div>
      </CardContent>
    </Card>
  );
};
