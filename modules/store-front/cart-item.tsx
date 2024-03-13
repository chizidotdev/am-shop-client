import Image from "next/image";
import { Button } from "@/ui/button";
import { Text } from "@/ui/text";
import { HiXMark } from "react-icons/hi2";
import { formatCurrency } from "@/lib/utils";
import { QuantitySelector } from "./quantity-selector";
import { useState } from "react";
import { useRemoveFromCart, useUpdateCart } from "./useCart";
import { useCartContext } from "./cart-context";

export const CartItem = (item: Cart) => {
  const { refetch } = useCartContext();
  const [quantity, setQuantity] = useState(item.quantity);
  const { mutate: removeItem, isPending: isRemoving } = useRemoveFromCart(refetch);
  const { mutate: updateItem, isPending: isUpdating } = useUpdateCart(refetch);

  const increment = () => {
    if (isUpdating) return;
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    updateItem({ id: item.id, quantity: newQuantity });
  };

  const decrement = () => {
    if (isUpdating) return;
    if (quantity === 1) return;
    const newQuantity = quantity - 1;
    updateItem({ id: item.id, quantity: newQuantity });
    setQuantity(newQuantity);
  };

  const remove = () => {
    removeItem(item.id);
  };

  return (
    <div className="grid grid-cols-[2fr_5fr] gap-4">
      <div className="relative w-full h-full bg-gray-200 rounded-lg overflow-hidden">
        <Image src={"/preview.webp"} alt={item.imageUrl} fill objectFit="cover" />
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <Text variant="h4" className="line-clamp-1">
            {item.title}
          </Text>
          <Button variant="ghost" size="icon" onClick={remove} isLoading={isRemoving}>
            <HiXMark className="w-5 h-5 cursor-pointer" />
          </Button>
        </div>

        {/* <div className="flex justify-between"> */}
        {/*   <Text className="line-clamp-2 text-sm">{item.summary}</Text> */}
        {/* </div> */}

        <div className="flex items-center gap-4 justify-between">
          <Text variant="h4">{formatCurrency(item.price)}</Text>

          <QuantitySelector
            quantity={quantity}
            increment={increment}
            decrement={decrement}
            label={false}
          />
        </div>
      </div>
    </div>
  );
};
