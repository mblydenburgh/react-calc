/* eslint react/jsx-no-bind:0 */
import React, { Component } from 'react';
import Styled from 'styled-components';
import Display from './Display/Display';
import Button from './Button/Button';

class Calculator extends Component {
  state = {
    result: 0,
  }

  render() {
    const buttons = [
      { display: 'A/C', id: 'clear' },
      { display: '/', id: 'divide' },
      { display: 'X', id: 'multiply' },
      { display: '7', id: 'seven' },
      { display: '8', id: 'eight' },
      { display: '9', id: 'nine' },
      { display: '-', id: 'subtract' },
      { display: '4', id: 'four' },
      { display: '5', id: 'five' },
      { display: '6', id: 'six' },
      { display: '+', id: 'add' },
      { display: '1', id: 'one' },
      { display: '2', id: 'two' },
      { display: '3', id: 'three' },
      { display: '=', id: 'equals' },
      { display: '0', id: 'zero' },
      { display: '.', id: 'decimal' },
    ];

    const handleClick = (event) => {
      // console.log(`clicked ${event.display}`);
      const { display } = event;
      if (this.state.result === 0) {
        this.setState({ result: display });
      } else {
        this.setState(prevState => ({ result: prevState.result + display }));
      }
    };
    return (
      <CalculatorGrid>
        <Display result={this.state.result} />
        {buttons.map((button) => {
          const boundButtonClick = handleClick.bind(this, button);
          return <Button key={button.id} onClick={boundButtonClick} button={button} />;
        })}
      </CalculatorGrid>
    );
  }
}

export default Calculator;

const CalculatorGrid = Styled.div`
    display: grid;
    grid-template-columns: repeat(4,1fr);
    background-color: black;
    max-width:33%;
    margin: 3em auto;
`;
