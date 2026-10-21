import { render, screen } from "@testing-library/react";
import AddBook from "../AddBook";

jest.mock("../../services/api", () => ({
  addBook: jest.fn()
}));

test("renders add book form", () => {

  render(<AddBook />);

  const titleInput = screen.getByPlaceholderText(/Book Title/i);

  expect(titleInput).toBeInTheDocument();

});