import { motion } from "framer-motion";
import React, { ReactNode } from "react";
import { NavLink } from "react-router-dom";
import { useAppDispatch } from "../../../Store/reduxHooks.tsx/hooks";
import siteMapSlice from "../../../Store/siteMapSlice/siteMapSlice";

export const MenuItem: React.FC<{
  children?: ReactNode;
  className?: string;
  title?: string;
  target?: string;
}> = ({ className, children, title, target }) => {
  const dispatch = useAppDispatch();
  const closeSiteMap = () => {
    dispatch(siteMapSlice.actions.closeMap());
  };
  return (
    <motion.li
      onClick={closeSiteMap}
      className={` ${
        className ? className : ""
      }  px-4 py-1 transition-all cursor-pointer 
      duration-300 hover:bg-similightViolet/20 
      rounded-md  text-end`}>
      <NavLink to={`/${target}`} className="w-full">
        {children}
        {title}
      </NavLink>
    </motion.li>
  );
};
