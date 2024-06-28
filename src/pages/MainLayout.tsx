import { Outlet } from "react-router";
import Navbar from "../components/Navbar/Navbar";
import { useAppSelector } from "../Store/reduxHooks.tsx/hooks";
import { motion } from "framer-motion";

const MainLayout = () => {
  const mood = useAppSelector((state) => state.darkMoodSlice.isDark);
  const ele = document.querySelector("html");
  if (mood) {
    ele?.classList.add("dark");
  } else ele?.classList.remove("dark");


  return (
    <>
      <motion.div layout className="sm:mb-20">
        <Navbar />
      </motion.div>
      <Outlet />
    </>
  );
};

export default MainLayout;
