import React from "react";
import { Form } from "react-bootstrap";

const FormInputComponent = (props) => {
  return (
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Label>{ props.label }</Form.Label>
      <Form.Control
        aria-label="Default"
        aria-describedby="inputGroup-sizing-default"
        onChange={props.onChange}
        placeholder={props.placeholder}
      />
    </Form.Group>
      
  );
};

export default FormInputComponent;
