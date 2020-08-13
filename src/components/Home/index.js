//React
import React from "react";
import { Helmet } from "react-helmet";

//Styles
import { TitleWrapper, Title, Description } from "./styles";
import authStore from "../../stores/authStore";
import { Redirect } from "react-router";
import { observer } from "mobx-react";

const Home = () => {
  if (!authStore.user) {
    return <Redirect to="/" />;
  }

  if (authStore.user.vendorSlug) {
    return <Redirect to={`/vendors/${authStore.user.vendorSlug}`} />;
  }

  return (
    <>
      <Helmet>
        <title>Welcome to Manga Store</title>
      </Helmet>
      <TitleWrapper>
        <Title>Manga Store</Title>
        <Description>Here You Can Find EveryThing About Manga</Description>
      </TitleWrapper>
    </>
  );
};

export default observer(Home);
