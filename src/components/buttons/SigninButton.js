import React, { useState } from "react";

//Modals
import SigninModal from "../modals/SigninModal";

//Styles
import { SigninButtonStyled } from "./styles";

const SigninButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);

  return (
    <>
      <SigninButtonStyled onClick={() => setIsOpen(true)}>
        Sign In
      </SigninButtonStyled>
      <SigninModal isOpen={isOpen} closeModal={closeModal} />
    </>
  );
};

export default SigninButton;
