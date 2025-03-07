import { Outlet } from "react-router";
import Navbar from "../components/Navbar/Navbar";
import { useAppSelector } from "../Store/reduxHooks.tsx/hooks";
import { motion } from "framer-motion";
import Footer from "../Footer/Footer";

const MainLayout = () => {
  const mood = useAppSelector((state) => state.darkMoodSlice.isDark);
  const ele = document.querySelector("html");
  if (mood) {
    ele?.classList.add("dark");
  } else ele?.classList.remove("dark");

  return (
    <>
      <motion.div layout>
        <Navbar />
      </motion.div>
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
