// server.js
const express = require("express");
const app = express();
const logger = require("./logger");
const analyticsMiddleware = require("./analyticsMiddleware");

app.use(express.json());
app.use(analyticsMiddleware);

app.get("/", (req, res) => {
  res.send("Hello from Analytics Logger!");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
