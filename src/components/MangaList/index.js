//React
import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { observer } from "mobx-react";
import { Redirect } from "react-router";

//Components
import MangaItem from "../MangaItem";
import SearchBar from "../SearchBar";

//Styles
import { ListWrapper } from "./styles";

//Stores
import authStore from "../../stores/authStore";

const MangaList = ({ mangas }) => {
  const [query, setQuery] = useState("");

  const filteredManga = mangas.filter(
    (manga) =>
      manga.name.toUpperCase().includes(query.toUpperCase()) ||
      manga.author.toUpperCase().includes(query.toUpperCase())
  );

  const mangaList = filteredManga.map((manga) => (
    <MangaItem manga={manga} key={manga.id} />
  ));

  if (!authStore.user) return <Redirect to="/" />;

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
