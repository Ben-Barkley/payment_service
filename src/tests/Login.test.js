import { render, screen } from "@testing-library/react";
import Login from "../pages/login";

test("renders login form", () => {
  render(<Login />);
  const linkElement = screen.getByText(/login/i);
  expect(linkElement).toBeInTheDocument();
});
