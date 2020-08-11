import React, { useState } from "react";

//Modal
import Modal from "react-modal";

//Styles
import { AddButtonStyled, RequiredLabel } from "./styles";

//Icon
import { GrClose } from "react-icons/gr";
import authStore from "../../stores/authStore";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
    width: "40%",
    color: "black",
  },
};

const SignupModal = ({ isOpen, closeModal }) => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    role: "vendor",
  });

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    authStore.signup(user);
    closeModal();
  };

  return (
    <div style={{ backgroundColor: "black" }}>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        style={customStyles}
      >
        <div>
          <GrClose
            style={{ marginBottom: "2vh" }}
            size="2vw"
            onClick={closeModal}
          >
            close
          </GrClose>
          <form onSubmit={handleSubmit}>
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
                  autocomplete="off"
                  onChange={handleChange}
                  type="text"
                  name="email"
                  className="form-control"
                  placeholder="Email"
                />
              </div>
              <div className="form-group col-md-12">
                <label htmlFor="inputPassword4">
                  Password<RequiredLabel>*</RequiredLabel>
                </label>
                <input
                  value={user.password}
                  onChange={handleChange}
                  required
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="password"
                />
              </div>
            </div>
            <AddButtonStyled type="submit" className="btn btn-primary">
              Sign Up
            </AddButtonStyled>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default SignupModal;
