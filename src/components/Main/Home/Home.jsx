import React, { Component } from "react";
import { useState, useEffect, useContext } from 'react';
import { pokeContext } from "../../../context/pokeContext";
import "./Home.css";
import Pokedex from './Pokedex/Pokedex';
import axios from 'axios';

//const Home = () => { //REACT FUNCIONAL


const Home = () => {
  const [search, setSearch] = useState("");
  const { poke, setPoke } = useContext(pokeContext);
  console.log(search);//Si 2 
  console.log(poke);//no 3

  const inputHandler = (e) => {
    e.preventDefault();
    const pokeToSearch = e.target.value.toLowerCase()
    console.log(pokeToSearch);//si 1
    setSearch(pokeToSearch);
  }
  console.log(search);//si 4
  // const pokeToSearch = (e) => {
  //   e.preventDefault();
  //   setSearch(e.target.value);
  // }

  const getPokemon = async () => {
    try {
      const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${search}`);

      const newPoke = {
        id: data.id,
        name: data.name,
        img: data.sprites.front_default,
        type: data.types[0].type.name,
      }

      setPoke([newPoke, ...poke]);

    } catch (error) {
      console.log(error);
    }
    setSearch("")// limpiamos el search
  }

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
          <Pokedex />
          <Pokedex />
          <Pokedex />
        </section>
      </div>
    </div>
  )
}

export default Home;
