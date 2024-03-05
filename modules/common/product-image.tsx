import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export const ProductImage = ({
  product,
  children,
  className,
}: {
  product: Product;
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div className={cn("relative flex-1 overflow-hidden", className)}>
      <Image src="/preview.png" objectFit="cover" className="rounded-lg" fill alt={product.title} />
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
      {children}
    </div>
  );
};
