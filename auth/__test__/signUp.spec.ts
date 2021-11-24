import { body } from "express-validator";

const app = require("../src/index");

const request = require("supertest");

const bodyObj = {
  email: "test@test.com",
  password: "123443",
};

describe("Sign Up endpoints", () => {
  it("should create users", async () => {
    const res = await request(app)
      .post("/api/users/signup")
      .set("Content-type", "application/json")
      .send(bodyObj);

    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual(bodyObj);
  });
});
