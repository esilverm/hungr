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


app.get("/restaurants", (request, response) => {
  const deviceId = request.query.deviceId;
  const sql = `SELECT
  restaurants.name,
  restaurants.address,
  restaurants.city,
  restaurants.state,
  restaurants.zipcode
  FROM restaurants INNER JOIN 
  (SELECT devices.device_id, 
    relationships.restaurantid, 
    relationships.leftOrRight 
    FROM devices 
    INNER JOIN relationships
    ON relationships.deviceid=devices.device_id
    WHERE devices.device_id=(?)) 
    AS output
    ON restaurants.id=output.restaurantid;`;

  console.log(deviceId);
  db.all(sql, [deviceId], (err, row) => {
    if (err) {
      console.log(err);
    } else {
      console.log(row);
      return response.json(row);
    }
  });
});
