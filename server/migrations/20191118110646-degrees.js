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
	const Degree = require('../models/degree.model');
  const degreeJson = require('../database/degrees');

	let degrees = [];

	degreeJson.forEach((item) => {
		degrees.push(
			new Degree({
				title: item
			})
		);
	});

	db.insert('degree', degrees, (error) => {
		if (error) console.log(error);
	});

	next();
};

exports.down = function(db, next) {};

exports._meta = {
  "version": 1
};
