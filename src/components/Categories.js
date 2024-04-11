import React from "react";
import { useDataProvider } from "../hooks/DataProvider";
import BookShelf from "./BookShelf";

const Categories = () => {
  const { shelfs } = useDataProvider();

  return (
    <div className="list-books-content">
      {shelfs.map((shelf) => (
        <BookShelf
          key={shelf.id}
          titleShelf={shelf.value}
          booksShelf={shelf.arrBooks}
        ></BookShelf>
      ))}
    </div>
  );
};

export default Categories;
