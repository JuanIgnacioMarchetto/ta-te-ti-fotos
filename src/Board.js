import React, { useState } from 'react';
import Square from './Square';
import styled from 'styled-components';

const BoardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 100px);
  grid-gap: 5px;
`;

function Board({ players, currentPlayer, onPlayerInput }) {
  const [squares, setSquares] = useState(Array(9).fill(null));

  const handleClick = (index) => {
    if (!squares[index] && players[currentPlayer]) {
      const newSquares = squares.slice();
      newSquares[index] = currentPlayer;
      setSquares(newSquares);
      onPlayerInput(currentPlayer, players[currentPlayer]);
      setCurrentPlayer((prevPlayer) => (prevPlayer === 0 ? 1 : 0));
    }
  };

  return (
    <BoardContainer>
      {squares.map((value, index) => (
        <Square key={index} value={value} onClick={() => handleClick(index)} />
      ))}
    </BoardContainer>
  );
}

export default Board;
