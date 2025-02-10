const request = require("supertest");
const express = require("express");
const router = require("../routes.js");

const app = express();

app.use(express.json());
app.use("/api", router);

describe("Superhero Routes", () => {
  // Mock the superheroService and utils
  const mockSuperheroService = require("../services/superheroServices");

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("GET /superheroes should return all superheroes in descending order of humilityScore", async () => {
    const mockData = [
      { id: 1, name: "Superman", superpower: "Flying", humilityScore: 8 },
      { id: 2, name: "Wonder Woman", superpower: "Strength", humilityScore: 7 },
      { id: 3, name: "Flash", superpower: "Speed", humilityScore: 6 },
    ];

    jest
      .spyOn(mockSuperheroService, "getAllbyDescendingHumility")
      .mockReturnValue(mockData);

    const response = await request(app).get("/api/superheroes");

    expect(response.status).toBe(200);
    expect(response.body.data).toEqual(mockData);

    // Verify that the humilityScore is in descending order
    const scores = response.body.data.map((hero) => hero.humilityScore);
    for (let i = 0; i < scores.length - 1; i++) {
      expect(scores[i]).toBeGreaterThanOrEqual(scores[i + 1]);
    }
  });
});
