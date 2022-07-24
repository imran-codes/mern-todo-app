import { render, screen } from "@testing-library/react";
import Form from "../index";

test("renders Form component correctly", () => {
  const setInputProp = jest.fn();
  const addTodoProp = jest.fn();

  render(<Form input={""} setInput={setInputProp} addTodo={addTodoProp} />);

  // Input has a correct initial value
  const input = screen.getByRole("input");
  expect(input.value).toBe("");
  expect(input.value).not.toBe("Hello");

  // Button works correctly
  const btn = screen.getByText(/add/i);
  expect(btn).toBeInTheDocument();
});
