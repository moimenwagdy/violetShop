// cartMiddleware.ts
import { Middleware } from "@reduxjs/toolkit";
import cartSlice from "./CartSlice"; // Assuming you export cartSlice correctly
import setUserCartItems from "../../../utilities/setUserCartItems";
interface CustomAction {
  type: string;
}
const cartMiddleware: Middleware = (store) => (next) => async (action) => {
  const typedAction = action as CustomAction;
  const result = next(typedAction);
  // Actions that modify the cart state
  const actionsThatModifyCart: string[] = [
    cartSlice.actions.addToCart.type,
    cartSlice.actions.removeFromCart.type,
    cartSlice.actions.increaseOneItemQuan.type,
    cartSlice.actions.decreaseOneItemQuan.type,
  ];

  // Check if the dispatched action is one that modifies the cart
  if (actionsThatModifyCart.includes(typedAction.type)) {
    const { cartProducts } = store.getState().cartSlice;
    const { responseData } = store.getState().authorization;

    setUserCartItems(responseData, cartProducts);
  }

  return result;
};

export default cartMiddleware;
