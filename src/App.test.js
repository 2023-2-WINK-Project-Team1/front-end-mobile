import { render, screen } from '@testing-library/react';
import App from './App';
import Input from "./components/Input";

test('renders learn react link', () => {
  render();
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
