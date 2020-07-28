import React from 'react';
import '../components/App.css';
import PokemItem from '..components/PokemItem';

const PokemonList = => { 
    //tengo que recorrer el array

    return (
        <ul><PokemItem></ul>
    );
};


export default PokemonList;
