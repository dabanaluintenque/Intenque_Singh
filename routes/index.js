var express = require('express');
var router = express.Router();
var path = require("path");
const sqlite3 = require('sqlite3').verbose();


let db = new sqlite3.Database('./routes/Intenque_Singh.db', sqlite3.OPEN_READONLY, (err)=>{

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
})

router.get('/update', function(req, res, next){
    res.sendFile(path.join(__dirname, '..', 'public', 'update.html'));
});

router.get('/delete', function(req, res, next){
    res.sendFile(path.join(__dirname, '..','public','delete.html'))
})


/*db.close((err) => {
    if (err) {
        console.log(err.message);
    }
    console.log("Close the database connection.");
 }); */
module.exports = router;


 /*db.serialize(() => {
   db.each(`SELECT Name as name, ProductId p_id From Product`, (err, row) => {
     if (err) {
       console.log(" No found definition");
     }
     console.log(row.p_id + " " + row.name);
   });
 });

 db.serialize(() => {
   db.each(
     `Select * From Product Join Company using(CompanyId)`,
     (err, row) => {
       if (err) {
         console.error(err.message);
       }
       console.log(row);
     }
   );
 });  */