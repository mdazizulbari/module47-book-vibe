import React from "react";
import { useLoaderData, useParams } from "react-router";
import { addToStoredDB } from "../../utility/addToDB";

const BookDetails = () => {
  const { id } = useParams();
  const bookId = parseInt(id);
  const data = useLoaderData();
  const singleBook = data.find((book) => book.bookId === bookId);
  const { bookName, author, image, rating, category, yearOfPublishing, tags } =
    singleBook;
  //   console.log(singleBook);

  const handleMarkAsRead = (id) => {
    // store with id
    // where to store
    // store as a array or collection
    // don't add if already added
    addToStoredDB(id);
  };

  return (
    <div className="w-2/3 mx-auto">
      <img src={image} className="w-48" alt="" />
      <h4>{bookName}</h4>
      <div className="flex gap-3">
        <button onClick={() => handleMarkAsRead(id)} className="btn btn-accent">
          Mark as Read
        </button>
        <button className="btn btn-primary">Add to Wishlist</button>
      </div>
    </div>
  );
};

export default BookDetails;
