import React from "react";
import { FormControl, InputGroup } from "react-bootstrap";

const FormInputComponent = (props) => {
  return (
    <InputGroup className="mb-3">
      <InputGroup.Text id="basic-addon1">{props.label}</InputGroup.Text>
      <FormControl
        aria-label="Default"
        aria-describedby="inputGroup-sizing-default"
        onChange={props.onChange}
        value={props.value}
      />
    </InputGroup>
  );
};

export default FormInputComponent;
