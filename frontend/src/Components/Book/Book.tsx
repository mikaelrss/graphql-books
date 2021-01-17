import React from "react";

import "./Book.css";

interface Props {
  book?: any
}

const Book: React.FC<Props> = () => {
  return (
    <div className="Book-Container">
      <img
        src="https://www.mobileread.com/forums/attachment.php?attachmentid=111264&d=1378642555"
        alt="Cover"
      />
      <section className="Details">
        <header>Test title</header>
        <main>Test description</main>
      </section>
    </div>
  );
};

export default Book;
