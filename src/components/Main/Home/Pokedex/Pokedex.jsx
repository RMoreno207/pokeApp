import React, { Component, useContext } from "react";
import { pokeContext } from "../../../../context/pokeContext";
import Cards from "../../Card/Card";
import { v4 as uuidv4 } from 'uuid';

const Pokedex = (props) => {
  const { pokemones } = useContext(pokeContext)

  return (
    <div className="pokedex">
      <h1>Pokedex</h1>
      {pokemones.map((pokemon, i) => <Cards value={pokemon} key={uuidv4()} index={i} />)}
    </div>
  )
};


export default Pokedex;
