const router = require("express").Router();

const superheroController = require("./controllers/superheroController.js");

router.use("/superheroes", superheroController);

module.exports = router;
