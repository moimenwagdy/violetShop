import { motion } from "framer-motion";
import React, { ReactNode } from "react";

export const MenuItem: React.FC<{
  children?: ReactNode;
  className?: string;
  title?: string;
  onClick?: () => void;
}> = ({ className, children, onClick, title }) => {
  return (
    <motion.li
      onClick={onClick}
      className={` ${
        className ? className : ""
      } px-4 py-1 transition-all cursor-pointer 
      duration-300 hover:bg-similightViolet/20 
      rounded-md  text-end`}>
      {children}
      {title}
    </motion.li>
  );
};
