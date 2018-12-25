import React from 'react';

const Button = (props) => {
  let styles = {
    minHeight: '100px',
    alignSelf: 'stretch',
    alignContent: 'center',
    border: '1px solid black',
    placeItems: 'center',
  };

  if (props.button.display === 'A/C') {
    styles = {
      ...styles,
      gridColumn: 'span 2',
      background: 'red',
    };
  } else if (props.button.display === '=') {
    styles = {
      ...styles,
      gridRow: 'span 2',
      background: 'green',
    };
  } else if (props.button.display === '0') {
    styles = {
      ...styles,
      gridColumn: 'span 2',
      background: '#aaa',
    };
  } else {
    styles = {
      ...styles,
      background: '#aaa',
    };
  }

  return (
    <div id={props.button.id} style={styles} onClick={props.onClick}>
      {props.button.display}
    </div>
  );
};

export default Button;
