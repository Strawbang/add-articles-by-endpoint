import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("h1 with text Articles", () => {
  render(<App />);
  const h1Element = screen.getByText(/Articles/i);
  expect(h1Element).toBeInTheDocument();
});
