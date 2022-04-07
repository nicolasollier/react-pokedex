import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Pokemon = ({ pokemon }) => {
  return (
    <>
      <Card className="mx-3 p-3 rounded-sm text-center shadow-md mb-5 bg-white">
        <Link to={`/pokemon/${pokemon.id}`}>
          <Card.Img
            style={{ width: "8rem" }}
            src={pokemon.sprites.front_default}
            variant="top"
          ></Card.Img>
        </Link>
        <Card.Body className={`${pokemon.types[0].type.name} rounded`}>
          <Link to={`/pokemon/${pokemon.id}`} className="link-name">
            <Card.Title as="div">
              <strong>
                #{pokemon.id}: {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
              </strong>
            </Card.Title>
          </Link>
        </Card.Body>
      </Card>
    </>
  );
};

export default Pokemon;
