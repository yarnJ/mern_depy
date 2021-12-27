import React from "react";
import { Container } from "react-bootstrap";
import { useState } from "react";
import { useDispatch } from 'react-redux'
import FormInputComponent from "../../resuable/form-input/formInput.component";
import ButtonComponent from "../../resuable/button/button.component";
import PersonCategoryComponent from "../../component/create/person.category.component";
import { asyncCreatePersonList } from "../../redux/person/person-slice";

const CreateComponent = () => {
  
  const dispatch = useDispatch();
  const [person_name, setpersonName] = useState("");
  const [person_position, setpersonPosition] = useState("");
  const [person_level, setpersonCategory] = useState("");

  const createPerson = () => {
    const person = {person_name, person_position, person_level};
    dispatch(asyncCreatePersonList(person));

    setpersonName("");
    setpersonPosition("");
  };

  const handleChange = (category) => {
    setpersonCategory(category);
  };

  return (
    <Container>
      <FormInputComponent
        label="Name of the person"
        onChange={(e) => setpersonName(e.target.value)}
        value={person_name}
      ></FormInputComponent>

      <FormInputComponent
        label="Person's position"
        onChange={(e) => setpersonPosition(e.target.value)}
        value={person_position}
      ></FormInputComponent>

      <div className="person-category-side">
        <PersonCategoryComponent handleChange={handleChange} />
      </div>

      <ButtonComponent
        variant="outline-success"
        value="Create person"
        onClick={createPerson}
      ></ButtonComponent>
    </Container>
  );
};

export default CreateComponent;
