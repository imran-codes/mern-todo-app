import { render, screen } from "@testing-library/react";
import Author from "../index";

test("renders author component correctly", () => {
  render(<Author />);

  const websiteLink = screen.getByText(/Imran Codes/i);
  expect(websiteLink).toBeInTheDocument();
  expect(websiteLink).toHaveAttribute("href", "http://imrancodes.com");
  expect(websiteLink).toHaveStyle("cursor: pointer");
});
