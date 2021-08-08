import React from "react";
import "./button.css";

const Button = (props) => {
  const {name, handleClick, classAdd} = props;

  return <button className={`button ${classAdd}`} name={name} onClick={handleClick}>
    {name}
  </button>
}

export default Button;