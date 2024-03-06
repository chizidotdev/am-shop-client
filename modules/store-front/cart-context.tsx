import React, { useContext, createContext } from "react";
import { useGetCart } from "./useStore";

type CartContextType = {
  cartItems: Cart[];
  isLoading: boolean;
  closeCart: () => void;
};

export const CartContext = createContext({} as CartContextType);

export const CartContextProvider = ({
  children,
  closeCart,
}: {
  children: React.ReactNode;
  closeCart: () => void;
}) => {
  const { data, isLoading } = useGetCart();
  const cartItems = data?.data || [];

  return (
    <CartContext.Provider value={{ cartItems, isLoading, closeCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};
