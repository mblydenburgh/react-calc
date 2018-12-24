import React from 'react';
import Display from './Display/Display';
import Button from './Button/Button';

const Calculator = (props) => {
    
    const  styles = {
        calculator:{
            display: 'grid',
            gridTemplateColumns:'repeat(4,1fr)',
            backgroundColor:'black',
            maxWidth: '33%',
            margin: '3em auto'
        }

    };
    
    const buttons = ["A/C","/","X","7","8","9","-","4","5","6","+","1","2","3","=","0","."];
    
    return (
        <div style={styles.calculator}>
            <Display result={0}/>
            {buttons.map((button,index)=>{return <Button button={button}/>})}
        </div>
        );
};

export default Calculator;