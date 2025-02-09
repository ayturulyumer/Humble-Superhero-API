const express = require("express");
const cors = require("cors");

const configureServer = (app) => {
  app.use(cors());
  app.use(express.json()); // Parse JSON
  app.use(express.urlencoded({ extended: true })); // Parse URL-encoded data
  console.log("Superhero API configuration loaded successfully !");
};

module.exports = configureServer;
