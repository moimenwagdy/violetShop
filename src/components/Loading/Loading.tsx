import { motion } from "framer-motion";
import React from "react";

const LoadingComponent: React.FC = () => {
  const rr = "0123456";

  return (
    <motion.ul className="flex justify-center items-center gap-x-2">
      {rr.split("").map((_, index) => (
        <motion.li
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0, 1] }}
          transition={{
            delay: index,
            duration: 3,
          }}
          key={index}>
          <div className={`bg-darkViolet  w-4 h-4 px] rounded-full`}></div>
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default LoadingComponent;
