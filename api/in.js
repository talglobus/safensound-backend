"use strict";

/*
 * © 2017 Tal Globus. All Rights Reserved.
 */

let MongoClient = require('mongodb').MongoClient;
let credentials = require('../config/mongo-credentials');
let db = null;

MongoClient.connect(credentials.url, (err, newDB) => {
	if (err) throw err;
	db = newDB;
});

module.exports = ({id, lat, long, elev, time, waveform}, cb) => {

	if (!db) {
		let err = new Error("Database not loaded");
		err.name = "MongoDBError";
		return cb(err);
	}

	db.collection('sounds').insert({id, lat, long, elev, time, waveform}, (err, result) => {
		if (err) return cb(err);

		cb(null, true);
	});
};