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

app.get("/restaurants",(request, response) => {
  const deviceId = request.query.deviceId;
  const sql = `SELECT * FROM restaurants 
      inner join 
      (select devices.deviceid,
      relationships.restaurantid,
       relationships.isLiked 
        from devices 
        inner join relationships 
        on relationships.device = devices.id 
        where devices.deviceid = (?)) 
        as output 
        on restaurants.id = output.restaurantid;`
  console.log(deviceId);
  db.all(sql,[deviceId],(err,row)=>{
    if(err){
      console.log(err);
    } else {
      console.log(row);
      return response.json(row);
    }
  })
  //return response.json({message: deviceId});
});


