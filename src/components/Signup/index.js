import React, { useState } from "react";
import { Redirect } from "react-router";
import { observer } from "mobx-react";

//Styles
import {
  FormWrapper,
  AddButtonStyled,
  RequiredLabel,
  Form,
  PageChangerWrapper,
  PageChanger,
  Linking,
} from "./styles";

//Icon
import { RiEyeLine } from "react-icons/ri";

//Stores
import authStore from "../../stores/authStore";

const Signup = () => {
  const [wrongPasswordIsShowing, setWrongPasswordIsShowing] = useState(false);

  const [passwordIsShowing, setPasswordIsShowing] = useState(false);

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    role: "vendor",
    confirmedPassword: "",
  });

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (user.confirmedPassword === user.password) {
      console.log("this is handle submit if true", user);
      authStore.signup(user);
      setWrongPasswordIsShowing(false);
    } else {
      setWrongPasswordIsShowing(true);
    }
  };

  if (authStore.user) {
    return (
      <Redirect
        to={
          authStore.user.vendorSlug
            ? `/vendors/${authStore.user.vendorSlug}`
            : "/home"
        }
      />
    );
  }

  return (
    <FormWrapper>
      <Form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputEmail4">First Name</label>
            <input
              value={user.firstName}
              onChange={handleChange}
              type="text"
              name="firstName"
              className="form-control"
              placeholder="First Name"
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputPassword4">Last Name</label>
            <input
              value={user.lastName}
              onChange={handleChange}
              type="text"
              name="lastName"
              className="form-control"
              placeholder="Last Name"
            />
          </div>
          <div className="form-group col-md-12">
            <label htmlFor="inputPassword4">
              Username<RequiredLabel>*</RequiredLabel>
            </label>
            <input
              value={user.username}
              onChange={handleChange}
              required
              type="text"
              name="username"
              className="form-control"
              placeholder="username"
            />
          </div>
          <div className="form-group col-md-12">
            <label htmlFor="inputPassword4">Email</label>
            <input
              value={user.email}
              autoComplete="off"
              onChange={handleChange}
              type="text"
              name="email"
              className="form-control"
              placeholder="Email"
            />
          </div>
          <div className="form-group col-md-12">
            <label htmlFor="inputPassword4">
              Password<RequiredLabel>*</RequiredLabel>{" "}
              <RiEyeLine
                onClick={() => setPasswordIsShowing(!passwordIsShowing)}
                size="1.3em"
              />
            </label>
            <input
              value={user.password}
              onChange={handleChange}
              required
              type={!passwordIsShowing ? "password" : "text"}
              name="password"
              className="form-control"
              placeholder="password"
            />
          </div>
          <div className="form-group col-md-12">
            <label htmlFor="inputPassword4">
              Confirm Password<RequiredLabel>*</RequiredLabel>
            </label>
            <input
              value={user.confirmedPassword}
              onChange={handleChange}
              required
              type={!passwordIsShowing ? "password" : "text"}
              name="confirmedPassword"
              className="form-control"
              placeholder="password"
            />
            {wrongPasswordIsShowing && (
              <label
                style={{ color: "red", marginTop: "1vh" }}
                htmlFor="inputPassword4"
              >
                Oops, make sure your passwords is matching.
              </label>
            )}
          </div>
        </div>
        <AddButtonStyled type="submit" className="btn btn-primary">
          Sign Up
        </AddButtonStyled>
        <PageChangerWrapper>
          <Linking to="/">already have an account ?</Linking>
        </PageChangerWrapper>
      </Form>
    </FormWrapper>
  );
};

export default observer(Signup);
