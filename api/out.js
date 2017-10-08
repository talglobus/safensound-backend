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

module.exports = (id, {lat, long}, cb) => {

	if (!db) {
		let err = new Error("Database not loaded");
		err.name = "MongoDBError";
		return cb(err);
	}

	db.collection('alerts').find({}).toArray(function(err, results) {
		if (err) return cb(err);

		cb(null, results);
	})
};