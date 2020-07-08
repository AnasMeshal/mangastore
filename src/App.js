//React
import React, { useState } from "react";
import { Route, Switch } from "react-router";
import { Link } from "react-router-dom";

//ThemeProvider
import { ThemeProvider } from "styled-components";

//Components
import MangaList from "./components/MangaList";
import MangaDetail from "./components/MangaDetail";
import mangas from "./mangas";
import Home from "./components/Home";

//Styles
import { GlobalStyle, ButtonWrapper, ThemeButton } from "./style";

const theme = {
  lightTheme: {
    backgroundColor: "#A4B0BD",
    backgroundImage: "/assets/white.jpg",
    textColor: "black",
    borderColor: "black",
    mainColor: "#EAF0F1",
    title: "#fff",
  },
  darkTheme: {
    backgroundColor: "#212529",
    backgroundImage: "/assets/dark.jpg",
    textColor: "white",
    borderColor: "white",
    mainColor: "#343a40",
    title: "#6c757d",
  },
};

function App() {
  const [currentTheme, setCurrentTheme] = useState("lightTheme");
  const [_mangas, setMangas] = useState(mangas);

  const deleteManga = (mangaId) => {
    const updatedMangas = _mangas.filter((manga) => manga.id !== mangaId);
    setMangas(updatedMangas);

  };

  const toogleTheme = () => {
    setCurrentTheme(currentTheme === "lightTheme" ? "darkTheme" : "lightTheme");
  };

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyle />

      <Switch>
        <Route path="/mangas/:mangaSlug">
          <MangaDetail
            mangas={_mangas}
            deleteManga={deleteManga}
          />
        </Route>
        <Route path="/mangas">
          <MangaList mangas={_mangas} deleteManga={deleteManga} />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>

      <ButtonWrapper>
        <Link to="/"><ThemeButton>Home</ThemeButton></Link>
        <Link to="/mangas"><ThemeButton>Mangas</ThemeButton></Link>
        <ThemeButton onClick={toogleTheme}>
          {currentTheme === "lightTheme" ? "Dark" : "Light"} Mode
        </ThemeButton>
      </ButtonWrapper>
    </ThemeProvider>
  );
}

export default App;
