import React from "react";
import BookList from "./components/BookList";
import AddBook from "./components/AddBook";
import "./styles.css";

function App() {

  return (
    <div className="container">

      <h1>📚 Book Store</h1>

      <AddBook />

      <BookList />

    </div>
  );
}

export default App;