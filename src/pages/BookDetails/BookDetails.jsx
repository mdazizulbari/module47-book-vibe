import React from "react";
import { useLoaderData, useParams } from "react-router";

const BookDetails = () => {
  const { id } = useParams();
  const bookId = parseInt(id);
  const data = useLoaderData();
  const singleBook = data.find((book) => book.bookId === bookId);
  const { bookName, author, image, rating, category, yearOfPublishing, tags } =
    singleBook;
  //   console.log(singleBook);

  return (
    <div className="w-2/3 mx-auto">
      <img src={image} className="w-48" alt="" />
      <h4>{bookName}</h4>
      <div className="flex gap-3">
        <button className="btn btn-accent">Mark as Read</button>
        <button className="btn btn-primary">Add to Wishlist</button>
      </div>
    </div>
  );
};

export default BookDetails;
