import React, { useState } from "react";

//Modals
import SignupModal from "../modals/SignupModal ";

//Styles
import { SignupButtonStyled } from "./styles";

const SignupButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);

  return (
    <>
      <SignupButtonStyled onClick={() => setIsOpen(true)}>
        Sign Up
      </SignupButtonStyled>
      <SignupModal isOpen={isOpen} closeModal={closeModal} />
    </>
  );
};

export default SignupButton;
