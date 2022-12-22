var express = require('express');
var router = express.Router();
//var app = express();
var sqlite3 = require('sqlite3').verbose();

/* conneting to the database

let db = new sqlite3.Database('./routes/database/Intenque_Singh.db', sqlite3.OPEN_READWRITE, (err)=>{

    if(err) {
        console.log("I cannot find the sqlite database");
    }
    else{
        console.log("The sqlite database file is found");
    }   
}); 
 
// GET home page. 
router.get('/', function(req, res, next) {
 res.render('index', { title: 'Intenque_Singh' })

}); 
router.get("/data", (req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "public", "data.html"));
});

// send output
router.get("/dataOutput", (req, res, next) => {
  db.all(
    "SELECT *FROM Product JOIN Company Using(CompanyID)",
    (err, result) => {
      if (err) {
        console.log("No table found");
      }
      res.json(result);
      console.log(result);
    }
  );
});

router.get('/insert', function(req, res, next){
    res.sendFile(path.join(__dirname, '..', 'public', 'insert.html'));
}); 

router.post('/insert', function(req, res){
    db.serialize(()=>{
        db.run('INSERT INTO Product(ProductName, Quantity, CompanyID) VALUES(?,?,?)',[req.body.id, req.body.name, req.body.quantity],
        function(err){
            if(err){
                return console.log(err.message);
            }
            console.log("New product has been added");
        res.send(`New product has been added into the database ID =${req.body.id} and ${req.body.quantity}`)
        })
    })
});


router.get('/update', function(req, res, next){
    res.sendFile(path.join(__dirname, '..', 'public', 'update.html'));
});

router.get('/delete', (req, res, next) =>{
    res.sendFile(path.join(__dirname, '..','public','delete.html'))
});
/*router.get('/deleteOutput', (req,res,next) =>{
 
    db.run('DELETE FROM Product Where ProductId = 17', function(err){
            if(err){
                console.log(err.message);
            }
    console.log(`the ${this.lastId} is deleted`)
    }) 
})
*/
// Get data

/*db.close((err) => {
    if (err) {
        console.log(err.message);
    }
    console.log("Close the database connection.");
 }); */
module.exports = router;