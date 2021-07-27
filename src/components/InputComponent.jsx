import React from 'react';
import '../assets/styles/input.scss'
const InputComponent = (props) => {
  return(
    <input type="text" placeholder={props.text ? props.text : "default text"}/>
  );
}

export default InputComponent