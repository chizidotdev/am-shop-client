import React from "react";
import { ProductPrice } from "@/modules/store-front/product-price";
import { Text } from "@/ui/text";
import Image from "next/image";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/ui/avatar";
import { LikeButton } from "@/modules/store-front/like-button";
import { getStoreProductById } from "@/modules/store-front/useStore";
import { ProductDetail } from "./product-detail";

export default async function StoreFrontProduct({
  params: { productId },
}: {
  params: { productId: string };
}) {
  const productData = await getStoreProductById(productId as string);

  if (!productData) {
    return null;
  }

  const { data: product } = productData;

  if (!product) {
    return null;
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col md:grid grid-cols-[3fr_2fr] gap-4 md:gap-10">
        <div className="flex flex-col">
          <div className="relative aspect-square w-full sm:w-[70%] md:w-full self-center">
            <Image
              fill
              src={product.images[0]?.url}
              alt={product.title}
              className="rounded-lg object-cover"
              priority
            />
          </div>
        </div>

        <div className="flex flex-col gap-8 mb-10">
          <div>
            <Link href={`/s/${product.store.id}`} className="flex items-center gap-2 w-min">
              <Avatar className="rounded-lg">
                <AvatarImage src="/preview-pp.webp" alt={product.store.name} />
                <AvatarFallback>{product.store.name.charAt(0).toUpperCase()}</AvatarFallback>
              </Avatar>
              <Text>{product.store.name}</Text>
            </Link>

            <div className="flex items-center justify-between gap-2">
              <Text variant="h3">{product.title}</Text>
              <LikeButton />
            </div>
            <ProductPrice price={product.price} />
          </div>

          <ProductDetail product={product} />

          <div className="flex flex-col gap-2">
            <Text variant="h4">Description</Text>
            <Text>{product.description}</Text>
            {/* <Text */}
            {/*   className="text-sm *:list-disc *:list-inside line-clamp-6" */}
            {/*   dangerouslySetInnerHTML={{ __html: descriptionHtml }} */}
            {/* /> */}
            {/* <Button variant="link">Read more</Button> */}
          </div>
        </div>
      </div>
    </div>
  );
}
