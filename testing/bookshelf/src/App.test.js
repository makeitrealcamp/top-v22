import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  beforeEach(() => {
    cleanup();
  });

  it("Should create a new book", () => {
    const book = {
      title: "title 1",
      description: "description 1",
    };

    const { getByLabelText, getByTestId, getAllByTestId } = render(<App />);

    const titleInput = getByLabelText("Title");
    fireEvent.change(titleInput, { target: { value: book.title } });

    const descriptionInput = getByLabelText("Description");
    fireEvent.change(descriptionInput, { target: { value: book.description } });

    const buttonElement = getByTestId("button");
    fireEvent.click(buttonElement);

    const booksElement = getAllByTestId("book");

    expect(booksElement).toHaveLength(1);
  });
});
