//React
import React from "react";

//Components
import AddButton from "../buttons/AddButton ";

//Styles
import { Search, SearchWrapper } from "./styles";

const SearchBar = ({ setQuery }) => {
  return (
    <SearchWrapper>
      <Search
        placeholder="Search for your manga or author"
        onChange={(event) => setQuery(event.target.value)}
      />
      <AddButton />
    </SearchWrapper>
  );
};

export default SearchBar;
