//React
import React, { useState } from "react";

//ThemeProvider
import { ThemeProvider } from "styled-components";

//Components
import MangaList from "./components/MangaList";
import MangaDetail from "./components/MangaDetail";
import mangas from "./mangas";

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
    backgroundColor: "#A4B0BD",
    textColor: "black",
    borderColor: "black",
    mainColor: "#EAF0F1",
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
  const [currentTheme, setCurrentTheme] = useState("lightTheme");
  const [manga, setManga] = useState(null);
  const [_mangas, setMangas] = useState(mangas);

  const deleteManga = (mangaId) => {
    const updatedMangas = _mangas.filter((manga) => manga.id !== mangaId);
    setMangas(updatedMangas);
    setManga(null);
  };

  const changeView = () => {
    setManga(null);
  };

  const setView = () =>
    manga ? (
      <MangaDetail
        changeView={changeView}
        manga={manga}
        deleteManga={deleteManga}
      />
    ) : (
      <MangaList
        mangas={_mangas}
        deleteManga={deleteManga}
        selectManga={selectManga}
      />
    );

  const selectManga = (mangaId) => {
    const selectedManga = mangas.find((manga) => manga.id === mangaId);
    setManga(selectedManga);
  };

  const toogleTheme = () => {
    setCurrentTheme(currentTheme === "lightTheme" ? "darkTheme" : "lightTheme");
  };

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyle />
      <TitleWrapper>
        <Title>Welcome To Manga Store</Title>
        <Description>Here You Can Find EveryThing About Manga</Description>
      </TitleWrapper>

      {setView()}

      <ButtonWrapper>
        <ThemeButton onClick={toogleTheme}>
          {currentTheme === "lightTheme" ? "Dark" : "Light"} Mode
        </ThemeButton>
      </ButtonWrapper>
    </ThemeProvider>
  );
}

export default App;
