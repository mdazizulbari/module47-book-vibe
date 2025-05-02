import React, { useEffect, useState } from "react";

const Books = () => {
  const [allBooks, setAllBooks] = useState([]);
  useEffect(() => {
    fetch("booksData.json")
      .then((response) => response.json())
      .then((data) => {
        setAllBooks(data);
      });
  }, []);

  return (
    <div>
      <h1>Hello i am books</h1>
    </div>
  );
};

export default Books;
