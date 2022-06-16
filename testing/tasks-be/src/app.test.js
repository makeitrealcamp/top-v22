const req = require("supertest");
const { connect, disconnected, cleanup } = require("./db");
const app = require("./app");

describe("App", () => {
  beforeAll(async () => {
    await connect();
  });

  beforeEach(async () => {
    await cleanup();
  });

  afterAll(async () => {
    await disconnected();
  });

  it("should app", () => {
    expect(true).toBeTruthy();
  });

  it("Should GET / with success code", async () => {
    const res = await req(app).get("/");

    expect(res.statusCode).toBe(200);
    expect(res.text).toMatch(/hello world/i);
  });
});
