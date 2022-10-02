import React, { Component } from "react";
import "./Form.css";

const Form = () => {

  const newPoke =
  {
    id: '',
    name: '',
    image: '',
    typeOne: '',
    typeTwo: ''
  }

  return (
    <section className="formCreate">
      <h1>Registra un nuevo Pokemon!!</h1>
      <form>
        <fieldset>
          <label htmlFor="id">ID:</label>
          <input type="number" id="id" name="id" />

          <label htmlFor="name">Nombre:</label>
          <input type="text" id="name" name="name" />

          {/* Intentar poner un select con imagenes  */}
          <label htmlFor="img">Imagen:</label>
          <input type="text" id="img" name="img" />

          <label htmlFor="type1">Tipo 1:</label>
          <select id="type1" label="type1" name="type1">
            <option value="Bug">Bug</option>
            <option value="Dark">Dark</option>
            <option value="Dragon">Dragon</option>
            <option value="Electric">Electric</option>
            <option value="Fairy">Fairy</option>
            <option value="Fighting">Fighting</option>
            <option value="Fire">Fire</option>
            <option value="Flying">Flying</option>
            <option value="Ghost">Ghost</option>
            <option value="Grass">Grass</option>
            <option value="Ground">Ground</option>
            <option value="Ice">Ice</option>
            <option value="Normal">Normal</option>
            <option value="Poison">Poison</option>
            <option value="Psychic">Psychic</option>
            <option value="Rock">Rock</option>
            <option value="Steel">Steel</option>
            <option value="Water">Water</option>
          </select>

          <label htmlFor="type2">Tipo 2:</label>
          <select id="type2" type="text" name="type2" >
            <option value=""></option>
            <option value="Bug">Bug</option>
            <option value="Dark">Dark</option>
            <option value="Dragon">Dragon</option>
            <option value="Electric">Electric</option>
            <option value="Fairy">Fairy</option>
            <option value="Fighting">Fighting</option>
            <option value="Fire">Fire</option>
            <option value="Flying">Flying</option>
            <option value="Ghost">Ghost</option>
            <option value="Grass">Grass</option>
            <option value="Ground">Ground</option>
            <option value="Ice">Ice</option>
            <option value="Normal">Normal</option>
            <option value="Poison">Poison</option>
            <option value="Psychic">Psychic</option>
            <option value="Rock">Rock</option>
            <option value="Steel">Steel</option>
            <option value="Water">Water</option>
          </select>
          <div>
            <button variant="contained" type="submit" value="Añadir">Create</button>
          </div>
        </fieldset>
      </form>
    </section>
  )
}

export default Form;
