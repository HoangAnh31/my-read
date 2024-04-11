import React from "react";
import { useDataProvider } from "../hooks/DataProvider";
import Book from "./Book";

const BooksResults = () => {
  const { booksSearhResult } = useDataProvider();

  const content =
    booksSearhResult === null
      ? "No data for your searching"
      : booksSearhResult.map((book, index) => (
          <li key={index}>
            <Book book={book}></Book>
          </li>
        ));

  return (
    <div className="search-books-results">
      <ol className="books-grid">{content}</ol>
    </div>
  );
};

export default BooksResults;
