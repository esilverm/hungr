const sqlite3 = require("sqlite3").verbose();
let db = new sqlite3.Database("./hungr.db", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Connected to database.");
    db.run(
      `CREATE TABLE IF NOT EXISTS devices (
        device_id text PRIMARY KEY)`
    );
    db.run(
      `CREATE TABLE IF NOT EXISTS restaurants (
        id integer PRIMARY KEY AUTOINCREMENT, 
        name text, 
        address text, 
        city text, 
        state text, 
        zipcode text)`
    );
    db.run(
      `CREATE TABLE IF NOT EXISTS swipes (
        device_id integer, 
        restaurant_id integer,
        FOREIGN KEY (device_id) REFERENCES devices (device_id), 
        FOREIGN KEY (restaurant_id) REFERENCES restaurants (id),
        PRIMARY KEY (device_id, restaurant_id))`
    );
  }
});
module.exports = db;
