var express = require('express');
const sqlite3 = require('sqlite3').verbose();
var router = express.Router();


/*let db = new sqlite3.Database(":memory:" , (err) => {
  if(err){
    console.log(err.message);
  }
  else{
    console.log("Connected");
  }
}) */

const path = "Chinook_Sqlite_AutoIncrementPKs.sqlite";
//path, sqlite3.OPEN_READWRITE,
let db = new sqlite3.Database(
  "Chinook_Sqlite_AutoIncrementPKs.sqlite",
  sqlite3.OPEN_READWRITE,
  (err) => {
    if (err) {
      console.log(err.message);
    }
    console.log("Connected to the chinook database");
  }
);

db.serialize(()=> {
  db.each(`SELECT PlaylistId as id,
    Name as name
    FROM `, (err, row) => {
      if(err) {
        console.error(err.message);

      }
       console.log(row.id +'\t' +row.name);
    }); 
});  

db.close((err) => {
    if(err){
        console.log(err.message);
    }
    console.log("Close the database connection.");
})
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
