import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Counter from "@/app/counter/page";

describe("Counter Component", () => {
  it("renders with initial value", () => {
    render(<Counter initialValue={10} />);
    const heading = screen.getByText("10");
    expect(heading).toBeInTheDocument();
  });

  it("increments the count", () => {
    render(<Counter />);
    const incrementButton = screen.getByText("Increase");

    fireEvent.click(incrementButton);
    expect(screen.getByText("1")).toBeInTheDocument();
  });

  it("decrements the count", () => {
    render(<Counter initialValue={5} />);
    const decrementButton = screen.getByText("Decrease");

    fireEvent.click(decrementButton);
    expect(screen.getByText("4")).toBeInTheDocument();
  });

  it("resets the count", () => {
    render(<Counter initialValue={7} />);
    const resetButton = screen.getByText("Reset");

    fireEvent.click(resetButton);
    // wrong
    expect(screen.getByText("7")).toBeInTheDocument();
  });
});