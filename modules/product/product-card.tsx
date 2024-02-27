import Image from "next/image";
import React from "react";
import { Text } from "@/ui/text";
import { cn } from "@/lib/utils";
import { BiSolidPurchaseTag } from "react-icons/bi";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { ProductPrice } from "./product-price";
import Link from "next/link";

export const ProductCard = ({ product }: { product: DiscoveryProduct }) => {
  const [liked, setLiked] = React.useState(false);
  const { id, images, title, originalPrice, price } = product;
  const href = `/${id}`;
  const discount = originalPrice
    ? Math.round(
        ((Number(originalPrice.amount) - Number(price.amount)) / Number(originalPrice.amount)) *
          100,
      )
    : 0;

  return (
    <div className="text-card-foreground ">
      <Link href={href}>
        <div className="relative aspect-square">
          <Image
            fill
            src={images[0].url}
            alt=""
            className="rounded-lg object-cover"
            sizes={`${images[0].width}px`}
            priority
          />
          {discount > 0 && (
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
          )}
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
        </div>
      </Link>

      <Link href={href}>
        <div className="mt-2 text-sm">
          <Text asLabel className="font-semibold">
            {title}
          </Text>

          <ProductPrice price={price} originalPrice={originalPrice} />
        </div>
      </Link>
    </div>
  );
};
