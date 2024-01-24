import React from 'react';
import styled from 'styled-components';

const SquareButton = styled.button`
  width: 100px;
  height: 100px;
  font-size: 20px;
  border: 1px solid #ccc;
`;

function Square({ value, onClick }) {
  return (
    <SquareButton onClick={onClick}>
      <img src={value} alt="" style={{ width: '100%', height: '100%' }} />
    </SquareButton>
  );
}

export default Square;
