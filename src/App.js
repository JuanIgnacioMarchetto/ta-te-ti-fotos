import React, { useState } from 'react';
import './App.css';

const Square = ({ value, onClick }) => (
  <button className="square" onClick={onClick}>
    {value}
  </button>
);

const Board = ({ squares, onClick }) => {
  return (
    <div className="board">
      {squares.map((value, index) => (
        <Square key={index} value={value} onClick={() => onClick(index)} />
      ))}
    </div>
  );
};

const Game = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [playerX, setPlayerX] = useState('');
  const [playerO, setPlayerO] = useState('');
  const [xIsNext, setXIsNext] = useState(true);

  const handleClick = (index) => {
    if (squares[index] || calculateWinner(squares)) {
      return;
    }

    const newSquares = squares.slice();
    newSquares[index] = xIsNext ? playerX : playerO;
    setSquares(newSquares);
    setXIsNext(!xIsNext);
  };

  const winner = calculateWinner(squares);
  const status = winner
    ? `Winner: ${winner}`
    : squares.every((square) => square !== null)
    ? 'Draw!'
    : `Next player: ${xIsNext ? playerX : playerO}`;

  return (
    <div className="game">
      <div className="players">
        <label>
          Player X Image URL:
          <input
            type="text"
            value={playerX}
            onChange={(e) => setPlayerX(e.target.value)}
          />
        </label>
        <label>
          Player O Image URL:
          <input
            type="text"
            value={playerO}
            onChange={(e) => setPlayerO(e.target.value)}
          />
        </label>
      </div>
      <div className="game-board">
        <Board squares={squares} onClick={handleClick} />
      </div>
      <div className="game-info">
        <div>{status}</div>
      </div>
    </div>
  );
};

const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
};

export default Game;
