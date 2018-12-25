import React from 'react';
import './App.css';
import Calculator from './Calculator/Calculator';

const App = () => {
  const styles = {
    container: {
      textAlign: 'center',
    },

  };

  return (
    <div style={styles.container}>
      <Calculator />
    </div>
  );
};

export default App;
