var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'CouchDB Express Application'});
});

router.post('/submit', function(req, res) {
  let dbData = require("../model/db");
  var data = {
    _id: (new Date().toJSON()),
    name: req.body.name,
    message: req.body.message
  }

  dbData.save('couchdb_mydb', data, function(err, doc) {
    res.redirect('/')
  })
});

module.exports = router;
