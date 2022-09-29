import React, { Component } from "react";
import Card from "../../Card/Card";
import { v4 as uuidv4 } from 'uuid';

const Pokedex = (props) => {
  return (
    <div className="pokedex">
      <p>Pokedex map</p>
      {/* {Pokedex.map((poke, i) => <Card value={poke} key={uuidv4()} index={i} />)} */}
    </div>
  )
};

export default Pokedex;
