import { motion } from "framer-motion";
import { ReactNode, useEffect, useRef } from "react";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../Store/reduxHooks.tsx/hooks";
import { siteMapSliceAction } from "../../../Store/StoreSlices/siteMapSlice/siteMapSlice";

const MenuContainer: React.FC<{ children: ReactNode }> = ({ children }) => {
  const target = useAppSelector((state) => state.authorization.target);
  const dispatch = useAppDispatch();
  const isSignUp = target === "signup";
  const menuRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        dispatch(siteMapSliceAction.closeMap());
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });
  return (
    <motion.aside
      layout
      ref={menuRef}
      variants={{
        hidden: {
          x: 320,
          opacity: 0,
        },
        visible: { x: 0, opacity: 1 },
      }}
      initial="hidden"
      animate="visible"
      exit="hidden"
      transition={{ stiffness: 75, type: "spring", damping: 18 }}
      className="absolute top-0 right-0 z-50 h-[95vh] sm:h-screen
  w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-1">
      <ul
        className={`${
          !isSignUp ? "space-y-2" : ""
        } font-handWrite menu rounded-md 
        w-full h-full bg-midlightViolet
        dark:bg-middarkViolet text-white p-4`}>
        {children}
      </ul>
    </motion.aside>
  );
};

export default MenuContainer;
