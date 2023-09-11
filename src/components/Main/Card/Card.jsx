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
    console.log("props",props);
    const id = props.value.id;
    const name = props.value.name.toUpperCase();
    const type = props.value.type;
    // const type2 = props.value.type2;
    const upper = type[0].toUpperCase() + type.substring(1);
    const img = props.value.img;

    return <article className="card">
      <h4>ID: {id}</h4>
      <img src={img} alt="Pokemon" />
      <h4><Link to={`/pokemon/${id}`}>{name}</Link></h4>
      <h4>Tipo: {upper}</h4>
      <button variant="contained" value="Borrar" onClick={props.delete}>Borrar</button>
      <button variant="contained" value="Back" onClick={props.back}>Anterior</button>
      <button variant="contained" value="Next" onClick={props.next}>Siguiente</button>
      
    </article>;
  }
};


export default Card;
