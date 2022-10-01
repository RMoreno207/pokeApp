import React, { useContext } from "react";
import { pokeContext } from "../../../context/pokeContext";
import { Link } from 'react-router-dom';

const Card = (props) => {

  const name = props.value.name.toUpperCase();
  const type = props.value.type;
  const upper = type[0].toUpperCase() + type.substring(1);
  const img = props.value.img;

  return <article className="card">
    <hr />
    <img src={img} alt="Pokemon" />
    <h2>{name}</h2>
    <h2>Tipo: {upper}</h2>
  </article>;
};

export default Card;

