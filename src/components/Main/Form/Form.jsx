import React, { Component } from "react";
import { useState, useEffect, useContext } from 'react';
import "./Form.css";
import { useForm } from 'react-hook-form';
import { pokeContext } from "../../../context/pokeContext";

const Form = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const { pokemones, setPokemones } = useContext(pokeContext);//Array de pokemons recogidas de pokeContext
  console.log(pokemones);

  const onSubmit = async (data) => {

    const newPoke = {
      id: data.id,
      name: data.name,
      img: data.img,
      type: data.type1,
      type2: data.type2
    }
    setPokemones([newPoke, ...pokemones])
  }

  return (
    <section className="formCreate">
      <h1>Registra un nuevo Pokemon!!</h1>
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
              <option value="https://www.nintenderos.com/wp-content/uploads/2020/01/temtem.jpg">1</option>
              <option value="https://www.kotaku.com.au/wp-content/uploads/sites/3/2020/04/fake-pokemon-whale.jpg?quality=80&w=1280">2</option>
              <option value="https://www.clipartmax.com/png/middle/171-1711346_fake-pokemon-png.png">3</option>
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

          <div>
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
          </div>


          <div>
            <button type="submit">Create</button>
          </div>
        </fieldset>
      </form>
    </section>
  )
}

export default Form;
