let express = require('express');
let input = require('../api/in');
let output = require('../api/out');
let router = express.Router();

/* Send data into the API */
router.post('/send', (req, res, next) => {

	input(req.body, (err, inRes) => {
		"use strict";
		let responseObj = {};

		if (err) return res.status(500).end(err);
		else responseObj.status = "ok";

		responseObj.accepted = !!inRes;

		res.json(responseObj);
	});
});

/* Retrieve data from the API */
router.get('/receive', function(req, res, next) {
	"use strict";
	let location = {
		x: req.body.longitude,
		y: req.body.latitude
	};

	let id = req.body.id;

	output(id, location, (err, outRes) => {
		"use strict";
		if (err) return res.status(500).end(err);

		for (let i = 0; i < outRes.length; i++) {
			delete outRes[i]._id;
		}

		res.json({
			time: Date.now(),
			events: outRes
		});
	});
});

module.exports = router;