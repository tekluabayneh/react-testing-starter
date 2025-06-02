import { it, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import Greet from "../../components/Greet";
import { MdHearingDisabled } from "react-icons/md";
import { headingPropDefs } from "@radix-ui/themes";
import "@testing-library/jest-dom/vitest";
describe("Greet", () => {
  it("should render Hello with the name when name is Provider", () => {
    render(<Greet name="Teklu" />);

    screen.debug();
    const headElement = screen.getByRole("heading");

    expect(headElement).toBeInTheDocument();
  });
});
ss11111111111111111111111111111111111111111111111111111