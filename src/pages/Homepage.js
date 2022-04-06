import React, { useEffect, useState } from "react";
import axios from "axios";

import Pokemon from "../components/Pokemon";

const Homepage = () => {  
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    getPokemonList();

    return () => {};
  }, []);

  const getPokemon = async (id) => {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    return res;
  };

  const getPokemonList = async () => {
    let pokemonArr = [];

    for (let id = 1; id <= 151; id++) {
      pokemonArr.push(await getPokemon(id));
    }

    setPokemons(pokemonArr);
    setLoading(false);
  };

  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        pokemons.map((pokemon) => {
          return <Pokemon key={pokemon.data.id} pokeDatas={pokemon.data} />;
        })
      )}
    </>
  );
};

export default Homepage;
