import { render, screen } from "@testing-library/react";
import TodoList from "../index";

test("renders TodoList component correctly", () => {
  const todosData = [
    {
      completed: true,
      createdAt: "2022-07-03T17:12:27.502Z",
      text: "get the shopping",
      updatedAt: "2022-07-03T17:18:06.895Z",
      __v: 0,
      _id: "62c1cdfb8fdabf9ddd8959ab",
    },
    {
      completed: false,
      createdAt: "2022-07-03T17:12:27.092Z",
      text: "Do the washing",
      updatedAt: "2022-07-03T17:28:31.347Z",
      __v: 0,
      _id: "62c1cdfb8fdabf9ddd8959a8",
    },
  ];

  render(<TodoList todos={todosData} fetchData={jest.fn()} />);

  // CloseIcon
  const firstCloseIcon = screen.getAllByTestId("close")[0];
  expect(firstCloseIcon).toBeInTheDocument();
  expect(firstCloseIcon).toHaveStyle("cursor: pointer");

  // First Todo
  const firstTodo = screen.getByText(/get the shopping/i);
  expect(firstTodo).toBeInTheDocument();
  expect(firstTodo).toHaveStyle("color: red");
  expect(firstTodo).toHaveStyle("text-decoration: line-through");

  // Second Todo
  const secondTodo = screen.getByText(/Do the washing/i);
  expect(secondTodo).toBeInTheDocument();
  expect(secondTodo).not.toHaveStyle("color: red");
  expect(secondTodo).not.toHaveStyle("text-decoration: line-through");
});
