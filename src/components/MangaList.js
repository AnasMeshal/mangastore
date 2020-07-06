//React
import React from "react";

//Components
import MangaItem from "./MangaItem";

//Styles
import { ListWrapper } from "../style";

const MangaList = (props) => {
  const mangaList = props.mangas.map((manga) => (
    <MangaItem
      manga={manga}
      deleteManga={props.deleteManga}
      selectManga={props.selectManga}
      key={manga.id}
    />
  ));

  return <ListWrapper>{mangaList}</ListWrapper>;
};

export default MangaList;
