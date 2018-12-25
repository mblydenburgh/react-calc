import React from 'react';
import Styled from 'styled-components';

const Display = props => (
  <CalcDisplay id="display">
    {props.result}
  </CalcDisplay>
);

export default Display;

const CalcDisplay = Styled.div`
    background-color: #333;
    color: green;
    font-weight: 700;
    text-align: right;
    padding: 2px 15px;
    margin: 5px;
    grid-column: 1/-1;
`;
