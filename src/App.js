import React, { Component } from 'react';
import './App.css';
import Calculator from './Calculator/Calculator';

class App extends Component {
  render() {
    
    const styles = {
      container: {
        textAlign:'center',
      }
      
    };
    
    return (
      <div style={styles.container}>
        <Calculator />
      </div>
    );
  }
}

export default App;
