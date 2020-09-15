

const sqlite3 = require("sqlite3").verbose();
let db = new sqlite3.Database("./hungr.db", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Connected to database.");
    db.run(`CREATE TABLE 
    IF NOT EXISTS devices 
    (device_id text primary key)`);

    db.run(
      `CREATE TABLE 
      IF NOT EXISTS restaurants 
       (id integer 
        primary key autoincrement, 
        name text, 
        address text, 
        city text, 
        state text, 
        zipcode text)`

    );
    db.run(
      `CREATE TABLE 
      IF NOT EXISTS relationships 
      (id integer primary key autoincrement, 
        deviceid integer, 
        restaurantid integer, 
        leftOrRight text, 
        foreign key (deviceid) references devices (id), 
        foreign key (restaurantid) references restaurants (id), 
        check(leftOrRight = "left" OR leftOrRight = "right"))`
    );
  }
});
module.exports = db;