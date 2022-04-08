import React from "react";
import PokemonFrontImage from "../UI/PokemonImages/PokemonFrontImage";
import { Card } from "@mui/material";
import classes from "./PokemonPortrait.module.css"

const PokemonPortrait = ({ pokemon }) => {
  return (
    <>
      <Card
        className={classes.pokemonPortrait}
        sx={{
          boxShadow: 0,
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <PokemonFrontImage pokemon={pokemon} />
      </Card>
    </>
  );
};

export default PokemonPortrait;
