import { createSlice } from "@reduxjs/toolkit";
export interface reviewsOffset {
  reviewsOffset: number;
  userRateValue: number;
  isAllowToGetCategories: boolean;
}

const init: reviewsOffset = {
  reviewsOffset: 1,
  userRateValue: 0,
  isAllowToGetCategories: true,
};

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
    BlockGetCategories: (state) => {
      state.isAllowToGetCategories = false;
    },
    setAllowGetCategories: (state) => {
      state.isAllowToGetCategories = true;
    },
  },
});

export default productsDetails;
export const productsDetailsActions = productsDetails.actions;
