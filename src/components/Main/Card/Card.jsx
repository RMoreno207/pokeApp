import React, { useContext } from "react";
import { pokeContext } from "../../../context/pokeContext";
import { Link } from 'react-router-dom';
const Card = (props) => {

  console.log(props);
  const name = props.value.name;
  console.log("name ", name);
  // const image = props.value.sprites.front_default;
  // const type_1 = props.value.types[0].type.name;

  return <div className="card">
    <h1>POKEMON</h1>
    <h2>{name}</h2>
    {/* <img src={image} alt="Pokemon" />
    <p>#{id}</p>
    <p>type: {type_1}</p> */}
  </div>;
};

export default Card;
