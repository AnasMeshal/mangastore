//React
import React, { useState } from "react";
import { Route, Switch } from "react-router";

//ThemeProvider
import { ThemeProvider } from "styled-components";

//Components
import MangaList from "./components/MangaList";
import MangaDetail from "./components/MangaDetail";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import NotFound from "./components/NotFound";

//Styles
import { GlobalStyle } from "./styles";
import lightLogo from "./welcome-light.png";
import darkLogo from "./welcome-dark.png";

const theme = {
  lightTheme: {
    backgroundImage: "/assets/light.jpg",
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
  const savedTheme = localStorage.getItem("theme");
  const [currentTheme, setCurrentTheme] = useState(savedTheme ?? "lightTheme");

  const toggleTheme = () => {
    const newTheme = currentTheme === "lightTheme" ? "darkTheme" : "lightTheme";
    setCurrentTheme(newTheme);
    localStorage.setItem("theme", newTheme);
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
        <Route component={NotFound}>
          <NotFound />
        </Route>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
