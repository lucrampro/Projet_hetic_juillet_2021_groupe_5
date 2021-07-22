import React from 'react';
// STYLE
import '../assets/styles/button.scss'

const ButtonComponent = (props) => {
  return (
    <div className="button--component">
      <button>{props.text ? props.text : "default text"}</button>
    </div>
  );
}

export default ButtonComponent;
