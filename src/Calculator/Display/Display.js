import React from 'react'

const Display = (props) => {
    const styles = {
      backgroundColor:'#333',
      color: 'green',
      fontWeight: '700',
      textAlign: 'right',
      padding: '2px 15px',
      margin: '5px',
      gridColumn:'1/-1'
    };
    
    
    

    
    return (
        <div style={styles}>
            {props.result}
        </div>
        );
};

export default Display;