import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./StoreSlices/productsSlice/slice";
import darkMoodSlice from "./StoreSlices/darkMoodSlice/darkMoodSlice";
import siteMapSlice from "./StoreSlices/siteMapSlice/siteMapSlice";
import authorization from "./StoreSlices/authorizationSlice/authorization";
import productsDetails from "./StoreSlices/ProductsDetailsSlice/ProductsDetailsSlice";
import cartSlice from "./StoreSlices/CartSlice/CartSlice";

export const store = configureStore({
  reducer: {
    productsSlice: productsSlice.reducer,
    darkMoodSlice: darkMoodSlice.reducer,
    siteMapSlice: siteMapSlice.reducer,
    authorization: authorization.reducer,
    productsDetails: productsDetails.reducer,
    cartSlice: cartSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
