import darkMoodSlice from "../Store/darkMoodSlice/darkMoodSlice";
import { useAppDispatch } from "../Store/reduxHooks.tsx/hooks";

export function useDarkMoodToggler() {
  const dispatch = useAppDispatch();
  const darkMoodToggler = () => {
    const ele = document.querySelector("html");
    const isDark = ele?.classList.contains("dark");
    if (isDark) {
      ele?.classList.remove("dark");
      dispatch(darkMoodSlice.actions.darkMood(false));
    }
    if (!isDark) {
      ele?.classList.add("dark");
      dispatch(darkMoodSlice.actions.darkMood(true));
    }
  };
  return { darkMoodToggler };
}
