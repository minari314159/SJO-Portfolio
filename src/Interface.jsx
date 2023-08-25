import { motion } from "framer-motion";
import { useThree } from "@react-three/fiber";
import Screen from "./Screen";

const Interface = ({ section }) => {
  const { viewport } = useThree();
  const responsiveRatio = viewport.width / 4;

  const isMobile = window.innerWidth < 850;
  console.log(responsiveRatio);
  return (
    <>
      <motion.section
        className="absolute m-0 pl-[3rem] h-[80vh] top-0 w-[100vw] flex flex-col justify-start gap-5"
        initial={{ opacity: 0, x: -50 }}
        animate={"" + section}
        variants={{
          0: {
            opacity: 1,
            x: 0,
            transition: { ease: "linear", duration: 1, delay: 0.4 },
          },
        }}
      >
        <h1 className="text-white text-[60px] lg:text-[80px] mt-[6rem]  lg:mt-[8rem]">
          Welcome to <br /> My Portfolio
        </h1>
        <h3 className="text-gray-500 align-left text-[18px] lg:text-[20px]">
          * Scoll to zoom *
        </h3>
      </motion.section>
      <motion.section
        className="absolute m-1 pr-[1rem] h-[80vh] top-[120vh] xl:top-[110vh] left-[-12vw] md:left-[37vw] lg:left-[52vw] xl:left-[65vw] w-[30rem] flex flex-col gap-5"
        initial={{ opacity: 0, x: 50 }}
        animate={"" + section}
        variants={{
          1: {
            opacity: 1,
            x: 0,
            transition: { ease: "linear", duration: 1, delay: 0.4 },
          },
        }}
      >
        <h1 className="text-white text-[40px] xl:text-[60px] text-right">
          Sit down, <br />
          Turn it on,
          <br />
          Enjoy !
        </h1>
        <h3 className="text-gray-500 text-right text-[18px] lg:text-[20px]">
          * Scroll to proceed *
        </h3>
      </motion.section>
      <motion.section
        className="absolute m-[1rem] top-[200vh] left-[8vw] overflow-hidden"
        initial={{ opacity: 0, scale: 0 }}
        animate={"" + section}
        variants={{
          1: {
            opacity: 1,
            scale: responsiveRatio,
            transition: { ease: "linear", duration: 1, delay: 0.4 },
          },
        }}
      >
        <Screen />
      </motion.section>
    </>
  );
};

export default Interface;
