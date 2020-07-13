//React
import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { observer } from "mobx-react"

//Stores
import mangaStore from "../stores/mangaStore"

//Components
import MangaItem from "./MangaItem";
import SearchBar from "./SearchBar";
import AddButton from "../components/buttons/AddButton ";

//Styles
import { ListWrapper } from "../style";

const MangaList = () => {
  const [query, setQuery] = useState("");

  const filteredManga = mangaStore.mangas.filter(
    (manga) =>
      manga.name.toUpperCase().includes(query.toUpperCase()) ||
      manga.author.toUpperCase().includes(query.toUpperCase())
  );

  const mangaList = filteredManga.map((manga) => (
    <MangaItem manga={manga} key={manga.id} />
  ));

  return (
    <>
      <Helmet>
        <title>Available Mangas</title>
      </Helmet>
      <SearchBar setQuery={setQuery} />
      <AddButton />
      <ListWrapper>{mangaList}</ListWrapper>
    </>
  );
};

export default observer(MangaList);
