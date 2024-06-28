import { createSlice } from "@reduxjs/toolkit";
import { darkmood } from "../../../utilities/GlobalEnums/enums";
export interface darkMoood {
  isDark: boolean | undefined;
}

const localStorageHasDaarkMood = localStorage.getItem(darkmood.mood);

const isDark = localStorageHasDaarkMood === darkmood.dark;
const init: darkMoood = { isDark: isDark ? true : false };

const darkMoodSlice = createSlice({
  name: "darkMoodSlice",
  initialState: init,
  reducers: {
    darkMood: (state, actions) => {
      state.isDark = actions.payload;
      if (state.isDark) {
        localStorage.setItem(darkmood.mood, darkmood.dark);
      }
      if (!state.isDark) {
        localStorage.removeItem(darkmood.mood);
      }
    },
  },
});

export default darkMoodSlice;

export const darkMoodSliceAction = darkMoodSlice.actions;
