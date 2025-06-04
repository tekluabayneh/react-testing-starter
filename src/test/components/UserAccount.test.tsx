import { it, expect, describe, afterEach } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import { User } from "../../entities";
import UserAccount from "../../components/UserAccount";
import { cleanup } from "@testing-library/react";

afterEach(() => {
  cleanup(); 
});

describe("user account test", () => {
  it("should render the user name ", () => {
    const user: User = { id: 1, name: "teklu", isAdmin: true };

    render(<UserAccount user={user} />);

    expect(screen.getByText(user.name)).toBeInTheDocument();
  });

  it("should render the button if the user is admin", () => {
    const user: User = { id: 1, name: "Teklu", isAdmin: true };

    render(<UserAccount user={user} />);

    const buttonElement = screen.queryByRole("button", { name: /Edit/i });

    // Assert button is in the document
    expect(buttonElement).toBeInTheDocument();

    // Assert button text

    expect(buttonElement).toHaveTextContent(/Edit/i);
  });

  it("should not render is the user is not admin", () => {
    const user: User = { id: 1, name: "Teklu", isAdmin: false };

    render(<UserAccount user={user} />);

    const buttonElement = screen.queryByRole("button", { name: /Edit/i });

    // Assert button is in the document
    expect(buttonElement).not.toBeInTheDocument();

  });





});
