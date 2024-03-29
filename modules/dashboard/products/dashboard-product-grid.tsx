import React from "react";
import { Text } from "@/ui/text";
import { Card, CardContent, CardHeader } from "@/ui/card";
import { formatCurrency } from "@/lib/utils";
import { ProductActions } from "./product-list-actions";
import { EditProduct } from "./edit-product";
import { ProductImage } from "@/common/product-image";

export const DashboardProductGrid = ({ products }: { products: Product[] }) => {
  if (!products.length) {
    return (
      <div className="h-40 flex justify-center items-center">
        <Text>No results.</Text>
      </div>
    );
  }

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
          <ProductImage product={product} />
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
