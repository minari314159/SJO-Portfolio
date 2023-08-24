import { motion } from "framer-motion";
import Screen from "./Screen";

const Interface = ({ section }) => {
  return (
    <>
      <motion.section
        className="intro"
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
        <h1 className="title">
          Welcome to <br /> My Portfolio
        </h1>
        <h3>* Scoll to zoom *</h3>
      </motion.section>
      <motion.section
        className="section2"
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
        <h1 className="title2">
          Sit down, <br />
          Turn it on,
          <br />
          Enjoy !
        </h1>
        <h3 className="note2">* Scroll to proceed *</h3>
      </motion.section>
      <motion.section
        className="section3"
        initial={{ opacity: 0, scale: 0 }}
        animate={"" + section}
        variants={{
          1: {
            opacity: 1,
            scale: 1,
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
