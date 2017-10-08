let express = require('express');
let router = express.Router();

/* Send data into the API */
router.post('/send', function(req, res, next) {
	res.send('respond with a resource');
});

/* Retrieve data from the API */
router.get('/receive', function(req, res, next) {
	let location = {
		x: req.param('longitude'),
		y: req.param('latitude')
	};
	
	res.send('respond with a resource');
});

module.exports = router;
