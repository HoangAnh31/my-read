import React from "react";
import { Link } from "react-router-dom";
import { useDataProvider } from "../hooks/DataProvider";

const SearchForm = () => {
  const { handleSearchBook } = useDataProvider();

  const handleSearch = (e) => {
    if (e.target.value === "") return;

    handleSearchBook(e.target.value);
  };

  return (
    <div className="search-books-bar">
      <Link className="close-search" to="/">
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
