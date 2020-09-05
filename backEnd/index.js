const express = require("express");
const http = require("http");
const app = express();
const server = http.createServer(app);
const db = require("./db");

app.get("/", (request, response) => {
  return response.json("Hello");
});

server.listen(3001, () => {
  console.log("Server running on port 3001");
});
