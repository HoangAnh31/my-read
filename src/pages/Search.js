import React from "react";
import SearchForm from "../components/SearchForm";
import BooksResults from "../components/BooksResults";

const Search = () => {
  return (
    <div className="search-books">
      <SearchForm></SearchForm>
      <BooksResults></BooksResults>
    </div>
  );
};

export default Search;
