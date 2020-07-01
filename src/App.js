//React
import React, { useState } from "react";

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
  ButtonWrapper,
  ThemeButton,
} from "./style";

const theme = {
  lightTheme: {
    backgroundColor: "#ced6e0",
    textColor: "black",
    borderColor: "black",
    mainColor: "#f1f2f6",
    title: "#fff",
  },
  darkTheme: {
    backgroundColor: "#212529",
    textColor: "white",
    borderColor: "black",
    mainColor: "#343a40",
    title: "#6c757d",
  },
};

function App() {
  
  const [currentTheme, setCurrentTheme] = useState("lightTheme")

  const toogleTheme = () => {
    setCurrentTheme(currentTheme === "lightTheme" ? "darkTheme" : "lightTheme")
  }

  return (

    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyle />
      <TitleWrapper>
        <Title>Welcome To Manga Store</Title>
        <Description>Here You Can Find EveryThing About Manga</Description>
      </TitleWrapper>

      <ListWrapper>
        <MangaList />
      </ListWrapper>
      <ButtonWrapper>
        <ThemeButton onClick={toogleTheme}>{currentTheme === "lightTheme" ? "Dark" : "Light"} Mode</ThemeButton>
      </ButtonWrapper>
    </ThemeProvider>

  );
}

export default App;
