import React from 'react';
import './App.css';
import Calculator from './Calculator/Calculator';
import Styled from 'styled-components';

const App = () => {

  return (
    <CalculatorBody>
      <Calculator />
    </CalculatorBody>
  );
};

export default App;

const CalculatorBody = Styled.div`
  text-align: center;
`;