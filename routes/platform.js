let express = require('express');
let fs = require('fs');
let path = require('path');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('platform', { title: 'SAFE·n·SOUND | Platform', imports: fs.readFileSync(path.join(__dirname, "../config/imports.txt")) });
});

module.exports = router;
