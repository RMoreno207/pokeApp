import React, { Component } from "react";
import { useState, useEffect, useContext } from 'react';
import "./Form.css";
import { useForm } from 'react-hook-form';
import { pokeContext } from "../../../context/pokeContext";
import { useNavigate } from 'react-router-dom';


const Form = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const { pokemones, setPokemones } = useContext(pokeContext);//Array de pokemons recogidas de pokeContext
  const {currentIndex, setCurrentIndex}= useContext(pokeContext);

  console.log(pokemones);

  const navigate = useNavigate();


  const onSubmit = async (data) => {

    const newPoke = {
      id: data.id,
      name: data.name,
      img: data.img,
      type: data.type1,
      // type2: data.type2
    }
    setPokemones([...pokemones, newPoke]);
    setCurrentIndex(pokemones.length);
    navigate('/search');

  }

  return (
    <section className="formCreate">
      <h1>¡Registra un nuevo Pokemon!</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
          <div>
            <label id="id">ID</label>
            <input
              id="outlined-basic"
              label="id"
              variant="outlined"
              {...register("id", { required: true, valueAsNumber: true })}
              type="number"
              name="id"
              placeholder="2000"
            />
            <p>{errors.id?.message}</p>
          </div>
          <div>
            <label id="name">Nombre</label>
            <input
              id="outlined-basic"
              label="name"
              variant="outlined"
              {...register("name", { required: true, minLength: { value: 2, message: "El nombre del nuevo Pokemon debe ser mayor de 2 caracteres." } })}
              type="text"
              name="name"
              placeholder="Rokamon"
            />
            <p>{errors.name?.message}</p>
          </div>

          <div>
            <label id="img">Imagen</label>
            <select
              labelId="img"
              id="img"
              label="img"
              {...register("img", { required: true })}
              name="img">
              <option value="/images/1.png">1</option>
              <option value="/images/2.png">2</option>
              <option value="/images/3.png">3</option>
              <option value="/images/4.png">4</option>
              <option value="/images/5.png">5</option>
            </select>
            <p>{errors.img?.message}</p>
          </div>

          <div>
            <label id="type1">Tipo 1</label>
            <select

              id="type1"
              label="type1"
              {...register("type1", { required: true })}
              name="type1">
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
              <option value="Water">Water</option> </select>
            <p>{errors.type1?.message}</p>
          </div>

          {/* <div>
            <label id="type2">Tipo 2</label>
            <select
              labelId="type2"
              id="type2"
              label="type2"
              name="type2">
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
              <option value="Water">Water</option> </select>
            <p>{errors.type2?.message}</p>
          </div> */}


          <div>
            <button type="submit">Crear</button>
          </div>
        </fieldset>
      </form>
    </section>
  )
}

export default Form;
