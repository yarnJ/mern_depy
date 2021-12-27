import React from "react";
import { Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import PersonListComponent from "../../component/person/person.list.component";
import PersonListEditComponent from "../../component/person/person.list.edit.component";

const PersonComponent = () => {
  return(
    <div className="person-list-side">
      <Container>
        <Routes>
          <Route exact path="/" element={<PersonListComponent/>}></Route>

          <Route path="/:personId" element={ <PersonListEditComponent/> }></Route>
        </Routes>
      </Container>
    </div>
  )
};

export default PersonComponent;