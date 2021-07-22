import React from 'react';
import '../styles/input.scss'
const InputComponent = (props) => {
  console.log(props.text);
  
  return(
    <input type="text" placeholder={props.text ? props.text : "default text"}/>
  );
}

export default InputComponent