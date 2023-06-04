import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./styles.module.css";
const AnimatedText = () => {
  const [text, setText] = useState("A Full Stack Devloper");

  useEffect(() => {
    const interval = setInterval(() => {
      setText((prevText) =>
        prevText === "A Full Stack Devloper"
          ? "A Problem Solver"
          : "A Full Stack Devloper"
      );
    }, 6000);

    return () => clearInterval(interval);
  }, []);
  console.log(styles);
  return (
    <div className={styles.animatedText}>
      <div>Hey I Am Aakash </div>
      <div>
        <AnimatePresence>
          <motion.div
            key={text}
            initial={{ rotateX: 90, scale: 0.8 }}
            animate={{ rotateX: 0, scale: 1 }}
            transition={
              text == "A Full Stack Devloper"
                ? { duration: 1, delay: 0.4 }
                : { duration: 1, delay: 0.4 }
            }
            exit={{ rotateX: -90, scale: 0.9, transition: { duration: 0.3 } }}
          >
            {text}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AnimatedText;
