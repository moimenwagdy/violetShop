import { createSlice } from "@reduxjs/toolkit";
export interface darkMoood {
  isDark: boolean | undefined;
}

const localStorageHasDaarkMood = localStorage.getItem("mood");

const isDark = localStorageHasDaarkMood === "dark";
const init: darkMoood = { isDark: isDark ? true : false };

const darkMoodSlice = createSlice({
  name: "darkMoodSlice",
  initialState: init,
  reducers: {
    darkMood: (state, actions) => {
      state.isDark = actions.payload;
      if (state.isDark) {
        localStorage.setItem("mood", "dark");
      }
      if (!state.isDark) {
        localStorage.removeItem("mood");
      }
    },
  },
});

export default darkMoodSlice;

export const darkMoodSliceAction = darkMoodSlice.actions;
