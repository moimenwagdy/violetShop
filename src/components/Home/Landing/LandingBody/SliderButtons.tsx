import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, spring } from "framer-motion";
import { useEffect, useState } from "react";

const SliderButtons: React.FC<{
  icon: IconDefinition;
  x: number;
}> = ({ icon, x }) => {
  const [a, setA] = useState<Element>();
  const xScroll = (i: number) => {
    i === 1 && a!.scrollBy({ left: -150, behavior: "smooth" });
    i === -1 && a!.scrollBy({ left: 150, behavior: "smooth" });
  };
  useEffect(() => {
    const scrollBox = document.querySelector("#RecommendedScrollBox");
    scrollBox && setA(scrollBox);
    console.log(x);
  }, [x]);
  return (
    <motion.span
      variants={{
        hidden: { x: x === -1 ? 120 : -120, scale: 0.98 },
        visible: { x: 0, transition: { type: spring, delay: 3 } },
        scalling: {
          scale: 1.05,
          transition: { repeat: Infinity, duration: 1000 },
        },
      }}
      initial="hidden"
      animate="visible"
      className="w-fit">
      <FontAwesomeIcon
        className="text-5xl animate-pulse text-middarkViolet dark:text-lightViolet cursor-pointer w-full"
        icon={icon}
        onClick={() => xScroll(x)}
      />
    </motion.span>
  );
};

export default SliderButtons;