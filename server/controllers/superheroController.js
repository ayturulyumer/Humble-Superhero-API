const router = require("express").Router();
const superheroService = require("../services/superheroServices.js");
const validateSuperheroData = require("../utils/validateSuperheroData.js");

// Endpoint for getting all superheroes
router.get("/", (req, res) => {
  try {
    const superheroes = superheroService.getAllbyDescendingHumility();
    res.status(200).json({ data: superheroes });
  } catch (error) {
    console.error("Error fetching superheroes:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Endpoint for creating a new superhero
router.post("/", (req, res) => {
  const { name, superpower, humilityScore } = req.body;

  // Validate inputs
  const validationErrors = validateSuperheroData(
    name,
    superpower,
    humilityScore
  );

  // If there are validation errors, return them
  if (validationErrors.length > 0) {
    return res.status(400).json({ errors: validationErrors });
  }

  try {
    // Add the new superhero and return the superhero object
    const superhero = superheroService.addSuperhero(
      name,
      superpower,
      humilityScore
    );
    res.status(201).json({ data: superhero });
  } catch (error) {
    console.error("Error creating superhero:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
