import React from 'react';

export default function GameList(props) {
  const games = props.games;
  const gameItems = games.map(game =>
    <li className='game-list-item' key={game.number.toString()}>{game.name}</li>
  );

  return (<ul className='game-list'>{gameItems}</ul>);
}
