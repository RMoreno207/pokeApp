import React, { Component } from "react";
import "./Home.css";
import Pokedex from './Pokedex/Pokedex';

//const Home = () => { //REACT FUNCIONAL


const Home = () => {
  return (
    <div>
      <h1>Welcome to the best Pokemon APP!!</h1>
      <div className="user">
        <h2>Introduce el nombre de un Pokemon</h2>
        {/* <input type="text" placeholder="Pikachu" ref={this.user} onChange={this.handleChange} />
        <button onClick={this.sendUser}>Login</button>         */}
        <input type="text" placeholder="Pikachu" />
        <Pokedex />
      </div>
    </div>
  )
}

export default Home;
