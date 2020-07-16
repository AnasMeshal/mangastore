//React
import React from "react";
import {Helmet} from "react-helmet";

//Styles
import { TitleWrapper, Title, Description } from "../styles";

const Home = () => {
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

export default Home;
