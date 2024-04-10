import React from "react";
import Book from "./Book";

const BookShelf = (props) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{props.titleShelf}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {props.booksShelf.map((book, index) => (
            <li key={index}>
              <Book key={index} book={book}></Book>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default BookShelf;
