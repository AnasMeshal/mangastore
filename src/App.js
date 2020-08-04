//React
import React, { useState } from "react";
import { observer } from "mobx-react";

//ThemeProvider
import { ThemeProvider } from "styled-components";

//Components
import NavBar from "./components/NavBar";
import Routes from "./components/Routes";
import Loading from "./components/Loading";

//Stores
import mangaStore from "./stores/mangaStore";
import vendorStore from "./stores/vendorStore";

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
    vendorBg: "#f2f2f2",
  },
  darkTheme: {
    backgroundImage: "/assets/dark.jpg",
    textColor: "white",
    borderColor: "white",
    mainColor: "#353b48",
    navColor: "black",
    vendorBg: "#2d3436",
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

      {mangaStore.loading || vendorStore.loading ? <Loading /> : <Routes />}
    </ThemeProvider>
  );
}

export default observer(App);
