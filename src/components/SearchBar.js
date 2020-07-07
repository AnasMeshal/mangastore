//React
import React from "react";

//Styles
import { Search, SearchWrapper } from "../style";

const SearchBar = (props) => {
  return (
    <SearchWrapper>
      <Search placeholder="Search for your manga" onChange={(event) => props.setQuery(event.target.value)}  />
    </SearchWrapper>
  );
};

export default SearchBar;
