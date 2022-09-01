import React from 'react';
import ReactDOM from 'react-dom/client';

const pokedex = [
  { number: '001', name: 'Bulbasur' },
  { number: '004', name: 'Charmander' },
  { number: '007', name: 'Squirtle' },
  { number: '025', name: 'Pikachu' },
  { number: '039', name: 'Jigglypuff' }
];

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<PokemonList pokedex={pokedex} />);

function PokemonList(props) {
  const pokedex = props.pokedex;

  const listItems = pokedex.map(pokemon =>
    <li key={pokemon.number.toString()}>{pokemon.name}</li>
  );

  return (<ul>{listItems}</ul>);
}
