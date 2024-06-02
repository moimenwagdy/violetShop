import { motion } from "framer-motion";
import React, { ReactNode } from "react";
import { NavLink } from "react-router-dom";

export const MenuItem: React.FC<{
  children?: ReactNode;
  className?: string;
  title?: string;
  target?: string;
  onClick?: () => void;
}> = ({ className, children, onClick, title, target }) => {
  return (
    <motion.li
      onClick={onClick}
      className={` ${
        className ? className : ""
      } px-4 py-1 transition-all cursor-pointer 
      duration-300 hover:bg-similightViolet/20 
      rounded-md  text-end`}>
      <NavLink
        to={`/${target}`}
        className={({ isActive }) => {
          return isActive ? "" : "";
        }}>
        {children}
        {title}
      </NavLink>
    </motion.li>
  );
};
