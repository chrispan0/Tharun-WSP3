var express = require('express');
var router = express.Router();

router.get('/index', function(req, res, next) {
  res.render('home', { title: 'Index' });
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('home', { title: 'Home' });
});
/* GET contactus page. */
router.get('/contactus', function(req, res, next) {
  res.render('contact', { title: 'Contact Me' });
});

module.exports = router;
