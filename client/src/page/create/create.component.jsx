import React from "react";
import { Container, Form, Alert } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FormInputComponent from "../../resuable/form-input/formInput.component";
import ButtonComponent from "../../resuable/button/button.component";
import PersonCategoryComponent from "../../component/create/person.category.component";
import { asyncCreatePersonList } from "../../redux/person/person-slice";

const CreateComponent = () => {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.person.loading);
  const [errImageType, seterrImageType] = useState("0");
  const [person, setperson] = useState(
    {
      person_name: '',
      person_position: '',
      person_level: '',
      person_photo: ''
    }
  );

  const createPerson = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("person_name", person.person_name);
    formData.append("person_position", person.person_level);
    formData.append("person_level", person.person_level);
    formData.append("person_photo", person.person_photo, person.person_photo.name);

    dispatch(asyncCreatePersonList(formData));

  };

  const handleLevel = (category) => {
    setperson({ ...person, person_level: category })
  };

  const selectImage = (e) => {
    if (
      e.target.files[0].type !== "image/jpeg" &&
      e.target.files[0].type !== "image/png" &&
      e.target.files[0].type !== "image/jpg"
    ) {
      seterrImageType("1");
    } else {
      setperson({ ...person, person_photo: e.target.files[0] });
      seterrImageType("0");
    }
  };

  useEffect(() => {
    console.log(loading);
  }, [])

  return (
    <Container>
      <Form onSubmit={ createPerson } encType="multipart/form-data">
        <FormInputComponent
          label="Name of the person"
          name="person_name"
          value={ person.person_name }
          onChange={(e) => setperson({ ...person, person_name: e.target.value })}
        ></FormInputComponent>

        <FormInputComponent
          label="Person's position"
          name="person_position"
          value={ person.person_position }
          onChange={(e) => setperson({ ...person, person_position: e.target.value })}
        ></FormInputComponent>

        <div className="person-category-side">
          <PersonCategoryComponent handleChange={handleLevel} />
        </div>

        <Form.Group className="position-relative mb-3">
          <Form.Label>File</Form.Label>
          <Form.Control
            type="file"
            required
            name="file"
            accept=".png, .jpg, .jpeg"
            onChange={selectImage}
          />
        </Form.Group>

        {errImageType === "1" ? (
          <Alert style={{ padding: "0.5rem 1rem" }} variant="danger">
            Please choose only valid image.
          </Alert>
        ) : null}

        <ButtonComponent
          variant="outline-success"
          value="Create person"
          type="submit"
        ></ButtonComponent>
      </Form>
    </Container>
  );
};

export default CreateComponent;
