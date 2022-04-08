import React from "react";
import logo from "../../../assets/images/pokemon-logo@3x.png";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <div className={classes.header__wrapper}>
      <img className={classes.header__logo} src={logo} alt="logo"></img>
      <h1 className={classes.header__title}>React Pokedex</h1>
    </div>
  );
};

export default Header;
