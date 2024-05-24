import { createSlice } from "@reduxjs/toolkit";

const siteMapSlice = createSlice({
  name: "siteMapSlice",
  initialState: { isOpen: false },
  reducers: {
    openMap: (state) => {
      state.isOpen = true;
    },
    closeMap: (state) => {
      state.isOpen = false;
    },
  },
});

export default siteMapSlice;

export const siteMapSliceAction = siteMapSlice.actions;
