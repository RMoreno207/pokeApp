import './App.css';
import { BrowserRouter, } from 'react-router-dom';
import { pokeContext } from './context/pokeContext';
import { useState, useEffect } from 'react';

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';


function App() {
  const [pokemones, setPokemones] = useState([]);//Guardar pokemons
  const [pokeList, setPokeList] = useState([]);//Para guardar el fetch de todos los pokemon
  const [home, setHome] = useState(false);//Para saber si viene de home
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=10");//Para poder usar paginacion

  const data = {
    pokemones,
    setPokemones,
    pokeList,
    setPokeList,
    home,
    setHome,
    url,
    setUrl
  };

  return (
    <div className="App">
      <pokeContext.Provider value={data}>
        <BrowserRouter>
          <Header />
          <Main />
          <Footer />
        </BrowserRouter>
      </pokeContext.Provider>
    </div>
  );
}

export default App;
