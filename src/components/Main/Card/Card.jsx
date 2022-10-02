import React, { useContext } from "react";
import { pokeContext } from "../../../context/pokeContext";
import { Link } from 'react-router-dom';
import "./Card.css";

const Card = (props) => {
  const { home } = useContext(pokeContext)
  console.log(props);
  if (home) {
    const name = props.value.name.toUpperCase();


    return <article className="card">
      <hr />
      <h2>{name}</h2>
    </article>;
  } else {
    const name = props.value.name.toUpperCase();
    const type = props.value.type;
    const upper = type[0].toUpperCase() + type.substring(1);
    const img = props.value.img;

    return <article className="card">
      <hr />
      <img src={img} alt="Pokemon" />
      <h2>{name}</h2>
      <h2>Tipo: {upper}</h2>
      <button variant="contained" value="Borrar" onClick={props.delete}>Borrar</button>
    </article>;
  }
};

export default Card;

