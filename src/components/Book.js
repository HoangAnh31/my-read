import React, { useState } from "react";
import { useDataProvider } from "../hooks/DataProvider";

const Book = ({ book }) => {
  const { handleShelfBook } = useDataProvider();
  const [selectedOption, setSelectedOption] = useState(book.shelf);

  const handleSelectedChange = (e) => {
    setSelectedOption(e.target.value);
    handleShelfBook(book, e.target.value);
  };
  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${book.imageLinks.smallThumbnail})`,
          }}
        ></div>
        <div className="book-shelf-changer">
          <select value={selectedOption} onChange={handleSelectedChange}>
            <option value="none" disabled>
              Move to...
            </option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">
        {book.authors && book.authors.join(", ")}
      </div>
    </div>
  );
};

export default Book;
