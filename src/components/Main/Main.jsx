import React, { Component } from "react";
import { Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
import Form from './Form/Form';
import NotFound from '../NotFound/NotFound';
import Detail from './Detail';
import Search from './Search/Search';
import './Main.css';

const Main = () => {
  return (
    <main>
      <Routes>
        <Route element={<Home />} path={"/"} />
        <Route element={<Form />} path={"/new"} />
        <Route element={<Detail />} path={"/pokemon/:id"} />
        <Route element={<Search />} path={"/search"} />
        <Route element={<NotFound />} path={"/*"} />
      </Routes>
    </main>
  )
}

export default Main;
