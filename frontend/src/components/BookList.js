import React, { useEffect, useState } from "react";
import { getBooks, deleteBook } from "../services/api";

function BookList() {

  const [books, setBooks] = useState([]);

  const loadBooks = () => {
    getBooks().then(res => setBooks(res.data));
  };

  useEffect(() => {
    loadBooks();
  }, []);

  const removeBook = async (id) => {
    await deleteBook(id);
    loadBooks();
  };

  return (
    <div>

      <h2>Available Books</h2>

      <div className="book-grid">

        {books.map(book => (
          <div className="book-card" key={book.id}>

            <div className="book-title">{book.title}</div>

            <div className="book-author">{book.author}</div>

            <div className="price">${book.price}</div>

            <button
              className="delete-btn"
              onClick={() => removeBook(book.id)}
            >
              Delete
            </button>

          </div>
        ))}

      </div>

    </div>
  );
}

export default BookList;