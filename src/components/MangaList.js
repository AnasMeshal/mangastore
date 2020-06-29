//React
import React from "react";

//style
import style from "../style";

//manga
import mangas from "../mangas";

//MangaItem
import MangaItem from "./MangaItem";

const MangaList = () => {
  const mangaList = mangas.map((manga) => (
    <MangaItem Manga={manga} key={manga.id} />
  ));
  
  return <div style={style.list}>{mangaList}</div>
};

export default MangaList;
