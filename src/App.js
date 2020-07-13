//React
import React, { useState } from "react";
import { Route, Switch } from "react-router";

//ThemeProvider
import { ThemeProvider } from "styled-components";

//Components
import MangaList from "./components/MangaList";
import MangaDetail from "./components/MangaDetail";
import mangas from "./mangas";
import Home from "./components/Home";
import NavBar from "./components/NavBar";

//Styles
import { GlobalStyle } from "./style";
import lightLogo from "./welcome-light.png";
import darkLogo from "./welcome-dark.png";

const theme = {
  lightTheme: {
    backgroundImage: "/assets/white.jpg",
    textColor: "black",
    borderColor: "black",
    mainColor: "#EAF0F1",
    title: "#fff",
    navColor: "#fff",
  },
  darkTheme: {
    backgroundImage: "/assets/dark.jpg",
    textColor: "white",
    borderColor: "white",
    mainColor: "#353b48",
    navColor: "black",
  },
};

function App() {
  const [currentTheme, setCurrentTheme] = useState("lightTheme");

  const toggleTheme = () => {
    setCurrentTheme(currentTheme === "lightTheme" ? "darkTheme" : "lightTheme");
  };

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyle />
      <NavBar
        toggleTheme={toggleTheme}
        currentTheme={currentTheme}
        lightLogo={lightLogo}
        darkLogo={darkLogo}
      />

      <Switch>
        <Route exact path="/mangas/:mangaSlug">
          <MangaDetail />
        </Route>
        <Route exact path="/mangas">
          <MangaList />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
