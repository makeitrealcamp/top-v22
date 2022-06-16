import { cleanup, getByTestId, render } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  //afterEach()
  beforeEach(() => {
    cleanup();
  });
  // afterAll()
  // beforeAll()

  test("renders learn react link", () => {
    const {
      //getByText,
      //debug,
      getByTestId,
    } = render(<App />);
    //console.log("RESULT", getByText);
    //debug()
    //const linkElement = getByText(/learn react/i);
    const linkElement = getByTestId("link-anchor");

    //console.log("Link", linkElement);
    expect(linkElement).toBeInTheDocument();
  });
});
