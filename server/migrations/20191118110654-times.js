'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db, next) {
	const Time = require('../models/time.model');
  const timeJson = require('../database/times');

	let times = [];

	Object.keys(timeJson).forEach((i) => {
		times.push(
			new Time({
				number: i,
				start: timeJson[i].start,
				end: timeJson[i].end
			})
		);
	});

	db.insert('time', times, (error) => {
		if (error) console.log(error);
	});

	next();
};

exports.down = function(db, next) {};

exports._meta = {
  "version": 1
};
