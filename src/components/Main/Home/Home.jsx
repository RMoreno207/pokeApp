import React, { Component } from "react";
import { useState, useEffect, useContext } from 'react';
import { useDebounce } from 'use-debounce';
import { pokeContext } from "../../../context/pokeContext";
import "./Home.css";
import Pokedex from '../Search/Pokedex/Pokedex';
import axios from 'axios';


const Home = () => {
  const [search, setSearch] = useState("");//Almacenar el pokemon a buscar
  const { home, setHome } = useContext(pokeContext);
  const { url, setUrl } = useContext(pokeContext);
  const { pokeList, setPokeList } = useContext(pokeContext);
  const [deboSearch] = useDebounce(2000);//Para retardar el fetch

  setHome(true);
  console.log("home", home);
  console.log(search, "search");//Si 2 
  console.log(pokeList, "pokeList");

  // //Controlador de entrada en el input
  // const inputHandler = (e) => {
  //   const pokeToSearch = e.target.value.toLowerCase();
  //   console.log("inputHandler ", pokeToSearch);//si 1
  //   setSearch(pokeToSearch);
  // }

  //
  const getPokemon = async () => {
    try {
      console.log("Has entrado en getPokemon con ", search);
      const { data } = await axios.get("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=10");
      const next = data.next;
      console.log(next);
      console.log("data.result", data.results);
      console.log(data);
      setUrl(next);
      console.log(url);
      setPokeList(data.results);
      console.log("pokelist", pokeList);
    } catch (error) {
      console.log(error);
    }
  }
  console.log(url);

  const getPokemonNext = async () => {
    try {
      console.log("Has entrado en getPokemon con ", search);
      const { data } = await axios.get(url);
      const next = data.next;
      console.log(next);
      console.log("data.result", data.results);
      console.log(data);
      setUrl(next);
      console.log(url);
      setPokeList(data.results);
      console.log("pokelist", pokeList);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {

    getPokemon()//Lanzamos la busqueda de esa entrada

  }, [deboSearch]
  ); //componentDidUpdate. didMount

  // const nextUrl = async (url) => {
  //   try {
  //     console.log("Has entrado en getPokemon con ", search);
  //     const { data } = await axios.get(url);
  //     const next = data.next;
  //     console.log(next);
  //     console.log("data.result", data.results);
  //     console.log(data);

  //     setPokeList(data.results);
  //     console.log("pokelist", pokeList);
  //   } catch (error) {
  //     console.log(error);
  //   }
  //   // setSearch("")// limpiamos el search
  // }

  return (
    <div>
      <h1>Welcome to the best Pokemon APP!!</h1>
      <div className="user">
        <h2>Listado de todos los Pokemon existentes!!</h2>
        <section>
          <Pokedex />
        </section>
        <button onClick={getPokemonNext}>Siguiente</button>
      </div>
    </div>
  )
}

export default Home;
