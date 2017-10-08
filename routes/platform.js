let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('platform', { title: 'Express' });
});

module.exports = router;
