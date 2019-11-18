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
  const Academic = require('../models/academic.model');
  const academicJson = require('../database/academics');

	let academics = [];

	academicJson.forEach((item) => {
		academics.push(
			new Academic({
				title: item
			})
		);
	});

	db.insert('academic', academics, (error) => {
		if (error) console.log(error);
	});

	next();
};

exports.down = function(db, next) {
  return null;
};

exports._meta = {
  "version": 1
};
