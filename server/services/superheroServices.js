const Superhero = require("../model/Superhero.js");

// Simulate db 
let superheroes = [];

// Get all superheroes sorted by their humility score in descending order
exports.getAllbyDescendingHumility = () => {
  return superheroes.sort((a, b) => b.humilityScore - a.humilityScore);
};


// Add the new superhero to the array
exports.addSuperhero = (name, superpower, humilityScore) => {
  const hero = new Superhero(name, superpower, humilityScore);
  superheroes.push(hero);
  return hero;
};
