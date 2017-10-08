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

let getUser = ({user, pass}, cb) => {

	if (!db) {
		let err = new Error("Database not loaded");
		err.name = "MongoDBError";
		return cb(err);
	}

	db.collection('users').find({"user": user, "pass": pass}) (err, result) => {
		if (err) return cb(err);

		if (result.length) cb
		cb(null, true);
	});
};

let signUpUser = ({id, lat, long, elev, time, waveform}, cb) => {

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

let confirmUser = ({id, lat, long, elev, time, waveform}, cb) => {

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

module.exports = {
	getUser,
	signUpUser,
	confirmUser
};