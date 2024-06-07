import { motion } from "framer-motion";
import { ReactNode } from "react";
import { useAppSelector } from "../../../Store/reduxHooks.tsx/hooks";

const MenuContainer: React.FC<{ children: ReactNode }> = ({ children }) => {
  const target = useAppSelector((state) => state.authorization.target);
  const isSignUp = target === "signup";
  return (
    <motion.aside
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
      className="absolute top-0 right-0 z-50 h-[92vh] sm:h-screen
  w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-1">
      <ul
        className={`${!isSignUp ? "space-y-2" : ""} font-handWrite  rounded-md 
        w-full h-full bg-midlightViolet
        dark:bg-middarkViolet text-white p-4`}>
        {children}
      </ul>
    </motion.aside>
  );
};

export default MenuContainer;
