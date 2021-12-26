import React from "react";
import { Container } from "react-bootstrap";
import PersonListComponent from "../../component/person/person.list.component";

const PersonComponent = () => {
  return(
    <div className="person-list-side">
      <Container>
        <PersonListComponent></PersonListComponent>
      </Container>
    </div>
  )
};

export default PersonComponent;