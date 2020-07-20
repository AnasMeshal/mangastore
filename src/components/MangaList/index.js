//React
import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { observer } from "mobx-react";

//Stores
import mangaStore from "../../stores/mangaStore";

//Components
import MangaItem from "../MangaItem";
import SearchBar from "../SearchBar";

//Styles
import { ListWrapper } from "./styles";

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
      <ListWrapper>{mangaList}</ListWrapper>
    </>
  );
};

export default observer(MangaList);
