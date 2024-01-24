import React, { useState } from 'react';
import Board from './Board';
import GlobalStyle from './GlobalStyle';

function App() {
  const [players, setPlayers] = useState(['', '']);
  const [currentPlayer, setCurrentPlayer] = useState(0);

  const handlePlayerInput = (index, url) => {
    const newPlayers = [...players];
    newPlayers[index] = url;
    setPlayers(newPlayers);
  };

  return (
    <div>
      <h1>Tic Tac Toe</h1>
      <Board
        players={players}
        currentPlayer={currentPlayer}
        onPlayerInput={handlePlayerInput}
      />
      <GlobalStyle />
    </div>
  );
}

export default App;
