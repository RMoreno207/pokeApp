import React, { Component } from "react";
import { useState, useEffect, useContext } from 'react';
import { useDebounce } from 'use-debounce';
import { pokeContext } from "../../../context/pokeContext";
import "./Home.css";
import Pokedex from './Pokedex/Pokedex';
import axios from 'axios';

//const Home = () => { //REACT FUNCIONAL
//picachu

const Home = () => {
  const [search, setSearch] = useState("");
  const { poke, setPoke } = useContext(pokeContext);
  const [deboSearch] = useDebounce(search, 4000);

  console.log(search);//Si 2 
  console.log(poke);//no 3

  const inputHandler = (e) => {
    e.preventDefault();
    const pokeToSearch = e.target.value.toLowerCase()
    console.log("input ", pokeToSearch);//si 1
    setSearch(pokeToSearch);
    getPokemon();
  }
  console.log(search);//si 4
  // const pokeToSearch = (e) => {
  //   e.preventDefault();
  //   setSearch(e.target.value);
  // }

  // ${search}
  const getPokemon = async () => {
    try {
      const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/pikachu`);
      console.log("Estas en getPokemon ", data);
      console.log("input ", search);
      const newPoke = {
        id: data.id,
        name: data.name,
        img: data.sprites.front_default,
        type: data.types[0].type.name,
      }
      console.log(newPoke);
      setPoke([newPoke, ...setPoke]);
      console.log(poke);
    } catch (error) {
      console.log(error);
    }
    setSearch("")// limpiamos el search
    console.log(setSearch);
  }

  useEffect(() => {
    if (deboSearch.length > 0) { // si el input está vacío no busca
      getPokemon()
    }

  }, [deboSearch]); //componentDidUpdate. 


  return (
    <div>
      <h1>Welcome to the best Pokemon APP!!</h1>
      <div className="user">
        <h2>Introduce el nombre de un Pokemon</h2>
        <p>Al introducir el nombre de un pokemon se debe de hacer una busqueda automatica y mostrar en un div</p>
        {/* <input type="text" placeholder="Pikachu" ref={this.user} onChange={this.handleChange} />
        <button onClick={this.sendUser}>Login</button>         */}
        <input type="text" placeholder="Pikachu" onChange={inputHandler} />
        <section>
          <Pokedex />
        </section>
      </div>
    </div>
  )
}

export default Home;
