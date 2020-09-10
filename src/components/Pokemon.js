import React from 'react';
import '../stylesheets/App.css';
import PropTypes from 'prop-types';

const Pokemon = (props) => {
  const pokemonTypes = props.types.map((type, index) => {
    return (
      <li key={index} className='pokemon-type'>
        {type}
      </li>
    );
  });

  return (
    <div className='poke-image__container'>
      <div>
        <img alt={props.name} src={props.url}></img>
      </div>
      <div className='pokemon-name__container'>
        <h2>{props.name}</h2>
      </div>
      <ul className='pokemon-type__list'>{pokemonTypes}</ul>
    </div>
  );
};

Pokemon.propTypes = {
  url: PropTypes.string,
  name: PropTypes.string,
  types: PropTypes.array,
};

export default Pokemon;
