import React, { Component, useContext } from "react";
import { useState } from 'react';
import { pokeContext } from "../../../../context/pokeContext";
import Cards from "../../Card/Card";
import { v4 as uuidv4 } from 'uuid';

const Pokedex = (props) => {
  const { pokemones, setPokemones } = useContext(pokeContext)
  const { pokeList } = useContext(pokeContext)
  const {currentIndex, setCurrentIndex}= useContext(pokeContext)
  const { home } = useContext(pokeContext)


  if (home) {
    return (
      <div className="pokedex">
        <h1>Pokedex</h1>
        {pokeList.map((pokemon, i) => <Cards value={pokemon} key={uuidv4()} index={i} />)}
      </div>
    )
  } else {
    const deletePokemon = (i) => {
      //filter
      const remainingPokemones = pokemones.filter((pokemon, j) => i !== j);
      setPokemones(remainingPokemones);
      if (currentIndex>0) {
        setCurrentIndex(currentIndex -1);
            }
      

      console.log(i, pokemones);
    }

    const getNextItem=()=>{
      if(currentIndex<pokemones.length -1){
      setCurrentIndex(currentIndex+1);
      
    }console.log("Next ",currentIndex, pokemones);
    }

    const getPreviousItem=()=>{
      if(currentIndex>0){
        setCurrentIndex(currentIndex -1);
      }console.log("Back ", currentIndex, pokemones);
    }

    // const details = (i) => {
    //   console.log("estas en details");
    //   // /pokemon/:id La página de visualización de un perfil de pokemon (información extendida). Necesitarás el componente Details.
    // }
    console.log("pokemones", pokemones);
    console.log(currentIndex);

    return (
      <div className="pokedex">
        {pokemones.length >0 ?(
       <Cards value={pokemones[currentIndex]} key={uuidv4()} delete={() => deletePokemon(currentIndex)}  next={() => getNextItem()} back={()=>getPreviousItem()} index={currentIndex} />
        ) : (<p>No pokemon</p>)}
      
       </div>
    )
  }

};

// {pokemones.map((pokemon, i) => <Cards value={pokemon} key={uuidv4()} details={() => deletePokemon(i)} delete={() => deletePokemon(i)} index={i} />)}


export default Pokedex;
