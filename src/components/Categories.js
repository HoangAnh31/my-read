import React from "react";
import { useDataProvider } from "../hooks/DataProvider";
import BookShelf from "./BookShelf";

const Categories = () => {
  const { allBooks, shelfs } = useDataProvider();

  return (
    <div className="list-books-content">
      {shelfs.map((shelfEl, index) => {
        const booksShelf = allBooks.filter((book) => book.shelf === shelfEl.id);
        return (
          <BookShelf
            key={index}
            titleShelf={shelfEl.value}
            booksShelf={booksShelf}
          ></BookShelf>
        );
      })}
    </div>
  );
};

export default Categories;
