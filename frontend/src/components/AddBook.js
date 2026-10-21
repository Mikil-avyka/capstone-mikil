import React, { useState } from "react";
import { addBook } from "../services/api";

function AddBook() {

  const [book, setBook] = useState({
    title: "",
    author: "",
    price: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addBook(book);
    window.location.reload();
  };

  return (
    <div>

      <h2>Add New Book</h2>

      <form onSubmit={handleSubmit}>

        <input
          required
          placeholder="Book Title"
          value={book.title}
          onChange={(e) =>
            setBook({ ...book, title: e.target.value })
          }
        />

        <input
          required
          placeholder="Author"
          value={book.author}
          onChange={(e) =>
            setBook({ ...book, author: e.target.value })
          }
        />

        <input
          required
          type="number"
          step="0.01"
          placeholder="Price"
          value={book.price}
          onChange={(e) =>
            setBook({ ...book, price: e.target.value })
          }
        />

        <button type="submit">Add Book</button>

      </form>

    </div>
  );
}

export default AddBook;