const express = require("express");

const configureServer = (app) => {
  app.use(express.json()); // Parse JSON
  app.use(express.urlencoded({ extended: true })); // Parse URL-encoded data
    console.log("Superhero API configuration loaded successfully !");
};

module.exports = configureServer
