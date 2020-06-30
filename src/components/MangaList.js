//React
import React from "react";

//Mangas
import mangas from "../mangas";

//Components
import MangaItem from "./MangaItem";

//Styles
import { ListWrapper } from "../style";

const MangaList = () => {
  const mangaList = mangas.map((manga) => (
    <MangaItem manga={manga} key={manga.id} />
  ));

  return <ListWrapper>{mangaList}</ListWrapper>;
};

export default MangaList;
