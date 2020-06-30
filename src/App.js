//React
import React from "react";

//ThemeProvider
import { ThemeProvider } from "styled-components";

//Components
import MangaList from "./components/MangaList";

//Styles
import {
  GlobalStyle,
  TitleWrapper,
  Title,
  Description,
  ListWrapper,
} from "./style";

const theme = {
  backgroundColor: "#ced6e0",
  textColor: "black",
  borderColor: "black",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <TitleWrapper>
        <Title>Welcome To Manga Store</Title>
        <Description>Here You Can Find EveryThing About Manga</Description>
      </TitleWrapper>

      <ListWrapper>
        <MangaList />
      </ListWrapper>
    </ThemeProvider>
  );
}

export default App;
