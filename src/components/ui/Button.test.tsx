import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from "./Button";

describe("Button", () => {
  it("renders with correct label", () => {
    render(<Button>Book a consult</Button>);
    expect(screen.getByRole("button", { name: /book a consult/i })).toBeInTheDocument();
  });

  it("renders as an anchor when href is provided", () => {
    render(<Button href="#contact">Contact us</Button>);
    expect(screen.getByRole("link", { name: /contact us/i })).toBeInTheDocument();
  });

  it("calls onClick when clicked", async () => {
    const user = userEvent.setup();
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    await user.click(screen.getByRole("button"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("is disabled when disabled prop is true", () => {
    render(<Button disabled>Disabled</Button>);
    expect(screen.getByRole("button")).toBeDisabled();
  });

  it("does not call onClick when disabled", async () => {
    const user = userEvent.setup();
    const handleClick = jest.fn();
    render(<Button onClick={handleClick} disabled>Disabled</Button>);
    await user.click(screen.getByRole("button"));
    expect(handleClick).not.toHaveBeenCalled();
  });

  it("uses aria-label when provided", () => {
    render(<Button aria-label="Book a 30-minute consultation">Book</Button>);
    expect(
      screen.getByRole("button", { name: /book a 30-minute consultation/i })
    ).toBeInTheDocument();
  });
});
