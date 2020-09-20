const sqlite3 = require("sqlite3").verbose();
let db = new sqlite3.Database("./hungr.db", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Connected to database.");
    db.run(
      `create table if not exists devices (
        device_id text primary key)`
    );
    db.run(
      `create table if not exists restaurants (
        id integer primary key autoincrement, 
        name text, 
        address text, 
        city text, 
        state text, 
        zipcode text)`
    );
    db.run(
      `create table if not exists swipes (
        device_id integer, 
        restaurant_id integer,
        foreign key (device_id) references devices (device_id), 
        foreign key (restaurant_id) references restaurants (id),
        primary key (device_id, restaurant_id))`
    );
  }
});
module.exports = db;
