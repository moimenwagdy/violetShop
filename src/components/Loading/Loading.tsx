import React from 'react';
import { motion } from 'framer-motion';

// Define the color palette
const colors = {
  darkestViolet: "#200e30",
  darkViolet: "#34183b",
  simidarkViolet: "#462261",
  middarkViolet: "#5b2d84",
  lightestViolet: "#bf73f3",
  lightViolet: "#a758df",
  midlightViolet: "#884ab6",
  similightViolet: "#daa5fa",
  subColor_1: "#74647c",
  subColor_2: "#9f7db2",
  subColor_3: "#040404",
  subColor_4: "rgb(220, 38, 38)",
  productLighBG: "rgb(254, 202, 202)",
  productDarkBG: "rgb(191, 219, 254)",
  darkBasicBackground: "#252525",
};

const circleVariants = {
  animation1: {
    rotate: [0, 360],
    transition: {
      duration: 2,
      ease: "linear",
      repeat: Infinity,
    },
  },
  animation2: {
    rotate: [0, -360],
    transition: {
      duration: 2.5,
      ease: "linear",
      repeat: Infinity,
    },
  },
};

const LoadingComponent: React.FC = () => {
  return (
    <div className="relative w-40 h-40 bg-darkBasicBackground flex items-center justify-center">
      {[...Array(8)].map((_, index) => (
        <motion.div
          key={index}
          className="absolute w-8 h-8 rounded-full"
          style={{
            backgroundColor: colors.lightestViolet,
            top: `${Math.random() * 80}%`,
            left: `${Math.random() * 80}%`,
          }}
          animate={index % 2 === 0 ? 'animation1' : 'animation2'}
          variants={circleVariants}
        />
      ))}
    </div>
  );
};

export default LoadingComponent;
