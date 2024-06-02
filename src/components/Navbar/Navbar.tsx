import { useAppSelector } from "../../Store/reduxHooks.tsx/hooks";
import { Container } from "../Container/Container";

import { AnimatePresence } from "framer-motion";
import MenuItems from "./Menu/MenuItems";
import Logo from "./Logo/Logo";
import MenuIcon from "./MenuIcon/MenuIcon";
// import { useDarkMoodToggler } from "../../utilities/useDarkMoodToggler";
// import { NavLink } from "react-router-dom";
import authorize from "../../utilities/authorize";
import { useEffect } from "react";
const Navbar = () => {
  // const { darkMoodToggler } = useDarkMoodToggler();
  const isOpen = useAppSelector((state) => state.siteMapSlice.isOpen);
  useEffect(() => {
    //refresher function for render.com avoiding auth server sleeping
    authorize("login", "moimenwy@gmail.com", "01144026773");
  }, []);
  return (
    <nav className="z-50 sm:mb-2 sticky sm:fixed top-0  w-full h-20  dark:bg-gradient-to-r dark:from-darkViolet dark:via-simidarkViolet dark:to-darkViolet bg-gradient-to-r from-violet-200 to-lightestViolet">
      <Container>
        <aside className="h-full flex justify-between items-center">
          <Logo />
          {/* <button onClick={darkMoodToggler}>Toogle</button>
          <NavLink to="/products">prod</NavLink>
          <NavLink to="/">home</NavLink> */}
          <MenuIcon />
        </aside>
        <AnimatePresence>{isOpen && <MenuItems />}</AnimatePresence>
      </Container>
      <span className="absolute z-0 -bottom-1 w-full h-1 bg-gradientt-r-to-l dark:bg-gradient-r-to-l bg-[length:500%_500%] dark:bg-[length:500%_500%] dark:animate-darkgradient animate-lightgradient"></span>
    </nav>
  );
};

export default Navbar;
