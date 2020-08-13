//React
import React from "react";
import { Redirect } from "react-router";

//Styles
import { Title, TitleWrapper } from "./styles";

//Store
import authStore from "../../stores/authStore";

const NotFound = () => {
  if (!authStore.user) return <Redirect to="/" />;

  return (
    <TitleWrapper>
      <Title>404</Title>
      <Title>this page doesn't exist</Title>
    </TitleWrapper>
  );
};

export default NotFound;
