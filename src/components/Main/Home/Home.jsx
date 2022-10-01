import React, { Component } from "react";
import { useState, useEffect, useContext } from 'react';
import { useDebounce } from 'use-debounce';
import { pokeContext } from "../../../context/pokeContext";
import "./Home.css";
import Pokedex from './Pokedex/Pokedex';
import axios from 'axios';


const Home = () => {
  const [search, setSearch] = useState("");//Almacenar el pokemon a buscar
  const { pokemones, setPokemones } = useContext(pokeContext);//Array de pokemons recogidas de pokeContext
  const [deboSearch] = useDebounce(search, 2000);//Para retardar el fetch

  console.log(search, "search");//Si 2 
  console.log(pokemones, "Pokemones");

  //Controlador de entrada en el input
  const inputHandler = (e) => {
    const pokeToSearch = e.target.value.toLowerCase();
    console.log("inputHandler ", pokeToSearch);//si 1
    setSearch(pokeToSearch);
  }

  //
  const getPokemon = async () => {
    try {
      console.log("Has entrado en getPokemon con ", search);
      const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${search}`);
      //Guardamos en un nuevo objeto los valores que nos interesan
      const newPoke = {
        id: data.id,
        name: data.name,
        img: data.sprites.front_default,
        type: data.types[0].type.name,
      }
      console.log(newPoke);
      setPokemones([newPoke, ...pokemones]);//Concatenamos el objeto del nuevo pokemon con los existentes
    } catch (error) {
      console.log(error);
    }
    // setSearch("")// limpiamos el search
  }

  useEffect(() => {
    if (search.length > 0) { // si el input está vacío no busca
      console.log("useEffect", search);

      getPokemon()//Lanzamos la busqueda de esa entrada

      console.log("getPokemon", search);
    }
  },
    [deboSearch]
  ); //componentDidUpdate. didMount


  return (
    <div>
      <h1>Welcome to the best Pokemon APP!!</h1>
      <div className="user">
        <h2>Introduce el nombre de un Pokemon</h2>
        <input type="text" placeholder="Pikachu" onChange={inputHandler} />
        <section>
          <Pokedex />
        </section>
      </div>
    </div>
  )
}

export default Home;
