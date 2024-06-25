import {
  combineReducers,
  configureStore,
} from "@reduxjs/toolkit";
import productsSlice from "./StoreSlices/productsSlice/slice";
import darkMoodSlice from "./StoreSlices/darkMoodSlice/darkMoodSlice";
import siteMapSlice from "./StoreSlices/siteMapSlice/siteMapSlice";
import authorization from "./StoreSlices/authorizationSlice/authorization";
import productsDetails from "./StoreSlices/ProductsDetailsSlice/ProductsDetailsSlice";
import cartSlice from "./StoreSlices/CartSlice/CartSlice";
import cartMiddleware from "./StoreSlices/CartSlice/cartMiddleware";

const compinedStore = combineReducers({
  productsSlice: productsSlice.reducer,
  darkMoodSlice: darkMoodSlice.reducer,
  siteMapSlice: siteMapSlice.reducer,
  authorization: authorization.reducer,
  productsDetails: productsDetails.reducer,
  cartSlice: cartSlice.reducer,
});

export const store = configureStore({
  reducer: compinedStore,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cartMiddleware),
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
