import { useAppSelector } from "../../Store/reduxHooks.tsx/hooks";
import { Container } from "../Container/Container";

import { AnimatePresence } from "framer-motion";
import MenuItems from "./Menu/MenuItems";
import Logo from "./Logo/Logo";
import MenuIcon from "./MenuIcon/MenuIcon";
import { useDarkMoodToggler } from "../../utilities/useDarkMoodToggler";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const { darkMoodToggler } = useDarkMoodToggler();
  const isOpen = useAppSelector((state) => state.siteMapSlice.isOpen);
  return (
    <nav className="z-50 mb-2 fixed top-0 w-full h-20 bg-lightViolet dark:bg-middarkViolet/80 ">
      <Container>
        <aside className="h-full flex justify-between items-center">
          <Logo />
          <button onClick={darkMoodToggler}>Toogle</button>
          <NavLink to="/products">prod</NavLink>
          <NavLink to="/home">home</NavLink>
          <MenuIcon />
        </aside>
        <AnimatePresence>{isOpen && <MenuItems />}</AnimatePresence>
      </Container>
      <span className="absolute z-0 -bottom-1 w-full h-2 bg-gradientt-r-to-l dark:bg-gradient-r-to-l bg-[length:500%_500%] dark:bg-[length:500%_500%] dark:animate-darkgradient animate-lightgradient"></span>
    </nav>
  );
};

export default Navbar;
