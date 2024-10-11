import { motion } from "framer-motion";
import { Container } from "../../../Container/Container";
import CallToActionButton from "./CallToActionButton";
const LandingHeader = () => {
  const animatedHeader = "Here elegance meets convenience";
  const array = animatedHeader.split("");

  return (
    <motion.header
      variants={{
        hidden: { y: 5 },
        visible: { y: 0 },
      }}
      initial="hidden"
      animate="visible"
      className="bg-gradient-to-bl dark:bg-gradient-to-br from-similightViolet/80 dark:from-middarkViolet/80 dark:via-transparent to-transparent rounded-xl h-[30vh] md:h-[45vh] mt-6 sm:mt-28 ">
      <Container>
        <div className="flex h-full flex-col justify-center items-center mx-auto gap-y-1">
          <h1 className="  text-2xl md:text-6xl font-handWrite font-extrabold text-subColor_4">
            <span className="font-bold font-basic">Welcome to</span> Violet
            Store
          </h1>
          <motion.ul
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            className="flex gap-x-[1px]">
            {array.map((ala, i) => {
              return (
                <motion.li
                  key={i}
                  variants={{ visible: { opacity: 1 } }}
                  initial={{ opacity: 0 }}
                  className="font-extralight md:text-2xl text-middarkViolet dark:text-lightestViolet">
                  {ala === " " ? "\u00A0" : ala}
                </motion.li>
              );
            })}
          </motion.ul>
          <motion.p
            variants={{ visible: { opacity: 1, transition: { delay: 3 } } }}
            initial={{ opacity: 0 }}
            className="text-sm ">
            Discover your style with us !
          </motion.p>
          <CallToActionButton />
        </div>
      </Container>
    </motion.header>
  );
};

export default LandingHeader;
