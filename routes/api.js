let express = require('express');
let router = express.Router();

/* Send data into the API */
router.post('/send', function(req, res, next) {
	res.json({
		"status": "ok",
		"accepted": true
	});
});

/* Retrieve data from the API */
router.get('/receive', function(req, res, next) {
	let location = {
		x: req.param('longitude'),
		y: req.param('latitude')
	};
	
	// res.send('respond with a resource');
	res.json({
		time: Date.now(),
		events: [{
			title: "Suspected Shooting",
			location: {
				"lat" : 36.0918777,			// Latitude in degrees North
				"lng" : -115.175245,			// Longitude in degrees East
				"elev": 380					// Elevation in feet
			},
			place: "Mandalay Bay Hotel",
			photo: "https://lh6.googleusercontent.com/proxy/0TSk0ZJ-zA7siqwmo9VO2QEFsusv8gsftlNTZCdAXEDExkTkApJXBcytlhRN9pC48Yjl8XzRhzMvJYl82HxDbDDHBC1fUmn50vAFdVK9bXdlTw8vUD85BCpm-w=s1536-k-no",
			suggested_action: "",
			time: "1507409670301"
		}]
	})
});

module.exports = router;
