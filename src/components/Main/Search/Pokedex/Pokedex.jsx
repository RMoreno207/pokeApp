import React, { Component, useContext } from "react";
import { pokeContext } from "../../../../context/pokeContext";
import Cards from "../../Card/Card";
import { v4 as uuidv4 } from 'uuid';

const Pokedex = (props) => {
  const { pokemones, setPokemones } = useContext(pokeContext)
  const { pokeList } = useContext(pokeContext)
  const { home } = useContext(pokeContext)
  console.log(pokeList);
  console.log(pokemones);

  if (home) {
    console.log("home es true");
    return (
      <div className="pokedex">
        <h1>Pokedex</h1>
        {pokeList.map((pokemon, i) => <Cards value={pokemon} key={uuidv4()} index={i} />)}
      </div>
    )
  } else {
    const deletePokemon = (i) => {
      console.log("Estas en pokemon delete");
      //filter
      const remainingPokemones = pokemones.filter((pokemon, j) => i !== j);
      setPokemones(remainingPokemones);
      console.log(pokemones);
    }
    const details = (i) => {
      console.log("estas en details");
      // /pokemon/:id La página de visualización de un perfil de pokemon (información extendida). Necesitarás el componente Details.
    }

    console.log("homeesfalse");
    return (
      <div className="pokedex">
        <h1>Pokedex</h1>
        {pokemones.map((pokemon, i) => <Cards value={pokemon} key={uuidv4()} details={() => deletePokemon(i)} delete={() => deletePokemon(i)} index={i} />)}
      </div>
    )
  }

};


export default Pokedex;
