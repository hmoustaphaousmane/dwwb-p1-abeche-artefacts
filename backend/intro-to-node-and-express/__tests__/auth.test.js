const mongoose = require("mongoose");
const supertest = require("supertest");

const server = require("../server");
const userModel = require("../models/userModel");

beforeAll(async () => {
  await userModel.deleteMany({});
});

afterAll(() => {
  server.close(); // Arrêter le serveur

  mongoose.disconnect(); // Deconnecter mongosse de la base de données
});

describe("Authentification test.", () => {
  test("Test user register with name, email and password.", async () => {
    const response = await supertest(server).post("/auth/register").send({
      name: "test",
      email: `email${Date.now()}@gmail.com`,
      password: "12345678",
    });
    // console.log(response);

    expect(response.status).toBe(201);
    expect(response.body.message).toBe("user added successfuly");
    expect(response.body.otpToken).toBeDefined();
  });
});
