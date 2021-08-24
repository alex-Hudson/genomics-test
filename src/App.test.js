import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders About Us button", () => {
  render(<App />);
  const linkElement = screen.getByText(/About Us/i);
  expect(linkElement).toBeInTheDocument();
});
