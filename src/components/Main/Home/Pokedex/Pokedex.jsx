import React, { Component, useContext } from "react";
import { pokeContext } from "../../../../context/pokeContext";
import Card from "../../Card/Card";
import { v4 as uuidv4 } from 'uuid';

const Pokedex = (props) => {
  const { pokemon } = useContext(pokeContext)

  return (
    <div className="pokedex">
      <p>Se muestra el poquemon encontrado en la busqueda en su tarjeta</p>
      {pokemon.map((pokemon, i) => <Card value={pokemon} key={uuidv4()} index={i} />)}
    </div>
  )
};

export default Pokedex;
