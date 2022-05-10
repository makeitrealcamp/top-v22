const { sum, multiply, subs, div, person } = require(".");

describe("sum", () => {
  it("Should add two number correctly", () => {
    expect(sum(1, 2)).toBe(3);
  });
});

describe("multiply", () => {
  test("Should multiply two number correctly", () => {
    expect(multiply(4, 2)).toBe(8);
  });

  test("Should multiply 3 and 5 correctly", () => {
    expect(multiply(3, 5)).toBe(15);
  });
});

describe("subs", () => {
  test("Should substrac two numbers correctly", () => {
    expect(subs(4, 4)).toBe(0);
  });
});

describe("div", () => {
  test("Should devide/split two numbers correctly", () => {
    expect(div(10, 5)).toBe(2);
  });
});

describe("person", () => {
  const pepito = person("pepito", 8);
  test("Should create a new person", () => {
    expect(pepito).toMatchObject({ _name: "pepito", age: 8 });
    //expect(pepito._name).toBe("pepito");
  });

  test("Should greet", () => {
    expect(pepito.greet()).toMatch(/hola/i);
  });
});
