import React, { useState } from 'react';
// import PokemonList from './PokemonList';
import '../stylesheets/App.css';
import pokemonsFromApi from '../data/pokemon.json';
import PokemonList from './PokemonList';

const App = () => {
  const [pokemons, function] = useState(pokemonsFromApi);

  return (
    <div className='App'>
      <PokemonList pokemons={pokemons} />
    </div>
  );
};

export default App;
