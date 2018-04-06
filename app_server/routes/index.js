var express = require('express');
var router = express.Router();
var mainCtr = require('../controllers/main');

/* GET home page. 
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
*/
router.get('/', mainCtr.index);
module.exports = router;
