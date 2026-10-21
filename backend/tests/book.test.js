const request = require("supertest");
const app = require("../server");

describe("Book API", () => {

  test("GET /api/books", async () => {

    const res = await request(app).get("/api/books");

    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);

  });

});

afterAll(async () => {
  await new Promise(resolve => setTimeout(() => resolve(), 500));
});