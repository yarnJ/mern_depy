import React from "react";
import { Button } from "react-bootstrap";

const ButtonComponent = (props) => {
  return(
    <Button variant={ props.variant } onClick={ props.onClick } type={ props.type } size={ props.size }>{ props.value }</Button>
  )
};

export default ButtonComponent;