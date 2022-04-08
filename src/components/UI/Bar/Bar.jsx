import React from "react";
import classes from "./Bar.module.css";
import { motion } from "framer-motion"

const Bar = ({ stat }) => {
  const pokemonStat = [
    (stat.base_stat * 100) / 160,
    getBackgroundValue((stat.base_stat * 100) / 160),
  ];

  function getBackgroundValue(num) {
    if (num <= 20) {
      return "#F43F5E";
    } else if (num <= 60) {
      return "#FACC15";
    } else {
      return "#22C55E";
    }
  }

  return (
    <span className={classes.barFill}>
      <motion.span
        animate={{ x: [-400, 0] }}
        transition={{ ease: "circOut", duration: 1 }}
        className={classes.barActive}
        style={{
          width: `${pokemonStat[0]}%`,
          minWidth: `10%`,
          backgroundColor: `${pokemonStat[1]}`,
        }}
      >
      </motion.span>
    </span>
  );
};

export default Bar;
