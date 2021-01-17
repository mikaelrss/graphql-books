import React from "react";
import Book from "../Book/Book";
import "./Books.css";

const Books = () => {
  return (
    <div className="Books-Container">
      <Book />
      <Book />
      <Book />
      <Book />
    </div>
  );
};

export default Books;
