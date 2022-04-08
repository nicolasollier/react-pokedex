import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";

import { Grid } from "@mui/material";

import Header from "../../components/Layout/Header";
import Loader from "../../components/UI/Loader/Loader";
import PokemonPortrait from "../../components/PokemonPortrait/PokemonPortrait";
import PokemonAbilities from "../../components/PokemonAbilities/PokemonAbilities";
import PokemonPassive from "../../components/PokemonPassive/PokemonPassive";
import PokemonHeader from "../../components/UI/PokemonHeader/PokemonHeader";

import classes from "./PokemonPage.module.css";

const PokemonPage = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getPokemonDetails();
    return () => {};
  }, []);

  const getPokemonDetails = async () => {
    let pokemonDetails = {};
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    pokemonDetails = { ...res.data };

    setPokemon(pokemonDetails);
    console.log(pokemonDetails);
    setIsLoading(false);
  };

  return (
    <>
      <Header />
      {isLoading ? (
        <>
          <Loader />
        </>
      ) : (
        <>
          <PokemonHeader pokemon={pokemon} />
          <br />
          <Grid
            container
            spacing={2}
            className={classes.pokemonPage__container}
          >
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
              <PokemonPortrait pokemon={pokemon} />
            </Grid>

            <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
              <PokemonAbilities pokemon={pokemon} />
            </Grid>

            <Grid item xs={12}>
              <PokemonPassive pokemon={pokemon} />
            </Grid>
          </Grid>
        </>
      )}
    </>
  );
};

export default PokemonPage;
