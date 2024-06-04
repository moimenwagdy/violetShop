import { createSlice } from "@reduxjs/toolkit";
import { cartPayload } from "../../../components/Cart/types";
export interface cartProducts {
  cartProducts: cartPayload[];
}

const init: cartProducts = { cartProducts: [] };

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: init,
  reducers: {
    addToCart: (state, action: { payload: { item: cartPayload } }) => {
      const itemIndex = state.cartProducts.findIndex((item) => {
        return item.id === action.payload.item.id;
      });
      if (itemIndex === -1) {
        state.cartProducts = [...state.cartProducts, action.payload.item];
      } else {
        let cart: cartPayload[] = [...state.cartProducts];
        cart.splice(itemIndex, 1, action.payload.item);
        state.cartProducts = [...cart];
      }
    },
    removeFromCart: (state, action: { payload: { itemID: number } }) => {
      const filteredCart = state.cartProducts.filter((item) => {
        return item.id !== action.payload.itemID;
      });
      state.cartProducts = [...filteredCart];
    },
    increaseOneItemQuan: (state, action: { payload: { itemID: number } }) => {
      const subArr: cartPayload[] = [...state.cartProducts];
      const targetIndex: number = subArr.findIndex((item) => {
        return item.id === action.payload.itemID;
      });
      subArr[targetIndex].quantity++;
      subArr[targetIndex].totalPrice =
        subArr[targetIndex].quantity * subArr[targetIndex].priceAfterSale;
      state.cartProducts = [...subArr];
    },
    decreaseOneItemQuan: (state, action: { payload: { itemID: number } }) => {
      const subArr: cartPayload[] = [...state.cartProducts];
      const targetIndex: number = subArr.findIndex((item) => {
        return item.id === action.payload.itemID;
      });
      subArr[targetIndex].quantity--;
      subArr[targetIndex].totalPrice =
        subArr[targetIndex].quantity * subArr[targetIndex].priceAfterSale;
      if (subArr[targetIndex].quantity < 0) {
        subArr.splice(targetIndex, 1);
      }
      state.cartProducts = [...subArr];
    },
  },
});

export default cartSlice;

export const cartSliceAction = cartSlice.actions;
