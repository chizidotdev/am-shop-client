"use client";
import React from "react";
import { shopData, shopProductSearchData } from "@/lib/data";
import Image from "next/image";
import { ProductCard } from "@/modules/product/product-card";
import { Button } from "@/ui/button";
import { Text } from "@/ui/text";
import { ScrollArea, ScrollBar } from "@/ui/scroll-area";
import { Input } from "@/ui/input";
import { BiSearch } from "react-icons/bi";

export default function Home() {
  const { name, visualTheme } = shopData;
  const [selected, setSelected] = React.useState("All");

  return (
    <main className="flex min-h-screen flex-col gap-10 mb-10">
      <section className="flex flex-col gap-3">
        <div className="flex gap-3 w-full">
          <div className="flex-1 flex gap-3 items-center">
            <div className="relative aspect-square h-12 self-center">
              <Image
                fill
                src={visualTheme.logoImage.url}
                alt={name}
                className="rounded-lg object-cover"
                sizes={`${visualTheme.logoImage.width}px`}
                priority
              />
            </div>
            <Text variant="h3">{name}</Text>
          </div>

          <div className="flex items-center gap-1">
            <Button variant="secondary">Follow</Button>
          </div>
        </div>

        <Text className="max-w-[60ch] text-sm">{visualTheme.description}</Text>
      </section>

      <section className="flex flex-col gap-5">
        <Text variant="h3">Products</Text>

        <ScrollArea>
          <div className="flex items-center gap-2">
            {categories.map((category) => {
              const active = selected === category;

              return (
                <Button
                  key={category}
                  variant={active ? "secondary" : "ghost"}
                  onClick={() => setSelected(category)}
                >
                  {category}
                </Button>
              );
            })}
          </div>
          <ScrollBar orientation="horizontal" className="h-0" />
        </ScrollArea>

        <Input placeholder={`Search ${name}`} className="max-w-lg" icon={<BiSearch />} />

        <div className="flex flex-col gap-5">
          <div className="product-grid w-full">
            {shopProductSearchData.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <Button variant="secondary" className="self-center">
            Load more
          </Button>
        </div>
      </section>
    </main>
  );
}

const categories = ["All", "Clothing", "Shoes", "Accessories", "Sports"];
