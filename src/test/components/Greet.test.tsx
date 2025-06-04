import { it, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import Greet from "../../components/Greet";
import "@testing-library/jest-dom/vitest";

describe("Greet", () => {
  it("should render Hello with the name when name is Provider", () => {
    render(<Greet name="Teklu" />);

    screen.debug();
    const headElement = screen.getByRole("heading");

    expect(headElement).toBeInTheDocument();
    expect(headElement).toHaveTextContent(/hello Teklu/i);
  });

  it("should render when name is not provided", () => {
    render(<Greet />);

    screen.debug();
    const headElement = screen.queryByRole("button");
    expect(headElement).toBeInTheDocument();
    expect(headElement).toHaveTextContent(/login/i);
  });
});
