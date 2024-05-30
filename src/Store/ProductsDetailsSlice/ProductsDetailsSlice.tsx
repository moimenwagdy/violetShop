import { createSlice } from "@reduxjs/toolkit";
export interface reviewsOffset {
  reviewsOffset: number;
  userRateValue: number;
}

const init: reviewsOffset = { reviewsOffset: 1, userRateValue: 0 };

const productsDetails = createSlice({
  name: "productsDetails",
  initialState: init,
  reducers: {
    setReviewsOffset: (state) => {
      if (state.reviewsOffset > 3) {
        state.reviewsOffset = 3;
      } else state.reviewsOffset += 1;
    },
    resetReviewsOffset: (state) => {
      state.reviewsOffset = 1;
    },
    setUserRateValue: (state, actions) => {
      state.userRateValue = actions.payload;
    },
  },
});

export default productsDetails;
export const productsDetailsActions = productsDetails.actions;
