"use client";

import React from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { storeFrontProductData } from "@/lib/data";
import { ProductPrice } from "@/modules/product/product-price";
import { Text } from "@/ui/text";
import Image from "next/image";
import { Button } from "@/ui/button";
import { ProductOptions } from "@/modules/product/product-options";
import { QuantitySelector } from "@/modules/product/quantity-selector";

export default function StoreFrontProduct() {
  const [liked, setLiked] = React.useState(false);
  const { title, media, options, descriptionHtml, variants, shop } = storeFrontProductData;

  const mediaNode = media.nodes[0];
  const image = mediaNode.image;

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col md:grid grid-cols-[3fr_2fr] gap-4 md:gap-10">
        <div className="flex flex-col">
          <div className="relative aspect-square w-full sm:w-[70%] md:w-full self-center">
            <Image
              fill
              src={image.url}
              alt={mediaNode.alt}
              className="rounded-lg object-cover"
              sizes={`${image.width}px`}
              priority
            />
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <div>
            <div className="flex gap-2">
              <div className="relative w-8 aspect-square">
                <Image
                  fill
                  src={shop.visualTheme.logoImage.url}
                  alt={shop.name}
                  className="rounded-lg object-cover"
                  sizes={`${shop.visualTheme.logoImage.width}px`}
                  priority
                />
              </div>
              <Text>{shop.name}</Text>
            </div>

            <div className="flex items-center justify-between gap-2">
              <Text variant="h3">{title}</Text>
              <Button
                variant="outline"
                size="icon"
                className="text-md rounded-full"
                onClick={() => setLiked((liked) => !liked)}
              >
                {liked ? <FaHeart /> : <FaRegHeart />}
              </Button>
            </div>
            <ProductPrice
              price={variants.nodes[0].price}
              originalPrice={variants.nodes[0].originalPrice}
            />
          </div>

          <div className="flex flex-col gap-5">
            <ProductOptions options={options} variants={variants.nodes} />
            <QuantitySelector />
          </div>

          <div className="flex flex-col gap-2">
            <Button>Add to cart</Button>
            <Button variant="secondary">Buy now</Button>
            <Text asLabel className="text-xs text-center">
              Checkout powered by&nbsp;
              <a
                href="https://www.opayweb.com/"
                target="_blank"
                rel="noreferrer"
                className="text-primary"
              >
                Opay
              </a>
            </Text>
          </div>

          <div className="flex flex-col gap-2">
            <Text variant="h4">Description</Text>
            {/* <Text>{description}</Text> */}
            <Text
              className="text-sm *:list-disc *:list-inside line-clamp-6"
              dangerouslySetInnerHTML={{ __html: descriptionHtml }}
            />
            <Button variant="link">Read more</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
