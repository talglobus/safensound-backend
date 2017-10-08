/*
 * © 2017 Tal Globus. All Rights Reserved.
 */

/*
 * © 2017 Tal Globus. All Rights Reserved.
 */

let MongoClient = require('mongodb').MongoClient;
let credentials = require('../config/mongo-credentials');
let chance = require('chance');
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

	db.collection('users').find({"user": user, "pass": pass}).toArray((err, result) => {
		if (err) return cb(err);

		if (result.length) cb(null, result.token);
		else cb(null, null);
	});
};

let signUpUser = ({user, pass}, cb) => {

	if (!db) {
		let err = new Error("Database not loaded");
		err.name = "MongoDBError";
		return cb(err);
	}

	db.collection('users').insert({
		"user": user,
		"pass": pass,
		"linkString": chance.apple_token(),
		"token": chance.hash()
	}, (err, result) => {
		if (err) return cb(err);

		cb(null, true);
	});


};

// let confirmUser = ({id, lat, long, elev, time, waveform}, cb) => {
//
// 	if (!db) {
// 		let err = new Error("Database not loaded");
// 		err.name = "MongoDBError";
// 		return cb(err);
// 	}
//
// 	db.collection('sounds').insert({id, lat, long, elev, time, waveform}, (err, result) => {
// 		if (err) return cb(err);
//
// 		cb(null, true);
// 	});
// };

module.exports = {
	getUser,
	signUpUser,
	// confirmUser
};