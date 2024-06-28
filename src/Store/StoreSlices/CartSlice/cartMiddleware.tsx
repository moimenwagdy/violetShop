// cartMiddleware.ts
import { Middleware } from "@reduxjs/toolkit";
import cartSlice from "./CartSlice"; 
import setUserCartItems from "../../../utilities/setUserCartItems";
interface CustomAction {
  type: string;
}
const cartMiddleware: Middleware = (store) => (next) => async (action) => {
  const typedAction = action as CustomAction;
  const result = next(typedAction);

  const actionsThatModifyCart: string[] = [
    cartSlice.actions.addToCart.type,
    cartSlice.actions.removeFromCart.type,
    cartSlice.actions.increaseOneItemQuan.type,
    cartSlice.actions.decreaseOneItemQuan.type,
  ];

  if (actionsThatModifyCart.includes(typedAction.type)) {
    const { cartProducts } = store.getState().cartSlice;
    const { responseData } = store.getState().authorization;

    setUserCartItems(responseData, cartProducts);
  }

  return result;
};

export default cartMiddleware;
