import React from "react";
import { useDataProvider } from "../hooks/DataProvider";
import Book from "./Book";

const BooksResults = () => {
  console.log("BooksResults rendered");
  const { booksSearhResult } = useDataProvider();
  //console.log(booksSearhResult);

  return (
    <div className="search-books-results">
      Book Result
      <ol className="books-grid">
        {/* {booksSearhResult &&
          booksSearhResult.map((book, index) => (
            <li key={index}>
              <Book book={book}></Book>
            </li>
          ))} */}
      </ol>
    </div>
  );
};

export default BooksResults;
