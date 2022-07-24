import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders app component correctly", () => {
  render(<App />);
  const Title = screen.getByText(/Welcome to the todo app/i);
  expect(Title).toBeInTheDocument();
});
