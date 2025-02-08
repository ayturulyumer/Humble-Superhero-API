const Superhero = require("../model/Superhero.js");

//
let superheroes = [];

exports.getAllbyDescendingHumility = () => {
  return superheroes.sort((a, b) => b.humilityScore - a.humilityScore);
};

exports.addSuperhero = (name, superpower, humilityScore) => {
  const hero = new Superhero(name, superpower, humilityScore);
  superheroes.push(hero);
  return hero;
};
