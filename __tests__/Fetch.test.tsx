import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../src/App";

/* -------------------------------------------------------------------------- */
describe("Learning playground", () => {
  it.only("should fetch and displays greeting", async () => {
    render(<App />);

    const heading = screen.getByRole("heading", { name: /tdd/i });

    expect(heading).toBeInTheDocument();
  });
});
