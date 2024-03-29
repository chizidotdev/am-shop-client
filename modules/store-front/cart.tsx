import { Button } from "@/ui/button";
import { Text } from "@/ui/text";
import { formatCurrency } from "@/lib/utils";
import { CartItem } from "./cart-item";
import { CartContextProvider, useCartContext } from "./cart-context";
import { useCheckout } from "./useCart";
import { usePaystackPayment } from "react-paystack";
import { useSession } from "../auth/session-context";
import { toast } from "sonner";
import { PAYSTACK_KEY } from "@/lib/constants";

export function Cart({ closeCart }: { closeCart: () => void }) {
  return (
    <CartContextProvider closeCart={closeCart}>
      <CartContent />
    </CartContextProvider>
  );
}

function CartContent() {
  const { data } = useSession();
  const { cartItems, isLoading, closeCart } = useCartContext();
  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const { mutate } = useCheckout(closeCart);
  const initPayment = usePaystackPayment({
    reference: new Date().getTime().toString(),
    email: data?.email,
    amount: parseInt(total.toString()) * 100,
    publicKey: PAYSTACK_KEY,
  });

  function handleCheckout() {
    if (!data) return;

    try {
      initPayment({
        onSuccess: (resp: PaystackResponse) => {
          if (resp.status === "success") mutate();
        },
        onClose: () => toast.info("Payment was cancelled"),
      });
    } catch (err) {
      toast.error("Error loading payment screen");
    }
  }

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

      <Button className="self-end" disabled={!cartItems.length} onClick={handleCheckout}>
        Checkout
      </Button>
    </div>
  );
}
