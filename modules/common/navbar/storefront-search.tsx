"use client";
import { useSearchStores } from "@/modules/store-front/useStore";
import { Avatar, AvatarFallback, AvatarImage } from "@/ui/avatar";
import React, { useEffect, useState } from "react";
import { Text } from "@/ui/text";
import { cn } from "@/lib/utils";
import { Input } from "@/ui/input";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";
import { useDebounce } from "../hooks/useDebounce";
import { Skeleton } from "@/ui/skeleton";

export const StorefrontSearch = ({ className }: { className?: string }) => {
  const [open, setOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const { mutate, isPending, data } = useSearchStores();
  const findStores = useDebounce(mutate, 1000);
  const stores = data?.data || [];

  useEffect(() => {
    if (!data || isPending) {
      setIsTyping(true);
    } else setIsTyping(false);
  }, [isPending, data]);

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const q = e.target.value;
    if (q.length >= 2) {
      findStores(q);
    }
  };

  return (
    <div className={className}>
      <div
        className={cn(
          "focus-within:z-20 flex flex-col w-full border rounded-lg relative",
          open && "border-background shadow-sm",
        )}
        onKeyDown={() => setIsTyping(true)}
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
      >
        <div
          className={cn(
            "max-h-[300px] overflow-y-auto overflow-x-hidden p-2 hidden absolute top-0 pt-12 pb-4 border rounded-lg w-full z-0",
            "flex-col bg-background gap-2",
            open && "flex",
          )}
        >
          <div className="mx-2 space-y-2">
            {isTyping ? (
              <>
                <Skeleton className="h-7 w-full" />
                <Skeleton className="h-7 w-full" />
                <Skeleton className="h-7 w-full" />
              </>
            ) : !stores.length ? (
              <Text asLabel>No results.</Text>
            ) : null}
          </div>
          {stores.map((store) => (
            <SearchItem key={store.id} item={store} />
          ))}
        </div>

        <Input
          icon={<MagnifyingGlassIcon className="h-4 w-4" />}
          className="w-full rounded-none border-none shadow-none focus-visible:ring-0 py-5"
          placeholder="Search for stores"
          onChange={onChange}
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck="false"
          autoComplete="off"
        />
      </div>
    </div>
  );
};

const SearchItem = ({ item }: { item: Partial<Store> & { name: string } }) => {
  const { push } = useRouter();

  return (
    <div
      className="cursor-pointer w-full flex items-center gap-3 text-sm"
      onMouseDown={() => push(`/s/${item.id}`)}
    >
      <Avatar className="rounded-md h-8 w-8">
        <AvatarImage src="" alt={item.name} />
        <AvatarFallback>{item.name.charAt(0).toUpperCase()}</AvatarFallback>
      </Avatar>
      <Text>{item.name}</Text>
    </div>
  );
};
