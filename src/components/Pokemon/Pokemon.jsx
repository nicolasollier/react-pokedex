import React from "react";
import { Card, CardContent, Button, Typography } from "@mui/material";

import classes from "./Pokemon.module.css"

const Pokemon = ({ pokemon }) => {
  return (
    <Card className={classes.pokemon__card} sx={{ boxShadow: 0 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Pokemon #{pokemon.id}
        </Typography>
        <Typography variant="h5" component="div">
          {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
        </Typography>
        <img className={classes.pokemon__img} src={pokemon.sprites.front_default} alt="pokemon sprite" />
        <br />
        <Button variant="outlined" size="small" disableElevation>
          Details
        </Button>
      </CardContent>
    </Card>
  );
};

export default Pokemon;