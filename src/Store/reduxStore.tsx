import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./productsSlice/slice";
import darkMoodSlice from "./darkMoodSlice/darkMoodSlice";
import siteMapSlice from "./siteMapSlice/siteMapSlice";
import authorization from "./authorizationSlice/authorization";
import productsDetails from "./ProductsDetailsSlice/ProductsDetailsSlice";

export const store = configureStore({
  reducer: {
    productsSlice: productsSlice.reducer,
    darkMoodSlice: darkMoodSlice.reducer,
    siteMapSlice: siteMapSlice.reducer,
    authorization: authorization.reducer,
    productsDetails: productsDetails.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
