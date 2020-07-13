//React
import React from "react";

//Styles
import { Search, SearchWrapper } from "../style";
import AddButton from "./buttons/AddButton ";

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
