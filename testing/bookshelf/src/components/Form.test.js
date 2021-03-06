import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import { Form } from "./Form";

describe("Form", () => {
  beforeEach(() => {
    cleanup();
  });

  it("should change from fields and submit to creater a new book", () => {
    const book = {
      title: "title 1",
      description: "description 1",
    };

    const createBook = jest.fn();

    const { getByTestId, getByLabelText } = render(
      <Form createBook={createBook} />
    );

    const titleInput = getByLabelText("Title");
    fireEvent.change(titleInput, { target: { value: book.title } });
    expect(titleInput.value).toBe(book.title);

    const descriptionInput = getByLabelText("Description");
    fireEvent.change(descriptionInput, { target: { value: book.description } });
    expect(descriptionInput.value).toBe(book.description);

    const form = getByTestId("form");
    fireEvent.submit(form);

    expect(createBook).toHaveBeenCalled();
    expect(createBook).toHaveBeenCalledWith(book.title, book.description);
    expect(titleInput.value).toBe("");
    expect(descriptionInput.value).toBe("");
  });
});
