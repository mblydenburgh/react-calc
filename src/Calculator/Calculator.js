/* eslint react/jsx-no-bind:0 */
import React, { Component } from 'react';
import Styled from 'styled-components';
import * as math from 'mathjs';
import Display from './Display/Display';
import Button from './Button/Button';
import "typeface-roboto";

class Calculator extends Component {
  state = {
    result: 0,
    decimal: false,
    operator: false,
  }

  render() {
    const buttons = [
      { display: 'A/C', id: 'clear' },
      { display: '/', id: 'divide' },
      { display: '*', id: 'multiply' },
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

    const clearDisplay = () => {
      this.setState({
        result: 0,
        decimal: false,
        operator: false,
      });
    };

    const handleOperator = (operator) => {

        // only allow an operator to be entered if a number has been entered
        if(this.state.result !== 0){ 
            this.setState(prevState => ({ result: prevState.result + operator }));
        }

    };

    const calculateResult = () => {

        // console.log(math.eval(this.state.result));
        let expression = this.state.result.split('');
        const operatorRegex = /[+\-\/*]/;
        console.log(expression);
        // let removed = [];
        for(let i = 0; i < expression.length; i++){
            // check if letter is an operator
            if(operatorRegex.test(expression[i])){
                // if character is an operator, check if the next character is a operator
                // if it is, remove the first operator and reset to beginning to loop
                if(operatorRegex.test(expression[i+1])){
                    expression.splice(i,1);
                    i = 0;
                }

            }
            // removed.push(expression[i]);
        }
        const fixedExpression = expression.join('');
        console.log(fixedExpression);
        // this.setState({ result:`${fixedExpression}` });

        const result = math.eval(fixedExpression);
        console.log(`result: ${result}`);
        return result;

    };

    const handleClick = (event) => {
      // console.log(`clicked ${event.display}`);
      const { display, id } = event;
      switch (id) {
        case 'clear':
          // reset display
          clearDisplay();
          break;
        case 'divide':
        case 'multiply':
        case 'add':
        case 'subtract':
          // insert the correct operator into calculator expression
          const operator = display;
          handleOperator(operator);
          this.setState({ decimal: false });
          break;
        case 'decimal':
          // handle decimals
          if (this.state.decimal === false) {
            this.setState(prevState => ({ result: prevState.result + display }));
            this.setState({ decimal: true });
          }
          break;
        case 'equals':
          // handle solving input
          const result = calculateResult();
          console.log(String(result));
          this.setState({ result });
          break;
        default:
          // handle number input
          // if display has "0", rewrite initial number
          if (this.state.result == 0) { /* eslint eqeqeq: 0 */
            (this.state.decimal)?(this.setState({ result: `0.${display}` })):(this.setState({ result: display }));
          } else {
            this.setState(prevState => ({ result: prevState.result + display }));
            this.setState({ operator: false });
          }
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
    grid-gap: 2px;
    background-color: black;
    max-width:33%;
    margin: 3em auto;
    box-shadow: 10px 10px 5px #333;
    border-radius: 5px;
    padding: 5px
    border: 2px solid #818181;
`;
