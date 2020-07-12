//React
import React, { useState } from "react";
import { Helmet } from "react-helmet";

//Components
import MangaItem from "./MangaItem";
import SearchBar from "./SearchBar";
import AddButton from "../components/buttons/AddButton ";

//Styles
import { ListWrapper } from "../style";

const MangaList = ({ mangas, deleteManga, createManga}) => {
  const [query, setQuery] = useState("");

  const filteredManga = mangas.filter(
    (manga) =>
      manga.name.toUpperCase().includes(query.toUpperCase()) ||
      manga.author.toUpperCase().includes(query.toUpperCase())
  );

  const mangaList = filteredManga.map((manga) => (
    <MangaItem manga={manga} deleteManga={deleteManga} key={manga.id} />
  ));

  return (
    <>
      <Helmet>
        <title>Available Mangas</title>
      </Helmet>
      <SearchBar setQuery={setQuery} />
      <AddButton createManga={createManga} />
      <ListWrapper>{mangaList}</ListWrapper>
    </>
  );
};

export default MangaList;
