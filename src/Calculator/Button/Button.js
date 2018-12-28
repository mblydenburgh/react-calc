import React from 'react';
import Styled from 'styled-components'
import "typeface-roboto";

const Button = (props) => {
  let styles = {};

  if (props.button.display === 'A/C') {
    styles = {
      gridColumn: 'span 2',
      background: 'red',
    };
  } else if (props.button.display === '=') {
    styles = {
      gridRow: 'span 2',
      background: 'green',
    };
  } else if (props.button.display === '0') {
    styles = {
      gridColumn: 'span 2',
    };
  }

  return (
    <ButtonDisplay id={props.button.id} style={styles} onClick={props.onClick}>
      {props.button.display}
    </ButtonDisplay>
  );
};

export default Button;

const ButtonDisplay = Styled.button`
  display: grid;
  justify-content: center;
  align-items: center;
  min-height: 100px;
  background-color: #aaa;
  font-family: 'VT323', monospace;
  font-size: 1.5rem;
  border: 1px solid #666;
  
  &:active{
    transform: translateY(2px);
    background-color: #818181;
  }
`;