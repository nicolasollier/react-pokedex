import React from "react";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong } from "@fortawesome/free-solid-svg-icons";

import classes from "./PokemonHeader.module.css"

const PokemonHeader = ({pokemon}) => {
  return (
    <>
      <div className="pokemonPage__head">
        <Link className={classes.pokemonPage__links} to={`/`}>
          <FontAwesomeIcon
            className={classes.pokemonPage__icn}
            icon={faLeftLong}
          />
          <Typography variant="subtitle1" sx={{ fontWeight: "600" }}>
            Back to Pokemons
          </Typography>
        </Link>

        <div className={classes.pokemonPage__headTxt}>
          <Typography variant="h3" sx={{ marginRight: ".4rem" }}>
            {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
          </Typography>
          <Typography
            variant="h3"
            sx={{ color: "#94A3B8", marginRight: ".4rem" }}
          >
            #{pokemon.id}
          </Typography>
        </div>
      </div>
    </>
  );
};

export default PokemonHeader;
