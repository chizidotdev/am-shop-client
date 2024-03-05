"use client";
import React from "react";
import { Text } from "@/ui/text";
import { cn } from "@/lib/utils";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { ProductPrice } from "./product-price";
import Link from "next/link";
import { ProductImage } from "@/common/product-image";

export const ProductCard = ({ product }: { product: Product }) => {
  const [liked, setLiked] = React.useState(false);
  const { id, images, title, price } = product;
  const href = `/products/${id}`;
  // const discount = originalPrice
  //   ? Math.round(
  //       ((Number(originalPrice.amount) - Number(price.amount)) / Number(originalPrice.amount)) *
  //         100,
  //     )
  //   : 0;

  return (
    <div className="text-card-foreground ">
      <Link href={href}>
        <ProductImage product={product} className="aspect-square">
          {/*discount > 0 && (
            <div
              className={cn(
                "absolute top-2 left-2",
                "bg-red-600 text-white text-xs font-semibold px-1 py-1 rounded-md",
                "flex items-center gap-1",
              )}
            >
              <BiSolidPurchaseTag />
              {discount}%
            </div>
          )*/}
          <button
            className={cn(
              "absolute bottom-2 right-2",
              "w-[20%] h-[20%] bg-black bg-opacity-50 rounded-full",
              "flex items-center justify-center text-lg text-white",
            )}
            onClick={() => setLiked((liked) => !liked)}
          >
            {liked ? <FaHeart /> : <FaRegHeart />}
          </button>
        </ProductImage>
      </Link>

      <Link href={href}>
        <div className="mt-2 text-sm">
          <Text asLabel className="font-semibold">
            {title}
          </Text>

          <ProductPrice price={price} />
        </div>
      </Link>
    </div>
  );
};
