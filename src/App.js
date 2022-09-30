import './App.css';
import { BrowserRouter, } from 'react-router-dom';
import { pokeContext } from './context/pokeContext';
import { useState, useEffect } from 'react';

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';


function App() {
  const [pokemones, setPokemones] = useState([]);//Guardar pokemons


  const data = {
    pokemones,
    setPokemones
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
