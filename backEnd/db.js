const sql3 = require('sqlite3').verbose()
let db = new sql3.Database('./hungr.db', (error) => {
    if (error) {
        console.log(error)
    } else {
        console.log('Connected to database')
        db.run('create table if not exists devices (id integer primary key autoincrement, deviceid text)' )
        db.run('create table if not exists restaurants (id integer primary key autoincrement, name text, addressOne text, addressTwo text, city text, state text, zipcode text)')
        db.run('create table if not exists relationships (id integer primary key autoincrement, device integer, restaurantid integer, isLiked text, foreign key (device) references devices (id), foreign key (restaurantid) references restaurants (id))')
    }

})

module.exports = db