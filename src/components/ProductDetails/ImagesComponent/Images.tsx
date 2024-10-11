import { motion } from "framer-motion";
import { useState } from "react";

const Images: React.FC<{ images: string[] }> = ({ images }) => {
  const [index, setIndex] = useState<number>(0);
  const selectedIndex = (i: number) => {
    setIndex(i);
  };
  let width = "";
  switch (images.length) {
    case 1:
      width = "w-24";
      break;
    case 2:
      width = "w-48";
      break;
    case 3:
      width = "w-72";
      break;
    case 4:
      width = "w-96";
      break;
    case 6:
      width = "w-[576px]";
      break;
    default:
      break;
  }
  return (
    <>
      <span className="rounded-md  min-w-96 flex flex-col  justify-center items-center">
        <motion.img
          key={index}
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
          src={images[index]}
          className="w-80 h-80"
        />
        <ul
          className={`flex  rounded-md bg-productLighBG dark:bg-productLighBG/60 ${width} divide-x-2 divide-white dark:divide-white/50`}>
          {images &&
            images.map((image, i) => {
              return (
                <li key={image}>
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    onClick={() => selectedIndex(i)}
                    className=" w-24  h-24 cursor-pointer"
                    src={image}
                    alt={image}
                  />
                </li>
              );
            })}
        </ul>
      </span>
    </>
  );
};

export default Images;
