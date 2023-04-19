import React from "react";
import { motion } from "framer-motion";
const Home = () => {
  return (
    <div className="home">
      <motion.div
        className="name"
        initial={{ x: -300, scale: 0.5 }}
        animate={{ x: 0, scale: 1 }}
        transition={{ duration: 1 }}
      >
        Bhanu <font>Joshi</font>
      </motion.div>

      <motion.div
        initial={{ x: 300, scale: 0.5 }}
        animate={{ x: 0, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="subtitle">
          Software<font> Engineer</font>
        </div>
        <div className="desc">
          An engineer's journey is defined by a commitment to{" "}
          <font> Learn, Explore, and Share</font>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
