import React, { useEffect, useState } from "react";
import axios from "axios";
import { Grid } from "@mui/material";
import Loader from "../../components/UI/Loader/Loader";

import Header from "../../components/Layout/Header";
import Pokemon from "../../components/Pokemon/Pokemon";
import classes from "./Homepage.module.css";

const Homepage = () => {
  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  //Invoke the API call
  useEffect(() => {
    getPokemonList();
  }, []);

  //Fetch Pokemons with => https://pokeapi.co/api/v2/pokemon
  const getPokemons = async () => {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=151`);
    const { results } = res.data;
    return results;
  };

  //Return an array of pokemons
  const getPokemonList = async () => {
    let pokemonArr = [];
    let req = await getPokemons();

    for (let pokemon of req) {
      const res = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
      );
      let pokemonInfos = { ...res };
      pokemonArr.push(pokemonInfos);
    }

    setPokemons(pokemonArr);
    setIsLoading(false);
  };

  return (
    <>
      <Header />
      {!isLoading ? (
        <Grid className={classes.homepage__content} container spacing={2}>
          {pokemons.map((pokemon) => {
            return (
              <Grid
                key={Math.random()}
                item
                xs={12}
                sm={12}
                md={4}
                lg={4}
                xl={4}
              >
                <Pokemon pokemon={pokemon.data} />
              </Grid>
            );
          })}
        </Grid>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Homepage;
