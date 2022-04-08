import React from "react";
import classes from "./PokemonImage.module.css"

const PokemonFrontImage = ({pokemon}) => {
  return (
    <img
      className={classes.pokemonImg}
      src={pokemon.sprites.front_default}
      alt="pokemon sprite"
    />
  );
};

export default PokemonFrontImage;
