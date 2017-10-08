/*
 * © 2017 Tal Globus. All Rights Reserved.
 */

let express = require('express');
let fs = require('fs');
let path = require('path');
let chance = require('chance');
let router = express.Router();

/* POST login attempt */
router.post('/', function(req, res, next) {

	// let userObj = {
	// 	user:
	// 	token: chance.apple_token()
	// };

	res.json({
		"status": "ok",
		"isSuccessful": true,
		"accountID": "ab3bacbd892de"
	});
});

module.exports = router;
