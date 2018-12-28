import React from 'react';
import Styled from 'styled-components';
import "typeface-roboto";

const Display = props => (
  <CalcDisplay id="display">
    {props.result}
  </CalcDisplay>
);

export default Display;

const CalcDisplay = Styled.div`
    background-color: #333;
    color: green;
    font-family: 'VT323', monospace;
    font-size: 2rem;
    text-align: right;
    padding: 2px 15px;
    margin: 5px;
    grid-column: 1/-1;
`;
