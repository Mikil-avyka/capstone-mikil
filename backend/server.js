const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();

app.use(cors());
app.use(express.json());

const filePath = "./data/books.json";

const getBooks = () => {
  try {
    const data = fs.readFileSync(filePath);
    return JSON.parse(data);
  } catch (err) {
    return [];
  }
};

const saveBooks = (books) => {
  fs.writeFileSync(filePath, JSON.stringify(books, null, 2));
};

app.get("/api/books", (req, res) => {
  const books = getBooks();
  res.json(books);
});

app.post("/api/books", (req, res) => {
  const books = getBooks();

  const newBook = {
    id: Date.now(),
    ...req.body
  };

  books.push(newBook);

  saveBooks(books);

  res.json(newBook);
});

app.delete("/api/books/:id", (req, res) => {
  let books = getBooks();

  books = books.filter(book => book.id != req.params.id);

  saveBooks(books);

  res.json({ message: "Book deleted" });
});

module.exports = app;

// Keep your listener, but it's good practice to wrap it
if (process.env.NODE_ENV !== 'test') {
  app.listen(5000, () => {
    console.log("Server running on port 5000");
  });
}