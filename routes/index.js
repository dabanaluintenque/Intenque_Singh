var express = require('express');
var router = express.Router();
var path = require("path");
const sqlite3 = require('sqlite3').verbose();

// conneting to the database

let db = new sqlite3.Database('./routes/database/Intenque_Singh.sqlite', sqlite3.OPEN_READONLY, (err)=>{

    if(err) {
        console.log("I cannot find the sqlite database");
    }
    else{
        console.log("The sqlite database file is found");
    }   
});
 
/* GET home page. */
router.get('/', function(req, res, next) {
 res.render('index', { title: 'Intenque_Singh' })

}); 

router.get('/insert', function(req, res, next){
    res.sendFile(path.join(__dirname, '..', 'public', 'insert.html'));
});

function addQuantity(req, res, next){
    db.all(
      "INSERT INTO Product (ProductId, Name, CompanyId, Quantity) VALUES(1$, $2, $3, $4)",
      [
        req.body.ProductId,
        req.body.Name,
        req.body.CompanyId,
        req.body.Quantity,
      ],
      (err, result) => {
        if (err) {
          console.log("cannot insert new value");
        }
        res.json(result);
        console.log(result);
        console.log("Instert successful");
      }
    );
}
router.get('/insertOutput', (req, res, next) =>{
    db.all("SELECT *FROM Product Where Name =$2",[req.body.Name],
    function(err, result){
        if(err){
            console.log('product Name does not exist')
        }
        else{
            console.log("Quantity is changed");
            addQuantity(req,res, next);
        }
    })
});

router.get('/update', function(req, res, next){
    res.sendFile(path.join(__dirname, '..', 'public', 'update.html'));
});

router.get('/delete', function(req, res, next){
    res.sendFile(path.join(__dirname, '..','public','delete.html'))
});

// Get data
router.get('/data', (req, res, next)=>{
    res.sendFile(path.join(__dirname,'..', 'public', 'data.html'));
});

// send output
router.get('/dataOutput', (req, res, next)=>{
   db.all("SELECT *FROM Product JOIN Company Using(CompanyID)", (err, result)=>{
    if(err){
        console.log('No table found');
    }
    res.json(result);
    console.log(result);
   });
})

/*db.close((err) => {
    if (err) {
        console.log(err.message);
    }
    console.log("Close the database connection.");
 }); */
module.exports = router;
