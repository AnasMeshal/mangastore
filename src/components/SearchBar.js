//React
import React from "react";

//Styles
import { Search, SearchWrapper } from "../style";

const SearchBar = ({ setQuery }) => {
  return (
    <SearchWrapper>
      <Search
        placeholder="Search for your manga, writter or price"
        onChange={(event) => setQuery(event.target.value)}
      />
    </SearchWrapper>
  );
};

export default SearchBar;
