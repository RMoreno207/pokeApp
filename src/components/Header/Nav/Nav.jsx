import React, { Component } from "react";
import { Link } from 'react-router-dom';
import "./Nav.css";

const Nav = () => {
  return (
    <nav className={"nav-bar"}>
      <Link to="/">Home</Link>
      <Link to="/new">Create a Pokemon</Link>
      <Link to="/search">Search</Link>
    </nav>
  )
};

export default Nav;
