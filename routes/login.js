/*
 * © 2017 Tal Globus. All Rights Reserved.
 */

let express = require('express');
let fs = require('fs');
let path = require('path');
let router = express.Router();

/* GET login page */
router.get('/', function(req, res, next) {
	res.render('login', { title: 'Express', imports: fs.readFileSync(path.join(__dirname, "../config/imports.txt")) });
});

/* POST login attempt */
router.post('/', function(req, res, next) {
	res.json({
		"status": "ok",
		"isSuccessful": true,
		"accountID": "ab3bacbd892de"
	});
});

module.exports = router;
