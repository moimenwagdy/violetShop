import { motion } from "framer-motion";
import { ReactNode } from "react";

export const Container: React.FC<{
  children?: ReactNode;
  className?: string;
}> = ({ children, className }) => {
  return (
    <motion.div
      variants={{ hidden: { y: 1 }, visible: { y: 0 } }}
      initial="hidden"
      animate="visible"
      className={`${className ? className : ""} w-[96%] mx-auto h-full`}>
      {children}
    </motion.div>
  );
};
