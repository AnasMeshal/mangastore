//React
import React, { useState } from "react";


//Components
import MangaItem from "./MangaItem";
import SearchBar from "./SearchBar";

//Styles
import { ListWrapper } from "../style";

const MangaList = (props) => {
  const [query, setQuery] = useState("");
  
  const filteredManga = props.mangas.filter((manga) =>
    manga.name.toUpperCase().includes(query.toUpperCase())
  );

  const mangaList = filteredManga.map((manga) => (
    <MangaItem
      manga={manga}
      deleteManga={props.deleteManga}
      key={manga.id}
    />
  ));

  return (
    <>
      <SearchBar setQuery={setQuery} searchMangas={props.searchMangas} />
      <ListWrapper>{mangaList}</ListWrapper>
    </>
  );
};

export default MangaList;
