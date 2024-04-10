import React from "react";
import Header from "../components/Header";
import Categories from "../components/Categories";
import AddBook from "../components/AddBook";

const Home = () => {
  return (
    <div className="list-books">
      <Header></Header>
      <Categories></Categories>
      <AddBook></AddBook>
    </div>
  );
};

export default Home;
