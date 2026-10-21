import { render, screen } from '@testing-library/react';
import App from './App';

test('renders book store title', () => {
  render(<App />);
  const titleElement = screen.getByText(/Book Store/i);
  expect(titleElement).toBeInTheDocument();
});