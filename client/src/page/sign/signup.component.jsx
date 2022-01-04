import React from "react";
import { Container, Form, Alert } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncRegisterUser } from "../../redux/user/user-slice";
import FormInputComponent from "../../resuable/form-input/formInput.component";
import ButtonComponent from "../../resuable/button/button.component";

const SignupComponent = () => {

  const dispatch = useDispatch();
  const loading = useSelector(state => state.user.loading);
  const [userList, setuserList] = useState({
    user_username: '',
    user_email: '',
    user_password: ''
  });

  const registerUser = (e) => {
    // e.preventDefault();
    dispatch(asyncRegisterUser(userList));
  }

  useEffect(() => {
    // if(loading !== null) {
    //   alert("try again");
    //   console.log(loading);
    // } else {
    //   alert("no exit");
    //   console.log(loading);
    // }
    alert(loading);
    console.log(loading, 'loading');
  }, [])

  return (
    <div className="signup-side">
      <Container>
        <Form onSubmit={ registerUser } encType="multipart/form-data">
        <FormInputComponent
            label="Username"
            name="username"
            type="username"
            value={ userList.user_username }
            onChange={(e) => setuserList({ ...userList, user_username: e.target.value })}
          ></FormInputComponent>

          <FormInputComponent
            label="Email"
            name="email"
            value={ userList.user_email }
            type="email"
            onChange={(e) => setuserList({ ...userList, user_email: e.target.value })}
          ></FormInputComponent>

          <FormInputComponent
            label="Password"
            name="password"
            value={ userList.user_password }
            type="password"
            onChange={(e) => setuserList({ ...userList, user_password: e.target.value })}
          ></FormInputComponent>

          <ButtonComponent
            variant="outline-success"
            value="Signup"
            type="submit"
          ></ButtonComponent>
        </Form>
      </Container>
    </div>
  )
};

export default SignupComponent;