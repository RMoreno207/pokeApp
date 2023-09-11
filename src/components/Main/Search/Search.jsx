import React, { Component } from "react";
import { useState, useEffect, useContext } from 'react';
import { useDebounce } from 'use-debounce';
import { pokeContext } from "../../../context/pokeContext";
import "./Search.css";
import Pokedex from '../Search/Pokedex/Pokedex';
import axios from 'axios';


const Search = () => {
  const [search, setSearch] = useState("");//Almacenar el pokemon a buscar
  const { pokemones, setPokemones } = useContext(pokeContext);//Array de pokemons recogidas de pokeContext
  const {currentIndex, setCurrentIndex}= useContext(pokeContext);
  const [deboSearch] = useDebounce(search, 2000);//Para retardar el fetch
  const { home, setHome } = useContext(pokeContext);
  setHome(false);


  //Controlador de entrada en el input
  const inputHandler = (e) => {
    const pokeToSearch = e.target.value.toLowerCase();
    setSearch(pokeToSearch);
  }

const nextIndex=()=>{
    setCurrentIndex(pokemones.length);

}

  const getPokemon = async () => {
    
    try {
      
      const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${search}`);
      //Guardamos en un nuevo objeto los valores que nos interesan
      const newPoke = {
        id: data.id,
        name: data.name,
        img: data.sprites.front_default,
        type: data.types[0].type.name,
      }

      setPokemones([...pokemones, newPoke]);//Concatenamos el objeto del nuevo pokemon con los existentes
      nextIndex();
      console.log(pokemones);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (search.length > 0) { // si el input está vacío no busca
      getPokemon()//Lanzamos la busqueda de esa entrada
    }
  },
    [deboSearch]
  );


  return (
    <div>
      <div className="user">
        <h2>¡Introduce el nombre de un Pokemon y espera!</h2>
        <input type="text" placeholder="Pikachu" onChange={inputHandler} />
        <section>
          <Pokedex />
        </section>
      </div>
    </div>
  )
}


export default Search;
