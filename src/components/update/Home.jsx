import React from "react";
import { motion } from "framer-motion";
import Typewriter from "./TypeRighter";
import AnimatedText from "./animatedText/animatedText";
function Home() {
  return (
    <div id="home">
      <motion.div
        initial={{ x: -100 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 1 }}
      >
        <img src="https://www.cmarix.com/blog/wp-content/uploads/2020/06/Why-Tech-Stacks-MEAN-and-MERN-are-the-trendiest-in-2020.png" />
      </motion.div>
      <motion.div
        initial={{ x: 100 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 1 }}
      >
        {" "}
        <AnimatedText />
      </motion.div>
    </div>
  );
}

export default Home;
