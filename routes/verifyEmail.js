/*
 * © 2017 Tal Globus. All Rights Reserved.
 */

let express = require('express');
let fs = require('fs');
let path = require('path');
let router = express.Router();

/* GET login page */
router.get('/{token}', function(req, res, next) {
	res.render('login', { title: 'SAFE·n·SOUND | Verify', imports: fs.readFileSync(path.join(__dirname, "../config/imports.txt")) });
});

module.exports = router;
