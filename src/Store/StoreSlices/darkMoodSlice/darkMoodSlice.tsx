import { createSlice } from "@reduxjs/toolkit";
export interface darkMoood {
  isDark: boolean | undefined;
}

const ele = document.querySelector("html");
const isDark = ele?.classList.contains("dark");

const init: darkMoood = { isDark: isDark ? true : false };

const darkMoodSlice = createSlice({
  name: "darkMoodSlice",
  initialState: init,
  reducers: {
    darkMood: (state, actions) => {
      state.isDark = actions.payload;
      console.log(state.isDark);
    },
  },
});

export default darkMoodSlice;

export const darkMoodSliceAction = darkMoodSlice.actions;
