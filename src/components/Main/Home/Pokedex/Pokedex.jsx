import React, { Component } from "react";
import Card from "../../Card/Card";
import { v4 as uuidv4 } from 'uuid';

const Pokedex = (props) => {
  return (
    <div className="pokedex">
      <p>Se muestra el poquemon encontrado en la busqueda en su tarjeta</p>
      {/* {Pokedex.map((poke, i) => <Card value={poke} key={uuidv4()} index={i} />)} */}
    </div>
  )
};

export default Pokedex;
