import React from "react";
import { Button } from "./Button";
import { render } from "@testing-library/react";

describe("Button", () => {
  it("should render correctly", () => {
    const { getByText } = render(<Button type="button">Create</Button>);

    const buttonElement = getByText("Create");

    expect(buttonElement.type).toMatch(/button/i);
    expect(buttonElement).toBeInTheDocument();
  });

  it("should match snapshot", () => {
    const { container } = render(<Button type="button">Create</Button>);

    expect(container).toMatchSnapshot();
  });
});
