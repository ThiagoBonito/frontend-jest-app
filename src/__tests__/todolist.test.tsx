import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "@/app/todolist/page";

describe("TodoList Component", () => {
  it("adds a task to the list", () => {
    render(<TodoList />);
    const input = screen.getByRole("textbox");
    const addButton = screen.getByText("Add Task");

    fireEvent.change(input, { target: { value: "New Task" } });
    fireEvent.click(addButton);

    expect(screen.getByText("New Task")).toBeInTheDocument();
  });

  it("removes a task from the list", () => {
    render(<TodoList />);
    const input = screen.getByRole("textbox");
    const addButton = screen.getByText("Add Task");

    fireEvent.change(input, { target: { value: "Task to Remove" } });
    fireEvent.click(addButton);

    const removeButton = screen.getByText("Remove");
    fireEvent.click(removeButton);

    expect(screen.queryByText("Task to Remove")).not.toBeInTheDocument();
  });

  it("does not add an empty task", () => {
    render(<TodoList />);
    const addButton = screen.getByText("Add Task");

    fireEvent.click(addButton);
    const tasks = screen.queryAllByRole("listitem");

    expect(tasks.length).toBe(0);
  });
});