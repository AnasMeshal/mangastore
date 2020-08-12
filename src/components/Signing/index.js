import React, { useState } from "react";
import { Redirect, useHistory } from "react-router";

//Styles
import {
  FormWrapper,
  AddButtonStyled,
  RequiredLabel,
  Form,
  PageChangerWrapper,
  PageChanger,
} from "./styles";

//Icon
import { RiEyeLine } from "react-icons/ri";

//Stores
import authStore from "../../stores/authStore";

const Singing = () => {
  const history = useHistory();

  const [isShowing, setIsShowing] = useState(false);

  const [wrongPasswordIsShowing, setWrongPasswordIsShowing] = useState(false);

  const [passwordIsShowing, setPasswordIsShowing] = useState(false);

  const [userSignUp, setUserSignUp] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    role: "vendor",
    confirmedPassword: "",
  });

  const [userSignIn, setUserSignIn] = useState({
    username: "",
    password: "",
  });

  const handleChangeSignUp = (event) => {
    setUserSignUp({ ...userSignUp, [event.target.name]: event.target.value });
  };

  const handleChangeSignIn = (event) => {
    setUserSignIn({ ...userSignIn, [event.target.name]: event.target.value });
  };

  const handleSubmitSignUp = (event) => {
    event.preventDefault();
    if (userSignUp.confirmedPassword === userSignUp.password) {
      console.log("this is handle submit if true", userSignUp);
      authStore.signup(userSignUp);
      setWrongPasswordIsShowing(false);
    } else {
      setWrongPasswordIsShowing(true);
    }
  };

  const pushing = () => {
    history.push("/vendors");
  };

  const handleSubmitSignIn = async (event) => {
    event.preventDefault();
    await authStore.signin(userSignIn);
    pushing();
  };

  if (authStore.user) return <Redirect to="/vendor" />;

  return isShowing ? (
    <FormWrapper>
      <Form onSubmit={handleSubmitSignUp}>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputEmail4">First Name</label>
            <input
              value={userSignUp.firstName}
              onChange={handleChangeSignUp}
              type="text"
              name="firstName"
              className="form-control"
              placeholder="First Name"
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputPassword4">Last Name</label>
            <input
              value={userSignUp.lastName}
              onChange={handleChangeSignUp}
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
              value={userSignUp.username}
              onChange={handleChangeSignUp}
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
              value={userSignUp.email}
              autoComplete="off"
              onChange={handleChangeSignUp}
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
              value={userSignUp.password}
              onChange={handleChangeSignUp}
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
              value={userSignUp.confirmedPassword}
              onChange={handleChangeSignUp}
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
          <PageChanger onClick={() => setIsShowing(false)}>
            already have an account ?
          </PageChanger>
        </PageChangerWrapper>
      </Form>
    </FormWrapper>
  ) : (
    <FormWrapper>
      <Form onSubmit={handleSubmitSignIn}>
        <div className="form-row">
          <div className="form-group col-md-12">
            <label htmlFor="inputPassword4">
              username<RequiredLabel>*</RequiredLabel>
            </label>
            <input
              value={userSignIn.username}
              onChange={handleChangeSignIn}
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
              value={userSignIn.password}
              onChange={handleChangeSignIn}
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
          <PageChanger onClick={() => setIsShowing(true)}>
            Dont have an account ? Create one
          </PageChanger>
        </PageChangerWrapper>
      </Form>
    </FormWrapper>
  );
};

export default Singing;
