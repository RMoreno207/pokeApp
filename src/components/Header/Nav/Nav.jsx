import React, { Component } from "react";
import { Link } from 'react-router-dom';
import "./Nav.css";

const Nav = () => {
  return (
    <nav className={"nav-bar"}>
      <Link to="/">Listado</Link>
      <Link to="/search">Buscar</Link>
      <Link to="/new">Crear un Pokemon</Link>
      
    </nav>
  )
};

export default Nav;
