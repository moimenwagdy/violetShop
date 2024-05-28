import { createSlice } from "@reduxjs/toolkit";
export interface darkMoood {
  reviewsOffset: number;
}

const init: darkMoood = { reviewsOffset: 1 };

const productsDetails = createSlice({
  name: "productsDetails",
  initialState: init,
  reducers: {
    setReviewsOffset: (state) => {
      if (state.reviewsOffset > 3) {
        state.reviewsOffset = 3
      } else state.reviewsOffset += 1;
    },
    resetReviewsOffset: (state) => {
      state.reviewsOffset = 1;
    },
  },
});

export default productsDetails;
export const productsDetailsActions = productsDetails.actions;
