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
import NavBar from "./components/NavBar";

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
    navColor: "#fff"
  },
  darkTheme: {
    backgroundColor: "#212529",
    backgroundImage: "/assets/dark.jpg",
    textColor: "white",
    borderColor: "white",
    mainColor: "#343a40",
    title: "#6c757d",
    navColor: "black"
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
      <NavBar currentTheme={currentTheme} toogleTheme={toogleTheme}  />

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
    </ThemeProvider>
  );
}

export default App;
