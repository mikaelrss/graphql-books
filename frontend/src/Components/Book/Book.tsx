import React from "react";

import "./Book.css";

const Book = () => {
  return (
    <div className="Book-Container">
      <img src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1405532474i/22733729._SY75_.jpg"  alt="Cover" />
      <section className="Details">
        <header>A Closed and Common Orbit</header>
        <main>
          Lovelace was once merely a ship's artificial intelligence. When she
          wakes up in an new body, following a total system shut-down and
          reboot, she has no memory of what came before.{" "}
        </main>
      </section>
    </div>
  );
};

export default Book;
