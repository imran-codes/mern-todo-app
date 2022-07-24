import { render, screen } from "@testing-library/react";
import Todo from "../index";

test("renders Todo component correctly", () => {
  render(<Todo />);

  // Title displays correctly
  const title = screen.getByText(/List of Todos/i);
  expect(title).toBeInTheDocument();
  expect(title).toHaveStyle("font-weight: bold");
});
