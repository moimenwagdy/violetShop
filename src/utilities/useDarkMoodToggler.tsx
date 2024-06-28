import darkMoodSlice from "../Store/StoreSlices/darkMoodSlice/darkMoodSlice";
import { useAppDispatch, useAppSelector } from "../Store/reduxHooks.tsx/hooks";

export function useDarkMoodToggler() {
  const dispatch = useAppDispatch();
  const stateMood = useAppSelector(state=>state.darkMoodSlice.isDark)
  const darkMoodToggler = () => {
    
    if (stateMood) {
      dispatch(darkMoodSlice.actions.darkMood(false));
    }
    if (!stateMood) {
      dispatch(darkMoodSlice.actions.darkMood(true));
    }
  };
  return { darkMoodToggler };
}
