import React from 'react';
import "./Button.css";



const Button = (prop) => {
  return (
    <div className='buttonContainer'>
        <h5>{prop.title}</h5>
    </div>
  )
}



export default Button;