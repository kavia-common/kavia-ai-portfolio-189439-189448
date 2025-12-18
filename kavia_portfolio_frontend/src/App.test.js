import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders top navigation and main sections", () => {
  render(<App />);

  // Nav
  expect(screen.getByRole("banner", { name: /top navigation/i })).toBeInTheDocument();

  // Sections
  expect(screen.getByRole("region", { name: /chat preview/i })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: /a toolkit for modern work/i })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: /loved by builders and teams/i })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: /let’s build something helpful/i })).toBeInTheDocument();
});
