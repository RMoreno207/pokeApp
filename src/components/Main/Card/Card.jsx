import React, { useContext } from "react";
import { pokeContext } from "../../../context/pokeContext";
import { Link } from 'react-router-dom';
import "./Card.css";


const Card = (props) => {
  const { home } = useContext(pokeContext)//Para saber si cargar if o else

  if (home) {
    const name = props.value.name.toUpperCase();

    return <article className="card">
      <hr />
      <h3>{name}</h3>
    </article>;
  }


  else {
    const id = props.value.id;
    const name = props.value.name.toUpperCase();
    const type = props.value.type;
    // const type2 = props.value.type2;
    const upper = type[0].toUpperCase() + type.substring(1);
    const img = props.value.img;

    return <article className="card">
      <hr />
      <h2>ID: {id}</h2>
      <img src={img} alt="Pokemon" />
      <h2><Link to={`/pokemon/${id}`}>{name}</Link></h2>
      <h2>Tipo: {upper}</h2>
      <button variant="contained" value="Borrar" onClick={props.delete}>Borrar</button>
    </article>;
  }
};


export default Card;
