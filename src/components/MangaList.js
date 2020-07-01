//React
import React, { useState } from "react";

//Mangas
import mangas from "../mangas";

//Components
import MangaItem from "./MangaItem";

//Styles
import { ListWrapper } from "../style";

const MangaList = () => {
  const [_mangas, setMangas] = useState(mangas);

  const deleteManga = (mangaId) => {
    const updatedMangas = _mangas.filter((manga) => manga.id !== mangaId);
    setMangas(updatedMangas);
  };

  const mangaList = _mangas.map((manga) => (
    <MangaItem manga={manga} deleteManga={deleteManga} key={manga.id} />
  ));

  return <ListWrapper>{mangaList}</ListWrapper>;
};

export default MangaList;
