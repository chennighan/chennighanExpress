var express = require('express');
var router = express.Router();
var nano = require('nano')('http://localhost:5984');
var db = nano.db.use('chennighan_couch');

/* GET users listing. */
router.get('/', function(req, res, next) {
   var context = {};
   db.view('users', 'about', function(err, body){
      if(!err) {
         context.user = body.rows[0].value;
         res.render('about', context);
      } else {
         context.errors = "there was an error executing the couchdb view...";
         res.render('about', context);
      }
   });
});

module.exports = router;
