import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, List, ListItemText, Typography } from "@mui/material";

const PokemonPassive = ({ pokemon }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [passives, setPassives] = useState([]);

  useEffect(() => {
    getPassivesList();
    return () => {};
  }, []);

  const getPassivesList = async () => {
    let passives = [];

    for (let ability of pokemon.abilities) {
      const res = await getPassives(ability.ability.name);
      passives.push(res.data);
    }
    setPassives(passives);
    setIsLoading(false);
  };

  const getPassives = async (abilityName) => {
    const res = await axios.get(
      `https://pokeapi.co/api/v2/ability/${abilityName}`
    );
    return res;
  };

  return (
    !isLoading && (
      <Card style={{ padding: "2rem", boxShadow: "none" }}>
        <List>
          {passives.map((passive) => {
            return (
              <ListItemText key={passive.id}>
                <Typography variant="h6" style={{ fontWeight: "bolder" }}>
                  {passive.name.charAt(0).toUpperCase() + passive.name.slice(1)}
                </Typography>
                <Typography variant="body">
                  {passive.effect_entries[1].effect}
                  <br />
                </Typography>
                <br />
              </ListItemText>
            );
          })}
        </List>
      </Card>
    )
  );
};

export default PokemonPassive;
