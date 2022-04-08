import React from "react";
import classes from "./PokemonImage.module.css"

const PokemonBackImage = ({pokemon}) => {
  return (
    <img
      className={classes.pokemonImg}
      src={pokemon.sprites.back_default}
      alt="pokemon sprite"
    />
  );
};

export default PokemonBackImage;
