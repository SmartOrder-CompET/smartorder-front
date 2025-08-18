"use client"; 

import { createContext, useContext, useReducer, ReactNode } from "react";
import { cartReducer, cartInitialState } from "@/reducers/CartReducer";
import { CartType } from "@/types/Cart";
import { ReducerActionType } from "@/types/ReducerAction";

type CartContextType = {
  state: CartType;
  dispatch: React.Dispatch<ReducerActionType>;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

type Props = {
  children: ReactNode;
};

export const CartProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};


export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart deve ser usado dentro de um CartProvider");
  }
  return context;
};
