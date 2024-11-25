var express = require('express');
var router = express.Router();
/* Get index page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});
/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('home', { title: 'Home' });
});
/* GET contact Me page. */
router.get('/contactus', function(req, res, next) {
  res.render('contact', { title: 'Contact Me' });
});

module.exports = router;
