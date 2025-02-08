const router = require("express").Router();
const superheroService = require("../services/superheroServices.js")

// Endpoint for creating new superhero
router.post("/",(req, res) => {
    const { name, superpower, humilityScore } = req.body;

  // Validate inputs
  if (typeof name !== 'string' || name.trim() === '') {
    return res.status(400).json({ error: 'Name must be a non-empty string.' });
  }
  if (typeof superpower !== 'string' || superpower.trim() === '') {
    return res.status(400).json({ error: 'Superpower must be a non-empty string.' });
  }
  if (typeof humilityScore !== 'number' || humilityScore < 1 || humilityScore > 10) {
    return res.status(400).json({ error: 'Humility score must be a number between 1 and 10.' });
  }

  // Add the superhero  and return the newly created superhero object
const superhero = superheroService.addSuperhero(name,superpower,humilityScore)
res.status(201).json(superhero);
});

module.exports = router;
