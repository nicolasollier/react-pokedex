import React from "react";
import { motion } from "framer-motion";

import classes from "./Loader.module.css";

const Loader = () => {
  return (
    <>
      <div className={classes.loader__container}>
        <div className={classes.loader__content}>
          <motion.svg
            width="36"
            height="36"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            animate={{ y: [0, 10, 0] }}
            transition={{
              type: "bounce",
              duration: 0.4,
              stiffness: 100,
              repeat: Infinity,
            }}
          >
            <path
              d="M30 15C30 23.2843 23.2843 30 15 30C6.71573 30 0 23.2843 0 15C0 6.71573 6.71573 0 15 0C23.2843 0 30 6.71573 30 15Z"
              fill="white"
            />
            <path
              d="M30 15C30 6.71573 23.2843 0 15 0C6.71573 0 0 6.71573 0 15H30Z"
              fill="#F02D36"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15 28C22.1797 28 28 22.1797 28 15C28 7.8203 22.1797 2 15 2C7.8203 2 2 7.8203 2 15C2 22.1797 7.8203 28 15 28ZM15 30C23.2843 30 30 23.2843 30 15C30 6.71573 23.2843 0 15 0C6.71573 0 0 6.71573 0 15C0 23.2843 6.71573 30 15 30Z"
              fill="#020C2D"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.5 16H1.5L1.5 14L10.5 14V16Z"
              fill="#020C2D"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M28.5 16H19.5V14L28.5 14V16Z"
              fill="#020C2D"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15 18C16.6569 18 18 16.6569 18 15C18 13.3431 16.6569 12 15 12C13.3431 12 12 13.3431 12 15C12 16.6569 13.3431 18 15 18ZM15 20C17.7614 20 20 17.7614 20 15C20 12.2386 17.7614 10 15 10C12.2386 10 10 12.2386 10 15C10 17.7614 12.2386 20 15 20Z"
              fill="#020C2D"
            />
            <circle cx="15" cy="15" r="3" fill="white" />
          </motion.svg>

          <h4 className={classes["loader__txt"]}>Fetching Pokemons...</h4>
        </div>
      </div>
    </>
  );
};

export default Loader;
