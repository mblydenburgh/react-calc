import React from 'react';
import Styled from 'styled-components'

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
      background: '#aaa',
    };
  } else {
    styles = {
      background: '#aaa',
    };
  }

  return (
    <ButtonDisplay id={props.button.id} style={styles} onClick={props.onClick}>
      {props.button.display}
    </ButtonDisplay>
  );
};

export default Button;

const ButtonDisplay = Styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  min-height: 100px;
  border: 1px solid black;
`;