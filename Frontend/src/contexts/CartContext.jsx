import { createContext, useReducer, useState } from "react";
import cartReducer from "../reducers/cartReducer";

export const CartContext = createContext();

export function CartContextProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, { items: [] });

  function addItem(item) {
    dispatch({ type: "ADD_ITEM", item });
  }

  function updateItem() {}

  function deleteItem() {}

  function clearAll() {}

  const cartContext = {
    items: cart.items,
    addItem,
  };
  console.log(cartContext);

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
}
