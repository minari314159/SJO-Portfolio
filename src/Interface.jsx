import { motion } from "framer-motion";
import LoadingButton from "./LoadingButton";
import Screen from "./Screen";

const Interface = ({ section, open }) => {
  return (
    <>
      <motion.section
        className="h-screen w-screen p-8 max-w-screen-2xl mx-auto
        flex flex-col items-start"
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
        className="h-screen w-screen p-8  mx-auto  
        flex flex-col items-center md:items-end lg:items-start xl:items-end"
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
        <h1 className="text-white text-[40px] lg:text-[60px] xl:text-[70px] text-center md:text-right lg:text-left xl:text-right">
          Sit down, <br className="hidden md:flex" />
          Turn it on,
          <br className="hidden md:flex" />
          Enjoy !
        </h1>
        <h3 className="text-gray-500 text-center md:text-right text-[15px] lg:text-[20px]">
          * Scroll to proceed *
        </h3>
      </motion.section>
      <motion.section
        className=" h-screen w-screen
         relative"
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,

          transition: { ease: "linear", duration: 1, delay: 0.5 },
        }}
        exit={{ opacity: 0, transition: { duration: 0, delay: 0.1 } }}
      >
        {open ? <Screen /> : <LoadingButton />}
      </motion.section>
    </>
  );
};

export default Interface;
