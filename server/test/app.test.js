const request = require("supertest");
const app = require("../index");

describe("GET /api/todos", () => {
  it("should return todos", async () => {
    const res = await request(app).get("/api/todos");
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});