import axios from "axios";

const API = axios.create({
  baseURL: "/api"
});

export const getBooks = () => API.get("/books");

export const addBook = (book) => API.post("/books", book);

export const deleteBook = (id) => API.delete(`/books/${id}`);