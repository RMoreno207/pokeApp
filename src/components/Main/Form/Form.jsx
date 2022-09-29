import React, { Component } from "react";
import "./Form.css";

const Form = () => {
  return (
    <section className="formCreate">
      <h1>Registra un nuevo Pokemon!!</h1>
      <form>
        <fieldset>
          <label htmlFor="cabecera">Nombre:</label>
          <input type="text" id="abstract" name="abstract" />
          <label htmlFor="texto">Tipo:</label>
          <input type="textarea" id="lead_paragraph" name="lead_paragraph" />
          <input type="hidden" id="source" name="source" value="Admin" />
          <div>
            <button variant="contained" type="submit" value="Añadir">Create</button>
          </div>
        </fieldset>
      </form>
    </section>
  )
}

export default Form;
