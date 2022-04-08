import React from "react";
import { Link } from "react-router-dom";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <span>
        <p>Made with ❤️ by {<a href="https://github.com/nicolasollier">Nicolas Ollier</a>}</p>
      </span>
    </div>
  );
};

export default Footer;
