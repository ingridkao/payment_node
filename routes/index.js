var express = require('express');
var router = express.Router();
require('dotenv').config();
const { MERCHANTID, HASHKEY, HASHIV, HOST } = process.env;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/checkout', function(req, res, next) {
  res.render('about', { title: 'About' });
}
);
module.exports = router;
