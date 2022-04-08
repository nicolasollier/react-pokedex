import React from "react";
import { List, ListItemText, Card, Box } from "@mui/material";
import Bar from "../../components/UI/Bar/Bar";
import classes from "./PokemonAbilities.module.css"

const PokemonAbilities = ({ pokemon }) => {
  return (
    <>
      <Card
        className={classes.pokemonAbilities}
        sx={{ boxShadow: 0 }}
      >
        <List>
          {pokemon.stats.map((stat) => {
            let pokemonStat = stat.stat;
            return (
              <Box key={Math.random() * 1000} sx={{ marginBottom: "36px" }}>
                <ListItemText variant="body">
                  {pokemonStat.name.charAt(0).toUpperCase() +
                    pokemonStat.name.slice(1)}
                </ListItemText>
                <Bar stat={stat} />
              </Box>
            );
          })}
        </List>
      </Card>
    </>
  );
};

export default PokemonAbilities;
