var express = require('express');
var router = express.Router();
//const sqlite3 = require("sqlite3").verbose();
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
