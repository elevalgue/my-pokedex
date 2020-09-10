import React from 'react';
import '../stylesheets/App.css';
import PropTypes from 'prop-types';
import Pokemon from './Pokemon';

const PokemonList = (props) => {
  const pokemonItems = props.pokemons.map((pokemon) => {
    return (
      <li key={pokemon.id} className='pokemon-card'>
        <Pokemon name={pokemon.name} url={pokemon.url} types={pokemon.types} />
      </li>
    );
  });

  return <ul className='pokemon-list'>{pokemonItems}</ul>;
};

PokemonList.propTypes = {
  pokemons: PropTypes.array,
};

export default PokemonList;
