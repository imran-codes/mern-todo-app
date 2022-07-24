import { render, screen } from "@testing-library/react";
import Key from "../index";

test("renders Key component correctly", () => {
  render(<Key />);

  //  There should be two bullet points
  const bulletPoints = screen.getAllByRole("list");
  const notCompleted = screen.getAllByRole("listitem")[0];
  const completed = screen.getAllByRole("listitem")[1];

  // Not Completed to be in the document
  expect(notCompleted).toBeInTheDocument();

  // Completed to be in the document
  expect(completed).toBeInTheDocument();
  expect(completed).toHaveStyle("color: red");

  // Only one bullet point group
  expect(bulletPoints.length).toBe(1);
  expect(bulletPoints.length).not.toBe(2);
});
