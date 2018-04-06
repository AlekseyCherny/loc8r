var express = require('express');
var router = express.Router();
var ctrLocations = require('../controllers/locations');
var ctrOthers = require('../controllers/others');
/* GET home page. 
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
*/
router.get('/', ctrLocations.homelist );
router.get('/location', ctrLocations.locationInfo );
router.get('/location/review/new', ctrLocations.addReview );
router.get('/about', ctrOthers.about );
module.exports = router;
