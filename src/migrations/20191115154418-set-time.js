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

exports.up = function(db) {
	const timeJson = require('../database/times');
	const uuid = require('uuid/v4');

	let times = [];

	Object.keys(timeJson).forEach((i) => {
		times.push({
			_id: uuid(),
			number: i,
			start: timeJson[i].start,
			end: timeJson[i].end
		});
	});

	db.insert('time', times, (error) => {
		if (error) console.log(error);
	});
};

exports.down = function(db) {
  return null;
};

exports._meta = {
  "version": 1
};
