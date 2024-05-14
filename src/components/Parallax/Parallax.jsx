import { useRef } from "react";
import "./Parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  parallaxTextVariants,
  textVariants,
} from "../../helpers/motionTextVariants";

const Parallax = ({ type }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yBG = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div
      className="parallax"
      ref={ref}
      style={{
        background:
          type === "about"
            ? "linear-gradient(180deg, #0C0C1D, #111132)"
            : "linear-gradient(180deg, #0C0C1D, #505064)",
      }}
    >
      <motion.h1
        style={{ y: yText }}
        variants={parallaxTextVariants}
        initial="initial"
        whileInView="animate"
      >
        {type === "about" ? "Discover more about me" : "My Projects"}
      </motion.h1>
      <motion.div className="mountains"></motion.div>
      <motion.div
        style={{
          y: yBG,
          backgroundImage: `url(${
            type === "about" ? "/planets.png" : "/sun.png"
          })`,
        }}
        className="planets"
      ></motion.div>
      <motion.div style={{ x: yBG }} className="stars"></motion.div>
    </div>
  );
};

export default Parallax;
