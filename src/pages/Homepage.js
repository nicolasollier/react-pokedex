import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import axios from "axios";

import Pokemon from "../components/Pokemon";
import Loader from "../components/Loader/Loader";

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
        <Loader />
      ) : (
        <Row className="grid grid-rows-4">
          {pokemons.map((pokemon) => {
            return (
              <Col key={pokemon.data.id} className="grid grid-cols-4 gap-4">
                <Pokemon pokemon={pokemon.data} />
              </Col>
            );
          })}
        </Row>
      )}
    </>
  );
};

export default Homepage;
