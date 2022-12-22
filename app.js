var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var sqlite3 = require('sqlite3').verbose();
var http = require('http');
var bodyParser = require('body-parser');
var helmet = require('helmet');

var indexRouter = require('./routes/index');
var usersRouter = require("./routes/users");

var app = express();

 var db = new sqlite3.Database(
   "./routes/database/Intenque_Singh.db",
   sqlite3.OPEN_READWRITE,
   (err) => {
     if (err) {
       console.log("I cannot find the sqlite database");
     } else {
       console.log("The sqlite database file is found");
     }
   }
 );  


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(helmet());

app.post("/insert", function (req, res) {

  db.serialize(() => {
    db.run(
      "INSERT INTO Product(ProductName, Quantity, CompanyId) VALUES(?,?,?)",
      [req.body.ProductName, req.body.Quantity, req.body.CompanyId],
      function (err) {
        if (err) {
          return console.log(err.message);
        }
        console.log("New product has been added");
        res.send(
          `New product has been added into the database Product name = ${req.body.ProductName} Quantity = ${req.body.Quantity} companyId = ${req.body.CompanyId}`
        );
      }
    );
  });
});

app.post('/update', function(req, res, next){
    db.serialize(()=>{
        db.run('UPDATE Product SET Quantity = ? WHERE ProductName = ?',[req.body.Quantity, req.body.ProductName], 
        function(err){
            if(err){
                res.send("Error occur quantity connot be updated");
                return console.log(err.message);
            }
            res.send(`Updated successfully product name = ${req.body.ProductName} and new Quantity = ${req.body.Quantity}`);
            console.log("updated successfully");
        })
    })
})

app.post('/delete', function(req, res, next){
    db.serialize(()=>{
       db.run('DELETE FROM Product Where ProductName = ?',[req.body.ProductName],
       function(err){
        if(err){
            res.send('Cannot delete the product');
            return console.log(err.message);
        }
        res.send(`Product name ${req.body.ProductName} has being deleted`)
        console.log('deleted successfully');
       }) 
    })
})
app.post('/data', function(req, res){
    db.serialize(()=>{
        db.all('SELECT FROM Product Join Company using(CompanyId)', function(err, rows){
            if(err){
                console.log(err.message);
            }
            res.json(rows)
            console.log(rows)
        })
    })
})
module.exports = app;
