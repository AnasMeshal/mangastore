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

const Signin = () => {
  const [passwordIsShowing, setPasswordIsShowing] = useState(false);

  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await authStore.signin(user);
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
          <div className="form-group col-md-12">
            <label htmlFor="inputPassword4">
              username<RequiredLabel>*</RequiredLabel>
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
        </div>
        <AddButtonStyled type="submit" className="btn btn-primary">
          Sign In
        </AddButtonStyled>
        <PageChangerWrapper>
          <Linking to="/signup">Dont have an account ? Create one</Linking>
        </PageChangerWrapper>
      </Form>
    </FormWrapper>
  );
};

export default observer(Signin);
