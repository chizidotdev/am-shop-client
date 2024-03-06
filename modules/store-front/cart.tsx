import { Button } from "@/ui/button";
import { Text } from "@/ui/text";
import { formatCurrency } from "@/lib/utils";
import { CartItem } from "./cart-item";
import { CartContextProvider, useCartContext } from "./cart-context";

export function Cart({ closeCart }: { closeCart: () => void }) {
  return (
    <CartContextProvider closeCart={closeCart}>
      <CartContent />
    </CartContextProvider>
  );
}

function CartContent() {
  const { cartItems, isLoading, closeCart } = useCartContext();

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="mb-10 flex flex-col">
      <div className="flex items-center justify-between my-4">
        <Text variant="h4">
          {cartItems.length} {cartItems.length === 1 ? "item" : "items"}
        </Text>
        <Button variant="ghost">Clear all</Button>
      </div>

      <div className="overflow-y-auto max-h-[60dvh] grid gap-4 border-b pb-7 no-scrollbar">
        {!cartItems.length && (
          <>
            <Text className="text-center">Your cart is empty</Text>
            <Button className="w-full" onClick={closeCart}>
              Continue shopping
            </Button>
          </>
        )}

        {cartItems.map((item) => (
          <CartItem key={item.id + item.quantity} {...item} />
        ))}
      </div>

      <div className="flex justify-between my-6">
        <Text variant="h4">Total price</Text>
        <Text variant="h4">{formatCurrency(total)}</Text>
      </div>

      <Button className="self-end" disabled={!cartItems.length} onClick={closeCart}>
        Checkout
      </Button>
    </div>
  );
}
