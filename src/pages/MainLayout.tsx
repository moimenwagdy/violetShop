import { Outlet } from "react-router";
import Navbar from "../components/Navbar/Navbar";
import { useAppSelector } from "../Store/reduxHooks.tsx/hooks";

const MainLayout = () => {
  const mood = useAppSelector((state) => state.darkMoodSlice.isDark);
  const ele = document.querySelector("html");
  if (mood) {
    ele?.classList.add("dark");
  } else ele?.classList.remove("dark");

  
  return (
    <>
      <div className="sm:mb-20">
        <Navbar />
      </div>
      <Outlet />
    </>
  );
};

export default MainLayout;
