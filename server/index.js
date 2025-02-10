const express = require("express");
const configureServer = require("./config/server.js");
const routes = require("./routes.js");

// In real-life scenarios, the port  should be stored in env file
const PORT = 3000;
const app = express();

configureServer(app);

app.use("/api", routes);

// Start the server
app.listen(PORT, () => {
  console.log(`Humble Superhero API is running on http://localhost:${PORT}`);
});
