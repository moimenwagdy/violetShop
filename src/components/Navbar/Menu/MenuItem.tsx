import { motion } from "framer-motion";
import React, { ReactNode } from "react";
import { NavLink } from "react-router-dom";
import { useAppDispatch } from "../../../Store/reduxHooks.tsx/hooks";
import siteMapSlice from "../../../Store/StoreSlices/siteMapSlice/siteMapSlice";

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
      } w-full min-h-fit pr-4 transition-all cursor-pointer 
      duration-300 hover:bg-similightViolet/20 
      rounded-md  text-end`}>
      <NavLink to={`/${target}`} className="min-w-full">
        {children}
        {title && <p className="py-1">{title}</p>}
      </NavLink>
    </motion.li>
  );
};
