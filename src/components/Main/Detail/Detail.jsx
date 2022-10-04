import { useParams, Link } from "react-router-dom";//Para capturar el parametro ID pasado por los parametros del router
import React, { useEffect, useState, useContext } from "react";
import axios from 'axios';

function Detail(props) {
  console.log(props);
  const params = useParams();// Para poder usar los parametros capturados por el router
  console.log(params);
  const [id] = useState(params.id);//Creo variable de estado local para almacenar la ID
  const [pokemon, setPokemon] = useState("");//Almacenar los detalles del pokemon buscado

  const getPokemonDetails = async () => {
    try {
      console.log("Estas en el fetch");
      const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
      //Guardamos en un nuevo objeto los valores que nos interesan
      setPokemon(data);
      console.log(pokemon);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getPokemonDetails()//Lanzamos la busqueda
  }, []
  );

  //Hacer un fetch con la id recibida y sacar al menos 10 tipos de datos
  return (
    <article className="detail">
      <h1>Todos los detalles de </h1><img src={pokemon.sprites.front_default} alt="Pokemon" />
      <hr />
      <div>
        <h2>{pokemon.name}</h2>
        <h3>ID: {id}</h3>
        <h3>Tipo: {pokemon.types[0].type.name}</h3>
      </div>

      <div>
        <h2>Habilidades:</h2>
        <ul>
          {pokemon.abilities.map(ability => <li>{ability.ability.name}</li>)}
        </ul>
      </div>

      <div>
        <h2>Características:</h2>
        <h3>Experiencia: {pokemon.base_experience}</h3>
        <h3>Altura: {pokemon.height} lb</h3>
        <h3>Peso: {pokemon.weight}</h3>
      </div>

      <div>
        <h2>Todos sus movimientos:</h2>
        <ul>
          {pokemon.moves.map(move => <li>{move.move.name}</li>)}
        </ul>
      </div>

      <button variant="contained" value="Borrar" onClick={props.delete}>Borrar</button>
    </article>
  )
}

export default Detail