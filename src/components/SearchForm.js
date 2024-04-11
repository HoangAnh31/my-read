import React from "react";
import { Link } from "react-router-dom";
import { useDataProvider } from "../hooks/DataProvider";

const SearchForm = () => {
  const { handleSearchBook } = useDataProvider();

  const handleSearch = (e) => {
    handleSearchBook(e.target.value);
  };

  const clearSearch = () => {
    handleSearch("");
  };

  return (
    <div className="search-books-bar">
      <Link className="close-search" to="/my-read/" onClick={clearSearch}>
        Close
      </Link>
      <div className="search-books-input-wrapper">
        <input
          type="text"
          placeholder="Search by title, author, or ISBN"
          onChange={handleSearch}
        />
      </div>
    </div>
  );
};

export default SearchForm;
