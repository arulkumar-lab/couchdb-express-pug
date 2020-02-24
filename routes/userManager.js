UserManager = function(app){
  let dbData = require("../model/db");
    app.get('/', function(req, res) {
        let userRecords = dbData.all(req, res, function (error, results) {
            res.render('index', { title: 'CouchDB Express Application', users: results.rows});
        });
    });
};


exports.UserManager = UserManager;