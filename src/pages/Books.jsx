import React, { Suspense, useEffect, useState } from "react";
import Book from "./Book";

const Books = ({ data }) => {
  const [allBooks, setAllBooks] = useState([]);

  // useEffect(() => {
  //   fetch("booksData.json")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setAllBooks(data);
  //     });
  // }, []);

  // const bookPromise = fetch("./booksData.json");

  return (
    <div>
      <h1 className="text-3xl text-center">Books</h1>
      <Suspense fallback={<span>Loading....</span>}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {data.map((singleBook) => (
            <Book key={singleBook.bookId} singleBook={singleBook}></Book>
          ))}
        </div>
      </Suspense>
    </div>
  );
};

export default Books;
